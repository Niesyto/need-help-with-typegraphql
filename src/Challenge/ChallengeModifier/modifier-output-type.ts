import { Field, ObjectType } from 'type-graphql';
import { itemID } from '../../itemID/itemID';

@ObjectType()
export class ModifierOutput {
  @Field()
  description: string;

  @Field()
  hasParameter: boolean;

  @Field(() => itemID, { nullable: true })
  value?: string | number;
}
