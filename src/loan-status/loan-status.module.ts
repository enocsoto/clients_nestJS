import { Module } from '@nestjs/common';
import { LoanStatusService } from './loan-status.service';
import { LoanStatusController } from './loan-status.controller';

@Module({
  controllers: [LoanStatusController],
  providers: [LoanStatusService],
})
export class LoanStatusModule {}
