import { Entity, PrimaryColumn } from "typeorm";

export class Base {

  @PrimaryColumn()
  id: string;

}