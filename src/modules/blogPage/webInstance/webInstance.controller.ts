import { Controller, Get, UseInterceptors } from '@nestjs/common';
import WebInstanceService from "./webInstance.service";
import { BlogWebInfo } from "../../../entity/blogWebInfo.entity";
import { ResultInterceptor } from "../../../common/interceptor/httpRequest.interceptor";

@Controller("blogPage")
@UseInterceptors(ResultInterceptor)
export default class WebInstanceController {

  constructor(
    private readonly webInstanceService: WebInstanceService
  ) {}

  @Get("getWebInfo")
  getWebInfo (): Promise<BlogWebInfo> {
    return this.webInstanceService.getWebInfo();
  }

}
