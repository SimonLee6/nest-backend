import { Module } from "@nestjs/common";
import { Connection } from "typeorm";
import BoardMessageController from "./boardMessage.controller";
import BoardMessageService from "./boardMessage.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BlogMessage, BlogMessageReply } from "../../../entity/blogMessage.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      BlogMessage,
      BlogMessageReply
    ])
  ],
  controllers: [BoardMessageController],
  providers: [BoardMessageService],
  exports: [TypeOrmModule]
})

export default class BoardMessageModule {
  constructor(private readonly connection: Connection) {}
};