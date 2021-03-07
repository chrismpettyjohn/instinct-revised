import {rankWire} from '../../rank/rank.wire';
import {ShopPackage} from '@instinct-prj/interface';
import {ShopPackageEntity} from './shop-package.entity';

export function shopPackageWire(entity: ShopPackageEntity): ShopPackage {
  return {
    id: entity.id!,
    title: entity.title,
    icon: entity.icon,
    description: entity.description,
    content: entity.content,
    rank: rankWire(entity.rank!),
  };
}
