import { Module } from '@nestjs/common';
import { InstallmentService } from './installment.service';
import { InstallmentController } from './installment.controller';

@Module({
  controllers: [InstallmentController],
  providers: [InstallmentService],
})
export class InstallmentModule {}
