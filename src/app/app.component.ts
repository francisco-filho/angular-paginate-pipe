import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.filtrar()
  }
  title = 'angular-teste';

  filtro = ""
  pagina = 0
  qtdPorPagina = 5
  totalSolicitacoes = 0; 
  solicitacoes: string[] = []
  solicitacoesCompletas = [
    '1abc',
    '2abc',
    '3abc',
    '4abc',
    '5xpto',
    '6xpto',
    '7xpto',
    '8xpto',
    '9xpto',
    '10amigo',
    '11amigo',
    '12amigo',
    '13amigo',
  ]


  filtrar(){
    let sols = []
    if (this.filtro === ""){
      sols = [...this.solicitacoesCompletas]
    } else {
      sols = [...this.solicitacoesCompletas.filter(s => {
        return s.toLowerCase().includes(this.filtro)
      })]//
    }
    this.totalSolicitacoes = sols.length;
    this.solicitacoes = sols; 
  }

  paginate(event: {page: number}){
      this.pagina = event.page;
  }
}
