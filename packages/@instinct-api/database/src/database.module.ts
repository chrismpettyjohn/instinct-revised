import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {CommonModule} from '@instinct-api/common';
import {databaseEntities, databaseRepositories} from './database.meta';
import {
  databaseHost,
  databaseName,
  databasePass,
  databaseUser,
} from '@instinct-api/common';

@Module({
  imports: [
    CommonModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: databaseHost,
      username: databaseUser,
      password: databasePass,
      database: databaseName,
      entities: databaseEntities,
      synchronize: false,
    }),
    TypeOrmModule.forFeature(databaseEntities),
  ],
  providers: [...databaseRepositories],
  exports: [TypeOrmModule, ...databaseRepositories],
})
export class DatabaseModule {}
