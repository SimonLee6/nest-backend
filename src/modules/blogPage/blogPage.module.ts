import { Module } from "@nestjs/common";
import BlogQueryModule from "./blogQuery/blogQuery.module";
import WebInstanceModule from './webInstance/webInstance.module';
import AmusementModule from "./amusement/amusement.module";

@Module({
  imports: [
    BlogQueryModule,
    WebInstanceModule,
    AmusementModule
  ],
  controllers: [],
  providers: [],
})
export default class BlogPageModule {}
