import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInfoComponent } from './steps/personal-info/personal-info.component';
import { AddressComponent } from './steps/address/address.component';
import { SelectPlanComponent } from './steps/select-plan/select-plan.component';
import { SummaryComponent } from './steps/summary/summary.component';

export const routes: Routes = [
  {
    path: '',
    component: PersonalInfoComponent,
  },
  {
    path: 'address',
    component: AddressComponent 
  },
  {
    path: 'select-plan',
    component: SelectPlanComponent
  },
  {
    path: 'summary',
    component: SummaryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
