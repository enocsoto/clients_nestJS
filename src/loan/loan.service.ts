import { Injectable } from '@nestjs/common';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Loan } from './entities/loan.entity';

@Injectable()
export class LoanService {

  constructor(
    @InjectRepository(Loan)
    private readonly loansRepository: Repository<Loan>,
  ) { }
  create(createLoanDto: CreateLoanDto) {
    return 'This action adds a new loan';
  }

  findAll() {
    return `This action returns all loan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} loan`;
  }

  async update(id: string, updateLoanDto: UpdateLoanDto) {
    const loans: Loan = await this.loansRepository.findOne({ where: { id } })

    if (!loans) {
      throw new Error(`Loan with ID ${id} not found`);
    }
    await this.loansRepository.update(id, updateLoanDto);
    return loans;

  }
  remove(id: number) {
    return `This action removes a #${id} loan`;
  }
}
