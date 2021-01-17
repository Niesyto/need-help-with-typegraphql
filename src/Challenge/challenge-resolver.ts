/* eslint-disable jsdoc/require-jsdoc */
import { Query, Arg, Mutation, Resolver } from 'type-graphql';
import { plainToClass } from 'class-transformer';
import uuid4 from 'uuid4';
import { Challenge } from './challenge-type';
import { Metadata } from '../meta/meta';
import { ChallengeFilter } from './challenge-filter';
import { itemID } from '../itemID/itemID';
import { ItemRewardInput } from './item-reward-type';
import { ConditionInput } from './ChallengeCondition/condition-input-type';

@Resolver((of) => Challenge)
export class ChallengeResolver {
  challenges :Challenge[] = []
  @Query(() => Challenge, { description: 'Get one challenge ' })
  async Challenge(@Arg('id', (type) => itemID) id: string): Promise<Challenge | undefined> {
    const challenge = await this.challenges.find((el)=>el.id===id);
    return challenge;
  }

  @Query(() => [Challenge], { description: 'Get list of challenges' })
  async allChallenges(
    @Arg('page', { nullable: true }) page: number,
    @Arg('perPage', { nullable: true }) perPage: number,
    @Arg('sortField', { nullable: true }) sortField: string,
    @Arg('sortOrder', { nullable: true }) sortOrder: string,
    @Arg('filter', { nullable: true }) filter: ChallengeFilter,
  ): Promise<Challenge[]> {
    return this.challenges
  }

  // eslint-disable-next-line no-underscore-dangle
  @Query(() => Metadata, { description: 'Get challenges metadata' })
  async _allChallengesMeta(
    @Arg('page', { nullable: true }) page: number,
    @Arg('perPage', { nullable: true }) perPage: number,
    @Arg('sortField', { nullable: true }) sortField: string,
    @Arg('sortOrder', { nullable: true }) sortOrder: string,
    @Arg('filter', { nullable: true }) filter: ChallengeFilter,
  ): Promise<Metadata> {
    const count = this.challenges.length
    return { count };
  }

  @Mutation(() => Challenge)
  async createChallenge(
    @Arg('name', (type) => String) name: string,
    @Arg('description', (type) => String) description: string,
    @Arg('successCondition', (type) => ConditionInput, { nullable: true }) successCondition: ConditionInput,
    @Arg('resetCondition', (type) => ConditionInput, { nullable: true }) resetCondition: ConditionInput,
    @Arg('unlockCondition', (type) => ConditionInput, { nullable: true }) unlockCondition: ConditionInput,
    @Arg('rewards', (type) => [ItemRewardInput], { nullable: true }) rewards: ItemRewardInput[],
  ): Promise<Challenge> {
    const challenge = plainToClass(Challenge, {
      id: uuid4(),
      description,
      name,
      successCondition,
      resetCondition,
      unlockCondition,
      rewards,
    });
    this.challenges.push(challenge);
    return challenge;
  }

  @Mutation(() => Challenge)
  async updateChallenge(
    @Arg('id', (type) => String) id: string,
    @Arg('name', (type) => String) name: string,
    @Arg('description', (type) => String) description: string,
    @Arg('successCondition', (type) => ConditionInput, { nullable: true }) successCondition: ConditionInput,
    @Arg('resetCondition', (type) => ConditionInput, { nullable: true }) resetCondition: ConditionInput,
    @Arg('unlockCondition', (type) => ConditionInput, { nullable: true }) unlockCondition: ConditionInput,
    @Arg('rewards', (type) => [ItemRewardInput], { nullable: true }) rewards: ItemRewardInput[],
  ): Promise<Challenge> {
    const challengeIndex=this.challenges.findIndex((el)=>el.id=id)

    const challenge = plainToClass(Challenge, {
      id,
      description,
      name,
      successCondition,
      resetCondition,
      unlockCondition,
      rewards,
    });
    this.challenges[challengeIndex]=challenge;
    return challenge;
  }

  @Mutation(() => Challenge)
  async deleteChallenge(@Arg('id', (type) => itemID) id: string): Promise<Challenge> {
    const challengeIndex=this.challenges.findIndex((el)=>el.id=id)
    const toRet={...this.challenges[challengeIndex]};
    this.challenges.splice(challengeIndex,1)
    return toRet
  }
}
