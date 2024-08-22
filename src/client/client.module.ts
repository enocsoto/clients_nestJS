import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { Loan } from 'src/loan/entities/loan.entity';
import { LoanModule } from 'src/loan/loan.module';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([Client, Loan]), LoanModule],
  controllers: [ClientController],
  providers: [ClientService],
  exports: [ClientService],
})
export class ClientModule { }
