import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BlogUser } from "../../entity/user.entity";
import { Connection } from "typeorm";
import UserManageModule from "./userManage/userManage.module"
import { UserManageService } from "./userManage/userManage.service";
import { UserManageController } from "./userManage/userManage.controller";

@Module({
  imports: [UserManageModule],
  // providers: [UserManageService],
  // controllers: [UserManageController],
  // exports: [UserManageModule]
})
export default class BlogAdminModule {
  constructor(private readonly connection: Connection) {}
};