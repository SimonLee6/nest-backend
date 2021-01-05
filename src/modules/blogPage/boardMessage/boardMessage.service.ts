import { Controller } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { BlogMsgItem } from "./interfaces/boardMessage.dto";
import { BlogMessage, BlogMessageReply } from "../../../entity/blogMessage.entity";


@Controller()
export default class BoardMessageService {
  constructor(
    @InjectRepository(BlogMessage)
    private readonly blogMessageRepository: Repository<BlogMessage>,
    @InjectRepository(BlogMessageReply)
    private readonly blogMessageReplyRepository: Repository<BlogMessageReply>
  ) {}

  async getSysComments() : Promise<BlogMsgItem[]>{

    let msgs = await this.blogMessageRepository.find();

    let msgReply = await this.blogMessageReplyRepository.find();

    let result = msgs.map(ele => ({
      ...ele,
      reply_list: msgReply.filter(e => e.reply_id === ele.id)
    }))

    return result;
  }
}
