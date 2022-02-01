import styled from 'styled-components';

export const FooterDiv = styled.footer`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  p {
    color: var(--gray-200);
    font-size: 1.2rem;
    letter-spacing: 0.05rem;
  }
`;

export const FooterLinks = styled.ul`
  color: var(--gray-200);
  list-style: none;
  display: flex;
  align-items: center;
  margin: 1rem 0;
  gap: 3rem;
  li {
    span {
      color: #dd3333;
    }
    a {
      text-decoration: none;
      font-weight: 500;
      color: var(--gray);
      border-bottom: 0.1rem solid var(--gray);

      &:hover {
        color: var(--blue);
        border-bottom: none;
      }
    }
  }
`;
