import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};









export type AdditionalEntityFields = {
  path?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
};

export type Auth = {
  __typename?: 'Auth',
  token?: Maybe<Scalars['String']>,
  errors?: Maybe<Array<Maybe<Error>>>,
};

export type Error = {
  __typename?: 'Error',
  value: Scalars['String'],
};

export type Mutation = {
  __typename?: 'Mutation',
  signUpUser?: Maybe<Auth>,
  signInUser?: Maybe<Auth>,
};


export type MutationSignUpUserArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationSignInUserArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};

export type Query = {
  __typename?: 'Query',
  getUser: User,
  getAllUsers: Array<User>,
};


export type QueryGetUserArgs = {
  _id: Scalars['ID']
};

export type User = {
  __typename?: 'User',
  _id: Scalars['ID'],
  name: Scalars['String'],
  email: Scalars['String'],
};


export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: {},
  ID: Scalars['ID'],
  User: User,
  String: Scalars['String'],
  Mutation: {},
  Auth: Auth,
  Error: Error,
  Boolean: Scalars['Boolean'],
  AdditionalEntityFields: AdditionalEntityFields,
};

export type UnionDirectiveResolver<Result, Parent, ContextType = any, Args = {
  discriminatorField?: Maybe<Maybe<Scalars['String']>>,
  additionalFields?: Maybe<Maybe<Array<Maybe<AdditionalEntityFields>>>>
}> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AbstractEntityDirectiveResolver<Result, Parent, ContextType = any, Args = {
  discriminatorField?: Maybe<Scalars['String']>,
  additionalFields?: Maybe<Maybe<Array<Maybe<AdditionalEntityFields>>>>
}> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EntityDirectiveResolver<Result, Parent, ContextType = any, Args = {
  embedded?: Maybe<Maybe<Scalars['Boolean']>>,
  additionalFields?: Maybe<Maybe<Array<Maybe<AdditionalEntityFields>>>>
}> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ColumnDirectiveResolver<Result, Parent, ContextType = any, Args = { overrideType?: Maybe<Maybe<Scalars['String']>> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IdDirectiveResolver<Result, Parent, ContextType = any, Args = {}> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LinkDirectiveResolver<Result, Parent, ContextType = any, Args = { overrideType?: Maybe<Maybe<Scalars['String']>> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EmbeddedDirectiveResolver<Result, Parent, ContextType = any, Args = {}> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MapDirectiveResolver<Result, Parent, ContextType = any, Args = { path?: Maybe<Scalars['String']> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AuthResolvers<ContextType = any, ParentType = ResolversTypes['Auth']> = {
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Error']>>>, ParentType, ContextType>,
};

export type ErrorResolvers<ContextType = any, ParentType = ResolversTypes['Error']> = {
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type MutationResolvers<ContextType = any, ParentType = ResolversTypes['Mutation']> = {
  signUpUser?: Resolver<Maybe<ResolversTypes['Auth']>, ParentType, ContextType, MutationSignUpUserArgs>,
  signInUser?: Resolver<Maybe<ResolversTypes['Auth']>, ParentType, ContextType, MutationSignInUserArgs>,
};

export type QueryResolvers<ContextType = any, ParentType = ResolversTypes['Query']> = {
  getUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, QueryGetUserArgs>,
  getAllUsers?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>,
};

export type UserResolvers<ContextType = any, ParentType = ResolversTypes['User']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  Auth?: AuthResolvers<ContextType>,
  Error?: ErrorResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  union?: UnionDirectiveResolver<any, any, ContextType>,
  abstractEntity?: AbstractEntityDirectiveResolver<any, any, ContextType>,
  entity?: EntityDirectiveResolver<any, any, ContextType>,
  column?: ColumnDirectiveResolver<any, any, ContextType>,
  id?: IdDirectiveResolver<any, any, ContextType>,
  link?: LinkDirectiveResolver<any, any, ContextType>,
  embedded?: EmbeddedDirectiveResolver<any, any, ContextType>,
  map?: MapDirectiveResolver<any, any, ContextType>,
};


/**
* @deprecated
* Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
*/
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>; import { ObjectID } from 'mongodb';