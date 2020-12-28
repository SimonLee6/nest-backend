import { Controller, Get, Post, Body, UseInterceptors } from '@nestjs/common';
import { UserManageService } from './userManage.service';
import { BlogUser } from "../../../entity/user.entity";
import { LoginParam, SvgCodeReturn } from "./interfaces/userManage.dto";
// import { CommonResponse } from "../../../common/interfaces/interfaces";
import { Response, ResultInterceptor } from "src/common/interceptor/httpRequest.interceptor";

@Controller("blogAdmin")
@UseInterceptors(ResultInterceptor)
export class UserManageController {
  constructor(private readonly userManageService: UserManageService) {}

  @Get("getUsers")
  getUsers(): Promise<BlogUser[]> {
    return this.userManageService.getUsers();
  }

  @Get("getVerifyCode")
  getVerifyCode(): SvgCodeReturn {
    return this.userManageService.getVerifyCode();
  }

  @Post("login")
  login(@Body() reqBody: LoginParam): Promise<BlogUser> {
    return this.userManageService.login(reqBody);
  }
}
