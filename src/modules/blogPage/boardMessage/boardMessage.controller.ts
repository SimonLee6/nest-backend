import { Body, Controller, Get, Post, UseInterceptors } from "@nestjs/common";
import BoardMessageService from "./boardMessage.service";
import { ResultInterceptor } from "../../../common/interceptor/httpRequest.interceptor";
import { BlogMsgItem, SysCommentsParam } from "./interfaces/boardMessage.dto";


@Controller("blogPage")
@UseInterceptors(ResultInterceptor)
export default class BoardMessageController {
  
  constructor(
    private readonly boardMessageService: BoardMessageService
  ) {}
  
  @Get("getSysComments")
  getSysComments() :Promise<BlogMsgItem[]>{
    return this.boardMessageService.getSysComments();
  }

  @Post("addSysComments")
  addSysComments(@Body() reqBody: SysCommentsParam) :Promise<string> {
    return this.boardMessageService.addSysComments(reqBody);
  }

}
