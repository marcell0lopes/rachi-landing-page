import styled from 'styled-components';

export const Container = styled.main`
  background-color: var(--white-200);
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 640px;
  padding: 0 3rem;
`;

export const Content = styled.div`
  display: flex;

  align-items: flex-start;
  justify-content: space-between;

  h1 {
    font-size: 3rem;
    letter-spacing: -0.2rem;
    color: var(--grey-200);
  }
`;
