import { Injectable } from '@angular/core';
import { Driver } from './driver';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DriverDTO } from './driver-dto';

@Injectable({
  providedIn: 'root'
})
export class DriverOperationService {
  baseURL = 'http://localhost:8001/driver';
  allDriverEndpoint = this.baseURL+'/display';
  addDriverEndPoint:string=this.baseURL+'/add';
  bestDriverEndpoint = this.baseURL+'/bestdrivers';
  driverArr:DriverDTO[] = [];
  constructor(private http:HttpClient) {
    console.log("Inside Constructor "+this.allDriverEndpoint);
   }
   getAllDriverFromSpring():Observable<DriverDTO[]>
   {
    console.log("inside service : "+this.allDriverEndpoint);
    return this.http.get<DriverDTO[]>(`${this.allDriverEndpoint}`);
   }

   addDriver(driver:Driver):Observable<Driver> {
    console.log("inside method 1 : Driver Added" + driver);
    return this.http.post<Driver>(`${this.addDriverEndPoint}`,driver);
  
   }
   getAllBestDriver():Observable<DriverDTO[]>
   {
    console.log("inside service : "+this.bestDriverEndpoint);
    return this.http.get<DriverDTO[]>(`${this.bestDriverEndpoint}`);
   }
  }
  