import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressComponent } from './steps/address/address.component';
import { PersonalInfoComponent } from './steps/personal-info/personal-info.component';
import { SelectPlanComponent } from './steps/select-plan/select-plan.component';
import { SummaryComponent } from './steps/summary/summary.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { StepsDisplayComponent } from './steps-display/steps-display.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    AddressComponent,
    SelectPlanComponent,
    SummaryComponent,
    StepsDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    NgxMaskDirective,
    NgxMaskPipe,
    FormsModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideNgxMask(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
