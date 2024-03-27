import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { GymEntity } from './entities/gym.entity';

@Injectable()
export class GymService {
    constructor(private readonly databaseService: DatabaseService) {}
    async getAllGyms(): Promise<GymEntity[]> {
        return await this.databaseService.gym.findMany();
    }
}
