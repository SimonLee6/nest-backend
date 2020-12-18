import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BlogUser } from "src/entity/user.entity";

@Injectable()
export class UserManageService {
  constructor(
    @InjectRepository(BlogUser)
    private readonly userManageRepository: Repository<BlogUser>
  ) {}

  getUsers(): Promise<BlogUser[]> {
    return this.userManageRepository.find();
  }

  login(): Promise<Object>{

    let result = this.userManageRepository.findOne({ user_name: "122" });
    return this.userManageRepository.find();
  }

}