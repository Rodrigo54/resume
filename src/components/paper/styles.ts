import styled from 'styled-components';

export const PaperWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: center;
  min-height: 100vh;
  background: var(--color1-light);
  background: var(--background-gradient);
  padding: 5rem 0px;
`;

export const ActionsContainer = styled.div`
  padding: 50px 0px;
  width: 70px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const ActionButton = styled.button`
  --size: 40px;
  width: var(--size);
  height: var(--size);

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border: none;
  border-radius: 50%;
  box-sizing: border-box;
  color: var(--color1);
  cursor: pointer;
  padding: 0px;

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  &:hover {
    background: var(--color1-shade);
    color: var(--color1-contrast);
  }
`;

export const PaperContainer = styled.main`
  padding: 40px;
  margin: 0px;
  width: 85vw;
  max-width: 900px;
  background: var(--paper-background);
  box-shadow: var(--paper-shadow);

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

