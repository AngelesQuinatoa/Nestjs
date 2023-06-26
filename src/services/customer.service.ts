import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerDto } from 'src/product/dto/customer.dto';
import { CustomerEntity } from 'src/product/entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerEntity)
    private readonly customerRepository: Repository<CustomerEntity>,
  ) {}

  async createCustomer(customerDto: CustomerDto): Promise<CustomerEntity> {
    const customer = this.customerRepository.create(customerDto);
    return await this.customerRepository.save(customer);
  }

  async findAllCustomers(): Promise<CustomerEntity[]> {
    return await this.customerRepository.find();
  }

  async findCustomerById(id: string): Promise<CustomerEntity> {
    return await this.customerRepository.findOne(id);
  }

  async updateCustomer(id: string, customerDto: CustomerDto): Promise<CustomerEntity> {
    await this.customerRepository.update(id, customerDto);
    return await this.customerRepository.findOne(id);
  }

  async deleteCustomer(id: string): Promise<void> {
    await this.customerRepository.delete(id);
  }
}
