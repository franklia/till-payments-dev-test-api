import { Test, TestingModule } from '@nestjs/testing';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';

describe('CustomersController', () => {
  let controller: CustomersController;
  let service: CustomersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomersController],
      providers: [CustomersService],
    }).compile();

    controller = module.get<CustomersController>(CustomersController);
    service = module.get<CustomersService>(CustomersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // This test is similar to what can be seen in NestJS documentation, however this
  // seems a bit flawed because we are comparing a mock to a mock without running it via any
  // other code. I'm think you you might simply write unit tests for the services
  // and use Cypress testing for everything else.
  describe('findAll', () => {
    it('should return an array of customers', async () => {
      const result = [{ id: '001', merchantId: '001', name: 'Alfred Jones' }];
      jest.spyOn(service, 'findAll').mockImplementation(() => result);
      const call = controller.findAll();
      expect(call).toBe(result);
    });
  });
});
