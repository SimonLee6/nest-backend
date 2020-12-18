import { Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Base {

  @PrimaryColumn()
  id: string;

}