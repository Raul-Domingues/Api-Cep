import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'api-cep';

  constructor(private http: HttpClient) {
    // console.log(this.getCep('86990000'))
  }

  getCep (cep: string) {
    this.http.get(`https://viacep.com.br/ws/${cep}/json/`).subscribe(
      (data) => console.log(data)
    )
  }

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
