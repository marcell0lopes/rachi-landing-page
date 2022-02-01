import { AppStores } from '../../components/AppStores';
import { ComoFunciona } from '../../components/ComoFunciona';
import { Footer } from '../../components/Footer';
import { HeroSection } from '../../components/HeroSection';
import { Navbar } from '../../components/Navbar';
import { NossosPlanos } from '../../components/NossosPlanos';
import { Contato } from '../../components/Contato';
import { Container } from './styles';

export function Home() {
  return (
    <Container>
      <Navbar />
      <HeroSection />
      <ComoFunciona />
      <AppStores />
      <NossosPlanos />
      <Contato />
      <Footer />
    </Container>
  );
}
