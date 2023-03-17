import {StudentType} from "./student-type";

export interface Student {
  id?: number;
  name?: string;
  gender?: number;
  email?: string;
  studentType?: StudentType;
}
