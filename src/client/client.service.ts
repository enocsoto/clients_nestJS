import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';
import { Payment } from 'src/payment/entities/payment.entity';
import { Loan } from 'src/loan/entities/loan.entity';

@Injectable()
export class ClientService {

  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
    @InjectRepository(Loan)
    private readonly loanRepository: Repository<Loan>,
  ) { }
  async create(createClientDto: CreateClientDto): Promise<Client> {
    try {
      const savedClient = this.clientRepository.create(createClientDto);

      await this.clientRepository.save(savedClient);

      return savedClient;
    } catch (error) {
      throw new BadRequestException(`Failed to create client ${error.message}`);
    }
  }

  async findAll(): Promise<Client[]> {
    try {
      const clients = await this.clientRepository.find({ relations: ['payments'] });
      if (!clients) {
        throw new NotFoundException('No clients found');
      }
      return clients;
    } catch (error) {
      throw new BadRequestException(`Error fetching clients: ${error.message}`);
    }
  }

  async findOneByDocument(document: number): Promise<Client[]> {
    try {
      const client: Client[] = await this.clientRepository.find({ where: { document }, relations: ['payments'] });
      if (!client) {
        throw new NotFoundException(`Client with Document ${document} not found`);
      }
      return client;
    } catch (error) {
      throw new BadRequestException(`Error fetching client with ID ${document}: ${error.message}`);
    }
  }


  async update(document: number, updateClientDto: UpdateClientDto): Promise<Client[]> {
    try {
      const client = await this.findOneByDocument(document);
      await this.clientRepository.update(document, updateClientDto);
      return client;
    } catch (error) {
      throw new BadRequestException(`Error updating client with ID ${document}: ${error.message}`);
    }
  }

  async remove(id: string): Promise<string> {
    try {
      const result = await this.clientRepository.delete(id);
      if (result.affected === 0) {
        throw new NotFoundException(`Client with ID ${id} not found`);
      }
      return `Client with ID ${id} deleted successfully`;
    } catch (error) {
      throw new Error(`Error deleting client with ID ${id}: ${error.message}`);
    }
  }
}
