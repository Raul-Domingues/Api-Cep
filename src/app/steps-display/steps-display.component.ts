import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-steps-display',
  templateUrl: './steps-display.component.html',
  styleUrl: './steps-display.component.scss',
})
export class StepsDisplayComponent implements OnInit {
  numero!: number;
  passo!: string;
  titulo!: string;

  steps = [
    {
      numero: 1,
      passo: 'Passo 1',
      titulo: 'Suas informações',
    },
    {
      numero: 2,
      passo: 'Passo 2',
      titulo: 'Seu endereço',
    },
    {
      numero: 3,
      passo: 'Passo 3',
      titulo: 'Selecione um plano',
    },
    {
      numero: 4,
      passo: 'Passo 4',
      titulo: 'Resumo',
    },
  ];

  ngOnInit(): void {}
  
}
