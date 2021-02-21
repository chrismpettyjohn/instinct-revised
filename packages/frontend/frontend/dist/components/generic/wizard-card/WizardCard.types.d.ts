import { Children } from '../../common.types';
export interface WizardStep {
    text: Children;
    children: Children;
}
export interface WizardCardProps {
    steps: WizardStep[];
    header?: Children;
    onSubmit(): void;
}
