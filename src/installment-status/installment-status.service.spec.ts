import { Test, TestingModule } from '@nestjs/testing';
import { InstallmentStatusService } from './installment-status.service';

describe('InstallmentStatusService', () => {
  let service: InstallmentStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstallmentStatusService],
    }).compile();

    service = module.get<InstallmentStatusService>(InstallmentStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
