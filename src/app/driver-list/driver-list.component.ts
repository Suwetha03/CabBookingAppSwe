import { Component } from '@angular/core';
import { DriverDTO } from '../driver-dto';
import { DriverOperationService } from '../driver-operation.service';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent {
  allDriver:DriverDTO[] = [];
  constructor(driverService:DriverOperationService)
  {
    driverService. getAllDriverFromSpring().subscribe(
      data=>{
        this.allDriver = data;
      },
      err=>{
        console.log("Error" +err);
      }
    );
  }
}

