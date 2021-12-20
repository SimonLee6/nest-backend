import { } from "@nestjs/typeorm";
import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class BlogWebInfo {
  @Column()
  id: string;

  @Column()
  visit_count: number;

  @Column()
  blog_count: number;

  @Column()
  comments_count: number;

  @Column()
  start_time: string;

  @Column()
  qq: string;

  @Column()
  email: string;

  @PrimaryColumn()
  nickName: string;
}