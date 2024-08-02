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
    data: { animation: 'personal-info' }
  },
  {
    path: 'address',
    component: AddressComponent,
    data: { animation: 'address' } 
  },
  {
    path: 'select-plan',
    component: SelectPlanComponent,
    data: { animation: 'select-plan' }
  },
  {
    path: 'summary',
    component: SummaryComponent,
    data: { animation: 'summary' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
