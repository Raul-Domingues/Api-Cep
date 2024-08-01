import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss',
})
export class PersonalInfoComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      celular: [null, Validators.required],
    });
  }

  enviarDados() {
    // if (this.form.valid) {
      console.log(this.form.value);
      this.router.navigate(['/address']);
    // } else {
    //   console.log('preencha os dados');
    // }
  }
}
