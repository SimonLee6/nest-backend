import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BlogUser } from "../../../entity/user.entity";
import { Connection } from "typeorm";
import { UserManageService } from "./userManage.service";
import { UserManageController } from "./userManage.controller";

@Module({
  imports: [TypeOrmModule.forFeature([BlogUser])],
  providers: [UserManageService],
  controllers: [UserManageController],
  exports: [TypeOrmModule]
})
export default class UserManageModule {
  constructor(private readonly connection: Connection) {}
};