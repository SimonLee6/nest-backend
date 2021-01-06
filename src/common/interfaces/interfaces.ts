
export interface CommonResponse<V> {
  code: number;
  msg: string;
  data : V;
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
export interface ReturnPagingData<V> {
  data: V;
  pagingInfo: pagingInfo
}