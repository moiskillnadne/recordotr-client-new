export type StageActionTypes = {
  START: string
  FAIL: string
  SUCCESS: string
}

type Errorable = {
  error: string
}

export type ApiAction<Body = unknown> = {
  type: string
  url: string
  body?: Body
  method?: string
  headers?: { [key: string]: string }
  stageActionTypes: StageActionTypes
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onStart?: onStatus<any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSuccess?: onStatus<any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFail?: onStatus<any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  query?: any
}

export type OnStatus<ResponseData = unknown> = (responseData: ResponseData, response: Response) => void

export type ApiOnStatusAction = {
  type: string
  payload: {
    body?: ResponseBody
    action: ApiAction<ApiActionBody>
    response?: Response
    abortController?: AbortController
  }
}

export type Settings = {
  onRequestAbort?: () => void
  onResposeHasError?: () => void
  refreshActionTypes: StageActionTypes
}

export type ResBody = UnexpectedServerErrorRes | { error: string }

export type UnexpectedServerErrorRes = string
