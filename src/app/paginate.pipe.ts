import { Pipe, PipeTransform } from '@angular/core';

/**
 * - chave no git
 * - clonar projeto transferencia
 * - gaw-reverse usando o desenv
 * - título para a solicitação
 * - paginação
 * - textos da interface
 * - testar com um usuário que nunca viu a interface
 * - identificação de campos obrigatórios
 * # novidades
 * - testar responsividade
 * - cancelamento
 * # verificações
 * - como está o log das ações executadas no sistema
 */

@Pipe({
  name: 'paginate',
})
export class PaginatePipe implements PipeTransform {
  transform(
    lista: string[],
    pagina: number = 0,
    totalPorPagina: number = 5
  ): string[] {
    const pos = this.calcularItemInicialFinalDaPagina(pagina, totalPorPagina);
    return lista.slice(pos.inicio, pos.fim);
  }

  private calcularItemInicialFinalDaPagina(
    pagina: number,
    totalPorPagina: number
  ) {
    return {
      inicio: totalPorPagina * pagina,
      fim: totalPorPagina * pagina + totalPorPagina,
    };
  }
}
