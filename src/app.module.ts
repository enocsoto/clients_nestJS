import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientModule } from './client/client.module';
import database_config from './config/database_config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceConfig } from './config/data.source';
import { PaymentModule } from './payment/payment.module';
import { InstallmentModule } from './installment/installment.module';
import { InstallmentStatusModule } from './installment-status/installment-status.module';
import { LoanModule } from './loan/loan.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [database_config],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({ ...dataSourceConfig }),
    ClientModule,
    PaymentModule,
    InstallmentModule,
    InstallmentStatusModule,
    LoanModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
