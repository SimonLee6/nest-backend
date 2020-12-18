import { Module } from "@nestjs/common";
import { Connection } from "typeorm";
import UserManageModule from "./userManage/userManage.module"

@Module({
  imports: [UserManageModule],
  // exports: [UserManageModule]
})
export default class BlogAdminModule {
  constructor(private readonly connection: Connection) {}
};