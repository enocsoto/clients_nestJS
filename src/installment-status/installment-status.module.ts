import { Module } from '@nestjs/common';
import { InstallmentStatusService } from './installment-status.service';
import { InstallmentStatusController } from './installment-status.controller';

@Module({
  controllers: [InstallmentStatusController],
  providers: [InstallmentStatusService],
})
export class InstallmentStatusModule {}
