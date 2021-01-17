import { Field, InputType } from 'type-graphql';
import { itemID } from '../../itemID/itemID';

@InputType()
export class ModifierInput {
  @Field()
  description: string;

  @Field()
  hasParameter: boolean;

  @Field(() => itemID, { nullable: true })
  value?: string | number;
}
