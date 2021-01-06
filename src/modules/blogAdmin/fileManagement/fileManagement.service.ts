import { Injectable, HttpException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TCouldCosSecret, ImageCOSOption } from "../../../../config";

// import * as FS from "fs";
import * as Path from "path";
import * as UUID from "uuid";
import * as COS from "cos-nodejs-sdk-v5";
import * as Util from "../../../common/utils/util";

@Injectable()
export default class FileManagementService {
  
  constructor() {}

  async uploadImage(file): Promise<string> {
    let cos = new COS({ SecretId: TCouldCosSecret.id, SecretKey: TCouldCosSecret.key })
    let url = `images/${UUID.v1() + Path.extname(file.originalname)}`
    let cosParam = { 
      cos,
      options: {
        Bucket: ImageCOSOption.bucket,          /* 存储桶名称 */
        Region: ImageCOSOption.region,          /* 地域代号 */
        Key: url,                               /* 文件名url */
        StorageClass: "STANDARD",
        Body: Buffer.from(file.buffer),         /* 上传文件对象 */
        onProgress: function() {}
      }
    }

    let result = await Util.uploadFileAsync(cosParam,
      new HttpException({ code: 500, msg: "上传失败" }, 500)
    )

    return result;
  }

}