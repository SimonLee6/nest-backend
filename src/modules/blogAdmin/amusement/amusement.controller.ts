import { Controller, Get, Post, Body, UseInterceptors } from '@nestjs/common';
import AmusementService from './amusement.service';
import { Response, ResultInterceptor } from "src/common/interceptor/httpRequest.interceptor";

@Controller("blogAdmin")
@UseInterceptors(ResultInterceptor)
export default class AmusementController {
  constructor(private readonly amusementService: AmusementService) {}
}
