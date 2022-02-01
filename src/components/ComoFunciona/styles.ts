import styled from 'styled-components';

export const Container = styled.section`
  background: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 2.2rem;
    line-height: 2.5rem;
    text-align: center;
    padding: 3rem 0;
    color: var(--gray-200);
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 210px;
    margin: 0 4rem;

    img {
      height: 60px;
      width: 60px;
      margin: 1.5rem 0;
    }

    h3 {
      font-size: 1.2rem;
      color: var(--gray-200);
      margin-bottom: 0.8rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
      color: var(--gray);
      padding-bottom: 2.5rem;
    }
  }
`;
