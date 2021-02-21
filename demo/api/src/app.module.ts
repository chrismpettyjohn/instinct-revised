import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {InstinctModule} from '@instinct-prj/backend';
import {
  databaseEntities,
  databaseHost,
  databaseName,
  databasePass,
  databaseUser,
} from '@instinct-prj/backend';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: databaseHost,
      username: databaseUser,
      password: databasePass,
      database: databaseName,
      entities: [...databaseEntities],
      synchronize: false,
    }),
    InstinctModule,
  ],
})
export class InstinctRoleplayAppModule {}
