import { Controller, Get, Post, Body } from '@nestjs/common';
import { LoanService } from './loan.service';
import { CreateLoanDto } from './dto/create-loan.dto';

@Controller('loan')
export class LoanController {
  constructor(private readonly loanService: LoanService) { }

  @Post()
  create(@Body() createLoanDto: CreateLoanDto) {
    return this.loanService.create(createLoanDto);
  }

  @Get()
  findAll() {
    return this.loanService.findAll();
  }

}
