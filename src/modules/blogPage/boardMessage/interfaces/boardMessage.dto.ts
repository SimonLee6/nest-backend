import { BlogMessage, BlogMessageReply } from "../../../../entity/blogMessage.entity";
import { IsNotEmpty, IsString } from "class-validator";

export interface BlogMsgItem extends BlogMessage{
  reply_list: BlogMessageReply[]
}

export class SysCommentsParam {

  @IsNotEmpty()
  @IsString()
  readonly type: string;

  @IsNotEmpty()
  @IsString()
  readonly content: string;

  @IsNotEmpty()
  @IsString()
  readonly nick_name: string;

  @IsNotEmpty()
  @IsString()
  readonly email: string;

  readonly net: string;
  readonly system: string;
  readonly browser: string;
  readonly location: string;
  readonly reply_id?: string;
  readonly reply_name?: string;
}