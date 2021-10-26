import { Lancamento } from '../types/Lancamento';

export const lancamentos: Lancamento[] = [
  { data: new Date(2021, 9, 6), categoria: 'alimentacao', descricao: 'MC Donald\'s', valor: 32.12 },
  { data: new Date(2021, 9, 15), categoria: 'alimentacao', descricao: 'Burger King', valor: 28 },
  { data: new Date(2021, 9, 16), categoria: 'aluguel', descricao: 'Aluguel Casa', valor: 2300 },
  { data: new Date(2021, 10, 18), categoria: 'salario', descricao: 'Salário do Mês', valor: 4500 }
];