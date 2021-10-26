import { useState, useEffect } from 'react';
import * as Style from './App.styles';
import { Lancamento } from './types/Lancamento';
import { categorias } from './data/categorias';
import { lancamentos } from './data/lancamentos';
import { getMesAtual, filtrarLancamentosPorMes } from './helpers/filtrarPorData';
import { TabelaLancamentos } from './components/TabelaLancamentos';
import { SumarioLancamentos } from './components/SumarioLancamentos';
import { EntradaLancamento } from './components/EntradaLancamento';

function App() {
  const [listaLancamentos, setListaLancamentos] = useState(lancamentos);
  const [lancamentosFiltrados, setLancamentosFiltrados] = useState<Lancamento[]>([]);
  const [mesAtual, setMesAtual] = useState(getMesAtual());
  const [valorTotalEntradas, setValorTotalEntradas] = useState(0);
  const [valorTotalSaidas, setValorTotalSaidas] = useState(0);

  useEffect(() => {
    setLancamentosFiltrados(filtrarLancamentosPorMes(listaLancamentos, mesAtual));
  }, [listaLancamentos, mesAtual]);

  const handleAlteracaoMes = (novoMes: string) => {
    setMesAtual(novoMes);
  }

  useEffect(() => {
    let entradas = 0;
    let saidas = 0;

    lancamentosFiltrados.forEach((lancamento) => {
      if(categorias[lancamento.categoria].despesa) {
        saidas += lancamento.valor;
      } else {
        entradas += lancamento.valor;
      }
    });

    setValorTotalEntradas(entradas);
    setValorTotalSaidas(saidas);
  }, [lancamentosFiltrados]);

  const handleAdicaoLancamento = (lancamento: Lancamento) => {
    let newListaLancamentos = [...listaLancamentos];
    newListaLancamentos.push(lancamento);
    setListaLancamentos(newListaLancamentos);
  }

  return (
    <Style.Container>
      <Style.Header>
        <Style.HeaderText>Gerenciador de Despesas</Style.HeaderText>
      </Style.Header>
      <Style.Body>
        <SumarioLancamentos
          mesAtual={mesAtual}
          onAlteracaoMes={handleAlteracaoMes}
          valorTotalEntradas={valorTotalEntradas}
          valorTotalSaidas={valorTotalSaidas}
        />
        <EntradaLancamento onAdicaoLancamento={handleAdicaoLancamento} />
        <TabelaLancamentos lancamentos={lancamentosFiltrados} />
      </Style.Body>
    </Style.Container>
  );
}

export default App;
