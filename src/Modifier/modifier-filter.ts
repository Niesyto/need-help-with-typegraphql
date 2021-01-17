import { InputType, Field } from 'type-graphql';

@InputType()
export class ModifierFilter {
  @Field(() => [String], { nullable: true })
  ids: string[];

  @Field(() => String, { nullable: true })
  id: string;

  @Field(() => String, { nullable: true })
  q: string;

  @Field(() => String, { nullable: true })
  type: string;
}
