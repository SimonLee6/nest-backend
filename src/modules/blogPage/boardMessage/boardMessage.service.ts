import { Controller } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { BlogMsgItem, SysCommentsParam } from "./interfaces/boardMessage.dto";
import { BlogMessage, BlogMessageReply } from "../../../entity/blogMessage.entity";

import * as UUID from "uuid";

@Controller()
export default class BoardMessageService {
  constructor(
    @InjectRepository(BlogMessage)
    private readonly blogMessageRepository: Repository<BlogMessage>,
    @InjectRepository(BlogMessageReply)
    private readonly blogMessageReplyRepository: Repository<BlogMessageReply>
  ) {}

  async getSysComments() :Promise<BlogMsgItem[]>{

    const msgs = await this.blogMessageRepository.find();

    const msgReply = await this.blogMessageReplyRepository.find();

    const result = msgs.map(ele => ({
      ...ele,
      reply_list: msgReply.filter(e => e.reply_id === ele.id)
    }))

    return result;
  }

  async addSysComments(reqBody: SysCommentsParam): Promise<string> {
    const { type } = reqBody;
    const commonData = {
      content: reqBody.content,
      nick_name: reqBody.nick_name,
      email: reqBody.email,
      net: reqBody.net,
      system: reqBody.system,
      browser: reqBody.browser,
      location: reqBody.location,
      id: UUID.v1(),
      create_time: Date.now(),
      is_manager: 0
    } as BlogMessage
    if (type === "comments") { // 系统留言
      const result = await this.blogMessageRepository.save(commonData);
      console.log(result);
      if (result) return "留言成功";
    } else { // 回复系统留言
      const replyData = {
        ...commonData,
        reply_id: reqBody.reply_id,
        reply_name: reqBody.reply_name
      } as BlogMessageReply
      const result = await this.blogMessageReplyRepository.save(replyData);
      console.log(result);
      if (result) return "回复成功";
    }
  } 
}
