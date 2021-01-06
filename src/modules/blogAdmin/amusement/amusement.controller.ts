import { Controller, Get, Post, Body, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from "@nestjs/platform-express";

import AmusementService from './amusement.service';
import { Response, ResultInterceptor } from "src/common/interceptor/httpRequest.interceptor";

@Controller("blogAdmin")
@UseInterceptors(ResultInterceptor)
export default class AmusementController {
  constructor(private readonly amusementService: AmusementService) {}

  @Post("uploadAudio")
  @UseInterceptors(FileInterceptor("file"))
  uploadAudio (@UploadedFile("file") file) {  
    return this.amusementService.uploadAudio(file);
  }
}
