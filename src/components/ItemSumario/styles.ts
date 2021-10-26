import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
`;

export const ContentText = styled.div`
  text-align: center;
  font-weight: bold;
  color: #888888;
  margin-bottom: 5px;
`;

export const ContentValue = styled.div<{cor?: string}>`
  text-align: center;
  font-weight: bold;
  color: ${props => props.cor};
`;