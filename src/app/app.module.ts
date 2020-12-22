import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataService} from './data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { ApicallsComponent } from './apicalls/apicalls.component';
import { ApiserviceService } from './apiservice.service';
import { ApicurdComponent } from './apicurd/apicurd.component';
import { FormsModule } from '@angular/forms';
import { FormapiComponent } from './formapi/formapi.component';
import { FormcurdComponent } from './formcurd/formcurd.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    FormComponent,
    ApicallsComponent,
    ApicurdComponent,
    FormapiComponent,
    FormcurdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,FormsModule
  ],
  providers: [DataService,ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
