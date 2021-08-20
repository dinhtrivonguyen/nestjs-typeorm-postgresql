import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  username: 'postgres',
  password: 'dinhtri',
  port: 5432,
  host: 'localhost',
  database: 'fullstack_db',
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
};
