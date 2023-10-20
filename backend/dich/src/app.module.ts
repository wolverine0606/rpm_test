import { Module } from '@nestjs/common';
import { CreateAssetModule } from './create_asset/create_asset.module';
import { CreateAssetController } from './create_asset/create_asset.controller';
import { CreateAssetService } from './create_asset/create_asset.service';

@Module({
  imports: [CreateAssetModule],
  controllers: [CreateAssetController],
  providers: [CreateAssetService],
})
export class AppModule {}
