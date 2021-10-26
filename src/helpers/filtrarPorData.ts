import { Lancamento } from '../types/Lancamento';

export const getMesAtual = () => {
  let agora = new Date();
  return `${agora.getFullYear()}-${agora.getMonth() + 1}`;
}

export const filtrarLancamentosPorMes = (lancamentos: Lancamento[], data: string): Lancamento[] => {
  let newListaLancamentos: Lancamento[] = [];
  let [ano, mes] = data.split('-');

  newListaLancamentos = lancamentos.filter(lancamento => (
    lancamento.data.getFullYear() === parseInt(ano) &&
    (lancamento.data.getMonth() + 1) === parseInt(mes)
  ));

  return newListaLancamentos;
}

export const formatarData = (data: Date): string => {
  let ano = data.getFullYear();
  let mes = data.getMonth() + 1;
  let dia = data.getDate();

  return `${adicionarZeroAoDia(dia)}/${adicionarZeroAoDia(mes)}/${ano}`;
}

const adicionarZeroAoDia = (dia: number): string => dia < 10 ? `0${dia}` : `${dia}`;

export const formatarMesAtual = (mesAtual: string) => {
  let [ano, mes] = mesAtual.split('-');
  let meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril',
    'Maio', 'Junho', 'Julho', 'Agosto',
    'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  return `${meses[parseInt(mes) - 1]}/${ano}`;
}

export const incrementarDecrementarMes = (mesAtual: string, incrementar: boolean): Date => {
  let [ano, mes] = mesAtual.split('-');
  let dataAtual = new Date(parseInt(ano), parseInt(mes) - 1, 1);

  if (incrementar) {
    dataAtual.setMonth(dataAtual.getMonth() + 1);
  } else {
    dataAtual.setMonth(dataAtual.getMonth() - 1);
  }

  return dataAtual;
}