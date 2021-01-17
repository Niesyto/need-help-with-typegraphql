import { Field, InputType } from 'type-graphql';
import { itemID } from '../../itemID/itemID';
import { ModifierInput } from '../ChallengeModifier/modifier-input-type';

@InputType()
export class ConditionInput {
  @Field()
  id: string;

  @Field()
  type: string;

  @Field(() => [ModifierInput], { nullable: true })
  modifiers?: ModifierInput[];

  @Field(() => itemID, { nullable: true })
  parameter?: string | number;

  @Field(() => [ConditionInput], { nullable: true })
  conditions?: ConditionInput[];
}
