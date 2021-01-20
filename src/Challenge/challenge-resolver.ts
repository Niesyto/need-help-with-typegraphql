/* eslint-disable jsdoc/require-jsdoc */
import { Query, Arg, Mutation, Resolver } from 'type-graphql';
import { plainToClass } from 'class-transformer';
import uuid4 from 'uuid4';
import { Challenge } from './challenge-type';
import { Metadata } from '../meta/meta';
import { ConditionInput } from './ChallengeCondition/condition-input-type';

@Resolver((of) => Challenge)
export class ChallengeResolver {
  challenges: Challenge[] = [
    {
      id: '1',
      successCondition: {
        type: 'LogicalOr',
        conditions: [{ type: 'Other type' }, { type: 'Other type' }],
      },
    },
  ];
  @Query(() => Challenge, { description: 'Get one challenge ' })
  async Challenge(@Arg('id', (type) => String) id: string): Promise<Challenge | undefined> {
    const challenge = await this.challenges.find((el) => el.id === id);
    return challenge;
  }

  @Query(() => [Challenge])
  async allChallenges(): Promise<Challenge[]> {
    return this.challenges;
  }

  // eslint-disable-next-line no-underscore-dangle
  @Query(() => Metadata)
  async _allChallengesMeta(): Promise<Metadata> {
    const count = this.challenges.length;
    return { count };
  }

  @Mutation(() => Challenge)
  async createChallenge(
    @Arg('successCondition', (type) => ConditionInput, { nullable: true }) successCondition: ConditionInput,
  ): Promise<Challenge> {
    const challenge = plainToClass(Challenge, {
      id: uuid4(),
      successCondition,
    });
    this.challenges.push(challenge);
    return challenge;
  }

  @Mutation(() => Challenge)
  async updateChallenge(
    @Arg('id', (type) => String) id: string,
    @Arg('successCondition', (type) => ConditionInput, { nullable: true }) successCondition: ConditionInput,
  ): Promise<Challenge> {
    const challengeIndex = this.challenges.findIndex((el) => (el.id = id));

    const challenge = plainToClass(Challenge, {
      id,
      successCondition,
    });
    this.challenges[challengeIndex] = challenge;
    return challenge;
  }

  @Mutation(() => Challenge)
  async deleteChallenge(@Arg('id', (type) => String) id: string): Promise<Challenge> {
    const challengeIndex = this.challenges.findIndex((el) => (el.id = id));
    const toRet = { ...this.challenges[challengeIndex] };
    this.challenges.splice(challengeIndex, 1);
    return toRet;
  }
}
