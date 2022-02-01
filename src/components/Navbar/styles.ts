import styled from 'styled-components';

export const Container = styled.header`
  padding: 1.5rem;
  background: var(--white);
  height: 2rem;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Logo = styled.img`
  width: 100px;
  height: 30px;
`;
export const Menu = styled.ul`
  margin-right: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  gap: 3rem;

  li {
    font-size: 1.2rem;
    font-weight: 400;
    list-style: none;
    text-transform: capitalize;

    a {
      text-decoration: none;
      color: var(--gray);
      transition: 0.125s ease-in-out;

      &:hover {
        color: var(--blue);
        filter: brightness(1.1);
      }
    }
  }
`;
