import {Children} from '../../../';

export interface ModalOverlayProps {
  children: Children;
  header?: string;
  isOpen: boolean;
  onToggle?: () => void;
}
