import styled from 'styled-components';

export const Content = styled.tr``;

export const ContentData = styled.td`
  padding: 10px 0;
`;

export const ContentColor = styled.div<{ cor: string }>`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  color: #FFFFFF;
  background-color: ${props => props.cor};
`;

export const ValueColor = styled.div<{ cor: string }>`
  color: ${props => props.cor};
`;