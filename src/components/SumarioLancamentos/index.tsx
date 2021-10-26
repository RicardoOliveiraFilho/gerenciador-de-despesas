import * as Style from './styles';
import { formatarMesAtual, incrementarDecrementarMes } from '../../helpers/filtrarPorData';
import { ItemSumario } from '../ItemSumario';

type SumarioLancamentosProps = {
  mesAtual: string;
  onAlteracaoMes: (novoMes: string) => void;
  valorTotalEntradas: number;
  valorTotalSaidas: number;
}

export function SumarioLancamentos({
  mesAtual, onAlteracaoMes,
  valorTotalEntradas, valorTotalSaidas
}: SumarioLancamentosProps) {
  const handleMesAnterior = () => {
    let dataAtual = incrementarDecrementarMes(mesAtual, false);
    onAlteracaoMes(`${dataAtual.getFullYear()}-${dataAtual.getMonth() + 1}`);
  }

  const handleMesPosterior = () => {
    let dataAtual = incrementarDecrementarMes(mesAtual, true);
    onAlteracaoMes(`${dataAtual.getFullYear()}-${dataAtual.getMonth() + 1}`);
  }

  return (
    <Style.Container>
      <Style.ContentMonth>
        <Style.ArrowMonth onClick={handleMesAnterior}>⬅️</Style.ArrowMonth>
        <Style.TitleMonth>{formatarMesAtual(mesAtual)}</Style.TitleMonth>
        <Style.ArrowMonth onClick={handleMesPosterior}>➡️</Style.ArrowMonth>
      </Style.ContentMonth>
      <Style.ContentResume>
        <ItemSumario titulo="Entradas" valor={valorTotalEntradas} cor="green" />
        <ItemSumario titulo="Saídas" valor={valorTotalSaidas} cor="red" />
        <ItemSumario
          titulo="Total Geral"
          valor={valorTotalEntradas - valorTotalSaidas}
          totalizador
        />
      </Style.ContentResume>
    </Style.Container>
  );
}