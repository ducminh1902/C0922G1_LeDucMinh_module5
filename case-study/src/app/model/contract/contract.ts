import {Customer} from "../customer/customer";
import {Facility} from "../facilty/facility";

export interface Contract {
  id?: number,
  startDate?: string,
  endDate?: string,
  deposite?:number,
  customer?:Customer,
  facility?:Facility
}
