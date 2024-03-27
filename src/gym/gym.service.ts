import { Injectable } from '@nestjs/common';
import { GymEntity } from 'src/entities/gym.entity';

@Injectable()
export class GymService {

    async getAllGyms(): Promise<GymEntity> {
        return await
    }
}
