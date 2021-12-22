
import { Injectable } from "@nestjs/common";
import { Repository, getRepository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import BlogList from "../../../entity/blogList.entity";
import { SaveBlogParam } from "./interfaces/blogManage.dto";
import * as UUID from "node-uuid";
import * as dayjs from "dayjs";
@Injectable()
export default class BlogManageService {
  constructor(
    @InjectRepository(BlogList)
    private readonly blogListRepository: Repository<BlogList>
  ) {}

  async saveBlog(reqBody: SaveBlogParam) {
    
    try {
      const blogInfo = {
        id: UUID.v1(),
        content: reqBody.content,
        title: reqBody.title,
        tag: reqBody.tag,
        comments: 0,
        read_count: 0,
        created_time: dayjs(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        cover_image: reqBody.cover_image,
        introduce: reqBody.introduce,
        is_recommend: 0
      } as BlogList
  
      const result = await this.blogListRepository.save(blogInfo)
      console.log(result)
      return "添加成功"
    } catch (error) {
      console.log(error)
      return "添加失败"
    }
  }
  async updateBlog() {}
}
