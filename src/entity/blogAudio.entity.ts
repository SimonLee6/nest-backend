import { Entity, Column, PrimaryColumn } from "typeorm";
import { Base } from "./base";

@Entity()
export class BlogAudio extends Base {

  @Column({ charset: "utf8" })
  name: string;

  @Column()
  url: string;

  @Column({ type: "mediumtext" })
  lrc: string;

  @Column()
  author: string;

  @Column()
  avatar: string;

  @Column({ charset: "utf8", type: "mediumtext" })
  introduce: string;

  @Column()
  title: string;


}