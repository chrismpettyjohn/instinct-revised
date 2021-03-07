import {HasSession} from '@instinct-api/session';
import {Controller, Get, Delete, Patch, Post} from '@nestjs/common';
import {ShopPackage} from '@instinct-prj/interface';
import {ShopPackageRepository, shopPackageWire} from '@instinct-api/database';

@Controller('web-store/packages')
@HasSession()
export class WebStorePackagesController {
  constructor(private readonly shopPackageRepo: ShopPackageRepository) {}

  @Get()
  async getAllPackages(): Promise<ShopPackage[]> {
    const packages = await this.shopPackageRepo.find({}, {id: 'ASC'});
    return packages.map(_ => shopPackageWire(_));
  }
}
