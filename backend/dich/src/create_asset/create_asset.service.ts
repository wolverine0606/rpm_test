import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CreateOutfitDto } from 'src/dtos/user_rpm.dto';

@Injectable()
export class CreateAssetService {
    //constructor(private prisma: PrismaService){}

    async Unlock_equip(
        user_data: CreateOutfitDto
    ){
        const assetid = "173962947"
        const user_id = user_data.userId
        const avatarId = user_data.avatarUrl.slice(30, -4)
        const unlock_url = 'https://api.readyplayer.me/v1/assets/'+assetid+'/unlock';
        const equip_url = 'https://api.readyplayer.me/v1/avatars/'+avatarId+'/equip';
    
    
        const unlock_data = {
            "data":{
                "userId": user_id
            }
        }
        const equip_data = {
            "data":{
                "assetId": assetid
            }
        }
        const config = {
            headers: {
                'x-api-key': 'sk_live_k1htXZdQVxExAgaMsOrqWBIXRVZSWlhdtyQZ',
                //'x-api-key': 'sk_live_7b0xbPnxqQ7s_MWwvoXxHYDIHyv4Zl96FzqL' //muuvr  
            }
        }
    
        const unlock_asset = await axios.put(unlock_url, unlock_data, config).catch((error) => console.log(error))
        // const user = await this.prisma.user.create({
        //     data:{
        //         rpm_id: user_id,
        //         isUnlocked: true,
        //     },
        // })
    
        const equip_user = await axios.put(equip_url, equip_data, config).catch((error) => console.log(error))
        // const avatar = await this.prisma.avatar.create({
        //     data:{
        //         avatar: avatarId,
        //         isEquiped: true,
        //         userId: user_id
        //     },
        // })
        
    }
}
