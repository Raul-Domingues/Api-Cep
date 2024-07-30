import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInfoComponent } from './steps/personal-info/personal-info.component';
import { SelectPlanComponent } from './steps/select-plan/select-plan.component';
import { AddOnsComponent } from './steps/add-ons/add-ons.component';
import { SummaryComponent } from './steps/summary/summary.component';
import { FormDoneComponent } from './steps/form-done/form-done.component';

const routes: Routes = [
  {
    path: '',
    component: PersonalInfoComponent,
  },
  {
    path: 'select-plan',
    component: SelectPlanComponent 
  },
  {
    path: 'add-ons',
    component: AddOnsComponent
  },
  {
    path: 'summary',
    component: SummaryComponent
  },
  {
    path: 'form-done',
    component: FormDoneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
