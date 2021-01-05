
import BlogPageModule from './modules/blogPage/blogPage.module';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import BlogAdminModule from "./modules/blogAdmin/blogAdmin.module";
import { Connection } from "typeorm";
import { ormDefaultOption } from "../config";

@Module({
  imports: [
    TypeOrmModule.forRoot(ormDefaultOption),
    BlogAdminModule,
    BlogPageModule
  ]
})
export class AppModule {
  constructor(private readonly connection: Connection) { }
}
