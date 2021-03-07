import { Test, TestingModule } from '@nestjs/testing';
import { CustomersService } from './customers.service';

describe('CustomersService', () => {
  let service: CustomersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomersService],
    }).compile();

    service = module.get<CustomersService>(CustomersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // I didn't get time to finish all test, but here is a summary of some basic tests

  describe('findAll', () => {
    // Should be testing the try / catch both succeeding and failing
    // If there result should never be empty, then you should test that too
  });

  describe('findOne', () => {
    // Should be testing the try / catch both succeeding and failing
    // Should test that only one result was returned
  });

  describe('update', () => {
    // Should be testing the try / catch both succeeding and failing
    // Should test that the original data has been changed to the new data
  });

  describe('delete', () => {
    // Should be testing the try / catch both succeeding and failing
    // Should compare the original data to the subsequent data to make sure delete occurred
  });
});
