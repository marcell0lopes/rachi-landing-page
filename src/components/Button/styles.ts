import styled from 'styled-components';

export const StyleBtn = styled.button`
  background-color: var(--blue);
  color: var(--white);
  border: 0;
  border-radius: 2rem;
  box-shadow: 1px 3px 4px 0px #137de080;

  font-weight: 600;
  font-family: 'Inter';
  font-size: 1.2rem;

  &.cta {
    margin: 3rem 0;
    width: 200px;
    height: 56px;
  }
`;
