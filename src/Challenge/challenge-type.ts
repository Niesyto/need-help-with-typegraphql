import { Field, ObjectType } from 'type-graphql';
import { ConditionOutput } from './ChallengeCondition/condition-output-type';

@ObjectType()
export class Challenge {
  @Field()
  id: string;

  @Field(() => ConditionOutput)
  successCondition: ConditionOutput;
}
