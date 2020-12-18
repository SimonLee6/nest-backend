import { response } from "express";

export interface CommonResponse {
  code: number;
  msg: string;
  data? : any;
}