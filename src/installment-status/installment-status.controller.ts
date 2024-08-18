import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InstallmentStatusService } from './installment-status.service';
import { CreateInstallmentStatusDto } from './dto/create-installment-status.dto';
import { UpdateInstallmentStatusDto } from './dto/update-installment-status.dto';

@Controller('installment-status')
export class InstallmentStatusController {
  constructor(private readonly installmentStatusService: InstallmentStatusService) {}

  @Post()
  create(@Body() createInstallmentStatusDto: CreateInstallmentStatusDto) {
    return this.installmentStatusService.create(createInstallmentStatusDto);
  }

  @Get()
  findAll() {
    return this.installmentStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.installmentStatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInstallmentStatusDto: UpdateInstallmentStatusDto) {
    return this.installmentStatusService.update(+id, updateInstallmentStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.installmentStatusService.remove(+id);
  }
}
