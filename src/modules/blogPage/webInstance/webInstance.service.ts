import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, getRepository } from "typeorm";
import { BlogWebInfo } from "../../../entity/blogWebInfo.entity";

import BlogList from "../../../entity/blogList.entity";
import { BlogComments } from "../../../entity/blogComments.entity";
import { BlogMessage } from "../../../entity/blogMessage.entity";
@Injectable()
export default class WebInstanceService { 
  constructor(
    @InjectRepository(BlogWebInfo)
    private readonly blogWebInfoRepository: Repository<BlogWebInfo>,
    @InjectRepository(BlogList)
    private readonly blogListRepository: Repository<BlogList>,
    @InjectRepository(BlogComments)
    private readonly blogCommentsRepository: Repository<BlogComments>,
    @InjectRepository(BlogMessage)
    private readonly blogMessageRepository: Repository<BlogMessage>,
  ) {}

  async getWebInfo(): Promise<BlogWebInfo> {
    await this.updateVisCount();

    const blogCount = await this.blogListRepository.count();
    const blogCommentsCount = await this.blogCommentsRepository.count();
    const blogMessageCount = await this.blogMessageRepository.count();

    await this.blogWebInfoRepository.update({ id: "1" }, {
      blog_count: blogCount,
      comments_count: blogCommentsCount + blogMessageCount
    });
    return this.blogWebInfoRepository.findOne()
  }

  async updateVisCount(): Promise<string> {
    await this.blogWebInfoRepository.update({ id: "1" }, { visit_count: () => "visit_count + 1" })
    return ""
  }
}
