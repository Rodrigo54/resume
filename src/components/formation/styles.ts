import styled from 'styled-components';
import media from 'styled-media-query';

export const ContentWrapper = styled.section`
  font-family: var(--font-sans-serif);
`;

export const Title = styled.h2`
  font-family: var(--font-title);
  color: var(--color3);
  word-break: break-word;
  letter-spacing: 0.05rem;
  font-weight: 800;
  font-size: 1.5rem;
  margin: 0.5rem auto;
`;

export const FormationWrap = styled.section`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 5px;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 5px;
`;

export const InfoName = styled.h3`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 10px;

  font-family: var(--font-title);
  line-height: 1;
  font-weight: 500;
  font-size: 1.3rem;
`;

export const InfoLocale = styled.p`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 10px;

  font-family: var(--font-body);
  line-height: 1;
  font-weight: 200;
  font-size: 1rem;
`;

export const InfoDate = styled.p`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 10px;

  font-family: var(--font-body);
  line-height: 1;
  font-weight: 200;
  font-size: 1rem;
`;

export const Description = styled.blockquote`
  border-left: 0.3rem solid var(--color3-light);
  padding: 0px 15px;
  margin: 10px 4px;

  font-family: var(--font-body);
  line-height: 1.5;
  font-weight: 200;
  font-size: 1rem;
  font-style: italic;
  text-align: justify;
  hyphens: auto;
  text-indent: 0.8rem;
`;
