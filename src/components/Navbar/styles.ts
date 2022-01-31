import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  background: var(--white);
`;

export const Logo = styled.img`
  width: 100px;
  height: 30px;
`;
export const Menu = styled.ul`
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
    }
  }
`;
