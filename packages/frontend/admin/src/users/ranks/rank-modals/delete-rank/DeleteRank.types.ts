import {ReactNode} from 'react';

export interface DeleteRankModalProps {
  rankID: number;
  rankName: string;
  onDeletion(): void;
  children: ReactNode;
}
