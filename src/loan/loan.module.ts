import { Module } from '@nestjs/common';
import { LoanService } from './loan.service';
import { LoanController } from './loan.controller';

@Module({
  controllers: [LoanController],
  providers: [LoanService],
  exports: [LoanService],
})
export class LoanModule { }
