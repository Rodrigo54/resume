import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 20px;
`;

export const Name = styled.h1`
  font-family: var(--font-title);
  font-size: 1.8rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 10px;
  color: var(--color1);
`;

export const Resume = styled.p`
  font-family: var(--font-body);
  font-size: 0.9rem;
  line-height: 1.1;
`;

export const Avatar = styled.img`
  --size: 96px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
`;
