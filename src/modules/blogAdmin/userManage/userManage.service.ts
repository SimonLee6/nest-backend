import { Injectable, UseInterceptors } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BlogUser } from "src/entity/user.entity";
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

  login(reqBody): Promise<BlogUser>{
    console.log(reqBody)
    let query = {
      user_id: reqBody.userId,
      user_password: reqBody.password
    }
    let result = this.userManageRepository.findOne(query);
    return result;
  }
}