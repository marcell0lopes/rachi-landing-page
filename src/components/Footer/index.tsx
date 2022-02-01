import { FooterDiv, FooterLinks } from './styles';

export function Footer() {
  return (
    <FooterDiv>
      <p>Rachi - Todos os direitos reservados.</p>
      <FooterLinks>
        <li>
          Made with <span>&#9829;</span> by{' '}
          <a
            href="https://twitter.com/marcell0lopes"
            target="_blank"
            rel="noreferrer"
          >
            @marcell0lopes
          </a>{' '}
        </li>
        <li>
          <a
            href="https://github.com/marcell0lopes"
            target="_blank"
            rel="noreferrer"
          >
            My Github
          </a>{' '}
        </li>
        <li>
          <a
            href="https://linkedin.com/in/marcellolopes30"
            target="_blank"
            rel="noreferrer"
          >
            My Linkedin
          </a>{' '}
        </li>
      </FooterLinks>
    </FooterDiv>
  );
}
