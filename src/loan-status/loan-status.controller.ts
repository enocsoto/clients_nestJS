import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoanStatusService } from './loan-status.service';
import { CreateLoanStatusDto } from './dto/create-loan-status.dto';
import { UpdateLoanStatusDto } from './dto/update-loan-status.dto';

@Controller('loan-status')
export class LoanStatusController {
  constructor(private readonly loanStatusService: LoanStatusService) {}

  @Post()
  create(@Body() createLoanStatusDto: CreateLoanStatusDto) {
    return this.loanStatusService.create(createLoanStatusDto);
  }

  @Get()
  findAll() {
    return this.loanStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loanStatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoanStatusDto: UpdateLoanStatusDto) {
    return this.loanStatusService.update(+id, updateLoanStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loanStatusService.remove(+id);
  }
}
