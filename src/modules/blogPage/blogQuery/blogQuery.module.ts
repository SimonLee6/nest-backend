import { Module } from "@nestjs/common";
import BlogQueryController from "./blogQuery.controller";
import BlogQueryService from "./blogQuery.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import BlogList from "../../../entity/blogList.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([BlogList])
    ],
    controllers: [BlogQueryController],
    providers: [BlogQueryService],
    exports: [TypeOrmModule]
})
export default class BlogQueryModule {}
