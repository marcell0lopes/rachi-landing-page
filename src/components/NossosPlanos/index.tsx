import { OurPlansCard } from './OurPlansCard';
import { Container } from './styles';

export function NossosPlanos() {
  return (
    <Container id="planos">
      <h2>Nossos Planos</h2>
      <h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia
        mi quis euismod ultrices.
      </h3>

      <div id="card-container">
        <OurPlansCard
          title="Bronze"
          value={28}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia
        mi quis euismod ultrices."
        />
        <OurPlansCard
          title="Prata"
          label="preferido"
          value={57}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia
        mi quis euismod ultrices."
        />
        <OurPlansCard
          title="Ouro"
          value={94}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia
        mi quis euismod ultrices."
        />
      </div>
    </Container>
  );
}
