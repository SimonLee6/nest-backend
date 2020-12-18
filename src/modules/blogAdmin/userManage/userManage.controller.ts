import { Controller, Get, Post, Body, Request } from '@nestjs/common';
import { UserManageService } from './userManage.service';
import { BlogUser } from "../../../entity/user.entity";

@Controller("blogAdmin")
export class UserManageController {
  constructor(private readonly userManageService: UserManageService) {}

  @Get("getUsers")
  getHello(): Promise<BlogUser[]> {
    return this.userManageService.getUsers();
  }

  @Post("login")
  login(@Body() request: Request): Promise<object> {
    console.log(request)
    return this.userManageService.login();
  }
}
