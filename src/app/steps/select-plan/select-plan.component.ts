import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'select-plan',
  templateUrl: './select-plan.component.html',
  styleUrl: './select-plan.component.scss',
})
export class SelectPlanComponent implements OnInit{
  selectedPlan: string | null = null;

  selectPlan(option: string) {
    this.selectedPlan = option;
  }

  ngOnInit(): void {
    console.log('teste')
  }
}
