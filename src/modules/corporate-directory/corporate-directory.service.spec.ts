import { Test, TestingModule } from '@nestjs/testing';
import { CorporateDirectoryService } from './corporate-directory.service';

describe('CorporateDirectoryService', () => {
  let service: CorporateDirectoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CorporateDirectoryService],
    }).compile();

    service = module.get<CorporateDirectoryService>(CorporateDirectoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
