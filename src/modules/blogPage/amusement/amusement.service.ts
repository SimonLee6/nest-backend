import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { BlogAudio } from "../../../entity/blogAudio.entity";

@Injectable()
export default class AmusementService {

  constructor(
    @InjectRepository(BlogAudio)
    private readonly blogAudioRepository: Repository<BlogAudio>
  ) {}

  getAudio(): Promise<BlogAudio[]> {
    return this.blogAudioRepository.find();
  }

}
