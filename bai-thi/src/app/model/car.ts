import {CarType} from "./car-type";

export interface Car {
  id?:number;
  soXe?: string;
  tenNhaXe?:string;
  diemDi?:string;
  diemDen?:string;
  soDienThoai?:string;
  email?:string;
  gioDi?:string;
  gioDen?:string;
  carType?:CarType;
}
