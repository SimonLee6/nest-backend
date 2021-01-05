import { Controller, Get, UseInterceptors } from "@nestjs/common";
import BoardMessageService from "./boardMessage.service";
import { ResultInterceptor } from "../../../common/interceptor/httpRequest.interceptor";
import { BlogMsgItem } from "./interfaces/boardMessage.dto";


@Controller("blogPage")
@UseInterceptors(ResultInterceptor)
export default class BoardMessageController {
  
  constructor(
    private readonly boardMessageService: BoardMessageService
  ) {}
  
  @Get("getSysComments")
  getSysComments() : Promise<BlogMsgItem[]>{
    return this.boardMessageService.getSysComments();
  }

}
