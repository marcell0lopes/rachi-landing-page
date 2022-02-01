import styled from 'styled-components';

export const Container = styled.section`
  background-color: var(--white-200);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin: 4rem 0;
  }
`;

export const Content = styled.div`
  h2 {
    font-size: 2rem;
    color: var(--gray-200);
  }

  p {
    max-width: 440px;
    color: var(--gray);
    line-height: 1.8rem;
    margin: 1rem 0;
  }

  img {
    margin-left: -0.1rem;
    margin-bottom: 0;
  }
`;
