import * as Style from './styles';
import { formatarMoeda } from '../../helpers/converterValorMonetario';

type ItemSumarioProps = {
  titulo: string;
  valor: number;
  totalizador?: boolean;
  cor?: string;
}

export function ItemSumario({ titulo, valor, totalizador, cor }: ItemSumarioProps) {
  return (
    <Style.Container>
      <Style.ContentText>{titulo}</Style.ContentText>
      <Style.ContentValue
        cor={totalizador ?
          (valor < 0 ? 'red' : (valor === 0 ? 'black' : 'green'))
          : cor
        }
      >
        {formatarMoeda(valor)}
      </Style.ContentValue>
    </Style.Container>
  );
}