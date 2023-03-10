import {FacilityType} from "./facility-type";

export interface Facility {
  id?: number;
  name?: string;
  area?: number;
  cost?: number;
  maxpeople?: number;
  standardRoom?: string;
  descriptionOtherConvenience?: string;
  poolArea ?:number;
  numberOfFloor?:number;
  facilityFree?:string;
  facilityType?:FacilityType;
}
