import { Field, ObjectType } from 'type-graphql';
import { itemID } from '../../itemID/itemID';
import { ModifierOutput } from '../ChallengeModifier/modifier-output-type';

@ObjectType()
export class ConditionOutput {
  @Field()
  id: string;

  @Field()
  type: string;

  @Field(() => [ConditionOutput], { nullable: true })
  conditions: ConditionOutput[];

  @Field(() => [ModifierOutput], { nullable: true })
  modifiers?: ModifierOutput[];

  @Field(() => itemID, { nullable: true })
  parameter?: string | number;
}
