import styled from 'styled-components';

export const ContactWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 5px;
`;

export const Address = styled.address`
  font-family: var(--font-body);
  font-size: 1rem;
`;

export const Phone = styled.a`
  text-decoration: none;
  color: inherit;
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 800;
  line-height: 1;
`;

export const Email = styled.a`
  text-decoration: none;
  color: inherit;
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 800;
  line-height: 1;
`;
