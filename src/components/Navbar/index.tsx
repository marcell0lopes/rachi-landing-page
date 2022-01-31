import logoImg from '../../assets/logo.svg';
import { Container, Logo, Menu } from './styles';

export function Navbar() {
  return (
    <Container>
      <Logo src={logoImg} alt="Rachi Logo" />

      <Menu>
        <li>
          <a href="#funcionalidades">funcionalidades</a>
        </li>
        <li>
          <a href="#app">app</a>
        </li>
        <li>
          <a href="#planos">planos</a>
        </li>
        <li>
          <a href="#contato">contato</a>
        </li>
      </Menu>
    </Container>
  );
}
