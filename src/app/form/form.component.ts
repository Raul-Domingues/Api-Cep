import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  step1 = true;
  step2 = false;
  step3 = false;
  step4 = false;
  step5 = false;

  goToStep1() {
    this.step1 = true;
    this.step2 = false;
  }

  goToStep2() {
    this.step1 = false;
    this.step2 = true;
    this.step3 = false;
  }

  goToStep3() {
    this.step2 = false;
    this.step3 = true;
    this.step4 = false;
  }

  goToStep4() {
    this.step3 = false;
    this.step4 = true;
  }

  goToStep5() {
    this.step4 = false;
    this.step5 = true;
  }
}
