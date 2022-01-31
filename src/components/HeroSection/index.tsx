import { Container, Content } from './styles';
import heroImg from '../../assets/img-hero.svg';

export function HeroSection() {
  return (
    <Container>
      <Content>
        <div>
          <h1>
            Rachi,
            <br /> é tudo que você precisa em um só lugar.
          </h1>
        </div>
        <button>Cadastrar-se</button>
        <img src={heroImg} alt="working from anywhere" />
      </Content>
    </Container>
  );
}
