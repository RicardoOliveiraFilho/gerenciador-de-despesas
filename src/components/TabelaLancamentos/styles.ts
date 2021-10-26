import styled from 'styled-components';

export const Container = styled.table`
  width: 100%;
  background-color: #FFFFFF;
  padding: 20px;
  box-shadow: 0px 0px 5px #CCCCCC;
  border-radius: 10px;
  margin-top: 20px;
`;

export const ColumnHeader = styled.th<{ largura?: number }>`
  width: ${props => props.largura ? `${props.largura}px` : 'auto'};
  padding: 10px 0;
  text-align: left;
`;