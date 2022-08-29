import {
  Args,
  Info,
  Parent,
  Query,
  ResolveField,
  Resolver,
  ResolveReference,
} from '@nestjs/graphql';
import { Post } from 'src/entities/post.entity';
import { User } from 'src/entities/user.entity';
import { PostService } from './post.service';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postSrv: PostService) {}

  @Query(() => Post)
  findPost(@Args('id') id: number): Post {
    return this.postSrv.findOne(id);
  }

  @Query(() => [Post])
  getPosts(@Info() info): Post[] {
    console.log({ info });
    return this.postSrv.findAll();
  }

  @ResolveField(() => User)
  user(@Parent() post: Post) {
    return { __typename: 'Users', id: post.authorId };
  }
}
