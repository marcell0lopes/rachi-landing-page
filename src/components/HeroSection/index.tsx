import { Container, Content } from './styles';
import heroImg from '../../assets/img-hero.svg';
import { Button } from '../Button';

export function HeroSection() {
  return (
    <Container>
      <main>
        <Content>
          <div>
            <h1>
              Rachi,
              <br /> é tudo que você <br />
              precisa em um só lugar.
            </h1>
          </div>
          <Button label="Cadastrar-se" className="cta" />
        </Content>
        <img src={heroImg} alt="working from anywhere" />
      </main>
    </Container>
  );
}
