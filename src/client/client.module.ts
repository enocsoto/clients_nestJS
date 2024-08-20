import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { Payment } from 'src/payment/entities/payment.entity';
import { Loan } from 'src/loan/entities/loan.entity';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([Client, Payment, Loan])],
  controllers: [ClientController],
  providers: [ClientService],
  exports: [ClientService],
})
export class ClientModule { }
