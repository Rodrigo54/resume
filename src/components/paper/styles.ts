import styled from 'styled-components';

export const PaperWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
  background: #e6e6e6;
  background: linear-gradient(0deg, #adcce4 0%, #e6e6e6 100%);
`;

export const PaperContainer = styled.main`
  padding: 40px;
  margin: 5rem auto;
  width: 85vw;
  max-width: 900px;
  background: white;
  box-shadow: 2px 2px 5px #a2a2a2;

  display: grid;
  grid-template: auto / 1fr 0.5fr;
  gap: 30px;
`;

export const PaperArticle = styled.article`
  display: flex;
  flex-flow: column nowrap;
  gap: 5px;
`;

export const PaperAside = styled.aside`
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
`;

