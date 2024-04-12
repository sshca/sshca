
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Host
 * 
 */
export type Host = $Result.DefaultSelection<Prisma.$HostPayload>
/**
 * Model HostVerification
 * 
 */
export type HostVerification = $Result.DefaultSelection<Prisma.$HostVerificationPayload>
/**
 * Model Subrole
 * 
 */
export type Subrole = $Result.DefaultSelection<Prisma.$SubrolePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Extension: {
  permit_X11_forwarding: 'permit_X11_forwarding',
  permit_agent_forwarding: 'permit_agent_forwarding',
  permit_port_forwarding: 'permit_port_forwarding',
  permit_pty: 'permit_pty',
  permit_user_rc: 'permit_user_rc'
};

export type Extension = (typeof Extension)[keyof typeof Extension]

}

export type Extension = $Enums.Extension

export const Extension: typeof $Enums.Extension

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs>;

  /**
   * `prisma.host`: Exposes CRUD operations for the **Host** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hosts
    * const hosts = await prisma.host.findMany()
    * ```
    */
  get host(): Prisma.HostDelegate<ExtArgs>;

  /**
   * `prisma.hostVerification`: Exposes CRUD operations for the **HostVerification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HostVerifications
    * const hostVerifications = await prisma.hostVerification.findMany()
    * ```
    */
  get hostVerification(): Prisma.HostVerificationDelegate<ExtArgs>;

  /**
   * `prisma.subrole`: Exposes CRUD operations for the **Subrole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subroles
    * const subroles = await prisma.subrole.findMany()
    * ```
    */
  get subrole(): Prisma.SubroleDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.12.1
   * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Role: 'Role',
    Host: 'Host',
    HostVerification: 'HostVerification',
    Subrole: 'Subrole'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'role' | 'host' | 'hostVerification' | 'subrole'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>,
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Host: {
        payload: Prisma.$HostPayload<ExtArgs>
        fields: Prisma.HostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HostFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HostFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HostPayload>
          }
          findFirst: {
            args: Prisma.HostFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HostFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HostPayload>
          }
          findMany: {
            args: Prisma.HostFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HostPayload>[]
          }
          create: {
            args: Prisma.HostCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HostPayload>
          }
          createMany: {
            args: Prisma.HostCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.HostDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HostPayload>
          }
          update: {
            args: Prisma.HostUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HostPayload>
          }
          deleteMany: {
            args: Prisma.HostDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.HostUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.HostUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HostPayload>
          }
          aggregate: {
            args: Prisma.HostAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHost>
          }
          groupBy: {
            args: Prisma.HostGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HostGroupByOutputType>[]
          }
          count: {
            args: Prisma.HostCountArgs<ExtArgs>,
            result: $Utils.Optional<HostCountAggregateOutputType> | number
          }
        }
      }
      HostVerification: {
        payload: Prisma.$HostVerificationPayload<ExtArgs>
        fields: Prisma.HostVerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HostVerificationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HostVerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HostVerificationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HostVerificationPayload>
          }
          findFirst: {
            args: Prisma.HostVerificationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HostVerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HostVerificationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HostVerificationPayload>
          }
          findMany: {
            args: Prisma.HostVerificationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HostVerificationPayload>[]
          }
          create: {
            args: Prisma.HostVerificationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HostVerificationPayload>
          }
          createMany: {
            args: Prisma.HostVerificationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.HostVerificationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HostVerificationPayload>
          }
          update: {
            args: Prisma.HostVerificationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HostVerificationPayload>
          }
          deleteMany: {
            args: Prisma.HostVerificationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.HostVerificationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.HostVerificationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HostVerificationPayload>
          }
          aggregate: {
            args: Prisma.HostVerificationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHostVerification>
          }
          groupBy: {
            args: Prisma.HostVerificationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HostVerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.HostVerificationCountArgs<ExtArgs>,
            result: $Utils.Optional<HostVerificationCountAggregateOutputType> | number
          }
        }
      }
      Subrole: {
        payload: Prisma.$SubrolePayload<ExtArgs>
        fields: Prisma.SubroleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubroleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubrolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubroleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubrolePayload>
          }
          findFirst: {
            args: Prisma.SubroleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubrolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubroleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubrolePayload>
          }
          findMany: {
            args: Prisma.SubroleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubrolePayload>[]
          }
          create: {
            args: Prisma.SubroleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubrolePayload>
          }
          createMany: {
            args: Prisma.SubroleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SubroleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubrolePayload>
          }
          update: {
            args: Prisma.SubroleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubrolePayload>
          }
          deleteMany: {
            args: Prisma.SubroleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SubroleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SubroleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubrolePayload>
          }
          aggregate: {
            args: Prisma.SubroleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSubrole>
          }
          groupBy: {
            args: Prisma.SubroleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SubroleGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubroleCountArgs<ExtArgs>,
            result: $Utils.Optional<SubroleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    roles: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | UserCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }



  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
    subroles: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
    subroles?: boolean | RoleCountOutputTypeCountSubrolesArgs
  }

  // Custom InputTypes

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountSubrolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubroleWhereInput
  }



  /**
   * Count Type HostCountOutputType
   */

  export type HostCountOutputType = {
    subroles: number
  }

  export type HostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subroles?: boolean | HostCountOutputTypeCountSubrolesArgs
  }

  // Custom InputTypes

  /**
   * HostCountOutputType without action
   */
  export type HostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostCountOutputType
     */
    select?: HostCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * HostCountOutputType without action
   */
  export type HostCountOutputTypeCountSubrolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubroleWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    password: string | null
    fingerprint: Buffer | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    password: string | null
    fingerprint: Buffer | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    email: number
    password: number
    fingerprint: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    password?: true
    fingerprint?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    password?: true
    fingerprint?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    password?: true
    fingerprint?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    email: string
    password: string
    fingerprint: Buffer | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    password?: boolean
    fingerprint?: boolean
    roles?: boolean | User$rolesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    password?: boolean
    fingerprint?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | User$rolesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      roles: Prisma.$RolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      email: string
      password: string
      fingerprint: Buffer | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    roles<T extends User$rolesArgs<ExtArgs> = {}>(args?: Subset<T, User$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly fingerprint: FieldRef<"User", 'Bytes'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.roles
   */
  export type User$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    cursor?: RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    subroles?: boolean | Role$subrolesArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
  }

  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    subroles?: boolean | Role$subrolesArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      subroles: Prisma.$SubrolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }


  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Role that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RoleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
    **/
    create<T extends RoleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RoleCreateArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Roles.
     *     @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     *     @example
     *     // Create many Roles
     *     const role = await prisma.role.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RoleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
    **/
    delete<T extends RoleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
    **/
    upsert<T extends RoleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    subroles<T extends Role$subrolesArgs<ExtArgs> = {}>(args?: Subset<T, Role$subrolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubrolePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Role model
   */ 
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
    readonly updatedAt: FieldRef<"Role", 'DateTime'>
    readonly name: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }


  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }


  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }


  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }


  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }


  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }


  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }


  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
  }


  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }


  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }


  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
  }


  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * Role.subroles
   */
  export type Role$subrolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subrole
     */
    select?: SubroleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubroleInclude<ExtArgs> | null
    where?: SubroleWhereInput
    orderBy?: SubroleOrderByWithRelationInput | SubroleOrderByWithRelationInput[]
    cursor?: SubroleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubroleScalarFieldEnum | SubroleScalarFieldEnum[]
  }


  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
  }



  /**
   * Model Host
   */

  export type AggregateHost = {
    _count: HostCountAggregateOutputType | null
    _min: HostMinAggregateOutputType | null
    _max: HostMaxAggregateOutputType | null
  }

  export type HostMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    hostname: string | null
    caKey: string | null
    fingerprint: Buffer | null
  }

  export type HostMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    hostname: string | null
    caKey: string | null
    fingerprint: Buffer | null
  }

  export type HostCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    hostname: number
    caKey: number
    fingerprint: number
    _all: number
  }


  export type HostMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    hostname?: true
    caKey?: true
    fingerprint?: true
  }

  export type HostMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    hostname?: true
    caKey?: true
    fingerprint?: true
  }

  export type HostCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    hostname?: true
    caKey?: true
    fingerprint?: true
    _all?: true
  }

  export type HostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Host to aggregate.
     */
    where?: HostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hosts to fetch.
     */
    orderBy?: HostOrderByWithRelationInput | HostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hosts
    **/
    _count?: true | HostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HostMaxAggregateInputType
  }

  export type GetHostAggregateType<T extends HostAggregateArgs> = {
        [P in keyof T & keyof AggregateHost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHost[P]>
      : GetScalarType<T[P], AggregateHost[P]>
  }




  export type HostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HostWhereInput
    orderBy?: HostOrderByWithAggregationInput | HostOrderByWithAggregationInput[]
    by: HostScalarFieldEnum[] | HostScalarFieldEnum
    having?: HostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HostCountAggregateInputType | true
    _min?: HostMinAggregateInputType
    _max?: HostMaxAggregateInputType
  }

  export type HostGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    hostname: string
    caKey: string
    fingerprint: Buffer | null
    _count: HostCountAggregateOutputType | null
    _min: HostMinAggregateOutputType | null
    _max: HostMaxAggregateOutputType | null
  }

  type GetHostGroupByPayload<T extends HostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HostGroupByOutputType[P]>
            : GetScalarType<T[P], HostGroupByOutputType[P]>
        }
      >
    >


  export type HostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    hostname?: boolean
    caKey?: boolean
    fingerprint?: boolean
    subroles?: boolean | Host$subrolesArgs<ExtArgs>
    _count?: boolean | HostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["host"]>

  export type HostSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    hostname?: boolean
    caKey?: boolean
    fingerprint?: boolean
  }

  export type HostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subroles?: boolean | Host$subrolesArgs<ExtArgs>
    _count?: boolean | HostCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $HostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Host"
    objects: {
      subroles: Prisma.$SubrolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      hostname: string
      caKey: string
      fingerprint: Buffer | null
    }, ExtArgs["result"]["host"]>
    composites: {}
  }


  type HostGetPayload<S extends boolean | null | undefined | HostDefaultArgs> = $Result.GetResult<Prisma.$HostPayload, S>

  type HostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HostFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HostCountAggregateInputType | true
    }

  export interface HostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Host'], meta: { name: 'Host' } }
    /**
     * Find zero or one Host that matches the filter.
     * @param {HostFindUniqueArgs} args - Arguments to find a Host
     * @example
     * // Get one Host
     * const host = await prisma.host.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HostFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, HostFindUniqueArgs<ExtArgs>>
    ): Prisma__HostClient<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Host that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HostFindUniqueOrThrowArgs} args - Arguments to find a Host
     * @example
     * // Get one Host
     * const host = await prisma.host.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HostFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HostFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__HostClient<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Host that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostFindFirstArgs} args - Arguments to find a Host
     * @example
     * // Get one Host
     * const host = await prisma.host.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HostFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, HostFindFirstArgs<ExtArgs>>
    ): Prisma__HostClient<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Host that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostFindFirstOrThrowArgs} args - Arguments to find a Host
     * @example
     * // Get one Host
     * const host = await prisma.host.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HostFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HostFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__HostClient<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Hosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hosts
     * const hosts = await prisma.host.findMany()
     * 
     * // Get first 10 Hosts
     * const hosts = await prisma.host.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hostWithIdOnly = await prisma.host.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HostFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HostFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Host.
     * @param {HostCreateArgs} args - Arguments to create a Host.
     * @example
     * // Create one Host
     * const Host = await prisma.host.create({
     *   data: {
     *     // ... data to create a Host
     *   }
     * })
     * 
    **/
    create<T extends HostCreateArgs<ExtArgs>>(
      args: SelectSubset<T, HostCreateArgs<ExtArgs>>
    ): Prisma__HostClient<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Hosts.
     *     @param {HostCreateManyArgs} args - Arguments to create many Hosts.
     *     @example
     *     // Create many Hosts
     *     const host = await prisma.host.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HostCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HostCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Host.
     * @param {HostDeleteArgs} args - Arguments to delete one Host.
     * @example
     * // Delete one Host
     * const Host = await prisma.host.delete({
     *   where: {
     *     // ... filter to delete one Host
     *   }
     * })
     * 
    **/
    delete<T extends HostDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, HostDeleteArgs<ExtArgs>>
    ): Prisma__HostClient<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Host.
     * @param {HostUpdateArgs} args - Arguments to update one Host.
     * @example
     * // Update one Host
     * const host = await prisma.host.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HostUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, HostUpdateArgs<ExtArgs>>
    ): Prisma__HostClient<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Hosts.
     * @param {HostDeleteManyArgs} args - Arguments to filter Hosts to delete.
     * @example
     * // Delete a few Hosts
     * const { count } = await prisma.host.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HostDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HostDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hosts
     * const host = await prisma.host.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HostUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, HostUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Host.
     * @param {HostUpsertArgs} args - Arguments to update or create a Host.
     * @example
     * // Update or create a Host
     * const host = await prisma.host.upsert({
     *   create: {
     *     // ... data to create a Host
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Host we want to update
     *   }
     * })
    **/
    upsert<T extends HostUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, HostUpsertArgs<ExtArgs>>
    ): Prisma__HostClient<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Hosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostCountArgs} args - Arguments to filter Hosts to count.
     * @example
     * // Count the number of Hosts
     * const count = await prisma.host.count({
     *   where: {
     *     // ... the filter for the Hosts we want to count
     *   }
     * })
    **/
    count<T extends HostCountArgs>(
      args?: Subset<T, HostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Host.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HostAggregateArgs>(args: Subset<T, HostAggregateArgs>): Prisma.PrismaPromise<GetHostAggregateType<T>>

    /**
     * Group by Host.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HostGroupByArgs['orderBy'] }
        : { orderBy?: HostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Host model
   */
  readonly fields: HostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Host.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    subroles<T extends Host$subrolesArgs<ExtArgs> = {}>(args?: Subset<T, Host$subrolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubrolePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Host model
   */ 
  interface HostFieldRefs {
    readonly id: FieldRef<"Host", 'String'>
    readonly createdAt: FieldRef<"Host", 'DateTime'>
    readonly updatedAt: FieldRef<"Host", 'DateTime'>
    readonly name: FieldRef<"Host", 'String'>
    readonly hostname: FieldRef<"Host", 'String'>
    readonly caKey: FieldRef<"Host", 'String'>
    readonly fingerprint: FieldRef<"Host", 'Bytes'>
  }
    

  // Custom InputTypes

  /**
   * Host findUnique
   */
  export type HostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HostInclude<ExtArgs> | null
    /**
     * Filter, which Host to fetch.
     */
    where: HostWhereUniqueInput
  }


  /**
   * Host findUniqueOrThrow
   */
  export type HostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HostInclude<ExtArgs> | null
    /**
     * Filter, which Host to fetch.
     */
    where: HostWhereUniqueInput
  }


  /**
   * Host findFirst
   */
  export type HostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HostInclude<ExtArgs> | null
    /**
     * Filter, which Host to fetch.
     */
    where?: HostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hosts to fetch.
     */
    orderBy?: HostOrderByWithRelationInput | HostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hosts.
     */
    cursor?: HostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hosts.
     */
    distinct?: HostScalarFieldEnum | HostScalarFieldEnum[]
  }


  /**
   * Host findFirstOrThrow
   */
  export type HostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HostInclude<ExtArgs> | null
    /**
     * Filter, which Host to fetch.
     */
    where?: HostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hosts to fetch.
     */
    orderBy?: HostOrderByWithRelationInput | HostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hosts.
     */
    cursor?: HostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hosts.
     */
    distinct?: HostScalarFieldEnum | HostScalarFieldEnum[]
  }


  /**
   * Host findMany
   */
  export type HostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HostInclude<ExtArgs> | null
    /**
     * Filter, which Hosts to fetch.
     */
    where?: HostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hosts to fetch.
     */
    orderBy?: HostOrderByWithRelationInput | HostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hosts.
     */
    cursor?: HostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hosts.
     */
    skip?: number
    distinct?: HostScalarFieldEnum | HostScalarFieldEnum[]
  }


  /**
   * Host create
   */
  export type HostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HostInclude<ExtArgs> | null
    /**
     * The data needed to create a Host.
     */
    data: XOR<HostCreateInput, HostUncheckedCreateInput>
  }


  /**
   * Host createMany
   */
  export type HostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hosts.
     */
    data: HostCreateManyInput | HostCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Host update
   */
  export type HostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HostInclude<ExtArgs> | null
    /**
     * The data needed to update a Host.
     */
    data: XOR<HostUpdateInput, HostUncheckedUpdateInput>
    /**
     * Choose, which Host to update.
     */
    where: HostWhereUniqueInput
  }


  /**
   * Host updateMany
   */
  export type HostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hosts.
     */
    data: XOR<HostUpdateManyMutationInput, HostUncheckedUpdateManyInput>
    /**
     * Filter which Hosts to update
     */
    where?: HostWhereInput
  }


  /**
   * Host upsert
   */
  export type HostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HostInclude<ExtArgs> | null
    /**
     * The filter to search for the Host to update in case it exists.
     */
    where: HostWhereUniqueInput
    /**
     * In case the Host found by the `where` argument doesn't exist, create a new Host with this data.
     */
    create: XOR<HostCreateInput, HostUncheckedCreateInput>
    /**
     * In case the Host was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HostUpdateInput, HostUncheckedUpdateInput>
  }


  /**
   * Host delete
   */
  export type HostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HostInclude<ExtArgs> | null
    /**
     * Filter which Host to delete.
     */
    where: HostWhereUniqueInput
  }


  /**
   * Host deleteMany
   */
  export type HostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hosts to delete
     */
    where?: HostWhereInput
  }


  /**
   * Host.subroles
   */
  export type Host$subrolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subrole
     */
    select?: SubroleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubroleInclude<ExtArgs> | null
    where?: SubroleWhereInput
    orderBy?: SubroleOrderByWithRelationInput | SubroleOrderByWithRelationInput[]
    cursor?: SubroleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubroleScalarFieldEnum | SubroleScalarFieldEnum[]
  }


  /**
   * Host without action
   */
  export type HostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HostInclude<ExtArgs> | null
  }



  /**
   * Model HostVerification
   */

  export type AggregateHostVerification = {
    _count: HostVerificationCountAggregateOutputType | null
    _min: HostVerificationMinAggregateOutputType | null
    _max: HostVerificationMaxAggregateOutputType | null
  }

  export type HostVerificationMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    fingerprint: Buffer | null
  }

  export type HostVerificationMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    fingerprint: Buffer | null
  }

  export type HostVerificationCountAggregateOutputType = {
    id: number
    createdAt: number
    fingerprint: number
    _all: number
  }


  export type HostVerificationMinAggregateInputType = {
    id?: true
    createdAt?: true
    fingerprint?: true
  }

  export type HostVerificationMaxAggregateInputType = {
    id?: true
    createdAt?: true
    fingerprint?: true
  }

  export type HostVerificationCountAggregateInputType = {
    id?: true
    createdAt?: true
    fingerprint?: true
    _all?: true
  }

  export type HostVerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HostVerification to aggregate.
     */
    where?: HostVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HostVerifications to fetch.
     */
    orderBy?: HostVerificationOrderByWithRelationInput | HostVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HostVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HostVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HostVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HostVerifications
    **/
    _count?: true | HostVerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HostVerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HostVerificationMaxAggregateInputType
  }

  export type GetHostVerificationAggregateType<T extends HostVerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateHostVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHostVerification[P]>
      : GetScalarType<T[P], AggregateHostVerification[P]>
  }




  export type HostVerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HostVerificationWhereInput
    orderBy?: HostVerificationOrderByWithAggregationInput | HostVerificationOrderByWithAggregationInput[]
    by: HostVerificationScalarFieldEnum[] | HostVerificationScalarFieldEnum
    having?: HostVerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HostVerificationCountAggregateInputType | true
    _min?: HostVerificationMinAggregateInputType
    _max?: HostVerificationMaxAggregateInputType
  }

  export type HostVerificationGroupByOutputType = {
    id: string
    createdAt: Date
    fingerprint: Buffer
    _count: HostVerificationCountAggregateOutputType | null
    _min: HostVerificationMinAggregateOutputType | null
    _max: HostVerificationMaxAggregateOutputType | null
  }

  type GetHostVerificationGroupByPayload<T extends HostVerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HostVerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HostVerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HostVerificationGroupByOutputType[P]>
            : GetScalarType<T[P], HostVerificationGroupByOutputType[P]>
        }
      >
    >


  export type HostVerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    fingerprint?: boolean
  }, ExtArgs["result"]["hostVerification"]>

  export type HostVerificationSelectScalar = {
    id?: boolean
    createdAt?: boolean
    fingerprint?: boolean
  }


  export type $HostVerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HostVerification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      fingerprint: Buffer
    }, ExtArgs["result"]["hostVerification"]>
    composites: {}
  }


  type HostVerificationGetPayload<S extends boolean | null | undefined | HostVerificationDefaultArgs> = $Result.GetResult<Prisma.$HostVerificationPayload, S>

  type HostVerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HostVerificationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HostVerificationCountAggregateInputType | true
    }

  export interface HostVerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HostVerification'], meta: { name: 'HostVerification' } }
    /**
     * Find zero or one HostVerification that matches the filter.
     * @param {HostVerificationFindUniqueArgs} args - Arguments to find a HostVerification
     * @example
     * // Get one HostVerification
     * const hostVerification = await prisma.hostVerification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HostVerificationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, HostVerificationFindUniqueArgs<ExtArgs>>
    ): Prisma__HostVerificationClient<$Result.GetResult<Prisma.$HostVerificationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one HostVerification that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HostVerificationFindUniqueOrThrowArgs} args - Arguments to find a HostVerification
     * @example
     * // Get one HostVerification
     * const hostVerification = await prisma.hostVerification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HostVerificationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HostVerificationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__HostVerificationClient<$Result.GetResult<Prisma.$HostVerificationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first HostVerification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostVerificationFindFirstArgs} args - Arguments to find a HostVerification
     * @example
     * // Get one HostVerification
     * const hostVerification = await prisma.hostVerification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HostVerificationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, HostVerificationFindFirstArgs<ExtArgs>>
    ): Prisma__HostVerificationClient<$Result.GetResult<Prisma.$HostVerificationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first HostVerification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostVerificationFindFirstOrThrowArgs} args - Arguments to find a HostVerification
     * @example
     * // Get one HostVerification
     * const hostVerification = await prisma.hostVerification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HostVerificationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HostVerificationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__HostVerificationClient<$Result.GetResult<Prisma.$HostVerificationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more HostVerifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostVerificationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HostVerifications
     * const hostVerifications = await prisma.hostVerification.findMany()
     * 
     * // Get first 10 HostVerifications
     * const hostVerifications = await prisma.hostVerification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hostVerificationWithIdOnly = await prisma.hostVerification.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HostVerificationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HostVerificationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HostVerificationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a HostVerification.
     * @param {HostVerificationCreateArgs} args - Arguments to create a HostVerification.
     * @example
     * // Create one HostVerification
     * const HostVerification = await prisma.hostVerification.create({
     *   data: {
     *     // ... data to create a HostVerification
     *   }
     * })
     * 
    **/
    create<T extends HostVerificationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, HostVerificationCreateArgs<ExtArgs>>
    ): Prisma__HostVerificationClient<$Result.GetResult<Prisma.$HostVerificationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many HostVerifications.
     *     @param {HostVerificationCreateManyArgs} args - Arguments to create many HostVerifications.
     *     @example
     *     // Create many HostVerifications
     *     const hostVerification = await prisma.hostVerification.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HostVerificationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HostVerificationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HostVerification.
     * @param {HostVerificationDeleteArgs} args - Arguments to delete one HostVerification.
     * @example
     * // Delete one HostVerification
     * const HostVerification = await prisma.hostVerification.delete({
     *   where: {
     *     // ... filter to delete one HostVerification
     *   }
     * })
     * 
    **/
    delete<T extends HostVerificationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, HostVerificationDeleteArgs<ExtArgs>>
    ): Prisma__HostVerificationClient<$Result.GetResult<Prisma.$HostVerificationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one HostVerification.
     * @param {HostVerificationUpdateArgs} args - Arguments to update one HostVerification.
     * @example
     * // Update one HostVerification
     * const hostVerification = await prisma.hostVerification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HostVerificationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, HostVerificationUpdateArgs<ExtArgs>>
    ): Prisma__HostVerificationClient<$Result.GetResult<Prisma.$HostVerificationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more HostVerifications.
     * @param {HostVerificationDeleteManyArgs} args - Arguments to filter HostVerifications to delete.
     * @example
     * // Delete a few HostVerifications
     * const { count } = await prisma.hostVerification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HostVerificationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HostVerificationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HostVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostVerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HostVerifications
     * const hostVerification = await prisma.hostVerification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HostVerificationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, HostVerificationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HostVerification.
     * @param {HostVerificationUpsertArgs} args - Arguments to update or create a HostVerification.
     * @example
     * // Update or create a HostVerification
     * const hostVerification = await prisma.hostVerification.upsert({
     *   create: {
     *     // ... data to create a HostVerification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HostVerification we want to update
     *   }
     * })
    **/
    upsert<T extends HostVerificationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, HostVerificationUpsertArgs<ExtArgs>>
    ): Prisma__HostVerificationClient<$Result.GetResult<Prisma.$HostVerificationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of HostVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostVerificationCountArgs} args - Arguments to filter HostVerifications to count.
     * @example
     * // Count the number of HostVerifications
     * const count = await prisma.hostVerification.count({
     *   where: {
     *     // ... the filter for the HostVerifications we want to count
     *   }
     * })
    **/
    count<T extends HostVerificationCountArgs>(
      args?: Subset<T, HostVerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HostVerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HostVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostVerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HostVerificationAggregateArgs>(args: Subset<T, HostVerificationAggregateArgs>): Prisma.PrismaPromise<GetHostVerificationAggregateType<T>>

    /**
     * Group by HostVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostVerificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HostVerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HostVerificationGroupByArgs['orderBy'] }
        : { orderBy?: HostVerificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HostVerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHostVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HostVerification model
   */
  readonly fields: HostVerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HostVerification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HostVerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the HostVerification model
   */ 
  interface HostVerificationFieldRefs {
    readonly id: FieldRef<"HostVerification", 'String'>
    readonly createdAt: FieldRef<"HostVerification", 'DateTime'>
    readonly fingerprint: FieldRef<"HostVerification", 'Bytes'>
  }
    

  // Custom InputTypes

  /**
   * HostVerification findUnique
   */
  export type HostVerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostVerification
     */
    select?: HostVerificationSelect<ExtArgs> | null
    /**
     * Filter, which HostVerification to fetch.
     */
    where: HostVerificationWhereUniqueInput
  }


  /**
   * HostVerification findUniqueOrThrow
   */
  export type HostVerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostVerification
     */
    select?: HostVerificationSelect<ExtArgs> | null
    /**
     * Filter, which HostVerification to fetch.
     */
    where: HostVerificationWhereUniqueInput
  }


  /**
   * HostVerification findFirst
   */
  export type HostVerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostVerification
     */
    select?: HostVerificationSelect<ExtArgs> | null
    /**
     * Filter, which HostVerification to fetch.
     */
    where?: HostVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HostVerifications to fetch.
     */
    orderBy?: HostVerificationOrderByWithRelationInput | HostVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HostVerifications.
     */
    cursor?: HostVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HostVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HostVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HostVerifications.
     */
    distinct?: HostVerificationScalarFieldEnum | HostVerificationScalarFieldEnum[]
  }


  /**
   * HostVerification findFirstOrThrow
   */
  export type HostVerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostVerification
     */
    select?: HostVerificationSelect<ExtArgs> | null
    /**
     * Filter, which HostVerification to fetch.
     */
    where?: HostVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HostVerifications to fetch.
     */
    orderBy?: HostVerificationOrderByWithRelationInput | HostVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HostVerifications.
     */
    cursor?: HostVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HostVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HostVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HostVerifications.
     */
    distinct?: HostVerificationScalarFieldEnum | HostVerificationScalarFieldEnum[]
  }


  /**
   * HostVerification findMany
   */
  export type HostVerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostVerification
     */
    select?: HostVerificationSelect<ExtArgs> | null
    /**
     * Filter, which HostVerifications to fetch.
     */
    where?: HostVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HostVerifications to fetch.
     */
    orderBy?: HostVerificationOrderByWithRelationInput | HostVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HostVerifications.
     */
    cursor?: HostVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HostVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HostVerifications.
     */
    skip?: number
    distinct?: HostVerificationScalarFieldEnum | HostVerificationScalarFieldEnum[]
  }


  /**
   * HostVerification create
   */
  export type HostVerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostVerification
     */
    select?: HostVerificationSelect<ExtArgs> | null
    /**
     * The data needed to create a HostVerification.
     */
    data: XOR<HostVerificationCreateInput, HostVerificationUncheckedCreateInput>
  }


  /**
   * HostVerification createMany
   */
  export type HostVerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HostVerifications.
     */
    data: HostVerificationCreateManyInput | HostVerificationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * HostVerification update
   */
  export type HostVerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostVerification
     */
    select?: HostVerificationSelect<ExtArgs> | null
    /**
     * The data needed to update a HostVerification.
     */
    data: XOR<HostVerificationUpdateInput, HostVerificationUncheckedUpdateInput>
    /**
     * Choose, which HostVerification to update.
     */
    where: HostVerificationWhereUniqueInput
  }


  /**
   * HostVerification updateMany
   */
  export type HostVerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HostVerifications.
     */
    data: XOR<HostVerificationUpdateManyMutationInput, HostVerificationUncheckedUpdateManyInput>
    /**
     * Filter which HostVerifications to update
     */
    where?: HostVerificationWhereInput
  }


  /**
   * HostVerification upsert
   */
  export type HostVerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostVerification
     */
    select?: HostVerificationSelect<ExtArgs> | null
    /**
     * The filter to search for the HostVerification to update in case it exists.
     */
    where: HostVerificationWhereUniqueInput
    /**
     * In case the HostVerification found by the `where` argument doesn't exist, create a new HostVerification with this data.
     */
    create: XOR<HostVerificationCreateInput, HostVerificationUncheckedCreateInput>
    /**
     * In case the HostVerification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HostVerificationUpdateInput, HostVerificationUncheckedUpdateInput>
  }


  /**
   * HostVerification delete
   */
  export type HostVerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostVerification
     */
    select?: HostVerificationSelect<ExtArgs> | null
    /**
     * Filter which HostVerification to delete.
     */
    where: HostVerificationWhereUniqueInput
  }


  /**
   * HostVerification deleteMany
   */
  export type HostVerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HostVerifications to delete
     */
    where?: HostVerificationWhereInput
  }


  /**
   * HostVerification without action
   */
  export type HostVerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostVerification
     */
    select?: HostVerificationSelect<ExtArgs> | null
  }



  /**
   * Model Subrole
   */

  export type AggregateSubrole = {
    _count: SubroleCountAggregateOutputType | null
    _min: SubroleMinAggregateOutputType | null
    _max: SubroleMaxAggregateOutputType | null
  }

  export type SubroleMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    username: string | null
    hostId: string | null
    roleId: string | null
    force_command: string | null
    source_address: string | null
  }

  export type SubroleMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    username: string | null
    hostId: string | null
    roleId: string | null
    force_command: string | null
    source_address: string | null
  }

  export type SubroleCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    username: number
    hostId: number
    roleId: number
    extensions: number
    force_command: number
    source_address: number
    _all: number
  }


  export type SubroleMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    username?: true
    hostId?: true
    roleId?: true
    force_command?: true
    source_address?: true
  }

  export type SubroleMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    username?: true
    hostId?: true
    roleId?: true
    force_command?: true
    source_address?: true
  }

  export type SubroleCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    username?: true
    hostId?: true
    roleId?: true
    extensions?: true
    force_command?: true
    source_address?: true
    _all?: true
  }

  export type SubroleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subrole to aggregate.
     */
    where?: SubroleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subroles to fetch.
     */
    orderBy?: SubroleOrderByWithRelationInput | SubroleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubroleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subroles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subroles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subroles
    **/
    _count?: true | SubroleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubroleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubroleMaxAggregateInputType
  }

  export type GetSubroleAggregateType<T extends SubroleAggregateArgs> = {
        [P in keyof T & keyof AggregateSubrole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubrole[P]>
      : GetScalarType<T[P], AggregateSubrole[P]>
  }




  export type SubroleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubroleWhereInput
    orderBy?: SubroleOrderByWithAggregationInput | SubroleOrderByWithAggregationInput[]
    by: SubroleScalarFieldEnum[] | SubroleScalarFieldEnum
    having?: SubroleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubroleCountAggregateInputType | true
    _min?: SubroleMinAggregateInputType
    _max?: SubroleMaxAggregateInputType
  }

  export type SubroleGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    username: string
    hostId: string
    roleId: string
    extensions: $Enums.Extension[]
    force_command: string | null
    source_address: string | null
    _count: SubroleCountAggregateOutputType | null
    _min: SubroleMinAggregateOutputType | null
    _max: SubroleMaxAggregateOutputType | null
  }

  type GetSubroleGroupByPayload<T extends SubroleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubroleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubroleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubroleGroupByOutputType[P]>
            : GetScalarType<T[P], SubroleGroupByOutputType[P]>
        }
      >
    >


  export type SubroleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    username?: boolean
    hostId?: boolean
    roleId?: boolean
    extensions?: boolean
    force_command?: boolean
    source_address?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    host?: boolean | HostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subrole"]>

  export type SubroleSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    username?: boolean
    hostId?: boolean
    roleId?: boolean
    extensions?: boolean
    force_command?: boolean
    source_address?: boolean
  }

  export type SubroleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    host?: boolean | HostDefaultArgs<ExtArgs>
  }


  export type $SubrolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subrole"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      host: Prisma.$HostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      username: string
      hostId: string
      roleId: string
      extensions: $Enums.Extension[]
      force_command: string | null
      source_address: string | null
    }, ExtArgs["result"]["subrole"]>
    composites: {}
  }


  type SubroleGetPayload<S extends boolean | null | undefined | SubroleDefaultArgs> = $Result.GetResult<Prisma.$SubrolePayload, S>

  type SubroleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubroleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubroleCountAggregateInputType | true
    }

  export interface SubroleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subrole'], meta: { name: 'Subrole' } }
    /**
     * Find zero or one Subrole that matches the filter.
     * @param {SubroleFindUniqueArgs} args - Arguments to find a Subrole
     * @example
     * // Get one Subrole
     * const subrole = await prisma.subrole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SubroleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SubroleFindUniqueArgs<ExtArgs>>
    ): Prisma__SubroleClient<$Result.GetResult<Prisma.$SubrolePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Subrole that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SubroleFindUniqueOrThrowArgs} args - Arguments to find a Subrole
     * @example
     * // Get one Subrole
     * const subrole = await prisma.subrole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SubroleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SubroleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SubroleClient<$Result.GetResult<Prisma.$SubrolePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Subrole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubroleFindFirstArgs} args - Arguments to find a Subrole
     * @example
     * // Get one Subrole
     * const subrole = await prisma.subrole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SubroleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SubroleFindFirstArgs<ExtArgs>>
    ): Prisma__SubroleClient<$Result.GetResult<Prisma.$SubrolePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Subrole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubroleFindFirstOrThrowArgs} args - Arguments to find a Subrole
     * @example
     * // Get one Subrole
     * const subrole = await prisma.subrole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SubroleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SubroleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SubroleClient<$Result.GetResult<Prisma.$SubrolePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Subroles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubroleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subroles
     * const subroles = await prisma.subrole.findMany()
     * 
     * // Get first 10 Subroles
     * const subroles = await prisma.subrole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subroleWithIdOnly = await prisma.subrole.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SubroleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubroleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubrolePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Subrole.
     * @param {SubroleCreateArgs} args - Arguments to create a Subrole.
     * @example
     * // Create one Subrole
     * const Subrole = await prisma.subrole.create({
     *   data: {
     *     // ... data to create a Subrole
     *   }
     * })
     * 
    **/
    create<T extends SubroleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SubroleCreateArgs<ExtArgs>>
    ): Prisma__SubroleClient<$Result.GetResult<Prisma.$SubrolePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Subroles.
     *     @param {SubroleCreateManyArgs} args - Arguments to create many Subroles.
     *     @example
     *     // Create many Subroles
     *     const subrole = await prisma.subrole.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SubroleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubroleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subrole.
     * @param {SubroleDeleteArgs} args - Arguments to delete one Subrole.
     * @example
     * // Delete one Subrole
     * const Subrole = await prisma.subrole.delete({
     *   where: {
     *     // ... filter to delete one Subrole
     *   }
     * })
     * 
    **/
    delete<T extends SubroleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SubroleDeleteArgs<ExtArgs>>
    ): Prisma__SubroleClient<$Result.GetResult<Prisma.$SubrolePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Subrole.
     * @param {SubroleUpdateArgs} args - Arguments to update one Subrole.
     * @example
     * // Update one Subrole
     * const subrole = await prisma.subrole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SubroleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SubroleUpdateArgs<ExtArgs>>
    ): Prisma__SubroleClient<$Result.GetResult<Prisma.$SubrolePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Subroles.
     * @param {SubroleDeleteManyArgs} args - Arguments to filter Subroles to delete.
     * @example
     * // Delete a few Subroles
     * const { count } = await prisma.subrole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SubroleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubroleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subroles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubroleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subroles
     * const subrole = await prisma.subrole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SubroleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SubroleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subrole.
     * @param {SubroleUpsertArgs} args - Arguments to update or create a Subrole.
     * @example
     * // Update or create a Subrole
     * const subrole = await prisma.subrole.upsert({
     *   create: {
     *     // ... data to create a Subrole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subrole we want to update
     *   }
     * })
    **/
    upsert<T extends SubroleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SubroleUpsertArgs<ExtArgs>>
    ): Prisma__SubroleClient<$Result.GetResult<Prisma.$SubrolePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Subroles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubroleCountArgs} args - Arguments to filter Subroles to count.
     * @example
     * // Count the number of Subroles
     * const count = await prisma.subrole.count({
     *   where: {
     *     // ... the filter for the Subroles we want to count
     *   }
     * })
    **/
    count<T extends SubroleCountArgs>(
      args?: Subset<T, SubroleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubroleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subrole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubroleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubroleAggregateArgs>(args: Subset<T, SubroleAggregateArgs>): Prisma.PrismaPromise<GetSubroleAggregateType<T>>

    /**
     * Group by Subrole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubroleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubroleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubroleGroupByArgs['orderBy'] }
        : { orderBy?: SubroleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubroleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubroleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subrole model
   */
  readonly fields: SubroleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subrole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubroleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    host<T extends HostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HostDefaultArgs<ExtArgs>>): Prisma__HostClient<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Subrole model
   */ 
  interface SubroleFieldRefs {
    readonly id: FieldRef<"Subrole", 'String'>
    readonly createdAt: FieldRef<"Subrole", 'DateTime'>
    readonly updatedAt: FieldRef<"Subrole", 'DateTime'>
    readonly username: FieldRef<"Subrole", 'String'>
    readonly hostId: FieldRef<"Subrole", 'String'>
    readonly roleId: FieldRef<"Subrole", 'String'>
    readonly extensions: FieldRef<"Subrole", 'Extension[]'>
    readonly force_command: FieldRef<"Subrole", 'String'>
    readonly source_address: FieldRef<"Subrole", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Subrole findUnique
   */
  export type SubroleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subrole
     */
    select?: SubroleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubroleInclude<ExtArgs> | null
    /**
     * Filter, which Subrole to fetch.
     */
    where: SubroleWhereUniqueInput
  }


  /**
   * Subrole findUniqueOrThrow
   */
  export type SubroleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subrole
     */
    select?: SubroleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubroleInclude<ExtArgs> | null
    /**
     * Filter, which Subrole to fetch.
     */
    where: SubroleWhereUniqueInput
  }


  /**
   * Subrole findFirst
   */
  export type SubroleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subrole
     */
    select?: SubroleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubroleInclude<ExtArgs> | null
    /**
     * Filter, which Subrole to fetch.
     */
    where?: SubroleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subroles to fetch.
     */
    orderBy?: SubroleOrderByWithRelationInput | SubroleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subroles.
     */
    cursor?: SubroleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subroles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subroles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subroles.
     */
    distinct?: SubroleScalarFieldEnum | SubroleScalarFieldEnum[]
  }


  /**
   * Subrole findFirstOrThrow
   */
  export type SubroleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subrole
     */
    select?: SubroleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubroleInclude<ExtArgs> | null
    /**
     * Filter, which Subrole to fetch.
     */
    where?: SubroleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subroles to fetch.
     */
    orderBy?: SubroleOrderByWithRelationInput | SubroleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subroles.
     */
    cursor?: SubroleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subroles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subroles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subroles.
     */
    distinct?: SubroleScalarFieldEnum | SubroleScalarFieldEnum[]
  }


  /**
   * Subrole findMany
   */
  export type SubroleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subrole
     */
    select?: SubroleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubroleInclude<ExtArgs> | null
    /**
     * Filter, which Subroles to fetch.
     */
    where?: SubroleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subroles to fetch.
     */
    orderBy?: SubroleOrderByWithRelationInput | SubroleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subroles.
     */
    cursor?: SubroleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subroles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subroles.
     */
    skip?: number
    distinct?: SubroleScalarFieldEnum | SubroleScalarFieldEnum[]
  }


  /**
   * Subrole create
   */
  export type SubroleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subrole
     */
    select?: SubroleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubroleInclude<ExtArgs> | null
    /**
     * The data needed to create a Subrole.
     */
    data: XOR<SubroleCreateInput, SubroleUncheckedCreateInput>
  }


  /**
   * Subrole createMany
   */
  export type SubroleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subroles.
     */
    data: SubroleCreateManyInput | SubroleCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Subrole update
   */
  export type SubroleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subrole
     */
    select?: SubroleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubroleInclude<ExtArgs> | null
    /**
     * The data needed to update a Subrole.
     */
    data: XOR<SubroleUpdateInput, SubroleUncheckedUpdateInput>
    /**
     * Choose, which Subrole to update.
     */
    where: SubroleWhereUniqueInput
  }


  /**
   * Subrole updateMany
   */
  export type SubroleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subroles.
     */
    data: XOR<SubroleUpdateManyMutationInput, SubroleUncheckedUpdateManyInput>
    /**
     * Filter which Subroles to update
     */
    where?: SubroleWhereInput
  }


  /**
   * Subrole upsert
   */
  export type SubroleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subrole
     */
    select?: SubroleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubroleInclude<ExtArgs> | null
    /**
     * The filter to search for the Subrole to update in case it exists.
     */
    where: SubroleWhereUniqueInput
    /**
     * In case the Subrole found by the `where` argument doesn't exist, create a new Subrole with this data.
     */
    create: XOR<SubroleCreateInput, SubroleUncheckedCreateInput>
    /**
     * In case the Subrole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubroleUpdateInput, SubroleUncheckedUpdateInput>
  }


  /**
   * Subrole delete
   */
  export type SubroleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subrole
     */
    select?: SubroleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubroleInclude<ExtArgs> | null
    /**
     * Filter which Subrole to delete.
     */
    where: SubroleWhereUniqueInput
  }


  /**
   * Subrole deleteMany
   */
  export type SubroleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subroles to delete
     */
    where?: SubroleWhereInput
  }


  /**
   * Subrole without action
   */
  export type SubroleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subrole
     */
    select?: SubroleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubroleInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    email: 'email',
    password: 'password',
    fingerprint: 'fingerprint'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const HostScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    hostname: 'hostname',
    caKey: 'caKey',
    fingerprint: 'fingerprint'
  };

  export type HostScalarFieldEnum = (typeof HostScalarFieldEnum)[keyof typeof HostScalarFieldEnum]


  export const HostVerificationScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    fingerprint: 'fingerprint'
  };

  export type HostVerificationScalarFieldEnum = (typeof HostVerificationScalarFieldEnum)[keyof typeof HostVerificationScalarFieldEnum]


  export const SubroleScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    username: 'username',
    hostId: 'hostId',
    roleId: 'roleId',
    extensions: 'extensions',
    force_command: 'force_command',
    source_address: 'source_address'
  };

  export type SubroleScalarFieldEnum = (typeof SubroleScalarFieldEnum)[keyof typeof SubroleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


  /**
   * Reference to a field of type 'Extension[]'
   */
  export type ListEnumExtensionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Extension[]'>
    


  /**
   * Reference to a field of type 'Extension'
   */
  export type EnumExtensionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Extension'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    fingerprint?: BytesNullableFilter<"User"> | Buffer | null
    roles?: RoleListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fingerprint?: SortOrderInput | SortOrder
    roles?: RoleOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    fingerprint?: Buffer
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    roles?: RoleListRelationFilter
  }, "id" | "fingerprint">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fingerprint?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    fingerprint?: BytesNullableWithAggregatesFilter<"User"> | Buffer | null
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    name?: StringFilter<"Role"> | string
    users?: UserListRelationFilter
    subroles?: SubroleListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    users?: UserOrderByRelationAggregateInput
    subroles?: SubroleOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    name?: StringFilter<"Role"> | string
    users?: UserListRelationFilter
    subroles?: SubroleListRelationFilter
  }, "id">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    name?: StringWithAggregatesFilter<"Role"> | string
  }

  export type HostWhereInput = {
    AND?: HostWhereInput | HostWhereInput[]
    OR?: HostWhereInput[]
    NOT?: HostWhereInput | HostWhereInput[]
    id?: StringFilter<"Host"> | string
    createdAt?: DateTimeFilter<"Host"> | Date | string
    updatedAt?: DateTimeFilter<"Host"> | Date | string
    name?: StringFilter<"Host"> | string
    hostname?: StringFilter<"Host"> | string
    caKey?: StringFilter<"Host"> | string
    fingerprint?: BytesNullableFilter<"Host"> | Buffer | null
    subroles?: SubroleListRelationFilter
  }

  export type HostOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    hostname?: SortOrder
    caKey?: SortOrder
    fingerprint?: SortOrderInput | SortOrder
    subroles?: SubroleOrderByRelationAggregateInput
  }

  export type HostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HostWhereInput | HostWhereInput[]
    OR?: HostWhereInput[]
    NOT?: HostWhereInput | HostWhereInput[]
    createdAt?: DateTimeFilter<"Host"> | Date | string
    updatedAt?: DateTimeFilter<"Host"> | Date | string
    name?: StringFilter<"Host"> | string
    hostname?: StringFilter<"Host"> | string
    caKey?: StringFilter<"Host"> | string
    fingerprint?: BytesNullableFilter<"Host"> | Buffer | null
    subroles?: SubroleListRelationFilter
  }, "id">

  export type HostOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    hostname?: SortOrder
    caKey?: SortOrder
    fingerprint?: SortOrderInput | SortOrder
    _count?: HostCountOrderByAggregateInput
    _max?: HostMaxOrderByAggregateInput
    _min?: HostMinOrderByAggregateInput
  }

  export type HostScalarWhereWithAggregatesInput = {
    AND?: HostScalarWhereWithAggregatesInput | HostScalarWhereWithAggregatesInput[]
    OR?: HostScalarWhereWithAggregatesInput[]
    NOT?: HostScalarWhereWithAggregatesInput | HostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Host"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Host"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Host"> | Date | string
    name?: StringWithAggregatesFilter<"Host"> | string
    hostname?: StringWithAggregatesFilter<"Host"> | string
    caKey?: StringWithAggregatesFilter<"Host"> | string
    fingerprint?: BytesNullableWithAggregatesFilter<"Host"> | Buffer | null
  }

  export type HostVerificationWhereInput = {
    AND?: HostVerificationWhereInput | HostVerificationWhereInput[]
    OR?: HostVerificationWhereInput[]
    NOT?: HostVerificationWhereInput | HostVerificationWhereInput[]
    id?: StringFilter<"HostVerification"> | string
    createdAt?: DateTimeFilter<"HostVerification"> | Date | string
    fingerprint?: BytesFilter<"HostVerification"> | Buffer
  }

  export type HostVerificationOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    fingerprint?: SortOrder
  }

  export type HostVerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    fingerprint?: Buffer
    AND?: HostVerificationWhereInput | HostVerificationWhereInput[]
    OR?: HostVerificationWhereInput[]
    NOT?: HostVerificationWhereInput | HostVerificationWhereInput[]
    createdAt?: DateTimeFilter<"HostVerification"> | Date | string
  }, "id" | "fingerprint">

  export type HostVerificationOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    fingerprint?: SortOrder
    _count?: HostVerificationCountOrderByAggregateInput
    _max?: HostVerificationMaxOrderByAggregateInput
    _min?: HostVerificationMinOrderByAggregateInput
  }

  export type HostVerificationScalarWhereWithAggregatesInput = {
    AND?: HostVerificationScalarWhereWithAggregatesInput | HostVerificationScalarWhereWithAggregatesInput[]
    OR?: HostVerificationScalarWhereWithAggregatesInput[]
    NOT?: HostVerificationScalarWhereWithAggregatesInput | HostVerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HostVerification"> | string
    createdAt?: DateTimeWithAggregatesFilter<"HostVerification"> | Date | string
    fingerprint?: BytesWithAggregatesFilter<"HostVerification"> | Buffer
  }

  export type SubroleWhereInput = {
    AND?: SubroleWhereInput | SubroleWhereInput[]
    OR?: SubroleWhereInput[]
    NOT?: SubroleWhereInput | SubroleWhereInput[]
    id?: StringFilter<"Subrole"> | string
    createdAt?: DateTimeFilter<"Subrole"> | Date | string
    updatedAt?: DateTimeFilter<"Subrole"> | Date | string
    username?: StringFilter<"Subrole"> | string
    hostId?: StringFilter<"Subrole"> | string
    roleId?: StringFilter<"Subrole"> | string
    extensions?: EnumExtensionNullableListFilter<"Subrole">
    force_command?: StringNullableFilter<"Subrole"> | string | null
    source_address?: StringNullableFilter<"Subrole"> | string | null
    role?: XOR<RoleRelationFilter, RoleWhereInput>
    host?: XOR<HostRelationFilter, HostWhereInput>
  }

  export type SubroleOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    hostId?: SortOrder
    roleId?: SortOrder
    extensions?: SortOrder
    force_command?: SortOrderInput | SortOrder
    source_address?: SortOrderInput | SortOrder
    role?: RoleOrderByWithRelationInput
    host?: HostOrderByWithRelationInput
  }

  export type SubroleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubroleWhereInput | SubroleWhereInput[]
    OR?: SubroleWhereInput[]
    NOT?: SubroleWhereInput | SubroleWhereInput[]
    createdAt?: DateTimeFilter<"Subrole"> | Date | string
    updatedAt?: DateTimeFilter<"Subrole"> | Date | string
    username?: StringFilter<"Subrole"> | string
    hostId?: StringFilter<"Subrole"> | string
    roleId?: StringFilter<"Subrole"> | string
    extensions?: EnumExtensionNullableListFilter<"Subrole">
    force_command?: StringNullableFilter<"Subrole"> | string | null
    source_address?: StringNullableFilter<"Subrole"> | string | null
    role?: XOR<RoleRelationFilter, RoleWhereInput>
    host?: XOR<HostRelationFilter, HostWhereInput>
  }, "id">

  export type SubroleOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    hostId?: SortOrder
    roleId?: SortOrder
    extensions?: SortOrder
    force_command?: SortOrderInput | SortOrder
    source_address?: SortOrderInput | SortOrder
    _count?: SubroleCountOrderByAggregateInput
    _max?: SubroleMaxOrderByAggregateInput
    _min?: SubroleMinOrderByAggregateInput
  }

  export type SubroleScalarWhereWithAggregatesInput = {
    AND?: SubroleScalarWhereWithAggregatesInput | SubroleScalarWhereWithAggregatesInput[]
    OR?: SubroleScalarWhereWithAggregatesInput[]
    NOT?: SubroleScalarWhereWithAggregatesInput | SubroleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subrole"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Subrole"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subrole"> | Date | string
    username?: StringWithAggregatesFilter<"Subrole"> | string
    hostId?: StringWithAggregatesFilter<"Subrole"> | string
    roleId?: StringWithAggregatesFilter<"Subrole"> | string
    extensions?: EnumExtensionNullableListFilter<"Subrole">
    force_command?: StringNullableWithAggregatesFilter<"Subrole"> | string | null
    source_address?: StringNullableWithAggregatesFilter<"Subrole"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    fingerprint?: Buffer | null
    roles?: RoleCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    fingerprint?: Buffer | null
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fingerprint?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    roles?: RoleUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fingerprint?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    fingerprint?: Buffer | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fingerprint?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fingerprint?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type RoleCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    users?: UserCreateNestedManyWithoutRolesInput
    subroles?: SubroleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    users?: UserUncheckedCreateNestedManyWithoutRolesInput
    subroles?: SubroleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutRolesNestedInput
    subroles?: SubroleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutRolesNestedInput
    subroles?: SubroleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HostCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    hostname: string
    caKey: string
    fingerprint?: Buffer | null
    subroles?: SubroleCreateNestedManyWithoutHostInput
  }

  export type HostUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    hostname: string
    caKey: string
    fingerprint?: Buffer | null
    subroles?: SubroleUncheckedCreateNestedManyWithoutHostInput
  }

  export type HostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    hostname?: StringFieldUpdateOperationsInput | string
    caKey?: StringFieldUpdateOperationsInput | string
    fingerprint?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    subroles?: SubroleUpdateManyWithoutHostNestedInput
  }

  export type HostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    hostname?: StringFieldUpdateOperationsInput | string
    caKey?: StringFieldUpdateOperationsInput | string
    fingerprint?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    subroles?: SubroleUncheckedUpdateManyWithoutHostNestedInput
  }

  export type HostCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    hostname: string
    caKey: string
    fingerprint?: Buffer | null
  }

  export type HostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    hostname?: StringFieldUpdateOperationsInput | string
    caKey?: StringFieldUpdateOperationsInput | string
    fingerprint?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type HostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    hostname?: StringFieldUpdateOperationsInput | string
    caKey?: StringFieldUpdateOperationsInput | string
    fingerprint?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type HostVerificationCreateInput = {
    id: string
    createdAt?: Date | string
    fingerprint: Buffer
  }

  export type HostVerificationUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    fingerprint: Buffer
  }

  export type HostVerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fingerprint?: BytesFieldUpdateOperationsInput | Buffer
  }

  export type HostVerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fingerprint?: BytesFieldUpdateOperationsInput | Buffer
  }

  export type HostVerificationCreateManyInput = {
    id: string
    createdAt?: Date | string
    fingerprint: Buffer
  }

  export type HostVerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fingerprint?: BytesFieldUpdateOperationsInput | Buffer
  }

  export type HostVerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fingerprint?: BytesFieldUpdateOperationsInput | Buffer
  }

  export type SubroleCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    extensions?: SubroleCreateextensionsInput | $Enums.Extension[]
    force_command?: string | null
    source_address?: string | null
    role: RoleCreateNestedOneWithoutSubrolesInput
    host: HostCreateNestedOneWithoutSubrolesInput
  }

  export type SubroleUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    hostId: string
    roleId: string
    extensions?: SubroleCreateextensionsInput | $Enums.Extension[]
    force_command?: string | null
    source_address?: string | null
  }

  export type SubroleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    extensions?: SubroleUpdateextensionsInput | $Enums.Extension[]
    force_command?: NullableStringFieldUpdateOperationsInput | string | null
    source_address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: RoleUpdateOneRequiredWithoutSubrolesNestedInput
    host?: HostUpdateOneRequiredWithoutSubrolesNestedInput
  }

  export type SubroleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    hostId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    extensions?: SubroleUpdateextensionsInput | $Enums.Extension[]
    force_command?: NullableStringFieldUpdateOperationsInput | string | null
    source_address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubroleCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    hostId: string
    roleId: string
    extensions?: SubroleCreateextensionsInput | $Enums.Extension[]
    force_command?: string | null
    source_address?: string | null
  }

  export type SubroleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    extensions?: SubroleUpdateextensionsInput | $Enums.Extension[]
    force_command?: NullableStringFieldUpdateOperationsInput | string | null
    source_address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubroleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    hostId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    extensions?: SubroleUpdateextensionsInput | $Enums.Extension[]
    force_command?: NullableStringFieldUpdateOperationsInput | string | null
    source_address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Buffer | null
  }

  export type RoleListRelationFilter = {
    every?: RoleWhereInput
    some?: RoleWhereInput
    none?: RoleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fingerprint?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fingerprint?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fingerprint?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Buffer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SubroleListRelationFilter = {
    every?: SubroleWhereInput
    some?: SubroleWhereInput
    none?: SubroleWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubroleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
  }

  export type HostCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    hostname?: SortOrder
    caKey?: SortOrder
    fingerprint?: SortOrder
  }

  export type HostMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    hostname?: SortOrder
    caKey?: SortOrder
    fingerprint?: SortOrder
  }

  export type HostMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    hostname?: SortOrder
    caKey?: SortOrder
    fingerprint?: SortOrder
  }

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Buffer
  }

  export type HostVerificationCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    fingerprint?: SortOrder
  }

  export type HostVerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    fingerprint?: SortOrder
  }

  export type HostVerificationMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    fingerprint?: SortOrder
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Buffer
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type EnumExtensionNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Extension[] | ListEnumExtensionFieldRefInput<$PrismaModel> | null
    has?: $Enums.Extension | EnumExtensionFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Extension[] | ListEnumExtensionFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Extension[] | ListEnumExtensionFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type RoleRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type HostRelationFilter = {
    is?: HostWhereInput
    isNot?: HostWhereInput
  }

  export type SubroleCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    hostId?: SortOrder
    roleId?: SortOrder
    extensions?: SortOrder
    force_command?: SortOrder
    source_address?: SortOrder
  }

  export type SubroleMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    hostId?: SortOrder
    roleId?: SortOrder
    force_command?: SortOrder
    source_address?: SortOrder
  }

  export type SubroleMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    hostId?: SortOrder
    roleId?: SortOrder
    force_command?: SortOrder
    source_address?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type RoleCreateNestedManyWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput> | RoleCreateWithoutUsersInput[] | RoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | RoleCreateOrConnectWithoutUsersInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type RoleUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput> | RoleCreateWithoutUsersInput[] | RoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | RoleCreateOrConnectWithoutUsersInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Buffer | null
  }

  export type RoleUpdateManyWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput> | RoleCreateWithoutUsersInput[] | RoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | RoleCreateOrConnectWithoutUsersInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutUsersInput | RoleUpsertWithWhereUniqueWithoutUsersInput[]
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutUsersInput | RoleUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutUsersInput | RoleUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type RoleUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput> | RoleCreateWithoutUsersInput[] | RoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | RoleCreateOrConnectWithoutUsersInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutUsersInput | RoleUpsertWithWhereUniqueWithoutUsersInput[]
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutUsersInput | RoleUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutUsersInput | RoleUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutRolesInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SubroleCreateNestedManyWithoutRoleInput = {
    create?: XOR<SubroleCreateWithoutRoleInput, SubroleUncheckedCreateWithoutRoleInput> | SubroleCreateWithoutRoleInput[] | SubroleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: SubroleCreateOrConnectWithoutRoleInput | SubroleCreateOrConnectWithoutRoleInput[]
    createMany?: SubroleCreateManyRoleInputEnvelope
    connect?: SubroleWhereUniqueInput | SubroleWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SubroleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<SubroleCreateWithoutRoleInput, SubroleUncheckedCreateWithoutRoleInput> | SubroleCreateWithoutRoleInput[] | SubroleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: SubroleCreateOrConnectWithoutRoleInput | SubroleCreateOrConnectWithoutRoleInput[]
    createMany?: SubroleCreateManyRoleInputEnvelope
    connect?: SubroleWhereUniqueInput | SubroleWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutRolesNestedInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRolesInput | UserUpsertWithWhereUniqueWithoutRolesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRolesInput | UserUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRolesInput | UserUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SubroleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<SubroleCreateWithoutRoleInput, SubroleUncheckedCreateWithoutRoleInput> | SubroleCreateWithoutRoleInput[] | SubroleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: SubroleCreateOrConnectWithoutRoleInput | SubroleCreateOrConnectWithoutRoleInput[]
    upsert?: SubroleUpsertWithWhereUniqueWithoutRoleInput | SubroleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: SubroleCreateManyRoleInputEnvelope
    set?: SubroleWhereUniqueInput | SubroleWhereUniqueInput[]
    disconnect?: SubroleWhereUniqueInput | SubroleWhereUniqueInput[]
    delete?: SubroleWhereUniqueInput | SubroleWhereUniqueInput[]
    connect?: SubroleWhereUniqueInput | SubroleWhereUniqueInput[]
    update?: SubroleUpdateWithWhereUniqueWithoutRoleInput | SubroleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: SubroleUpdateManyWithWhereWithoutRoleInput | SubroleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: SubroleScalarWhereInput | SubroleScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRolesInput | UserUpsertWithWhereUniqueWithoutRolesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRolesInput | UserUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRolesInput | UserUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SubroleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<SubroleCreateWithoutRoleInput, SubroleUncheckedCreateWithoutRoleInput> | SubroleCreateWithoutRoleInput[] | SubroleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: SubroleCreateOrConnectWithoutRoleInput | SubroleCreateOrConnectWithoutRoleInput[]
    upsert?: SubroleUpsertWithWhereUniqueWithoutRoleInput | SubroleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: SubroleCreateManyRoleInputEnvelope
    set?: SubroleWhereUniqueInput | SubroleWhereUniqueInput[]
    disconnect?: SubroleWhereUniqueInput | SubroleWhereUniqueInput[]
    delete?: SubroleWhereUniqueInput | SubroleWhereUniqueInput[]
    connect?: SubroleWhereUniqueInput | SubroleWhereUniqueInput[]
    update?: SubroleUpdateWithWhereUniqueWithoutRoleInput | SubroleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: SubroleUpdateManyWithWhereWithoutRoleInput | SubroleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: SubroleScalarWhereInput | SubroleScalarWhereInput[]
  }

  export type SubroleCreateNestedManyWithoutHostInput = {
    create?: XOR<SubroleCreateWithoutHostInput, SubroleUncheckedCreateWithoutHostInput> | SubroleCreateWithoutHostInput[] | SubroleUncheckedCreateWithoutHostInput[]
    connectOrCreate?: SubroleCreateOrConnectWithoutHostInput | SubroleCreateOrConnectWithoutHostInput[]
    createMany?: SubroleCreateManyHostInputEnvelope
    connect?: SubroleWhereUniqueInput | SubroleWhereUniqueInput[]
  }

  export type SubroleUncheckedCreateNestedManyWithoutHostInput = {
    create?: XOR<SubroleCreateWithoutHostInput, SubroleUncheckedCreateWithoutHostInput> | SubroleCreateWithoutHostInput[] | SubroleUncheckedCreateWithoutHostInput[]
    connectOrCreate?: SubroleCreateOrConnectWithoutHostInput | SubroleCreateOrConnectWithoutHostInput[]
    createMany?: SubroleCreateManyHostInputEnvelope
    connect?: SubroleWhereUniqueInput | SubroleWhereUniqueInput[]
  }

  export type SubroleUpdateManyWithoutHostNestedInput = {
    create?: XOR<SubroleCreateWithoutHostInput, SubroleUncheckedCreateWithoutHostInput> | SubroleCreateWithoutHostInput[] | SubroleUncheckedCreateWithoutHostInput[]
    connectOrCreate?: SubroleCreateOrConnectWithoutHostInput | SubroleCreateOrConnectWithoutHostInput[]
    upsert?: SubroleUpsertWithWhereUniqueWithoutHostInput | SubroleUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: SubroleCreateManyHostInputEnvelope
    set?: SubroleWhereUniqueInput | SubroleWhereUniqueInput[]
    disconnect?: SubroleWhereUniqueInput | SubroleWhereUniqueInput[]
    delete?: SubroleWhereUniqueInput | SubroleWhereUniqueInput[]
    connect?: SubroleWhereUniqueInput | SubroleWhereUniqueInput[]
    update?: SubroleUpdateWithWhereUniqueWithoutHostInput | SubroleUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: SubroleUpdateManyWithWhereWithoutHostInput | SubroleUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: SubroleScalarWhereInput | SubroleScalarWhereInput[]
  }

  export type SubroleUncheckedUpdateManyWithoutHostNestedInput = {
    create?: XOR<SubroleCreateWithoutHostInput, SubroleUncheckedCreateWithoutHostInput> | SubroleCreateWithoutHostInput[] | SubroleUncheckedCreateWithoutHostInput[]
    connectOrCreate?: SubroleCreateOrConnectWithoutHostInput | SubroleCreateOrConnectWithoutHostInput[]
    upsert?: SubroleUpsertWithWhereUniqueWithoutHostInput | SubroleUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: SubroleCreateManyHostInputEnvelope
    set?: SubroleWhereUniqueInput | SubroleWhereUniqueInput[]
    disconnect?: SubroleWhereUniqueInput | SubroleWhereUniqueInput[]
    delete?: SubroleWhereUniqueInput | SubroleWhereUniqueInput[]
    connect?: SubroleWhereUniqueInput | SubroleWhereUniqueInput[]
    update?: SubroleUpdateWithWhereUniqueWithoutHostInput | SubroleUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: SubroleUpdateManyWithWhereWithoutHostInput | SubroleUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: SubroleScalarWhereInput | SubroleScalarWhereInput[]
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Buffer
  }

  export type SubroleCreateextensionsInput = {
    set: $Enums.Extension[]
  }

  export type RoleCreateNestedOneWithoutSubrolesInput = {
    create?: XOR<RoleCreateWithoutSubrolesInput, RoleUncheckedCreateWithoutSubrolesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutSubrolesInput
    connect?: RoleWhereUniqueInput
  }

  export type HostCreateNestedOneWithoutSubrolesInput = {
    create?: XOR<HostCreateWithoutSubrolesInput, HostUncheckedCreateWithoutSubrolesInput>
    connectOrCreate?: HostCreateOrConnectWithoutSubrolesInput
    connect?: HostWhereUniqueInput
  }

  export type SubroleUpdateextensionsInput = {
    set?: $Enums.Extension[]
    push?: $Enums.Extension | $Enums.Extension[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RoleUpdateOneRequiredWithoutSubrolesNestedInput = {
    create?: XOR<RoleCreateWithoutSubrolesInput, RoleUncheckedCreateWithoutSubrolesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutSubrolesInput
    upsert?: RoleUpsertWithoutSubrolesInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutSubrolesInput, RoleUpdateWithoutSubrolesInput>, RoleUncheckedUpdateWithoutSubrolesInput>
  }

  export type HostUpdateOneRequiredWithoutSubrolesNestedInput = {
    create?: XOR<HostCreateWithoutSubrolesInput, HostUncheckedCreateWithoutSubrolesInput>
    connectOrCreate?: HostCreateOrConnectWithoutSubrolesInput
    upsert?: HostUpsertWithoutSubrolesInput
    connect?: HostWhereUniqueInput
    update?: XOR<XOR<HostUpdateToOneWithWhereWithoutSubrolesInput, HostUpdateWithoutSubrolesInput>, HostUncheckedUpdateWithoutSubrolesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Buffer | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Buffer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Buffer
  }

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Buffer
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type RoleCreateWithoutUsersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    subroles?: SubroleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    subroles?: SubroleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type RoleUpsertWithWhereUniqueWithoutUsersInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutUsersInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateManyWithWhereWithoutUsersInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutUsersInput>
  }

  export type RoleScalarWhereInput = {
    AND?: RoleScalarWhereInput | RoleScalarWhereInput[]
    OR?: RoleScalarWhereInput[]
    NOT?: RoleScalarWhereInput | RoleScalarWhereInput[]
    id?: StringFilter<"Role"> | string
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    name?: StringFilter<"Role"> | string
  }

  export type UserCreateWithoutRolesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    fingerprint?: Buffer | null
  }

  export type UserUncheckedCreateWithoutRolesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    fingerprint?: Buffer | null
  }

  export type UserCreateOrConnectWithoutRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type SubroleCreateWithoutRoleInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    extensions?: SubroleCreateextensionsInput | $Enums.Extension[]
    force_command?: string | null
    source_address?: string | null
    host: HostCreateNestedOneWithoutSubrolesInput
  }

  export type SubroleUncheckedCreateWithoutRoleInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    hostId: string
    extensions?: SubroleCreateextensionsInput | $Enums.Extension[]
    force_command?: string | null
    source_address?: string | null
  }

  export type SubroleCreateOrConnectWithoutRoleInput = {
    where: SubroleWhereUniqueInput
    create: XOR<SubroleCreateWithoutRoleInput, SubroleUncheckedCreateWithoutRoleInput>
  }

  export type SubroleCreateManyRoleInputEnvelope = {
    data: SubroleCreateManyRoleInput | SubroleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRolesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRolesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
  }

  export type UserUpdateManyWithWhereWithoutRolesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRolesInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    fingerprint?: BytesNullableFilter<"User"> | Buffer | null
  }

  export type SubroleUpsertWithWhereUniqueWithoutRoleInput = {
    where: SubroleWhereUniqueInput
    update: XOR<SubroleUpdateWithoutRoleInput, SubroleUncheckedUpdateWithoutRoleInput>
    create: XOR<SubroleCreateWithoutRoleInput, SubroleUncheckedCreateWithoutRoleInput>
  }

  export type SubroleUpdateWithWhereUniqueWithoutRoleInput = {
    where: SubroleWhereUniqueInput
    data: XOR<SubroleUpdateWithoutRoleInput, SubroleUncheckedUpdateWithoutRoleInput>
  }

  export type SubroleUpdateManyWithWhereWithoutRoleInput = {
    where: SubroleScalarWhereInput
    data: XOR<SubroleUpdateManyMutationInput, SubroleUncheckedUpdateManyWithoutRoleInput>
  }

  export type SubroleScalarWhereInput = {
    AND?: SubroleScalarWhereInput | SubroleScalarWhereInput[]
    OR?: SubroleScalarWhereInput[]
    NOT?: SubroleScalarWhereInput | SubroleScalarWhereInput[]
    id?: StringFilter<"Subrole"> | string
    createdAt?: DateTimeFilter<"Subrole"> | Date | string
    updatedAt?: DateTimeFilter<"Subrole"> | Date | string
    username?: StringFilter<"Subrole"> | string
    hostId?: StringFilter<"Subrole"> | string
    roleId?: StringFilter<"Subrole"> | string
    extensions?: EnumExtensionNullableListFilter<"Subrole">
    force_command?: StringNullableFilter<"Subrole"> | string | null
    source_address?: StringNullableFilter<"Subrole"> | string | null
  }

  export type SubroleCreateWithoutHostInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    extensions?: SubroleCreateextensionsInput | $Enums.Extension[]
    force_command?: string | null
    source_address?: string | null
    role: RoleCreateNestedOneWithoutSubrolesInput
  }

  export type SubroleUncheckedCreateWithoutHostInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    roleId: string
    extensions?: SubroleCreateextensionsInput | $Enums.Extension[]
    force_command?: string | null
    source_address?: string | null
  }

  export type SubroleCreateOrConnectWithoutHostInput = {
    where: SubroleWhereUniqueInput
    create: XOR<SubroleCreateWithoutHostInput, SubroleUncheckedCreateWithoutHostInput>
  }

  export type SubroleCreateManyHostInputEnvelope = {
    data: SubroleCreateManyHostInput | SubroleCreateManyHostInput[]
    skipDuplicates?: boolean
  }

  export type SubroleUpsertWithWhereUniqueWithoutHostInput = {
    where: SubroleWhereUniqueInput
    update: XOR<SubroleUpdateWithoutHostInput, SubroleUncheckedUpdateWithoutHostInput>
    create: XOR<SubroleCreateWithoutHostInput, SubroleUncheckedCreateWithoutHostInput>
  }

  export type SubroleUpdateWithWhereUniqueWithoutHostInput = {
    where: SubroleWhereUniqueInput
    data: XOR<SubroleUpdateWithoutHostInput, SubroleUncheckedUpdateWithoutHostInput>
  }

  export type SubroleUpdateManyWithWhereWithoutHostInput = {
    where: SubroleScalarWhereInput
    data: XOR<SubroleUpdateManyMutationInput, SubroleUncheckedUpdateManyWithoutHostInput>
  }

  export type RoleCreateWithoutSubrolesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    users?: UserCreateNestedManyWithoutRolesInput
  }

  export type RoleUncheckedCreateWithoutSubrolesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    users?: UserUncheckedCreateNestedManyWithoutRolesInput
  }

  export type RoleCreateOrConnectWithoutSubrolesInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutSubrolesInput, RoleUncheckedCreateWithoutSubrolesInput>
  }

  export type HostCreateWithoutSubrolesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    hostname: string
    caKey: string
    fingerprint?: Buffer | null
  }

  export type HostUncheckedCreateWithoutSubrolesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    hostname: string
    caKey: string
    fingerprint?: Buffer | null
  }

  export type HostCreateOrConnectWithoutSubrolesInput = {
    where: HostWhereUniqueInput
    create: XOR<HostCreateWithoutSubrolesInput, HostUncheckedCreateWithoutSubrolesInput>
  }

  export type RoleUpsertWithoutSubrolesInput = {
    update: XOR<RoleUpdateWithoutSubrolesInput, RoleUncheckedUpdateWithoutSubrolesInput>
    create: XOR<RoleCreateWithoutSubrolesInput, RoleUncheckedCreateWithoutSubrolesInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutSubrolesInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutSubrolesInput, RoleUncheckedUpdateWithoutSubrolesInput>
  }

  export type RoleUpdateWithoutSubrolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateWithoutSubrolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type HostUpsertWithoutSubrolesInput = {
    update: XOR<HostUpdateWithoutSubrolesInput, HostUncheckedUpdateWithoutSubrolesInput>
    create: XOR<HostCreateWithoutSubrolesInput, HostUncheckedCreateWithoutSubrolesInput>
    where?: HostWhereInput
  }

  export type HostUpdateToOneWithWhereWithoutSubrolesInput = {
    where?: HostWhereInput
    data: XOR<HostUpdateWithoutSubrolesInput, HostUncheckedUpdateWithoutSubrolesInput>
  }

  export type HostUpdateWithoutSubrolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    hostname?: StringFieldUpdateOperationsInput | string
    caKey?: StringFieldUpdateOperationsInput | string
    fingerprint?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type HostUncheckedUpdateWithoutSubrolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    hostname?: StringFieldUpdateOperationsInput | string
    caKey?: StringFieldUpdateOperationsInput | string
    fingerprint?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type RoleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    subroles?: SubroleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    subroles?: SubroleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SubroleCreateManyRoleInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    hostId: string
    extensions?: SubroleCreateextensionsInput | $Enums.Extension[]
    force_command?: string | null
    source_address?: string | null
  }

  export type UserUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fingerprint?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type UserUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fingerprint?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type UserUncheckedUpdateManyWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fingerprint?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type SubroleUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    extensions?: SubroleUpdateextensionsInput | $Enums.Extension[]
    force_command?: NullableStringFieldUpdateOperationsInput | string | null
    source_address?: NullableStringFieldUpdateOperationsInput | string | null
    host?: HostUpdateOneRequiredWithoutSubrolesNestedInput
  }

  export type SubroleUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    hostId?: StringFieldUpdateOperationsInput | string
    extensions?: SubroleUpdateextensionsInput | $Enums.Extension[]
    force_command?: NullableStringFieldUpdateOperationsInput | string | null
    source_address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubroleUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    hostId?: StringFieldUpdateOperationsInput | string
    extensions?: SubroleUpdateextensionsInput | $Enums.Extension[]
    force_command?: NullableStringFieldUpdateOperationsInput | string | null
    source_address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubroleCreateManyHostInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    roleId: string
    extensions?: SubroleCreateextensionsInput | $Enums.Extension[]
    force_command?: string | null
    source_address?: string | null
  }

  export type SubroleUpdateWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    extensions?: SubroleUpdateextensionsInput | $Enums.Extension[]
    force_command?: NullableStringFieldUpdateOperationsInput | string | null
    source_address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: RoleUpdateOneRequiredWithoutSubrolesNestedInput
  }

  export type SubroleUncheckedUpdateWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    extensions?: SubroleUpdateextensionsInput | $Enums.Extension[]
    force_command?: NullableStringFieldUpdateOperationsInput | string | null
    source_address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubroleUncheckedUpdateManyWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    extensions?: SubroleUpdateextensionsInput | $Enums.Extension[]
    force_command?: NullableStringFieldUpdateOperationsInput | string | null
    source_address?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleCountOutputTypeDefaultArgs instead
     */
    export type RoleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HostCountOutputTypeDefaultArgs instead
     */
    export type HostCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HostCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleDefaultArgs instead
     */
    export type RoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HostDefaultArgs instead
     */
    export type HostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HostDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HostVerificationDefaultArgs instead
     */
    export type HostVerificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HostVerificationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubroleDefaultArgs instead
     */
    export type SubroleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubroleDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}