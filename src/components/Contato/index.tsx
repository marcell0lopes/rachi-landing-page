import { Button } from '../Button';
import { Container, Email } from './styles';

export function Contato() {
  return (
    <Container id="contato">
      <h2>Contato</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia
        mi quis euismod ultrices.
      </p>

      <Email>
        <input type="email" placeholder="Seu melhor e-mail" />
        <Button label="Enviar" className="cta" />
      </Email>
    </Container>
  );
}
