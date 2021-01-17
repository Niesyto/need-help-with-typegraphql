import { Field, ObjectType } from 'type-graphql';
import { ItemReward } from './item-reward-type';
import { ConditionOutput } from './ChallengeCondition/condition-output-type';

@ObjectType({ description: 'Challenge type' })
export class Challenge {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => ConditionOutput)
  successCondition: ConditionOutput;

  @Field(() => ConditionOutput, { nullable: true })
  resetCondition?: ConditionOutput;

  @Field(() => ConditionOutput, { nullable: true })
  unlockCondition?: ConditionOutput;

  @Field(() => [ItemReward], { nullable: true })
  rewards?: ItemReward[];
}
