import { Injectable } from '@nestjs/common';
import { CreateInstallmentStatusDto } from './dto/create-installment-status.dto';
import { UpdateInstallmentStatusDto } from './dto/update-installment-status.dto';

@Injectable()
export class InstallmentStatusService {
  create(createInstallmentStatusDto: CreateInstallmentStatusDto) {
    return 'This action adds a new installmentStatus';
  }

  findAll() {
    return `This action returns all installmentStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} installmentStatus`;
  }

  update(id: number, updateInstallmentStatusDto: UpdateInstallmentStatusDto) {
    return `This action updates a #${id} installmentStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} installmentStatus`;
  }
}
