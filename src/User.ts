import { Mappable } from './CustomeMap';
import { faker } from "@faker-js/faker";
// npm install @faker-js/faker
 
export class User implements Mappable {
    name:string;
    location:{
        lat:number;
        lng:number;
    };

    constructor(){
        this.name = faker.name.firstName()
        this.location ={
            lat :parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
    color: string;
    markerContent(): string {
        return  `User Name: ${this.name}`
    }
}