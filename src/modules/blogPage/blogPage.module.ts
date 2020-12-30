import { Module } from "@nestjs/common";
import BlogQueryModule from "./blogQuery/blogQuery.module";

@Module({
    imports: [BlogQueryModule],
    controllers: [],
    providers: [],
})
export default class BlogPageModule {}
