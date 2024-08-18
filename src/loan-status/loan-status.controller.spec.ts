import { Test, TestingModule } from '@nestjs/testing';
import { LoanStatusController } from './loan-status.controller';
import { LoanStatusService } from './loan-status.service';

describe('LoanStatusController', () => {
  let controller: LoanStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoanStatusController],
      providers: [LoanStatusService],
    }).compile();

    controller = module.get<LoanStatusController>(LoanStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
