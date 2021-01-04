import { Controller, Get, UseInterceptors } from "@nestjs/common";
import AmusementService from "./amusement.service";
import { BlogAudio } from "../../../entity/blogAudio.entity";
import { ResultInterceptor } from "../../../common/interceptor/httpRequest.interceptor";

@Controller("blogPage")
@UseInterceptors(ResultInterceptor)
export default class AmusementController {
  
  constructor(
    private readonly amusementService: AmusementService
  ) {}

  @Get("getAudios")
  getAudios(): Promise<BlogAudio[]> {
    return this.amusementService.getAudio();
  } 
}
