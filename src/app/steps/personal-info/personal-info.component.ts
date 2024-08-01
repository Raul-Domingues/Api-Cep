import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../local-storage.service';
@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss',
})
export class PersonalInfoComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private localStorage: LocalStorageService,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      celular: [null, Validators.required],
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
