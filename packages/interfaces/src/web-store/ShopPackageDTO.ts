export interface NewShopPackageDTO {
  title: string;
  icon: string;
  description: string;
  content: string;
  rankID: number;
}

export type UpdateShopPackageDTO = Partial<NewShopPackageDTO>;
