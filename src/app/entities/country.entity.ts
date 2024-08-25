import { City } from "./city.entity";

export class Country {
   id!: number;
   name!: string;
   cities!: City[];
}