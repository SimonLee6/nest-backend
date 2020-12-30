import { Module } from "@nestjs/common";
import { Connection } from "typeorm";
import UserManageModule from "./userManage/userManage.module";
import AmusementModule from "./amusement/amusement.module";

@Module({
  imports: [
    UserManageModule,
    AmusementModule
  ],
  // exports: [UserManageModule]
})

export default class BlogAdminModule {
  constructor(private readonly connection: Connection) {}
};