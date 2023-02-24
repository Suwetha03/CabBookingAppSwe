import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CabComponent } from './cab/cab.component';
import { DriverComponent } from './driver/driver.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TripBookingComponent } from './trip-booking/trip-booking.component';
import { UserComponent } from './user/user.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

const allLinks:Routes = [
  {path:'adddriver',component:DriverComponent},
  {path:'viewdriverDetails',component:DriverListComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    CabComponent,
    DriverComponent,
    HeaderComponent,
    HomepageComponent,
    TripBookingComponent,
    UserComponent,
    DriverListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,HttpClientModule,
    AppRoutingModule,RouterModule.forRoot(allLinks)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
