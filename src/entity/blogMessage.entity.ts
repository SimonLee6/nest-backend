import { Entity, Column } from "typeorm";
import { Base } from "./base";

class Message extends Base {
  @Column({ charset: "utf8"})
  content: string;

  @Column()
  nick_name: string;

  @Column()
  email: string;

  @Column()
  net: string;

  @Column()
  location: string;

  @Column()
  browser: string;

  @Column()
  system: string;

  @Column({ type: "bigint" })
  create_time: number;

  @Column()
  is_manager: string;
}



@Entity()
export class BlogMessage extends Message {}

@Entity()
export class BlogMessageReply extends Message {
 
  @Column()
  reply_id: string;

  @Column({ charset: "utf8" })
  reply_name: string;

}