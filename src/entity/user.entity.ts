import { Entity, Column, PrimaryColumn } from "typeorm";
import { Base } from "./base";

@Entity()
export class BlogUser extends Base {

  @Column()
  user_name: string;

  @Column()
  user_password: string;

  @Column()
  user_id: string;

}