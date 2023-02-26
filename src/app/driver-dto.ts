export class DriverDTO {
    driverId:number;
    driverName:string;
    licenceNo:string;
    rating:number;
    category:string;
    city:string;
    experience:number;
    nativeLanguage:string;


     constructor(
        driverId:number,
         driverName:string,
         licenceNo:string,
         rating:number,
         category:string,
         city:string,
         experience:number,
         nativeLanguage:string,

     )
     {
        this.driverId=driverId;
         this.driverName = driverName;
         this.licenceNo = licenceNo;
         this.rating = rating;  
         this.category = category;
         this.city = city;
         this.experience = experience;
         this.nativeLanguage = nativeLanguage;

     }
 }
