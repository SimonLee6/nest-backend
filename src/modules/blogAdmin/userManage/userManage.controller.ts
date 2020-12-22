import { Controller, Get, Post, Body, Request, Req, UseInterceptors } from '@nestjs/common';
import { UserManageService } from './userManage.service';
import { BlogUser } from "../../../entity/user.entity";
import { LoginParam } from "./interfaces/userManage.dto";
import { CommonResponse } from "../../../common/interfaces/interfaces";
import { Response, ResultInterceptor } from "src/common/interceptor/httpRequest.interceptor";

@Controller("blogAdmin")
export class UserManageController {
  constructor(private readonly userManageService: UserManageService) {}

  @Get("getUsers")
  @UseInterceptors(ResultInterceptor)
  getUsers(): Promise<BlogUser[]> {
    return this.userManageService.getUsers();
  }

  @Post("login")
  @UseInterceptors(ResultInterceptor)
  login(@Body() reqBody: LoginParam): Promise<BlogUser> {
    return this.userManageService.login(reqBody);
  } 
}
