import { Test, TestingModule } from '@nestjs/testing';
import { CreateAssetController } from './create_asset.controller';

describe('CreateAssetController', () => {
  let controller: CreateAssetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateAssetController],
    }).compile();

    controller = module.get<CreateAssetController>(CreateAssetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
