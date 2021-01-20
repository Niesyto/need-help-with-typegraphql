import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class ConditionOutput {
  @Field()
  type: string;

  @Field(() => [ConditionOutput], { nullable: true })
  conditions?: ConditionOutput[];

}
