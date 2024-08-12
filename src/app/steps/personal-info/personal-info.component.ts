import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss',
})
export class PersonalInfoComponent implements OnInit {
  form!: FormGroup;
  currentStep = 'Passo 1';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private localStorage: LocalStorageService,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      celular: ['', [Validators.required, Validators.minLength(11)]],
    });

    const savedData = this.localStorage.getItem('form1');
    if (savedData) {
      this.form.patchValue(savedData);
    }
  }

  goToStep2() {
    if(this.form.valid) {
      this.localStorage.setItem('form1', this.form.value);
      this.router.navigate(['/address']);
    }
  }
}
