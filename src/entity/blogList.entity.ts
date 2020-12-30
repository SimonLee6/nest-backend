import { Entity, Column, PrimaryColumn } from "typeorm";
// import { Base } from "./base";

@Entity()
export default class BlogList {

  @PrimaryColumn()
  id: string;

  @Column({
    charset: "utf8",
    type: "mediumtext"
  })
  content: string;

  @Column({
    charset: "utf8",
    type: "varchar"
  })
  title: string;

  @Column()
  tag: string;

  @Column()
  comments: number;

  @Column()
  read_count: number;

  @Column("bigint")
  created_time: number;

  @Column()
  cover_image: string;

  @Column({
    charset: "utf8",
    type: "varchar"
  })
  introduce: string

}