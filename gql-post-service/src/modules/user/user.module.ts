import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PostModule } from '../post/post.module';
import { PostService } from '../post/post.service';

@Module({
  imports: [PostModule],
  providers: [UserService, UserResolver, PostService],
})
export class UserModule {}
