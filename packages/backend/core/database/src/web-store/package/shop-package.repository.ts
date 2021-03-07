import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../../base.repository';
import {ShopPackageEntity} from './shop-package.entity';

@Injectable()
export class ShopPackageRepository extends BaseRepository<ShopPackageEntity> {
  constructor(
    @InjectRepository(ShopPackageEntity)
    shopPackageRepo: Repository<ShopPackageEntity>
  ) {
    super(shopPackageRepo, ['rank']);
  }
}
