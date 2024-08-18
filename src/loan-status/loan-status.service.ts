import { Injectable } from '@nestjs/common';
import { CreateLoanStatusDto } from './dto/create-loan-status.dto';
import { UpdateLoanStatusDto } from './dto/update-loan-status.dto';

@Injectable()
export class LoanStatusService {
  create(createLoanStatusDto: CreateLoanStatusDto) {
    return 'This action adds a new loanStatus';
  }

  findAll() {
    return `This action returns all loanStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} loanStatus`;
  }

  update(id: number, updateLoanStatusDto: UpdateLoanStatusDto) {
    return `This action updates a #${id} loanStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} loanStatus`;
  }
}
