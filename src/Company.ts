import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomeMap";


export class Company  implements Mappable{

companyName:string;
catchPhrase:string;
location:{
    lat:number;
    lng:number;
};

constructor(){
    this.companyName = faker.company.companyName()
    this.catchPhrase = faker.company.catchPhrase()
    this.location ={
        lat :parseFloat(faker.address.latitude()),
        lng: parseFloat(faker.address.longitude())
    }
}


}