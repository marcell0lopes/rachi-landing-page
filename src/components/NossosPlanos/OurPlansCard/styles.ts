import styled from 'styled-components';

export const Card = styled.div`
  background: var(--white-200);
  padding: 2rem;
  border-radius: 1rem;
  margin: 2rem 0.5rem;
  max-width: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h5 {
    color: var(--gray-200);
    font-size: 1.4rem;
  }

  button {
    background-color: var(--blue);
    color: var(--white);
    padding: 0.2rem 1.5rem;
    border: none;
    outline: none;
    text-transform: uppercase;
    text-align: center;
    border-radius: 1rem;
    margin: 0.75rem 0;
  }

  h4 {
    font-size: 3rem;
    color: var(--gray-200);
    margin: 2rem 0;

    small {
      display: inline-block;
      font-size: 20px;
    }

    small:first-child {
      transform: translateY(-1rem);
    }
  }

  p {
    color: var(--gray);
    font-size: 1.1rem;
    line-height: 1.8rem;
  }

  &:nth-child(2) {
    background: var(--gray-200);

    h5,
    h4 {
      color: var(--white);
    }
  }
`;
