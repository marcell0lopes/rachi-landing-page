import { AppStores } from '../../components/AppStores';
import { ComoFunciona } from '../../components/ComoFunciona';
import { HeroSection } from '../../components/HeroSection';
import { Navbar } from '../../components/Navbar';
import { Container } from './styles';

export function Home() {
  return (
    <Container>
      <Navbar />
      <HeroSection />
      <ComoFunciona />
      <AppStores />
      {/* <NossosPlanos/>
    <Contato/>
    <Footer/> */}
    </Container>
  );
}
