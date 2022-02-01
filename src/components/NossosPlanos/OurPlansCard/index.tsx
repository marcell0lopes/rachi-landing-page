import { Button } from '../../Button';
import { Card } from './styles';

interface OurPlansProps {
  title: string;
  label?: string;
  value: number;
  description?: string;
}

export function OurPlansCard({
  title,
  value,
  description,
  label,
}: OurPlansProps) {
  return (
    <Card>
      <h5>{title}</h5>
      {label && <button>{label}</button>}

      <h4>
        <small>R$</small>
        {value}
        <small>/mês</small>
      </h4>
      <p>{description}</p>

      <Button label="Assinar" className="cta" />
    </Card>
  );
}
