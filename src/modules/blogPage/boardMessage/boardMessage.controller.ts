import { Body, Controller, Get, Post, UseFilters, UseInterceptors, UsePipes } from "@nestjs/common";
import BoardMessageService from "./boardMessage.service";
import { ResultInterceptor } from "../../../common/interceptor/httpRequest.interceptor";
import { BlogMsgItem, SysCommentsParam } from "./interfaces/boardMessage.dto";
import { SysCommentsPipe } from "./interfaces/boardMessage.pipe";


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
  @UsePipes(new SysCommentsPipe())
  addSysComments(@Body() reqBody: SysCommentsParam) :Promise<string> {
    return this.boardMessageService.addSysComments(reqBody);
  }

}
