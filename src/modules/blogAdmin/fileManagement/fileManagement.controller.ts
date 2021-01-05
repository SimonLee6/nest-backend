import { Body, Controller, Post, UseInterceptors, UploadedFile } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ResultInterceptor } from "../../../common/interceptor/httpRequest.interceptor";

import FileManagementService from "./fileManagement.service";


@Controller("blogAdmin")
@UseInterceptors(ResultInterceptor)
export default class FileManagementController {
  constructor(
    private readonly fileManagementService: FileManagementService
  ) {}

  @Post("uploadImage")
  @UseInterceptors(FileInterceptor("file"))
  uploadImage (@UploadedFile() file) : Promise<string> {
    return this.fileManagementService.uploadImage(file);
  }
}