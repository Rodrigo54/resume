import styled from 'styled-components';

export const ContentWrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  gap: 5px;
`;

export const Link = styled.a`
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2;
  word-break: keep-all;
  color: var(--color2-contrast);
  text-decoration: none;
  &:hover {
    color: var(--color3-light);
  }
`;



