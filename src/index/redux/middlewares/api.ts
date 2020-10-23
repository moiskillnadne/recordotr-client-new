import { MiddlewareAPI, Middleware, Dispatch } from 'redux'

import qs from 'qs'

import { ApiAction, StageActionTypes, ApiOnStatusAction, Settings } from './api.d'

export const REST_API = 'REST_API'

export class Api {
  next!: Dispatch<ApiAction>

  action!: ApiAction

  hostname?: string

  constructor(settings?: Settings) {
    this.hostname = settings?.hostname || ''
  }

  public middleware = (): Middleware<Dispatch<ApiAction>> => {
    return (api) => (next) => async (action): Promise<ApiAction | ApiOnStatusAction> => {
      if (action.type !== REST_API) {
        return next(action)
      }

      return this.request(action, api)
    }
  }

  private async request(action: ApiAction, api: MiddlewareAPI): Promise<ApiOnStatusAction> {
    const { buildOnStatusAction } = this

    const abortController = new AbortController()

    api.dispatch(buildOnStatusAction({ stage: 'START', action, abortController }))

    try {
      const response = await this.fetch(action, abortController)

      if (response.status === 204) throw Error('No content returned')
      // if (response.status === 401) navigate('/')

      const responseBody = await Api.getResponseBody(response)

      const callbackName = response.ok ? 'onSuccess' : 'onFail'
      const stage = response.ok ? 'SUCCESS' : 'FAIL'

      const onStatus = action[callbackName]

      onStatus?.(responseBody, response)

      return api.dispatch(buildOnStatusAction({ stage, action, responseBody, response }))
    } catch (e) {
      const responseBody = /Failed to fetch/.test(e.toString())
        ? ' Ошибка: не удалось получить данные! Проверте соединение с интернетом'
        : e.toString()
      return api.dispatch(buildOnStatusAction({ stage: 'FAIL', action, responseBody }))
    }
  }

  private async fetch(action: ApiAction, controller: AbortController): Promise<Response> {
    const { hostname } = this

    const defaultHeaders = {
      Authorization: '',
      Accept: '*/*',
      'Content-Type': 'application/json',
    }

    const body: string = typeof action.body !== 'string' ? JSON.stringify(action.body) : action.body

    const token = /refresh$/.test(action.url) ? localStorage.getItem('refreshToken') : localStorage.getItem('token')

    const credentials = 'same-origin'

    const { headers = defaultHeaders, method = 'get', url, query } = action

    if (token) {
      headers.Authorization = `Bearer ${token}`
    }

    const stringifiedQuery = qs.stringify(query, { arrayFormat: 'repeat', skipNulls: true, addQueryPrefix: true })

    const response = await fetch(`${hostname}${url}${stringifiedQuery}`, {
      signal: controller.signal,
      method,
      credentials,
      headers,
      body,
    })

    return response
  }

  private static async getResponseBody(response: Response): Promise<unknown> {
    const contentType = response.headers.get('Content-Type') || ''

    let data = {}

    if (/json/.test(contentType)) {
      data = await response.json()
    } else if (!response.ok && /text/.test(contentType)) {
      throw Error(await response.text())
    } else {
      throw Error('Response is not JSON')
    }

    return data
  }

  private buildOnStatusAction = ({
    stage,
    action,
    responseBody,
    response,
    abortController,
  }: ActionBuilderParams): ApiOnStatusAction => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const body = (isString(responseBody) ? { error: responseBody } : responseBody) as any

    if (body?.error) {
      if (/The user aborted a request/.test(body.error)) {
        // message.warning('Запрос на сервер был отклонен пользователем')
      } else {
        // message.error(body.error)
      }
    }

    return {
      type: action.stageActionTypes[stage],
      payload: {
        action,
        response,
        body,
        abortController,
      },
    }
  }
}

function isString(smth: unknown): smth is string {
  return typeof smth === 'string'
}

type ActionBuilderParams = {
  stage: keyof StageActionTypes
  action: ApiAction
  responseBody?: unknown
  response?: Response
  abortController?: AbortController
}
