import { Injectable, HttpException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BlogUser } from "src/entity/user.entity";
import * as svgCaptcha from "svg-captcha";
// import { SvgCodeReturn } from "./interfaces/userManage.dto";

@Injectable()
export default class AmusementService {
  constructor(
    // @InjectRepository(BlogUser)
    // private readonly userManageRepository: Repository<BlogUser>
  ) {}

}