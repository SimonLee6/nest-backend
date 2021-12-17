import { PagingParameters } from "../../../../common/interfaces/interfaces";
import { BlogComments, BlogCommentsReply } from "../../../../entity/blogComments.entity";


export type QueryBlogParam = PagingParameters


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

export interface AddBlogCommentsParam {
  blog_id: string;
  type: string;
  system: string;
  browser: string;
  location: string;
  content: string;
  nick_name: string;
  email: string;
  net: string;
  reply_id?: string;
  reply_name?: string;
}