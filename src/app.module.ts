import BlogPageModule from './modules/blogPage/blogPage.module';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import BlogAdminModule from "./modules/blogAdmin/blogAdmin.module";
import { Connection } from "typeorm";

const defaultOption = {
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "root",
  "password": "66676869",
  "database": "test",
  "synchronize": true,
  "logging": true,
  "autoLoadEntities": true
}

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "66676869",
      "database": "blog",
      "synchronize": true,
      "logging": true,
      "autoLoadEntities": true
    }),
    BlogAdminModule,
    BlogPageModule
  ]
})
export class AppModule {
  constructor(private readonly connection: Connection) { }
}
