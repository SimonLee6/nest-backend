import { Module } from "@nestjs/common";
import BlogQueryModule from "./blogQuery/blogQuery.module";
import WebInstanceModule from './webInstance/webInstance.module';

@Module({
  imports: [
    BlogQueryModule,
    WebInstanceModule
  ],
  controllers: [],
  providers: [],
})
export default class BlogPageModule {}
