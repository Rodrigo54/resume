import styled from 'styled-components';

export const ContentWrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
`;

export const ListWrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  gap: 15px;
`;

export const CourseWrap = styled.a`
  display: flex;
  flex-flow: column nowrap;
  color: var(--text-color);
  text-decoration: none;
  &:hover {
    color: var(--color1-light);
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 3px;
`;

export const InfoName = styled.h3`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 10px;

  font-family: var(--font-title);
  line-height: 1.2;
  font-weight: 400;
  font-size: 1rem;
`;

export const InfoLocale = styled.p`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 5px;

  font-family: var(--font-body);
  line-height: 1;
  font-weight: 300;
  font-size: 1rem;
  text-align: left;
`;

export const InfoDate = styled.p`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 5px;

  line-height: 1;
  font-weight: 200;
  font-size: 1rem;
  font-family: var(--font-body);
`;

