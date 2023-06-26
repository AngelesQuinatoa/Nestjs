import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCustomerDto } from 'src/product/dto/create-customer.dto';
import { CustomerEntity } from 'src/product/entities/customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerEntity)
    private readonly customerRepository: Repository<CustomerEntity>,
  ) {}

  async createCustomer(createCustomerDto: CreateCustomerDto): Promise<CustomerEntity> {
    const customer = this.customerRepository.create(createCustomerDto);
    return this.customerRepository.save(customer);
  }

  async getAllCustomers(): Promise<CustomerEntity[]> {
    return this.customerRepository.find();
  }

  async getCustomerById(id: string): Promise<CustomerEntity> {
    return this.customerRepository.findOne(id);
  }

  async updateCustomer(id: string, updateCustomerDto: CreateCustomerDto): Promise<CustomerEntity> {
    await this.customerRepository.update(id, updateCustomerDto);
    return this.customerRepository.findOne(id);
  }

  async deleteCustomer(id: string): Promise<void> {
    await this.customerRepository.delete(id);
  }
}
