// TODO set response body when error occurred
type ResponseErrorBody = unknown;

export type CustomAbortController = {
  _value: AbortController;
  get value(): AbortController;
  abort: () => void;
};

export type RequestFnParams = {
  // abort signal
  signal: AbortSignal;
};

/**
 * request function
 */
export type RequestFn<T = unknown> = ({
  signal
}: RequestFnParams) => Promise<T>;

export type UseRequestWrapperConfig<T> = {
  immediate: boolean;
  clearDataBeforeExec?: boolean;
  globalLoading?: boolean;
  authCheck?: boolean;
  requestFn: RequestFn<T>;
  // custom error handler, throw error when not handle error
  onError?: (status: number, body: ResponseErrorBody) => boolean;
  onSuccess?: (data: T) => void;
};

/**
 * use request wrapper exec config
 */
export type UseRequestWrapperExecConfig = {
  // is clear data before request exec
  clearDataBeforeExec?: boolean;
  globalLoading?: boolean;
  authCheck?: boolean;
};
