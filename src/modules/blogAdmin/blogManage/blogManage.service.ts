import { Injectable, HttpException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BlogAudio } from "src/entity/blogAudio.entity";


@Injectable()
export default class BlogManageService {
  constructor(
    @InjectRepository(BlogAudio)
    private readonly blogAudioRepository: Repository<BlogAudio>
  ) {}

  uploadAudio (file) {
    console.log(file)
  }

}
