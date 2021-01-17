/* eslint-disable jsdoc/require-jsdoc */
import { Query, Arg, Resolver, Authorized, Ctx } from 'type-graphql';
import { Condition } from './condition-type';
import { Metadata } from '../meta/meta';
import { ConditionFilter } from './condition-filter';


@Resolver((of) => Condition)
export class ConditionResolver {
  conditons :Condition[] = []
  @Query(() => Condition, { description: 'Get one condition ' })
  async Condition(@Arg('id', (type) => String) id: string): Promise<Condition | undefined> {
    const conditon = await this.conditons.find((el)=>el.id===id);
    return conditon;
  }

  @Query(() => [Condition], { description: 'Get list of conditiones' })
  async allConditions(
    @Arg('page', { nullable: true }) page: number,
    @Arg('perPage', { nullable: true }) perPage: number,
    @Arg('sortField', { nullable: true }) sortField: string,
    @Arg('sortOrder', { nullable: true }) sortOrder: string,
    @Arg('filter', { nullable: true }) filter: ConditionFilter,
  ): Promise<Condition[]> {  
    return this.conditons
  }

  // eslint-disable-next-line no-underscore-dangle
  @Query(() => Metadata, { description: 'Get conditiones metadata' })
  async _allConditionsMeta(
    @Arg('page', { nullable: true }) page: number,
    @Arg('perPage', { nullable: true }) perPage: number,
    @Arg('sortField', { nullable: true }) sortField: string,
    @Arg('sortOrder', { nullable: true }) sortOrder: string,
    @Arg('filter', { nullable: true }) filter: ConditionFilter,
  ): Promise<Metadata> {
    const count = this.conditons.length
    return { count };
  }
}
