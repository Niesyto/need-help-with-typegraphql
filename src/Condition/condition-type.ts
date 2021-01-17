import { Field, ObjectType } from 'type-graphql';
@ObjectType({ description: 'Condition type' })
export class Condition {
  @Field()
  id: string;

  @Field()
  description: string;

  @Field()
  type: string;
}
