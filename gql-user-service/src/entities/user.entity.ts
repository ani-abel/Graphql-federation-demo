import { Directive, Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class User {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field(() => Int)
  age: number;
}
