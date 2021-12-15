import { Injectable, HttpException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AliCouldCosSecret, BucketOpt } from "../../../../config";


import * as Path from "path";

import * as OSS from "ali-oss";
import * as UUID from "node-uuid";

@Injectable()
export default class FileManagementService {
  
  constructor() {}

  async uploadImage(file): Promise<string> {
    try {
      
      const client = new OSS({
        region: BucketOpt.Region,
        accessKeyId: AliCouldCosSecret.Id,
        accessKeySecret: AliCouldCosSecret.Secret,
        bucket: BucketOpt.BucketName,
        endpoint: BucketOpt.Endpoint,
        secure: true
      })
      const url = `blog-image/${UUID.v1() + Path.extname(file.originalname)}`
      const result = await client.put(url, Buffer.from(file.buffer))
      // console.log("result", result)
      return result.url
      
    } catch (error) {
      console.log(error)
      return "上传失败";
    }
    
    
  }

}