import { Field, ObjectType, Int } from 'type-graphql';

@ObjectType({ description: 'Meta required for react-admin dataprovider' })
export class Metadata {
  @Field(() => Int)
  count: number;
}
