import { ParseIntPipe } from '@nestjs/common';
import { Args, Query, Resolver, ResolveReference } from '@nestjs/graphql';
import { User } from 'src/entities/user.entity';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private userSrv: UserService) {}

  @Query(() => User)
  getUser(@Args('id') id: number): User {
    return this.userSrv.findById(id);
  }

  @Query(() => [User])
  getUsers(): User[] {
    return this.userSrv.findAll();
  }

  @Query(() => User)
  getUserByIdAndName(
    @Args('id', ParseIntPipe) id: number,
    @Args('name') name: string,
  ) {
    return this.userSrv.findUserByIdAndName(id, name);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: number }): User {
    return this.userSrv.findById(reference.id);
  }
}
