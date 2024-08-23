import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/client/entities/client.entity';
import { Repository } from 'typeorm';
import { Payment } from './entities/payment.entity';
import { Loan } from 'src/loan/entities/loan.entity';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
    @InjectRepository(Loan)
    private loansRepository: Repository<Loan>,
  ) { }

  /**
   * Creates a new payment.
   * @param createPaymentDto The data required to create a payment.
   * @returns The created payment entity.
   * @throws NotFoundException If the loan or client does not exist.
   */

  async create(createPaymentDto: CreatePaymentDto) {
    try {
      const loan = await this.loansRepository.findOne({
        where: { payments: createPaymentDto.loan },
        relations: ['loan'],
      });

      if (!loan) {
        throw new NotFoundException(`Loan with ID ${createPaymentDto.loan} not found`);
      }
      const client = await this.clientRepository.findOneBy({ id: loan.client.id });


      if (!client) {
        throw new NotFoundException(`Client with ID ${loan.client.id} not found`);
      }
      const payment = this.paymentRepository.create({
        ...createPaymentDto,
        loan: loan,
      });

      return await this.paymentRepository.save(payment);
    } catch (error) {
      throw new Error(`Error creating payment: ${error.message}`);
    }
  }

  async findAll() {
    try {
      const payments = await this.paymentRepository.find({ relations: ['loan', 'loan.client'] });
      if (!payments) {
        throw new NotFoundException('No payments found');
      }
      return payments;
    } catch (error) {
      throw new Error(`Error fetching payments: ${error.message}`);
    }
  }

  async findOne(id: string) {
    try {
      const payment = await this.paymentRepository.findOne({
        where: { id },
        relations: ['loan', 'loan.client'],
      });
      if (!payment) {
        throw new NotFoundException(`Payment with ID ${id} not found`);
      }
      return payment;
    } catch (error) {
      throw new Error(`Error fetching payment with ID ${id}: ${error.message}`);
    }
  }

  async find(filters: { clientId?: number; loanStatusId?: number }): Promise<Payment[]> {
    try {
      const query = this.paymentRepository.createQueryBuilder('payment');

      if (filters.clientId) {
        query.andWhere('payment.clientId = :clientId', { clientId: filters.clientId });
      }

      if (filters.loanStatusId) {
        query.andWhere('payment.loanStatusId = :loanStatusId', { loanStatusId: filters.loanStatusId });
      }

      return await query.getMany();
    } catch (error) {
      throw new Error(`Error searching payments: ${error.message}`);
    }
  }

  async update(id: string, updatePaymentDto: UpdatePaymentDto) {
    try {
      const payment = await this.findOne(id);
      Object.assign(payment, updatePaymentDto);
      await this.paymentRepository.save(payment);
      return payment;
    } catch (error) {
      throw new Error(`Error updating payment with ID ${id}: ${error.message}`);
    }
  }

  async remove(id: string) {
    try {
      const result = await this.paymentRepository.delete(id);
      if (result.affected === 0) {
        throw new NotFoundException(`Payment with ID ${id} not found`);
      }
    } catch (error) {
      throw new Error(`Error deleting payment with ID ${id}: ${error.message}`);
    }

  }
}
