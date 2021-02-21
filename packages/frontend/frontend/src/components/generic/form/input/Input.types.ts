export type InputType = 'password' | 'text' | 'number' | 'email';

export interface InputProps {
  type: InputType;
  placeholder?: string;
  value?: string | number;
  name: string;
  className?: string;
  onChange?: (field: any, value: any) => void;
}
