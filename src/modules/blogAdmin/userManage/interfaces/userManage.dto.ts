// dto数据传输对象,定义数据传输(交互)的格式
export interface LoginParam {
  readonly userId: string;
  readonly password: string;
  readonly verifyCode: string;
}
export interface SvgCodeReturn {
  text: string;
  data: string;
}