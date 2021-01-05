import { Module } from "@nestjs/common";
import FileManagementService from "./fileManagement.service";
import FileManagementController from "./fileManagement.controller";


@Module({
  controllers: [FileManagementController],
  providers: [FileManagementService],
})
export default class FileManagementModule {};