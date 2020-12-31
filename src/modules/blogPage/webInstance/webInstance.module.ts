
import { Module } from "@nestjs/common";
import WebInstanceController from "./webInstance.controller";
import WebInstanceService from "./webInstance.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BlogWebInfo } from "../../../entity/blogWebInfo.entity"

@Module({
    imports: [
        TypeOrmModule.forFeature([BlogWebInfo])
    ],
    controllers: [WebInstanceController],
    providers: [WebInstanceService],
    exports: [TypeOrmModule]
})
export default class WebInstanceModule { }
