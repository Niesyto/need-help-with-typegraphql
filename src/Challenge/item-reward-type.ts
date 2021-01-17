import { Field, InputType, ObjectType } from 'type-graphql';
import { itemID } from '../itemID/itemID';

@ObjectType()
export class ItemReward {
  @Field(() => itemID, { nullable: true })
  id?: number | string;

  @Field({ nullable: true })
  amount?: number;

  @Field({ nullable: true })
  currency?: string;
}

@InputType()
export class ItemRewardInput {
  @Field(() => itemID, { nullable: true })
  id?: number | string;

  @Field({ nullable: true })
  amount?: number;

  @Field({ nullable: true })
  currency?: string;
}
