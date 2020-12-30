
export interface CommonResponse<T> {
  code: number;
  msg: string;
  data : T;
}

export interface PagingParameters {
  page: number;
  size: number;
}

interface pagingInfo {
  page: number;
  size: number;
  total: number;
}
export interface ReturnPagingData<T> {
  data: T;
  pagingInfo: pagingInfo
}