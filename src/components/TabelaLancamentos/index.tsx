import { Lancamento } from '../../types/Lancamento';
import { DetalhesLancamento } from '../DetalhesLancamento';
import * as Style from './styles';

type TabelaLancamentosProps = {
  lancamentos: Lancamento[];
}

export function TabelaLancamentos({ lancamentos }: TabelaLancamentosProps) {
  return (
    <Style.Container>
      <thead>
        <tr>
          <Style.ColumnHeader largura={100}>Data</Style.ColumnHeader>
          <Style.ColumnHeader largura={130}>Categoria</Style.ColumnHeader>
          <Style.ColumnHeader>Descrição</Style.ColumnHeader>
          <Style.ColumnHeader largura={150}>Valor</Style.ColumnHeader>
        </tr>
      </thead>
      <tbody>
        {lancamentos.map((lancamento, index) => (
          <DetalhesLancamento key={index} lancamento={lancamento} />
        ))}
      </tbody>
    </Style.Container>
  );
}