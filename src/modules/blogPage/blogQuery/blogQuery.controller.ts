import { Controller, UseInterceptors, Get, Post, Body, Query } from "@nestjs/common";
import { Response, ResultInterceptor } from "src/common/interceptor/httpRequest.interceptor";
import BlogList from "../../../entity/blogList.entity";
import BlogQueryService from "./blogQuery.service";
import { QueryBlogParam, ReturnPagingData, BlogCommentsItem } from "./interfaces/blogQuery.dto";

@Controller("blogPage")
@UseInterceptors(ResultInterceptor)
export default class BlogQueryController { 
  constructor (
    private readonly blogQueryService: BlogQueryService
  ) {}

  @Post("getBlogList")
  getBlogList (@Body() reqBody: QueryBlogParam): Promise<ReturnPagingData<BlogList[]>> {
    return this.blogQueryService.getBlogList(reqBody);
  }

  @Get("getBlogDetail")
  getBlogDetail (@Query() queryParams: string): Promise<BlogList> {
    return this.blogQueryService.getBlogDetail(queryParams);
  }

  @Get("getBlogComments")
  getBlogComments (@Query() queryParams: string): Promise<BlogCommentsItem[]>{
    return this.blogQueryService.getBlogComments(queryParams);
  }
}
