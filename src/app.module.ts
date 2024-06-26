import { Module } from '@nestjs/common';
import { GymModule } from './gym/gym.module';
import { DatabaseModule } from './database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [GraphQLModule.forRoot({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  }),  
  GymModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
