import { Lancamento } from '../../types/Lancamento';
import { categorias } from '../../data/categorias';
import { formatarData } from '../../helpers/filtrarPorData';
import { formatarMoeda } from '../../helpers/converterValorMonetario';
import * as Style from './styles';

type DetalhesLancamentoProps = {
  lancamento: Lancamento;
}

export function DetalhesLancamento({ lancamento }: DetalhesLancamentoProps) {
  return (
    <Style.Content>
      <Style.ContentData>{formatarData(lancamento.data)}</Style.ContentData>
      <Style.ContentData>
        <Style.ContentColor cor={categorias[lancamento.categoria].cor}>
          {categorias[lancamento.categoria].descricao}
        </Style.ContentColor>
      </Style.ContentData>
      <Style.ContentData>{lancamento.descricao}</Style.ContentData>
      <Style.ContentData>
        <Style.ValueColor cor={categorias[lancamento.categoria].despesa ? 'red' : 'green'}>
          {formatarMoeda(lancamento.valor)}
        </Style.ValueColor>
      </Style.ContentData>
    </Style.Content>
  );
}