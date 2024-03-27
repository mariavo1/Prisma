import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { GymEntity } from './entities/gym.entity';
import { CreateGymDto } from './entities/dtos/create-gym.dto'

@Injectable()
export class GymService {
    constructor(private readonly databaseService: DatabaseService) {}
    async getAllGyms(): Promise<GymEntity[]> {
        return await this.databaseService.gym.findMany();
    }

    async createGym(gym : CreateGymDto): Promise<GymEntity> {
        return await this.databaseService.gym.create({
            data: {
                ...gym,
            },
        });
    }
}
