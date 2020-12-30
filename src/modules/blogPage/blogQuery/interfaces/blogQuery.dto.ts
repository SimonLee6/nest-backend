import { PagingParameters } from "../../../../common/interfaces/interfaces";

export interface QueryBlogParam extends PagingParameters {
  
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