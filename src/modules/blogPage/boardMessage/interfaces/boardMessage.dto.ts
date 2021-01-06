import { BlogMessage, BlogMessageReply } from "../../../../entity/blogMessage.entity";

export interface BlogMsgItem extends BlogMessage{
  reply_list: BlogMessageReply[]
}

export interface SysCommentsParam {
  readonly type: string;
  readonly content: string;
  readonly nick_name: string;
  readonly email: string;
  readonly net: string;
  readonly system: string;
  readonly browser: string;
  readonly location: string;
  readonly reply_id?: string;
  readonly reply_name?: string;
}