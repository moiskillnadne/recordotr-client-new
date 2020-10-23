export type StageActionTypes = {
  START: string
  FAIL: string
  SUCCESS: string
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

export type onStatus<ResponseData = unknown> = (responseData: ResponseData, response: Response) => void

export type ApiOnStatusAction<D = unknown, ApiActionBody = unknown> = {
  type: string
  payload: {
    body?: {
      total?: number
      error?: string
      data?: D
    }
    action: ApiAction<ApiActionBody>
    response?: Response
    abortController?: AbortController
  }
}

export type Settings = {
  hostname?: string
}
