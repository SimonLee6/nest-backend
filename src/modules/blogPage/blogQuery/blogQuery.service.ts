import { Injectable } from "@nestjs/common";
import { Repository, getRepository, getConnection } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import BlogList from "../../../entity/blogList.entity";
import { BlogComments, BlogCommentsReply } from "../../../entity/blogComments.entity";
import { ReturnPagingData, BlogCommentsItem } from "./interfaces/blogQuery.dto";
import * as dayjs from "dayjs";

@Injectable()
export default class BlogQueryService {

  constructor(
    @InjectRepository(BlogList)
    private readonly blogListRepository: Repository<BlogList>,
    @InjectRepository(BlogComments)
    private readonly blogCommentsRepository: Repository<BlogComments>,
    @InjectRepository(BlogCommentsReply)
    private readonly blogCommentsReplyRepository: Repository<BlogCommentsReply>
  ) {}

  async getBlogList(reqBody): Promise<ReturnPagingData<BlogList[]>> {
    const { page = 1, size = 10 } = reqBody;
    console.log(reqBody, page, size)
    const result = await getRepository(BlogList)
      .createQueryBuilder("blog_list")
      .orderBy("blog_list.created_time", "DESC")
      // .limit(+size)
      // .offset(+page)
      .getManyAndCount();
    
    const data = result[0].map(ele => ({
      ...ele,
      created_time: dayjs(Date.parse(ele.created_time)).format("YYYY-MM-DD HH:mm:ss")
    }))
      const res = {
        data: data,
        pagingInfo: {
          total: result[1],
          page: +page,
          size: +size
        }
      }
    // console.log(result)
    return res;
  }

  async getBlogDetail(id): Promise<BlogList> {

    const result = await this.blogListRepository.findOne({ where: { id }})


    const data = {
      ...result,
      created_time: result.created_time && dayjs(Date.parse(result.created_time)).format("YYYY-MM-DD HH:mm:ss")
    }
    await this.updateBlogReadCount(id)
    return data
  }

  async updateBlogReadCount(id): Promise<string> {
    await this.blogListRepository.update({ id }, { read_count: () => "read_count + 1" })

    return ""
  }

  async getBlogComments (params): Promise<BlogCommentsItem[]> {
    const comments = await this.blogCommentsRepository.find({ where: { blog_id: params.blogId }})

    const replyList = await this.blogCommentsReplyRepository.find({ where: { blog_id: params.blogId }})

    const result = comments.map(ele => {
      return {
        ...ele,
        reply_list: replyList.filter(e => e.reply_id === ele.id)
      }
    })
    return result;
  }
}
