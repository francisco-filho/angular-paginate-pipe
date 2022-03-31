import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(lista: string[], pagina: number= 0, total:number, totalPorPagina: number = 5):  string[]{
    const pos = this.calcularItemInicialFinalDaPagina(pagina, totalPorPagina)
    return lista.slice(pos.inicio, pos.fim) 
  }

  calcularItemInicialFinalDaPagina(pagina: number, totalPorPagina: number){
    return {
      inicio: totalPorPagina * pagina,
      fim: (totalPorPagina * pagina) + totalPorPagina
    }
  }
}
