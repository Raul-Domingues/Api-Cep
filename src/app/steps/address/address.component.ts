import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ViaCepService } from '../../services/via-cep.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss',
})
export class AddressComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private localStorageService: LocalStorageService,
    private fb: FormBuilder,
    private viaCepService: ViaCepService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
    });

    const savedData = this.localStorageService.getItem('form2');
    if (savedData) {
      this.form.patchValue(savedData);
    }
  }

  goToStep3() {
    console.log(this.form.value);
    if(this.form.valid) {
      this.localStorageService.setItem('form2', this.form.value);
      this.router.navigate(['/select-plan']);
    }
  }

  getAddress() {
    const cep = this.form.get('cep')?.value;
    if(cep) {
      this.viaCepService.getAddressByCep(cep).subscribe({
        next: data => {
          if(data.erro) {
            alert('CEP não encontrado');
            return;
          }
          this.form.patchValue({
            logradouro: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade + ' - ' + data.uf,
          })
        }
      })
    }
  }
}
