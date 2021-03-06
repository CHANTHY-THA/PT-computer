import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BookingComponent } from './booking/booking.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CustomerComponent } from './customer/customer.component';
import { DelivererComponent } from './deliverer/deliverer.component';
import { SettingComponent } from './setting/setting.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import { BookingFormComponent } from './booking-form/booking-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DialogComponent } from './dialog/dialog.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { RemoveDialogComponent } from './remove-dialog/remove-dialog.component';
import { ServicesComponent } from './services/services.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookingComponent,
    PageNotfoundComponent,
    CustomerComponent,
    DelivererComponent,
    SettingComponent,
    DashboardComponent,
    BookingFormComponent,
    DialogComponent,
    RemoveDialogComponent,
    ServicesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatBadgeModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatTooltipModule,
    HttpClientModule,

  ],
  providers: [
    RemoveDialogComponent,
    BookingComponent,
    BookingFormComponent,
    ServicesComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
