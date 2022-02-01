import styled from 'styled-components';

export const Container = styled.section`
  background-color: var(--white-200);

  max-height: 640px;
  padding: 0 3rem;

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;

    img {
      margin-left: 4rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 0;

  h1 {
    font-size: 3rem;
    letter-spacing: -0.2rem;
    color: var(--gray-200);
  }
`;
