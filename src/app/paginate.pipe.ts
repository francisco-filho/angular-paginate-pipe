import { Pipe, PipeTransform } from '@angular/core';

/**
 * - título para a solicitação
 * - cancelamento
 * - textos da interface
 * - identificação de campos obrigatórios
 * - testar responsividade 
 * - testar com um usuário que nunca viu a interface
 * - paginação
 */

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(
    lista: string[], 
    pagina: number= 0, 
    totalPorPagina: number = 5):  string[]{
    const pos = this.calcularItemInicialFinalDaPagina(pagina, totalPorPagina)
    return lista.slice(pos.inicio, pos.fim) 
  }

  private calcularItemInicialFinalDaPagina(pagina: number, totalPorPagina: number){
    return {
      inicio: totalPorPagina * pagina,
      fim: (totalPorPagina * pagina) + totalPorPagina
    }
  }
}
