import { Test, TestingModule } from '@nestjs/testing';
import { CorporateDirectoryController } from './corporate-directory.controller';
import { CorporateDirectoryService } from './corporate-directory.service';

describe('CorporateDirectoryController', () => {
  let controller: CorporateDirectoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CorporateDirectoryController],
      providers: [CorporateDirectoryService],
    }).compile();

    controller = module.get<CorporateDirectoryController>(CorporateDirectoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
