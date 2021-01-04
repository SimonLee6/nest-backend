import { Module } from "@nestjs/common";
import { Connection } from "typeorm";
import AmusementController from "./amusement.controller";
import AmusementService from "./amusement.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BlogAudio } from "../../../entity/blogAudio.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([BlogAudio])
  ],
  controllers: [AmusementController],
  providers: [AmusementService],
  exports: [TypeOrmModule]
})

export default class AmusementModule {
  constructor(private readonly connection: Connection) {}
};