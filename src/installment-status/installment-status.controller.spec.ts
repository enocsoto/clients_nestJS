import { Test, TestingModule } from '@nestjs/testing';
import { InstallmentStatusController } from './installment-status.controller';
import { InstallmentStatusService } from './installment-status.service';

describe('InstallmentStatusController', () => {
  let controller: InstallmentStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstallmentStatusController],
      providers: [InstallmentStatusService],
    }).compile();

    controller = module.get<InstallmentStatusController>(InstallmentStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
