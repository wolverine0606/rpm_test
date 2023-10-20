import { Controller, Post, Body } from '@nestjs/common';
import { CreateAssetService } from './create_asset.service';
import { CreateOutfitDto } from 'src/dtos/user_rpm.dto';

@Controller('id')
export class CreateAssetController {
    constructor(private createAssetService: CreateAssetService){}

    @Post('create_outfit') 
    async createUserId(@Body() createOutfitDto: CreateOutfitDto) {
        console.log(createOutfitDto)
        const responseData = await this.createAssetService.Unlock_equip(createOutfitDto);
        return responseData
    }
}