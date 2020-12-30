import { Injectable } from "@nestjs/common";
import { Repository, FindManyOptions, getRepository  } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import BlogList from "../../../entity/blogList.entity";
import { ReturnPagingData } from "./interfaces/blogQuery.dto";

@Injectable()
export default class BlogQueryService {
  // private readonly blogListRepository;
  constructor(
    @InjectRepository(BlogList)
    private readonly blogListRepository: Repository<BlogList>
  ) {}

  async getBlogList(reqBody): Promise<ReturnPagingData<BlogList[]>> {
    let { page = 1, size = 10 } = reqBody;
    let result = await getRepository(BlogList)
      .createQueryBuilder("blog_list")
      .orderBy("blog_list.created_time", "ASC")
      .limit(+size)
      .offset(+page)
      .getManyAndCount();
    let res = {
      data: result[0],
      pagingInfo: {
        total: result[1],
        page: +page,
        size: +size
      }
    }
    return res;
  }

  async getBlogDetail(params): Promise<BlogList> {
    let result = await this.blogListRepository.findOne({ where: { id: params.blogId }})
    return result
  }

  async getBlogComments() {
    // let result = await 
  }
}
