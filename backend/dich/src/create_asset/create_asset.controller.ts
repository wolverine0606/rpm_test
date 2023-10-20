import { Controller, Post, Body } from '@nestjs/common';
import { CreateAssetService } from './create_asset.service';
import { CreateOutfitDto } from 'src/dtos';

@Controller('id')
export class CreateAssetController {
    constructor(private createAssetService: CreateAssetService){}

    @Post('create_outfit') 
    async createUserId(@Body() createOutfitDto: CreateOutfitDto) {
        const responseData = await this.createAssetService.Unlock_equip(createOutfitDto);
        return responseData
    }
}