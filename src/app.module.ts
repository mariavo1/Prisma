import { Module } from '@nestjs/common';
import { GymModule } from './gym/gym.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [GymModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
