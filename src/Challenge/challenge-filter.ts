import { InputType, Field } from 'type-graphql';

@InputType()
export class ChallengeFilter {
  @Field(() => String, { nullable: true })
  id: string;
}
