import { ReactNode } from 'react';
export interface BaseErrorProps {
    header: ReactNode;
    children: ReactNode;
}
export declare function BaseError({ children, header }: BaseErrorProps): JSX.Element;
