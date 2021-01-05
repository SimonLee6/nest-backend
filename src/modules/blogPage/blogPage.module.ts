import { Module } from "@nestjs/common";
import BlogQueryModule from "./blogQuery/blogQuery.module";
import WebInstanceModule from './webInstance/webInstance.module';
import AmusementModule from "./amusement/amusement.module";
import BoardMessageModule from "./boardMessage/boardMessage.module";

@Module({
  imports: [
    BlogQueryModule,
    WebInstanceModule,
    AmusementModule,
    BoardMessageModule
  ],
  controllers: [],
  providers: [],
})
export default class BlogPageModule {}
