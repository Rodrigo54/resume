import styled from 'styled-components';

export const ContentWrapper = styled.section`
  font-family: var(--font-body);
  display: flex;
  flex-flow: column nowrap;
  gap: 5px;
`;

export const FormationWrap = styled.section`
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

export const InfoChip = styled.span`
  font-size: 0.9rem;
  border-radius: 5px;
  background-color: color-mix(in srgb, var(--color1-light), white 60%) ;
  color: var(--color1-shade);
  padding: 5px;
`;
