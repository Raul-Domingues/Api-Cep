import { Component } from '@angular/core';

@Component({
  selector: 'app-form-done',
  templateUrl: './form-done.component.html',
  styleUrl: './form-done.component.scss'
})
export class FormDoneComponent {

  step1 = true;
  step2 = false;
  step3 = false;
  step4 = false;
  step5 = false;
}
