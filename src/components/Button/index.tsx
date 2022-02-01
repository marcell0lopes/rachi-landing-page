import { StyleBtn } from './styles';

interface ButtonProps {
  label: string;
  className?: string;
}

export function Button({ label, className }: ButtonProps) {
  return <StyleBtn className={className}>{label}</StyleBtn>;
}
