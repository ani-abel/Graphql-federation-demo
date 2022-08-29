import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Post } from 'src/entities/post.entity';
import { User } from 'src/entities/user.entity';
import { PostService } from '../post/post.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly postSrv: PostService) {}

  @ResolveField(() => [Post])
  public posts(@Parent() user: User): Post[] {
    return this.postSrv.forAuthor(user.id);
  }
}
