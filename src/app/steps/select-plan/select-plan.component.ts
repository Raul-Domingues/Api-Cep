import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'select-plan',
  templateUrl: './select-plan.component.html',
  styleUrl: './select-plan.component.scss',
})
export class SelectPlanComponent {
  selectedPlan!: string;
  duration: string = 'monthly'

  planForm!: FormGroup;

  constructor(
    private router: Router,
    private localStorage: LocalStorageService,
    private fb: FormBuilder
  ) {}

  toggleChange() {
    this.duration = this.duration === 'monthly' ? 'yearly' : 'monthly';
    console.log(this.selectedPlan);
    console.log(this.duration);
  }

  selectPlan(option: string) {
    this.selectedPlan = option;
  }

  nextStep() {
    this.localStorage.setItem('form3', {
      selectedPlan: this.selectedPlan,
      duration: this.duration,
    });
    this.router.navigate(['/summary']);
  }
}
