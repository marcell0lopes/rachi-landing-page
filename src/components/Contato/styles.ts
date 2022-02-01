import styled from 'styled-components';
import contatoImg from '../../assets/contact.png';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url(${contatoImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 382px;

  h2 {
    font-size: 2.2rem;
    line-height: 2.5rem;
    text-align: center;
    padding: 2rem 0;
    color: var(--white);
  }

  p {
    color: var(--white);
    opacity: 0.9;
    font-size: 1.2rem;
    line-height: 1.8rem;
    max-width: 530px;
    margin-bottom: 3rem;
  }
`;

export const Email = styled.div`
  input {
    background: none;
    outline: none;
    border: 0;
    border-bottom: 0.1rem solid var(--white);
    color: var(--white);
    font-size: 1.2rem;
    padding: 0.7rem 0;
    margin: 0 2rem;
  }
`;
