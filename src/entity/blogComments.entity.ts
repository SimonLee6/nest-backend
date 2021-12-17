import { Entity, Column, PrimaryColumn } from "typeorm";
import { Base } from "./base";

class Comments extends Base {
  @Column({ charset: "utf8"})
  content: string;

  @Column()
  nick_name: string;

  @Column()
  email: string;

  @Column()
  blog_id: string;

  @Column()
  net: string;

  @Column()
  location: string;

  @Column()
  browser: string;

  @Column()
  system: string;

  @Column({ type: "bigint" })
  create_time: string;

  @Column()
  is_manager: number;
}



@Entity()
export class BlogComments extends Comments {
  
}

@Entity()
export class BlogCommentsReply extends Comments {
 
  @Column()
  reply_id: string;

  @Column({ charset: "utf8" })
  reply_name: string;

}