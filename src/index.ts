
/// <reference types="@types/google.maps" />

 //npx parcel index.html
 import { User } from "./User";
 import { Company } from './Company';
 import { CustomMap } from './CustomeMap';


 const user = new User()
 console.log(user)


 const company = new Company()
 console.log(company)



const customMap = new CustomMap('map')

customMap.addMarker(user)
customMap.addMarker(company)
