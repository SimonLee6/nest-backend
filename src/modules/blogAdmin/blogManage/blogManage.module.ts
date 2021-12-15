
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import BlogList from "../../../entity/blogList.entity";
import { Connection } from "typeorm";
import BlogManageService from "./blogManage.service";
import BlogManageController from "./blogManage.controller";

@Module({
  imports: [TypeOrmModule.forFeature([BlogList])],
  providers: [BlogManageService],
  controllers: [BlogManageController],
  exports: [TypeOrmModule]
})
export default class BlogManageModule {
  constructor(private readonly connection: Connection) { }  
};