import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BlogWebInfo } from "../../../entity/blogWebInfo.entity"


@Injectable()
export default class WebInstanceService { 
  constructor(
    @InjectRepository(BlogWebInfo)
    private readonly blogWebInfoRepository: Repository<BlogWebInfo>
  ) {}

  getWebInfo(): Promise<BlogWebInfo> {

    return this.blogWebInfoRepository.findOne();
  }
}
