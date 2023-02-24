import { Component } from '@angular/core';
import { DriverDTO } from '../driver-dto';
import { DriverOperationService } from '../driver-operation.service';

@Component({
  selector: 'app-driver-filter',
  templateUrl: './driver-filter.component.html',
  styleUrls: ['./driver-filter.component.css']
})
export class DriverFilterComponent {
  bestDriver:DriverDTO[] = [];
  constructor(driverService:DriverOperationService)
  {
    driverService. getAllBestDriver().subscribe(
      data=>{
        this.bestDriver = data;
      },
      err=>{
        console.log("Error" +err);
      }
    );
  }
}
