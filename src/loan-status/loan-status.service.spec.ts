import { Test, TestingModule } from '@nestjs/testing';
import { LoanStatusService } from './loan-status.service';

describe('LoanStatusService', () => {
  let service: LoanStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoanStatusService],
    }).compile();

    service = module.get<LoanStatusService>(LoanStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
