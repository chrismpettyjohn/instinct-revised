import {Module} from '@nestjs/common';
import {WebStoreService} from './web-store.service';
import {DatabaseModule} from '@instinct-api/database';
import {WebStoreController} from './web-store.controller';
import {WebStorePackagesController} from './packages.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [WebStoreController, WebStorePackagesController],
  providers: [WebStoreService],
  exports: [WebStoreService],
})
export class WebStoreModule {}
