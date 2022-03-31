import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(value: string[], pagina: number= 0, total:number, totalPorPagina: number = 5):  string[]{
    const slice = this.calcularItemInicialFinalDaPagina(pagina, total, totalPorPagina)
    const result =  this.fatiarLista(value,slice.inicio, slice.fim)
    console.log("result", total, totalPorPagina, result);
    return result
  }

  calcularItemInicialFinalDaPagina(pagina: number, total: number, totalPorPagina: number){
    const paginas = Math.floor(total / totalPorPagina);
    return {
      inicio: totalPorPagina * pagina,
      fim: (totalPorPagina * pagina) + totalPorPagina
    }
  }

  fatiarLista(lista: string[], inicio: number, fim: number){
    return lista.slice(inicio, fim);
  }
}
