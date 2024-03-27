import { Module } from '@nestjs/common';
import { GymModule } from './gym/gym.module';

@Module({
  imports: [GymModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
