import { Controller, Get, Post, Body, Request, Req } from '@nestjs/common';
import { UserManageService } from './userManage.service';
import { BlogUser } from "../../../entity/user.entity";
import { LoginParam } from "./interfaces/userManage.dto";

@Controller("blogAdmin")
export class UserManageController {
  constructor(private readonly userManageService: UserManageService) {}

  @Get("getUsers")
  getHello(): Promise<BlogUser[]> {
    return this.userManageService.getUsers();
  }

  @Post("login")
  login(@Body() reqBody: LoginParam): Promise<object> {
    console.log(reqBody.userId)
    return this.userManageService.login();
  }
}
