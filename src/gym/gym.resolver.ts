import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GymEntity } from './entities/gym.entity';
import { GymService } from './gym.service';
import { CreateGymDto } from './entities/dtos/create-gym.dto';

@Resolver(() => GymEntity)
export class GymResolver {
    constructor(private readonly gymService: GymService) {}
    @Query(() => [GymEntity])
    async getAllGyms(): Promise<GymEntity[]> {
        return await this.gymService.getAllGyms();
    }

    @Mutation(() => GymEntity)
    async createGym(@Args('gym') gym: CreateGymDto): Promise<GymEntity> {
    return await this.gymService.createGym(gym);
    }

}