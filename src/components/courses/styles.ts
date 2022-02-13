import styled from 'styled-components';
import media from 'styled-media-query';

export const ContentWrapper = styled.section`
  font-family: var(--font-sans-serif);
`;

export const CourseWrap = styled.a`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 20px;
  color: var(--color2-contrast);
  text-decoration: none;
  &:hover {
    color: var(--color3-light);
  }
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
  line-height: 1.5;
  font-weight: 500;
  font-size: 1rem;
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

  line-height: 1;
  font-weight: 200;
  font-size: 1rem;
  font-family: var(--font-body);
`;

