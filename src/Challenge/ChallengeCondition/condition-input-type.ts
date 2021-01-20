import { Field, InputType } from 'type-graphql';

@InputType()
export class ConditionInput {
  @Field()
  type: string;

  @Field(() => [ConditionInput], { nullable: true })
  conditions?: ConditionInput[];
}
