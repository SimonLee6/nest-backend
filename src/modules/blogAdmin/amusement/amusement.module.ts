
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BlogAudio } from "../../../entity/blogAudio.entity";
import { Connection } from "typeorm";
import AmusementService from "./amusement.service";
import AmusementController from "./amusement.controller";

@Module({
  imports: [TypeOrmModule.forFeature([BlogAudio])],
  providers: [AmusementService],
  controllers: [AmusementController],
  exports: [TypeOrmModule]
})
export default class AmusementModule {
  constructor(private readonly connection: Connection) { }
};