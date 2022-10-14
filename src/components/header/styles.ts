import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  flex-flow: column nowrap;
`;

export const Name = styled.h1`
  font-family: var(--font-title);
  font-size: 2rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 10px;
  color: var(--color1);
`;

export const Resume = styled.p`
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.1;
  text-align: justify;
  text-indent: 0.5rem;
  hyphens: none;
`;
