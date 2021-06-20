import {Rank} from '@instinct-prj/interface';

export interface EditRankModalProps {
  rank: Rank;
  onChanges(): void;
}
