import { Module } from "@nestjs/common";
import BlogQueryController from "./blogQuery.controller";
import BlogQueryService from "./blogQuery.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import BlogList from "../../../entity/blogList.entity";
import { BlogComments, BlogCommentsReply } from "../../../entity/blogComments.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      BlogList,
      BlogComments,
      BlogCommentsReply
    ])
  ],
  controllers: [BlogQueryController],
  providers: [BlogQueryService],
  exports: [TypeOrmModule]
})
export default class BlogQueryModule {}
