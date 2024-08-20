import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

ConfigModule.forRoot({
  envFilePath: '.env',
})
const configService = new ConfigService()
const entitiesPath = __dirname + '/../**/*.entity{.ts,.js}';
const migrationsPath = __dirname + '/../migrations/*{.ts,.js}';
export const dataSourceConfig: DataSourceOptions = {
  type: 'postgres',
  host: configService.get('DB_HOST'),
  port: +configService.get('DB_PORT'),
  username: configService.get('DB_USER'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_DATABASE'),
  entities: [
    entitiesPath
  ],
  migrations: [
    migrationsPath
  ],
  synchronize: false,
  logging: true,
  namingStrategy: new SnakeNamingStrategy(),
}
console.log('Entities path:', entitiesPath);
console.log('Migrations path:', migrationsPath);
export const AppDS = new DataSource(dataSourceConfig);