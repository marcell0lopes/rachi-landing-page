import { Container, Content } from './styles';
import appStoreImg from '../../assets/appstore.svg';
import googlePlayImg from '../../assets/googleplay.svg';
import socialMediaImg from '../../assets/socialmedia-guy.svg';

export function AppStores() {
  return (
    <Container id="app">
      <Content>
        <h2>Baixe nosso app para desfrutar mais!</h2>
        <p>
          Amet in elementum nulla scelerisque dui, egestas at. Elit consectetur
          turpis elementum amet vitae et etiam nec. Varius volutpat hac
          adipiscing tincidunt pretium.
        </p>
        <div>
          <a
            href="https://github.com/marcell0lopes/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={googlePlayImg} alt="download on google play" />
          </a>
          <a
            href="https://github.com/marcell0lopes/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={appStoreImg} alt="download on apple app store" />
          </a>
        </div>
      </Content>
      <img
        src={socialMediaImg}
        alt="Guy sitting with his phone on social media"
      />
    </Container>
  );
}
