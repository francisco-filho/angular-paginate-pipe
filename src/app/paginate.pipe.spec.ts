import { PaginatePipe } from './paginate.pipe';

describe('PaginatePipe', () => {
  it('deve retornar lista paginada', () => {
    const pipe = new PaginatePipe();

    const lista = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

    expect(pipe.transform(lista, 1, 5)).toHaveSize(5)

    const subject1 = pipe.transform(lista, 0, 3);
    expect(subject1).toMatch(/1,2,3/)

    const subject2 = pipe.transform(lista, 1, 3);
    expect(subject2).toMatch(/4,5,6/)

    const subject3 = pipe.transform(lista, 3, 3);
    expect(subject3).toHaveSize(1)
    expect(subject3).toMatch(/0/)

    expect(pipe).toBeTruthy();
  });
});
