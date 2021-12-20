
import { Module } from "@nestjs/common";
import WebInstanceController from "./webInstance.controller";
import WebInstanceService from "./webInstance.service";
import { TypeOrmModule } from "@nestjs/typeorm";

import { BlogWebInfo } from "../../../entity/blogWebInfo.entity"
import BlogList from "../../../entity/blogList.entity";
import { BlogComments } from "../../../entity/blogComments.entity";
import { BlogMessage } from "../../../entity/blogMessage.entity";
@Module({
    imports: [
        TypeOrmModule.forFeature([BlogWebInfo, BlogList, BlogComments, BlogMessage])
    ],
    controllers: [WebInstanceController],
    providers: [WebInstanceService],
    exports: [TypeOrmModule]
})
export default class WebInstanceModule { }
