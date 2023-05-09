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
    color: string;
    markerContent(): string {
        return `
        <div>
        <h1> Company Name: ${this.companyName} </h1> 
        <h3> Catch Phrase: ${this.catchPhrase} </h3>
        </div>
        `
    }


}