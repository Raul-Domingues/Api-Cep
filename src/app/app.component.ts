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
}
