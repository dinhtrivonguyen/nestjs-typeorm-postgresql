import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompaniesController } from './companies.controller';
import { CompaniesService } from './companies.service';
import { Company } from './company.entity';
//import { Connection, ConnectionOptions } from 'typeorm';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([Company])
  ],
  //controllers: [CompaniesController],
  //providers: [CompaniesService],
  exports: [CompaniesService],
})
export class CompaniesModule {}

/* export type TypeOrmModuleOptions = {
  retryAttempts?: number;
  retryDelay?: number;
  toRetry?: (err: any) => boolean;
  autoLoadEntities?: boolean;
  keepConnectionAlive?: boolean;
  verboseRetryLog?: boolean;
} & Partial<ConnectionOptions>;

export interface TypeOrmOptionsFactory {
  createTypeOrmOptions(
    connectionName?: string,
  ): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions;
}
export type TypeOrmConnectionFactory = (
  options?: ConnectionOptions,
) => Promise<Connection>;
*/