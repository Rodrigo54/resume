import styled from 'styled-components';

export const PaperWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
  background: #e6e6e6;
  background: linear-gradient(0deg, #adcce4 0%, #e6e6e6 100%);
`;

export const PaperContainer = styled.main`
  padding: 30px;
  margin: 5rem auto;
  width: 85vw;
  max-width: 900px;
  height: 30cm;
  background: white;
  box-shadow: 2px 2px 5px #a2a2a2;
`;
