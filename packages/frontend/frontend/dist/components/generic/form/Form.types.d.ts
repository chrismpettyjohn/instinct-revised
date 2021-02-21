import { Children } from '../../';
export interface FormProps {
    className?: string;
    children: Children;
    disabled?: boolean;
    onSubmit?: () => void;
}
