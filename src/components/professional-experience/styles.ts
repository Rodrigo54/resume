import styled from 'styled-components';

export const ContentWrapper = styled.section`
  font-family: var(--font-body);
  display: flex;
  flex-flow: column nowrap;
  gap: 5px;
`;

export const WorkWrap = styled.section`
  display: flex;
  flex-flow: column nowrap;
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
  color: var(--color2-contrast);
  line-height: 1;
  font-weight: 500;
  font-size: 1.2rem;
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
