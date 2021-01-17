import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'Modifier type' })
export class Modifier {
  @Field()
  id: string;

  @Field()
  description: string;
}
