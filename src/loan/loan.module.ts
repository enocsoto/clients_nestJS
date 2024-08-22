import { Module } from '@nestjs/common';
import { LoanService } from './loan.service';
import { LoanController } from './loan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Loan } from './entities/loan.entity';
import { Client } from 'src/client/entities/client.entity';
import { ConfigModule } from '@nestjs/config';
import { Payment } from 'src/payment/entities/payment.entity';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([Loan, Client, Payment])],
  controllers: [LoanController],
  providers: [LoanService],
  exports: [LoanService, TypeOrmModule],
})
export class LoanModule { }
