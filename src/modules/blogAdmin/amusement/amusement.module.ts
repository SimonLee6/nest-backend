
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BlogUser } from "../../../entity/user.entity";
import { Connection } from "typeorm";
import AmusementService from "./amusement.service";
import AmusementController from "./amusement.controller";

@Module({
  // imports: [TypeOrmModule.forFeature([BlogUser])],
  providers: [AmusementService],
  controllers: [
    AmusementController, AmusementController],
  // exports: [TypeOrmModule]
})
export default class AmusementModule {
  constructor(private readonly connection: Connection) { }
};