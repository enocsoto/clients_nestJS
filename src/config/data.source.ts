import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

ConfigModule.forRoot({
  envFilePath: '.env',
})
const configService = new ConfigService()
export const dataSourceConfig: DataSourceOptions = {
  type: 'postgres',
  host: configService.get('DB_HOST'),
  port: +configService.get('DB_PORT'),
  username: configService.get('DB_USER'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_DATABASE'),
  entities: [
    __dirname + '/../**/**/*.entity{.ts,.js}',
  ],
  migrations: [
    __dirname + '/../migrations/*{.ts,.js}',
  ],
  synchronize: true,
  logging: true,
  namingStrategy: new SnakeNamingStrategy(),
}

export const AppDS = new DataSource(dataSourceConfig);