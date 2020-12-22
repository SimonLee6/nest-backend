import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export interface Response<T = any> {
  data: T;
  code: number;
  msg: string;
}
 
@Injectable()
export class ResultInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept (context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe((map(data => ({ code: 200, data, msg: "success" }))))
  }
}