import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';
import { Loan } from 'src/loan/entities/loan.entity';
import { LoanService } from 'src/loan/loan.service';

@Injectable()
export class ClientService {

  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,

    @InjectRepository(Loan)
    private readonly loanRepository: Repository<Loan>,
    @Inject(LoanService) private loanService: LoanService,
  ) { }
  async create(createClientDto: CreateClientDto): Promise<Client> {
    try {
      let loans = [];
      const savedClient = this.clientRepository.create(createClientDto);
      await this.clientRepository.save(savedClient);

      if (createClientDto.loans.length > 0) {
        loans = createClientDto.loans?.map(loan => {
          return {
            ...loan,
            loanDate: new Date(loan.loanDate),
            client: savedClient.id
          }
        })
        const saveloans = this.loanRepository.create(loans)
        await this.loanRepository.save(saveloans)
      }
      return savedClient;
    } catch (error) {
      throw new BadRequestException(`Failed to create client ${error.message}`);
    }
  }

  async findAll(): Promise<Client[]> {
    try {
      const clients = await this.clientRepository.find({ relations: ['loans'] });
      if (!clients) {
        throw new NotFoundException('No clients found');
      }
      return clients;
    } catch (error) {
      throw new BadRequestException(`Error fetching clients: ${error.message}`);
    }
  }

  async findOneByDocument(document: number): Promise<Client> {
    try {
      const client: Client = await this.clientRepository.findOne({ where: { document }, relations: ['loans'] });
      if (!client) {
        throw new NotFoundException(`Client with Document ${document} not found`);
      }
      return client;
    } catch (error) {
      throw new BadRequestException(`Error fetching client with ID ${document}: ${error.message}`);
    }
  }


  async update(document: number, updateClientDto: UpdateClientDto): Promise<Client> {
    try {
      const client: Client = await this.findOneByDocument(document);
      if (updateClientDto.loans?.length > 0) {
        // Retrieve existing loans for the client
        const existingLoans = await this.loanRepository.find({ where: { client: { id: client.id } } });

        const loansToSave = [];
        for (const newLoan of updateClientDto.loans) {
          // Check if a loan with the same amount and loanDate already exists
          const duplicateLoan = existingLoans.find(
            loan =>
              loan.amount === newLoan.amount &&
              loan.loanDate.getTime() === new Date(newLoan.loanDate).getTime()
          );
          if (!duplicateLoan) {
            loansToSave.push({
              ...newLoan,
              loanDate: new Date(newLoan.loanDate),
              client: client, // Maintain the client relationship
            });
          }
        }

        if (loansToSave.length > 0) {
          const newLoans = this.loanRepository.create(loansToSave);
          await this.loanRepository.save(newLoans);
        }
      }
      await this.clientRepository.update(client.id, {
        ...updateClientDto,
        loans: undefined
      })
      return await this.clientRepository.findOne({ where: { id: client.id }, relations: ['loans'] });

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
