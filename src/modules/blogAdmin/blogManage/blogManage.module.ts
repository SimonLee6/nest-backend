
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BlogAudio } from "../../../entity/blogAudio.entity";
import { Connection } from "typeorm";
import BlogManageService from "./blogManage.service";
import BlogManageController from "./blogManage.controller";

@Module({
  imports: [TypeOrmModule.forFeature([BlogAudio])],
  providers: [BlogManageService],
  controllers: [BlogManageController],
  exports: [TypeOrmModule]
})
export default class AmusementModule {
  constructor(private readonly connection: Connection) { }  
};