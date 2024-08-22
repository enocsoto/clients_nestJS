import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateLoanDto } from './dto/create-loan.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Loan } from './entities/loan.entity';
import { Client } from 'src/client/entities/client.entity';

@Injectable()
export class LoanService {

  constructor(
    @InjectRepository(Loan)
    private readonly loansRepository: Repository<Loan>,
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) { }

  async create(createLoanDto: CreateLoanDto) {
    try {

      const client = await this.clientRepository.findOne({ where: { document: createLoanDto.document } });
      if (!client) throw new BadRequestException(`Client not found`);
      const loan = this.loansRepository.create({
        ...createLoanDto,
        client,
      });
      return await this.loansRepository.save(loan);
    } catch (error) {
      throw new BadRequestException(`Failed to create loan: ${error.message}`);
    }
  }

  async findAll() {
    try {
      return await this.loansRepository.find({ relations: ['client', 'payments'] });
    } catch (error) {
      throw new Error(`Failed to fetch loans: ${error.message}`);
    }
  }

}
