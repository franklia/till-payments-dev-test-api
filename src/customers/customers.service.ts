import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { readFileSync, writeFileSync } from 'fs';
const path = require('path');

@Injectable()
export class CustomersService {
  create(createCustomerDto: CreateCustomerDto) {
    return 'This action adds a new customer';
  }

  findAll() {
    try {
      let data: object[];
      const customerData = () => {
        data = JSON.parse(readFileSync('./data/mockCustomers.json', 'utf-8'));
        return data;
      };
      customerData();
      console.log('data in service findAll: ', data);
      return data;
    } catch (err) {
      return { Error: err };
    }
  }

  findOne(id: number) {
    try {
      let customerData = JSON.parse(
        readFileSync('./data/mockCustomers.json', 'utf-8'),
      );
      const found = customerData.find((element) => {
        return element.id == id;
      });
      return found;
    } catch (err) {
      return { Error: err };
    }
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
