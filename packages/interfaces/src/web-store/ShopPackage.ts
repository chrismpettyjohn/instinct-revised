import {Rank} from '../rank';

export interface ShopPackage {
  id: number;
  title: string;
  icon: string;
  description: string;
  content: string;
  rank: Rank;
}
