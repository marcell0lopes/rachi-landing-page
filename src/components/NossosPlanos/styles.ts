import styled from 'styled-components';

export const Container = styled.section`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;

  h2 {
    font-size: 2.2rem;
    line-height: 2.5rem;
    text-align: center;
    padding: 3rem 0;
    color: var(--gray-200);
  }

  h3 {
    font-family: 'Inter';
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 1.4rem;
    color: var(--gray);
  }

  div#card-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    max-width: 1200px;
  }
`;
