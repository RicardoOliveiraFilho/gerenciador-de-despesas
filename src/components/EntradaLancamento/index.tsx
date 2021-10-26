import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { categorias } from '../../data/categorias';
import { Lancamento } from '../../types/Lancamento';
import * as Style from './styles';

type EntradaLancamentoProps = {
  onAdicaoLancamento: (lancamento: Lancamento) => void;
}

export function EntradaLancamento({ onAdicaoLancamento }: EntradaLancamentoProps) {
  const [campoData, setCampoData] = useState('');
  const [campoCategoria, setCampoCategoria] = useState('');
  const [campoDescricao, setCampoDescricao] = useState('');
  const [campoValor, setCampoValor] = useState(0);

  let chavesCategorias: string[] = Object.keys(categorias);

  const handleAdicaoLancamento = () => {
    let erros: string[] = [];

    if(isNaN(new Date(campoData).getTime())) {
      erros.push('Data inválida!');
    }
    if(!chavesCategorias.includes(campoCategoria)) {
      erros.push('Categoria inválida!');
    }
    if(campoDescricao === '') {
      erros.push('Título vazio!');
    }
    if(campoValor <= 0) {
      erros.push('Valor inválido!');
    }

    if(erros.length > 0) {
      erros.forEach((erro) => {
        toast.error(`${erro}`, {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
    } else {
      let [ano, mes, dia] = campoData.split('-');
      onAdicaoLancamento({
        data: new Date(parseInt(ano), parseInt(mes) - 1, parseInt(dia)),
        categoria: campoCategoria,
        descricao: campoDescricao,
        valor: campoValor,
      });

      limparCampos();

      toast.success('Lançamento adicionado!', {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }
  
  const limparCampos = () => {
    setCampoData('');
    setCampoCategoria('');
    setCampoDescricao('');
    setCampoValor(0);
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />

      <Style.Container>
        <Style.InputLabel>
          <Style.InputTitle>Data</Style.InputTitle>
          <Style.Input type="date" value={campoData} onChange={e => setCampoData(e.target.value)} />
        </Style.InputLabel>

        <Style.InputLabel>
          <Style.InputTitle>Categoria</Style.InputTitle>
          <Style.Select value={campoCategoria} onChange={e => setCampoCategoria(e.target.value)}>
            <>
              <option>{'Selecione...'}</option>
              {chavesCategorias.map((chave, index) => (
                <option key={index} value={chave}>{categorias[chave].descricao}</option>
              ))}
            </>
          </Style.Select>
        </Style.InputLabel>

        <Style.InputLabel>
          <Style.InputTitle>Descrição</Style.InputTitle>
          <Style.Input type="text" value={campoDescricao} onChange={e => setCampoDescricao(e.target.value)} />
        </Style.InputLabel>

        <Style.InputLabel>
          <Style.InputTitle>Valor</Style.InputTitle>
          <Style.Input type="number" value={campoValor} onChange={e => setCampoValor(parseFloat(e.target.value))} />
        </Style.InputLabel>

        <Style.InputLabel>
          <Style.InputTitle>&nbsp;</Style.InputTitle>
          <Style.Button onClick={handleAdicaoLancamento}>Adicionar</Style.Button>
        </Style.InputLabel>
      </Style.Container>
    </>
  );
}