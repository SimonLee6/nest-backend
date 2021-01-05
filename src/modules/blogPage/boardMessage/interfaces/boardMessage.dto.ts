import { BlogMessage, BlogMessageReply } from "../../../../entity/blogMessage.entity";

export interface BlogMsgItem extends BlogMessage{
  reply_list: BlogMessageReply[]
}