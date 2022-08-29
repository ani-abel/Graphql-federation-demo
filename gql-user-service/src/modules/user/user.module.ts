import { Module } from '@nestjs/common';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: true,
    }),
  ],
  providers: [UserResolver, UserService],
})
export class UserModule {}
