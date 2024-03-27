import { Module } from '@nestjs/common';
import { GymService } from './gym.service';
import { GymResolver } from './gym.resolver';
import { DatabaseService } from 'src/database/database.service';

@Module({
  providers: [GymService, GymResolver],
  imports:[DatabaseService],
})
export class GymModule {}
