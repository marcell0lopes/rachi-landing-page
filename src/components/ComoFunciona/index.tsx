import { Container, Content } from './styles';
import compartilhamentoImg from '../../assets/compartilhamento.svg';
import conexoesImg from '../../assets/conexoes.svg';
import gratuitoImg from '../../assets/gratuito.svg';

export function ComoFunciona() {
  return (
    <Container>
      <h2>Como Funciona</h2>
      <Content>
        <div>
          <img src={conexoesImg} alt="Usuário"></img>
          <h3>Crie Conexões</h3>
          <p>Lorem ipsum dolor sit amet, consecteteu.</p>
        </div>
        <div>
          <img src={gratuitoImg} alt="Usuário"></img>
          <h3>100% gratuito</h3>
          <p>Lorem ipsum dolor sit amet, consecteteu.</p>
        </div>
        <div>
          <img src={compartilhamentoImg} alt="Usuário"></img>
          <h3>Compartilhamento</h3>
          <p>Lorem ipsum dolor sit amet, consecteteu.</p>
        </div>
      </Content>
    </Container>
  );
}
