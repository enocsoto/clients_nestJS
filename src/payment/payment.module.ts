import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from 'src/client/entities/client.entity';
import { Payment } from './entities/payment.entity';
import { Loan } from 'src/loan/entities/loan.entity';

@Module({
  controllers: [PaymentController],
  providers: [PaymentService],
  exports: [PaymentService],
  imports: [TypeOrmModule.forFeature([Client, Payment, Loan])]
})
export class PaymentModule { }
