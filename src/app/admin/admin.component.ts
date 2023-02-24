// import { Component } from '@angular/core';
// import { Driver } from '../driver';
// import { DriverOperationService } from '../driver-operation.service';

// @Component({
//   selector: 'app-admin-work',
//   templateUrl: './admin-work.component.html',
//   styleUrls: ['./admin-work.component.css']
// })
// export class AdminWorkComponent {
//   c:Driver = new Driver('','','',0,'',0,'');
//   submitted = false;
//   success = false;
//   error = false;
//   status = false;
//   message = '';
//   constructor(private driverService: DriverOperationService) {}
//   onSubmit() {
//     this.driverService.addCab(this.c).subscribe(
//       data=>{
//         this.status=true;
//         this.message="driver added";
//       },
//       error=>{
//       }
//     )

//    __driverService:DriverOperationService;

//   constructor(driverService:DriverOperationService)
//   {
//     this.__driverService = driverService;
//   }

//   readDriver(driverId:string,driverName:string,category:string,rating:string,city:string,experience:string)
//   {
//       console.log(driverId+" "+driverName+" "+category+"  "+rating+" "+city+" "+experience);
//       let driverFromUser:Driver = new Driver(parseInt(driverId),driverName,category,parseInt(rating),city,parseInt(experience));
//       this.__driverService.addDriver(driverFromUser);
//   }



// }