import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../local-storage.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

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
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
    });
  }

  goToStep3() {}

  getAddress(cepValue: Event) {
    const inputElement = cepValue.target as HTMLInputElement;
    const address = inputElement.value;
    console.log(address);

    // cep = address.replace(/\D/g, '');

    // if (cep != '') {
    //   let validaCep = /^[0-9]{8}$/;

    //   if (validaCep.test(cep)) {
    //   }
    // }
  }
}
