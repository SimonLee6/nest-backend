import { PagingParameters } from "../../../../common/interfaces/interfaces";
import { BlogComments, BlogCommentsReply } from "../../../../entity/blogComments.entity";


export interface QueryBlogParam extends PagingParameters {}


interface pagingInfo {
  page: number;
  size: number;
  total: number;
}
export interface ReturnPagingData<T> {
  data: T;
  pagingInfo: pagingInfo
}

export interface BlogCommentsItem extends BlogComments {
  reply_list: BlogCommentsReply[]
}