/* eslint-disable jsdoc/require-jsdoc */
import { Query, Arg, Resolver  } from 'type-graphql';
import { Modifier } from './modifier-type';
import { Metadata } from '../meta/meta';
import { ModifierFilter } from './modifier-filter';

@Resolver((of) => Modifier)
export class ModifierResolver {
  modifiers :Modifier[] = []

  @Query(() => Modifier, { description: 'Get one modifier ' })
  async Modifier(@Arg('id', (type) => String) id: string): Promise<Modifier | undefined> {
    const modifier = await this.modifiers.find((el)=>el.id===id);
    return modifier;
  }


  @Query(() => [Modifier], { description: 'Get list of modifieres' })
  async allModifiers(
    @Arg('page', { nullable: true }) page: number,
    @Arg('perPage', { nullable: true }) perPage: number,
    @Arg('sortField', { nullable: true }) sortField: string,
    @Arg('sortOrder', { nullable: true }) sortOrder: string,
    @Arg('filter', { nullable: true }) filter: ModifierFilter,
  
  ): Promise<Modifier[]> {
  return this.modifiers
  }

  // eslint-disable-next-line no-underscore-dangle
  @Query(() => Metadata, { description: 'Get modifieres metadata' })
  async _allModifiersMeta(
    @Arg('page', { nullable: true }) page: number,
    @Arg('perPage', { nullable: true }) perPage: number,
    @Arg('sortField', { nullable: true }) sortField: string,
    @Arg('sortOrder', { nullable: true }) sortOrder: string,
    @Arg('filter', { nullable: true }) filter: ModifierFilter,
  
  ): Promise<Metadata> {
    const count = this.modifiers.length
    return { count };
  }
}
