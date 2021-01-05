
/** 
 * @description COS对象存储异步存储使用promise实现 
 * @param param { cos: cos对象, options: 配置对象 }
 * @param error   失败回调
*/
export function uploadFileAsync (param, error): Promise<any> {
  
  return new Promise((resolve, reject) => {

    param.cos.putObject(param.options, function(err, data) {
      if (err) {
        reject(error)
      }
      if (data.statusCode === 200) {
        let url = "https://" + data.Location;
        resolve(url)
      }
    })
  }) 
}
