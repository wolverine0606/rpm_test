import { Module } from '@nestjs/common';
import { CreateAssetController } from './create_asset.controller';
import { CreateAssetService } from './create_asset.service';

@Module({
  controllers: [CreateAssetController],
  providers: [CreateAssetService]
})
export class CreateAssetModule {}
