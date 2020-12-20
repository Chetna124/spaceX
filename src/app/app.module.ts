import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './Components/filter/filter.component';
import { MissionComponent } from './Components/mission/mission.component';
import { AllmissionsComponent } from './Components/allmissions/allmissions.component';
import { MissionService } from './Services/mission.service';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    MissionComponent,
    AllmissionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [MissionService,NgxSpinnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
