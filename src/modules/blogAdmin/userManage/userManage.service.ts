import { Injectable, HttpException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BlogUser } from "src/entity/user.entity";
import * as svgCaptcha from "svg-captcha";
import { SvgCodeReturn } from "./interfaces/userManage.dto";

@Injectable()
export class UserManageService {
  constructor(
    @InjectRepository(BlogUser)
    private readonly userManageRepository: Repository<BlogUser>
  ) {}

  async getUsers(): Promise<BlogUser[]> {
    let result = await this.userManageRepository.find();
    return result;
  }

  getVerifyCode(): SvgCodeReturn {
    const svg = svgCaptcha.create({ width: 150, height: 40 });
    return svg;
  }

  async login(reqBody): Promise<BlogUser> {
    let query = {
      user_id: reqBody.userId,
      user_password: reqBody.password
    } 
    let result = await this.userManageRepository.findOne({
      where: query,
      select: ["id", "user_id", "user_name"]
    });
    if (!result) {
      throw new HttpException({ code: 500, msg: "用户名或密码错误" }, 500)
    }
    return result;
  }
}