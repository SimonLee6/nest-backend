import { Controller, Get, Post, Body, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from "@nestjs/platform-express";

import BlogManageService from './blogManage.service';
import { Response, ResultInterceptor } from "src/common/interceptor/httpRequest.interceptor";
import { SaveBlogParam } from "./interfaces/blogManage.dto";

@Controller("blogAdmin")
@UseInterceptors(ResultInterceptor)
export default class AmusementController {
  constructor(private readonly blogManageService: BlogManageService) {}

  @Post("addBlog")
  saveBlog (@Body() reqBody: SaveBlogParam): Promise<any> {
    return this.blogManageService.saveBlog(reqBody);
  }
}
