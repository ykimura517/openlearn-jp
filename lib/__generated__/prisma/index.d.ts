
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
 * Model MasterCategory
 * 
 */
export type MasterCategory = $Result.DefaultSelection<Prisma.$MasterCategoryPayload>
/**
 * Model MasterTag
 * 
 */
export type MasterTag = $Result.DefaultSelection<Prisma.$MasterTagPayload>
/**
 * Model MasterCourse
 * 
 */
export type MasterCourse = $Result.DefaultSelection<Prisma.$MasterCoursePayload>
/**
 * Model MasterCourseContent
 * 
 */
export type MasterCourseContent = $Result.DefaultSelection<Prisma.$MasterCourseContentPayload>
/**
 * Model MasterExercise
 * 
 */
export type MasterExercise = $Result.DefaultSelection<Prisma.$MasterExercisePayload>
/**
 * Model ChatRoom
 * 
 */
export type ChatRoom = $Result.DefaultSelection<Prisma.$ChatRoomPayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>
/**
 * Model MasterCourseFAQ
 * 
 */
export type MasterCourseFAQ = $Result.DefaultSelection<Prisma.$MasterCourseFAQPayload>
/**
 * Model MasterExam
 * 
 */
export type MasterExam = $Result.DefaultSelection<Prisma.$MasterExamPayload>
/**
 * Model MasterExamQuestion
 * 
 */
export type MasterExamQuestion = $Result.DefaultSelection<Prisma.$MasterExamQuestionPayload>
/**
 * Model ExamSubmission
 * 
 */
export type ExamSubmission = $Result.DefaultSelection<Prisma.$ExamSubmissionPayload>
/**
 * Model ExamAnswer
 * 
 */
export type ExamAnswer = $Result.DefaultSelection<Prisma.$ExamAnswerPayload>

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
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.masterCategory`: Exposes CRUD operations for the **MasterCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MasterCategories
    * const masterCategories = await prisma.masterCategory.findMany()
    * ```
    */
  get masterCategory(): Prisma.MasterCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.masterTag`: Exposes CRUD operations for the **MasterTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MasterTags
    * const masterTags = await prisma.masterTag.findMany()
    * ```
    */
  get masterTag(): Prisma.MasterTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.masterCourse`: Exposes CRUD operations for the **MasterCourse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MasterCourses
    * const masterCourses = await prisma.masterCourse.findMany()
    * ```
    */
  get masterCourse(): Prisma.MasterCourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.masterCourseContent`: Exposes CRUD operations for the **MasterCourseContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MasterCourseContents
    * const masterCourseContents = await prisma.masterCourseContent.findMany()
    * ```
    */
  get masterCourseContent(): Prisma.MasterCourseContentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.masterExercise`: Exposes CRUD operations for the **MasterExercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MasterExercises
    * const masterExercises = await prisma.masterExercise.findMany()
    * ```
    */
  get masterExercise(): Prisma.MasterExerciseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatRoom`: Exposes CRUD operations for the **ChatRoom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatRooms
    * const chatRooms = await prisma.chatRoom.findMany()
    * ```
    */
  get chatRoom(): Prisma.ChatRoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.masterCourseFAQ`: Exposes CRUD operations for the **MasterCourseFAQ** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MasterCourseFAQS
    * const masterCourseFAQS = await prisma.masterCourseFAQ.findMany()
    * ```
    */
  get masterCourseFAQ(): Prisma.MasterCourseFAQDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.masterExam`: Exposes CRUD operations for the **MasterExam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MasterExams
    * const masterExams = await prisma.masterExam.findMany()
    * ```
    */
  get masterExam(): Prisma.MasterExamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.masterExamQuestion`: Exposes CRUD operations for the **MasterExamQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MasterExamQuestions
    * const masterExamQuestions = await prisma.masterExamQuestion.findMany()
    * ```
    */
  get masterExamQuestion(): Prisma.MasterExamQuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.examSubmission`: Exposes CRUD operations for the **ExamSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExamSubmissions
    * const examSubmissions = await prisma.examSubmission.findMany()
    * ```
    */
  get examSubmission(): Prisma.ExamSubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.examAnswer`: Exposes CRUD operations for the **ExamAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExamAnswers
    * const examAnswers = await prisma.examAnswer.findMany()
    * ```
    */
  get examAnswer(): Prisma.ExamAnswerDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    MasterCategory: 'MasterCategory',
    MasterTag: 'MasterTag',
    MasterCourse: 'MasterCourse',
    MasterCourseContent: 'MasterCourseContent',
    MasterExercise: 'MasterExercise',
    ChatRoom: 'ChatRoom',
    ChatMessage: 'ChatMessage',
    MasterCourseFAQ: 'MasterCourseFAQ',
    MasterExam: 'MasterExam',
    MasterExamQuestion: 'MasterExamQuestion',
    ExamSubmission: 'ExamSubmission',
    ExamAnswer: 'ExamAnswer'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "masterCategory" | "masterTag" | "masterCourse" | "masterCourseContent" | "masterExercise" | "chatRoom" | "chatMessage" | "masterCourseFAQ" | "masterExam" | "masterExamQuestion" | "examSubmission" | "examAnswer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      MasterCategory: {
        payload: Prisma.$MasterCategoryPayload<ExtArgs>
        fields: Prisma.MasterCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MasterCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MasterCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCategoryPayload>
          }
          findFirst: {
            args: Prisma.MasterCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MasterCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCategoryPayload>
          }
          findMany: {
            args: Prisma.MasterCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCategoryPayload>[]
          }
          create: {
            args: Prisma.MasterCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCategoryPayload>
          }
          createMany: {
            args: Prisma.MasterCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MasterCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCategoryPayload>[]
          }
          delete: {
            args: Prisma.MasterCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCategoryPayload>
          }
          update: {
            args: Prisma.MasterCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCategoryPayload>
          }
          deleteMany: {
            args: Prisma.MasterCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MasterCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MasterCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCategoryPayload>[]
          }
          upsert: {
            args: Prisma.MasterCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCategoryPayload>
          }
          aggregate: {
            args: Prisma.MasterCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMasterCategory>
          }
          groupBy: {
            args: Prisma.MasterCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MasterCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MasterCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<MasterCategoryCountAggregateOutputType> | number
          }
        }
      }
      MasterTag: {
        payload: Prisma.$MasterTagPayload<ExtArgs>
        fields: Prisma.MasterTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MasterTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MasterTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterTagPayload>
          }
          findFirst: {
            args: Prisma.MasterTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MasterTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterTagPayload>
          }
          findMany: {
            args: Prisma.MasterTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterTagPayload>[]
          }
          create: {
            args: Prisma.MasterTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterTagPayload>
          }
          createMany: {
            args: Prisma.MasterTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MasterTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterTagPayload>[]
          }
          delete: {
            args: Prisma.MasterTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterTagPayload>
          }
          update: {
            args: Prisma.MasterTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterTagPayload>
          }
          deleteMany: {
            args: Prisma.MasterTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MasterTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MasterTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterTagPayload>[]
          }
          upsert: {
            args: Prisma.MasterTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterTagPayload>
          }
          aggregate: {
            args: Prisma.MasterTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMasterTag>
          }
          groupBy: {
            args: Prisma.MasterTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<MasterTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.MasterTagCountArgs<ExtArgs>
            result: $Utils.Optional<MasterTagCountAggregateOutputType> | number
          }
        }
      }
      MasterCourse: {
        payload: Prisma.$MasterCoursePayload<ExtArgs>
        fields: Prisma.MasterCourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MasterCourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MasterCourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCoursePayload>
          }
          findFirst: {
            args: Prisma.MasterCourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MasterCourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCoursePayload>
          }
          findMany: {
            args: Prisma.MasterCourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCoursePayload>[]
          }
          create: {
            args: Prisma.MasterCourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCoursePayload>
          }
          createMany: {
            args: Prisma.MasterCourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MasterCourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCoursePayload>[]
          }
          delete: {
            args: Prisma.MasterCourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCoursePayload>
          }
          update: {
            args: Prisma.MasterCourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCoursePayload>
          }
          deleteMany: {
            args: Prisma.MasterCourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MasterCourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MasterCourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCoursePayload>[]
          }
          upsert: {
            args: Prisma.MasterCourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCoursePayload>
          }
          aggregate: {
            args: Prisma.MasterCourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMasterCourse>
          }
          groupBy: {
            args: Prisma.MasterCourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<MasterCourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.MasterCourseCountArgs<ExtArgs>
            result: $Utils.Optional<MasterCourseCountAggregateOutputType> | number
          }
        }
      }
      MasterCourseContent: {
        payload: Prisma.$MasterCourseContentPayload<ExtArgs>
        fields: Prisma.MasterCourseContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MasterCourseContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCourseContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MasterCourseContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCourseContentPayload>
          }
          findFirst: {
            args: Prisma.MasterCourseContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCourseContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MasterCourseContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCourseContentPayload>
          }
          findMany: {
            args: Prisma.MasterCourseContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCourseContentPayload>[]
          }
          create: {
            args: Prisma.MasterCourseContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCourseContentPayload>
          }
          createMany: {
            args: Prisma.MasterCourseContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MasterCourseContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCourseContentPayload>[]
          }
          delete: {
            args: Prisma.MasterCourseContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCourseContentPayload>
          }
          update: {
            args: Prisma.MasterCourseContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCourseContentPayload>
          }
          deleteMany: {
            args: Prisma.MasterCourseContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MasterCourseContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MasterCourseContentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCourseContentPayload>[]
          }
          upsert: {
            args: Prisma.MasterCourseContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCourseContentPayload>
          }
          aggregate: {
            args: Prisma.MasterCourseContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMasterCourseContent>
          }
          groupBy: {
            args: Prisma.MasterCourseContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<MasterCourseContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.MasterCourseContentCountArgs<ExtArgs>
            result: $Utils.Optional<MasterCourseContentCountAggregateOutputType> | number
          }
        }
      }
      MasterExercise: {
        payload: Prisma.$MasterExercisePayload<ExtArgs>
        fields: Prisma.MasterExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MasterExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MasterExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterExercisePayload>
          }
          findFirst: {
            args: Prisma.MasterExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MasterExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterExercisePayload>
          }
          findMany: {
            args: Prisma.MasterExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterExercisePayload>[]
          }
          create: {
            args: Prisma.MasterExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterExercisePayload>
          }
          createMany: {
            args: Prisma.MasterExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MasterExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterExercisePayload>[]
          }
          delete: {
            args: Prisma.MasterExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterExercisePayload>
          }
          update: {
            args: Prisma.MasterExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterExercisePayload>
          }
          deleteMany: {
            args: Prisma.MasterExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MasterExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MasterExerciseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterExercisePayload>[]
          }
          upsert: {
            args: Prisma.MasterExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterExercisePayload>
          }
          aggregate: {
            args: Prisma.MasterExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMasterExercise>
          }
          groupBy: {
            args: Prisma.MasterExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<MasterExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.MasterExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<MasterExerciseCountAggregateOutputType> | number
          }
        }
      }
      ChatRoom: {
        payload: Prisma.$ChatRoomPayload<ExtArgs>
        fields: Prisma.ChatRoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatRoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatRoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          findFirst: {
            args: Prisma.ChatRoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatRoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          findMany: {
            args: Prisma.ChatRoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>[]
          }
          create: {
            args: Prisma.ChatRoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          createMany: {
            args: Prisma.ChatRoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatRoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>[]
          }
          delete: {
            args: Prisma.ChatRoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          update: {
            args: Prisma.ChatRoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          deleteMany: {
            args: Prisma.ChatRoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatRoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatRoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>[]
          }
          upsert: {
            args: Prisma.ChatRoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          aggregate: {
            args: Prisma.ChatRoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatRoom>
          }
          groupBy: {
            args: Prisma.ChatRoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatRoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatRoomCountArgs<ExtArgs>
            result: $Utils.Optional<ChatRoomCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
      MasterCourseFAQ: {
        payload: Prisma.$MasterCourseFAQPayload<ExtArgs>
        fields: Prisma.MasterCourseFAQFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MasterCourseFAQFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCourseFAQPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MasterCourseFAQFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCourseFAQPayload>
          }
          findFirst: {
            args: Prisma.MasterCourseFAQFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCourseFAQPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MasterCourseFAQFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCourseFAQPayload>
          }
          findMany: {
            args: Prisma.MasterCourseFAQFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCourseFAQPayload>[]
          }
          create: {
            args: Prisma.MasterCourseFAQCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCourseFAQPayload>
          }
          createMany: {
            args: Prisma.MasterCourseFAQCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MasterCourseFAQCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCourseFAQPayload>[]
          }
          delete: {
            args: Prisma.MasterCourseFAQDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCourseFAQPayload>
          }
          update: {
            args: Prisma.MasterCourseFAQUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCourseFAQPayload>
          }
          deleteMany: {
            args: Prisma.MasterCourseFAQDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MasterCourseFAQUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MasterCourseFAQUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCourseFAQPayload>[]
          }
          upsert: {
            args: Prisma.MasterCourseFAQUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterCourseFAQPayload>
          }
          aggregate: {
            args: Prisma.MasterCourseFAQAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMasterCourseFAQ>
          }
          groupBy: {
            args: Prisma.MasterCourseFAQGroupByArgs<ExtArgs>
            result: $Utils.Optional<MasterCourseFAQGroupByOutputType>[]
          }
          count: {
            args: Prisma.MasterCourseFAQCountArgs<ExtArgs>
            result: $Utils.Optional<MasterCourseFAQCountAggregateOutputType> | number
          }
        }
      }
      MasterExam: {
        payload: Prisma.$MasterExamPayload<ExtArgs>
        fields: Prisma.MasterExamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MasterExamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterExamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MasterExamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterExamPayload>
          }
          findFirst: {
            args: Prisma.MasterExamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterExamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MasterExamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterExamPayload>
          }
          findMany: {
            args: Prisma.MasterExamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterExamPayload>[]
          }
          create: {
            args: Prisma.MasterExamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterExamPayload>
          }
          createMany: {
            args: Prisma.MasterExamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MasterExamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterExamPayload>[]
          }
          delete: {
            args: Prisma.MasterExamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterExamPayload>
          }
          update: {
            args: Prisma.MasterExamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterExamPayload>
          }
          deleteMany: {
            args: Prisma.MasterExamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MasterExamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MasterExamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterExamPayload>[]
          }
          upsert: {
            args: Prisma.MasterExamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterExamPayload>
          }
          aggregate: {
            args: Prisma.MasterExamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMasterExam>
          }
          groupBy: {
            args: Prisma.MasterExamGroupByArgs<ExtArgs>
            result: $Utils.Optional<MasterExamGroupByOutputType>[]
          }
          count: {
            args: Prisma.MasterExamCountArgs<ExtArgs>
            result: $Utils.Optional<MasterExamCountAggregateOutputType> | number
          }
        }
      }
      MasterExamQuestion: {
        payload: Prisma.$MasterExamQuestionPayload<ExtArgs>
        fields: Prisma.MasterExamQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MasterExamQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterExamQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MasterExamQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterExamQuestionPayload>
          }
          findFirst: {
            args: Prisma.MasterExamQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterExamQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MasterExamQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterExamQuestionPayload>
          }
          findMany: {
            args: Prisma.MasterExamQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterExamQuestionPayload>[]
          }
          create: {
            args: Prisma.MasterExamQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterExamQuestionPayload>
          }
          createMany: {
            args: Prisma.MasterExamQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MasterExamQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterExamQuestionPayload>[]
          }
          delete: {
            args: Prisma.MasterExamQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterExamQuestionPayload>
          }
          update: {
            args: Prisma.MasterExamQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterExamQuestionPayload>
          }
          deleteMany: {
            args: Prisma.MasterExamQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MasterExamQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MasterExamQuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterExamQuestionPayload>[]
          }
          upsert: {
            args: Prisma.MasterExamQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterExamQuestionPayload>
          }
          aggregate: {
            args: Prisma.MasterExamQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMasterExamQuestion>
          }
          groupBy: {
            args: Prisma.MasterExamQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MasterExamQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MasterExamQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<MasterExamQuestionCountAggregateOutputType> | number
          }
        }
      }
      ExamSubmission: {
        payload: Prisma.$ExamSubmissionPayload<ExtArgs>
        fields: Prisma.ExamSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSubmissionPayload>
          }
          findFirst: {
            args: Prisma.ExamSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSubmissionPayload>
          }
          findMany: {
            args: Prisma.ExamSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSubmissionPayload>[]
          }
          create: {
            args: Prisma.ExamSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSubmissionPayload>
          }
          createMany: {
            args: Prisma.ExamSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExamSubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSubmissionPayload>[]
          }
          delete: {
            args: Prisma.ExamSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSubmissionPayload>
          }
          update: {
            args: Prisma.ExamSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.ExamSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExamSubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSubmissionPayload>[]
          }
          upsert: {
            args: Prisma.ExamSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSubmissionPayload>
          }
          aggregate: {
            args: Prisma.ExamSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExamSubmission>
          }
          groupBy: {
            args: Prisma.ExamSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<ExamSubmissionCountAggregateOutputType> | number
          }
        }
      }
      ExamAnswer: {
        payload: Prisma.$ExamAnswerPayload<ExtArgs>
        fields: Prisma.ExamAnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamAnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamAnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAnswerPayload>
          }
          findFirst: {
            args: Prisma.ExamAnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamAnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAnswerPayload>
          }
          findMany: {
            args: Prisma.ExamAnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAnswerPayload>[]
          }
          create: {
            args: Prisma.ExamAnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAnswerPayload>
          }
          createMany: {
            args: Prisma.ExamAnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExamAnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAnswerPayload>[]
          }
          delete: {
            args: Prisma.ExamAnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAnswerPayload>
          }
          update: {
            args: Prisma.ExamAnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAnswerPayload>
          }
          deleteMany: {
            args: Prisma.ExamAnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamAnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExamAnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAnswerPayload>[]
          }
          upsert: {
            args: Prisma.ExamAnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAnswerPayload>
          }
          aggregate: {
            args: Prisma.ExamAnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExamAnswer>
          }
          groupBy: {
            args: Prisma.ExamAnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamAnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamAnswerCountArgs<ExtArgs>
            result: $Utils.Optional<ExamAnswerCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    masterCategory?: MasterCategoryOmit
    masterTag?: MasterTagOmit
    masterCourse?: MasterCourseOmit
    masterCourseContent?: MasterCourseContentOmit
    masterExercise?: MasterExerciseOmit
    chatRoom?: ChatRoomOmit
    chatMessage?: ChatMessageOmit
    masterCourseFAQ?: MasterCourseFAQOmit
    masterExam?: MasterExamOmit
    masterExamQuestion?: MasterExamQuestionOmit
    examSubmission?: ExamSubmissionOmit
    examAnswer?: ExamAnswerOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
    examSubmissions: number
    chatMessages: number
    chatRoom: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examSubmissions?: boolean | UserCountOutputTypeCountExamSubmissionsArgs
    chatMessages?: boolean | UserCountOutputTypeCountChatMessagesArgs
    chatRoom?: boolean | UserCountOutputTypeCountChatRoomArgs
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
  export type UserCountOutputTypeCountExamSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamSubmissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatRoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomWhereInput
  }


  /**
   * Count Type MasterCategoryCountOutputType
   */

  export type MasterCategoryCountOutputType = {
    children: number
    courses: number
    exams: number
  }

  export type MasterCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | MasterCategoryCountOutputTypeCountChildrenArgs
    courses?: boolean | MasterCategoryCountOutputTypeCountCoursesArgs
    exams?: boolean | MasterCategoryCountOutputTypeCountExamsArgs
  }

  // Custom InputTypes
  /**
   * MasterCategoryCountOutputType without action
   */
  export type MasterCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCategoryCountOutputType
     */
    select?: MasterCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MasterCategoryCountOutputType without action
   */
  export type MasterCategoryCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterCategoryWhereInput
  }

  /**
   * MasterCategoryCountOutputType without action
   */
  export type MasterCategoryCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterCourseWhereInput
  }

  /**
   * MasterCategoryCountOutputType without action
   */
  export type MasterCategoryCountOutputTypeCountExamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterExamWhereInput
  }


  /**
   * Count Type MasterTagCountOutputType
   */

  export type MasterTagCountOutputType = {
    courses: number
  }

  export type MasterTagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | MasterTagCountOutputTypeCountCoursesArgs
  }

  // Custom InputTypes
  /**
   * MasterTagCountOutputType without action
   */
  export type MasterTagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterTagCountOutputType
     */
    select?: MasterTagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MasterTagCountOutputType without action
   */
  export type MasterTagCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterCourseWhereInput
  }


  /**
   * Count Type MasterCourseCountOutputType
   */

  export type MasterCourseCountOutputType = {
    tags: number
    courseContents: number
    relatedCourses: number
    relatedToCourses: number
    courseFAQs: number
  }

  export type MasterCourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | MasterCourseCountOutputTypeCountTagsArgs
    courseContents?: boolean | MasterCourseCountOutputTypeCountCourseContentsArgs
    relatedCourses?: boolean | MasterCourseCountOutputTypeCountRelatedCoursesArgs
    relatedToCourses?: boolean | MasterCourseCountOutputTypeCountRelatedToCoursesArgs
    courseFAQs?: boolean | MasterCourseCountOutputTypeCountCourseFAQsArgs
  }

  // Custom InputTypes
  /**
   * MasterCourseCountOutputType without action
   */
  export type MasterCourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourseCountOutputType
     */
    select?: MasterCourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MasterCourseCountOutputType without action
   */
  export type MasterCourseCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterTagWhereInput
  }

  /**
   * MasterCourseCountOutputType without action
   */
  export type MasterCourseCountOutputTypeCountCourseContentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterCourseContentWhereInput
  }

  /**
   * MasterCourseCountOutputType without action
   */
  export type MasterCourseCountOutputTypeCountRelatedCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterCourseWhereInput
  }

  /**
   * MasterCourseCountOutputType without action
   */
  export type MasterCourseCountOutputTypeCountRelatedToCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterCourseWhereInput
  }

  /**
   * MasterCourseCountOutputType without action
   */
  export type MasterCourseCountOutputTypeCountCourseFAQsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterCourseFAQWhereInput
  }


  /**
   * Count Type MasterCourseContentCountOutputType
   */

  export type MasterCourseContentCountOutputType = {
    exercises: number
    chatMessages: number
    chatRoom: number
  }

  export type MasterCourseContentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | MasterCourseContentCountOutputTypeCountExercisesArgs
    chatMessages?: boolean | MasterCourseContentCountOutputTypeCountChatMessagesArgs
    chatRoom?: boolean | MasterCourseContentCountOutputTypeCountChatRoomArgs
  }

  // Custom InputTypes
  /**
   * MasterCourseContentCountOutputType without action
   */
  export type MasterCourseContentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourseContentCountOutputType
     */
    select?: MasterCourseContentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MasterCourseContentCountOutputType without action
   */
  export type MasterCourseContentCountOutputTypeCountExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterExerciseWhereInput
  }

  /**
   * MasterCourseContentCountOutputType without action
   */
  export type MasterCourseContentCountOutputTypeCountChatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }

  /**
   * MasterCourseContentCountOutputType without action
   */
  export type MasterCourseContentCountOutputTypeCountChatRoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomWhereInput
  }


  /**
   * Count Type ChatRoomCountOutputType
   */

  export type ChatRoomCountOutputType = {
    chatMessage: number
  }

  export type ChatRoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatMessage?: boolean | ChatRoomCountOutputTypeCountChatMessageArgs
  }

  // Custom InputTypes
  /**
   * ChatRoomCountOutputType without action
   */
  export type ChatRoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomCountOutputType
     */
    select?: ChatRoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatRoomCountOutputType without action
   */
  export type ChatRoomCountOutputTypeCountChatMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }


  /**
   * Count Type MasterExamCountOutputType
   */

  export type MasterExamCountOutputType = {
    examQuestions: number
    ExamSubmission: number
  }

  export type MasterExamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examQuestions?: boolean | MasterExamCountOutputTypeCountExamQuestionsArgs
    ExamSubmission?: boolean | MasterExamCountOutputTypeCountExamSubmissionArgs
  }

  // Custom InputTypes
  /**
   * MasterExamCountOutputType without action
   */
  export type MasterExamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExamCountOutputType
     */
    select?: MasterExamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MasterExamCountOutputType without action
   */
  export type MasterExamCountOutputTypeCountExamQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterExamQuestionWhereInput
  }

  /**
   * MasterExamCountOutputType without action
   */
  export type MasterExamCountOutputTypeCountExamSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamSubmissionWhereInput
  }


  /**
   * Count Type MasterExamQuestionCountOutputType
   */

  export type MasterExamQuestionCountOutputType = {
    ExamAnswer: number
  }

  export type MasterExamQuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ExamAnswer?: boolean | MasterExamQuestionCountOutputTypeCountExamAnswerArgs
  }

  // Custom InputTypes
  /**
   * MasterExamQuestionCountOutputType without action
   */
  export type MasterExamQuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExamQuestionCountOutputType
     */
    select?: MasterExamQuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MasterExamQuestionCountOutputType without action
   */
  export type MasterExamQuestionCountOutputTypeCountExamAnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamAnswerWhereInput
  }


  /**
   * Count Type ExamSubmissionCountOutputType
   */

  export type ExamSubmissionCountOutputType = {
    examAnswers: number
  }

  export type ExamSubmissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examAnswers?: boolean | ExamSubmissionCountOutputTypeCountExamAnswersArgs
  }

  // Custom InputTypes
  /**
   * ExamSubmissionCountOutputType without action
   */
  export type ExamSubmissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmissionCountOutputType
     */
    select?: ExamSubmissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExamSubmissionCountOutputType without action
   */
  export type ExamSubmissionCountOutputTypeCountExamAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamAnswerWhereInput
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
    displayId: string | null
    firebaseUserId: string | null
    stripeUserId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    plan: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    displayId: string | null
    firebaseUserId: string | null
    stripeUserId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    plan: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    displayId: number
    firebaseUserId: number
    stripeUserId: number
    createdAt: number
    updatedAt: number
    plan: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    displayId?: true
    firebaseUserId?: true
    stripeUserId?: true
    createdAt?: true
    updatedAt?: true
    plan?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    displayId?: true
    firebaseUserId?: true
    stripeUserId?: true
    createdAt?: true
    updatedAt?: true
    plan?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    displayId?: true
    firebaseUserId?: true
    stripeUserId?: true
    createdAt?: true
    updatedAt?: true
    plan?: true
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
    displayId: string
    firebaseUserId: string
    stripeUserId: string | null
    createdAt: Date
    updatedAt: Date
    plan: string
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
    displayId?: boolean
    firebaseUserId?: boolean
    stripeUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean
    examSubmissions?: boolean | User$examSubmissionsArgs<ExtArgs>
    chatMessages?: boolean | User$chatMessagesArgs<ExtArgs>
    chatRoom?: boolean | User$chatRoomArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    displayId?: boolean
    firebaseUserId?: boolean
    stripeUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    displayId?: boolean
    firebaseUserId?: boolean
    stripeUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    displayId?: boolean
    firebaseUserId?: boolean
    stripeUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "displayId" | "firebaseUserId" | "stripeUserId" | "createdAt" | "updatedAt" | "plan", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examSubmissions?: boolean | User$examSubmissionsArgs<ExtArgs>
    chatMessages?: boolean | User$chatMessagesArgs<ExtArgs>
    chatRoom?: boolean | User$chatRoomArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      examSubmissions: Prisma.$ExamSubmissionPayload<ExtArgs>[]
      chatMessages: Prisma.$ChatMessagePayload<ExtArgs>[]
      chatRoom: Prisma.$ChatRoomPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      displayId: string
      firebaseUserId: string
      stripeUserId: string | null
      createdAt: Date
      updatedAt: Date
      plan: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    examSubmissions<T extends User$examSubmissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$examSubmissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatMessages<T extends User$chatMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$chatMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatRoom<T extends User$chatRoomArgs<ExtArgs> = {}>(args?: Subset<T, User$chatRoomArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly displayId: FieldRef<"User", 'String'>
    readonly firebaseUserId: FieldRef<"User", 'String'>
    readonly stripeUserId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly plan: FieldRef<"User", 'String'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.examSubmissions
   */
  export type User$examSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSubmission
     */
    omit?: ExamSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionInclude<ExtArgs> | null
    where?: ExamSubmissionWhereInput
    orderBy?: ExamSubmissionOrderByWithRelationInput | ExamSubmissionOrderByWithRelationInput[]
    cursor?: ExamSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamSubmissionScalarFieldEnum | ExamSubmissionScalarFieldEnum[]
  }

  /**
   * User.chatMessages
   */
  export type User$chatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * User.chatRoom
   */
  export type User$chatRoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    where?: ChatRoomWhereInput
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    cursor?: ChatRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model MasterCategory
   */

  export type AggregateMasterCategory = {
    _count: MasterCategoryCountAggregateOutputType | null
    _avg: MasterCategoryAvgAggregateOutputType | null
    _sum: MasterCategorySumAggregateOutputType | null
    _min: MasterCategoryMinAggregateOutputType | null
    _max: MasterCategoryMaxAggregateOutputType | null
  }

  export type MasterCategoryAvgAggregateOutputType = {
    level: number | null
  }

  export type MasterCategorySumAggregateOutputType = {
    level: number | null
  }

  export type MasterCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    level: number | null
    parentId: string | null
  }

  export type MasterCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    level: number | null
    parentId: string | null
  }

  export type MasterCategoryCountAggregateOutputType = {
    id: number
    name: number
    level: number
    parentId: number
    _all: number
  }


  export type MasterCategoryAvgAggregateInputType = {
    level?: true
  }

  export type MasterCategorySumAggregateInputType = {
    level?: true
  }

  export type MasterCategoryMinAggregateInputType = {
    id?: true
    name?: true
    level?: true
    parentId?: true
  }

  export type MasterCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    level?: true
    parentId?: true
  }

  export type MasterCategoryCountAggregateInputType = {
    id?: true
    name?: true
    level?: true
    parentId?: true
    _all?: true
  }

  export type MasterCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasterCategory to aggregate.
     */
    where?: MasterCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterCategories to fetch.
     */
    orderBy?: MasterCategoryOrderByWithRelationInput | MasterCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MasterCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MasterCategories
    **/
    _count?: true | MasterCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MasterCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MasterCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MasterCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MasterCategoryMaxAggregateInputType
  }

  export type GetMasterCategoryAggregateType<T extends MasterCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateMasterCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMasterCategory[P]>
      : GetScalarType<T[P], AggregateMasterCategory[P]>
  }




  export type MasterCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterCategoryWhereInput
    orderBy?: MasterCategoryOrderByWithAggregationInput | MasterCategoryOrderByWithAggregationInput[]
    by: MasterCategoryScalarFieldEnum[] | MasterCategoryScalarFieldEnum
    having?: MasterCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MasterCategoryCountAggregateInputType | true
    _avg?: MasterCategoryAvgAggregateInputType
    _sum?: MasterCategorySumAggregateInputType
    _min?: MasterCategoryMinAggregateInputType
    _max?: MasterCategoryMaxAggregateInputType
  }

  export type MasterCategoryGroupByOutputType = {
    id: string
    name: string
    level: number
    parentId: string | null
    _count: MasterCategoryCountAggregateOutputType | null
    _avg: MasterCategoryAvgAggregateOutputType | null
    _sum: MasterCategorySumAggregateOutputType | null
    _min: MasterCategoryMinAggregateOutputType | null
    _max: MasterCategoryMaxAggregateOutputType | null
  }

  type GetMasterCategoryGroupByPayload<T extends MasterCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MasterCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MasterCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MasterCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], MasterCategoryGroupByOutputType[P]>
        }
      >
    >


  export type MasterCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    level?: boolean
    parentId?: boolean
    parent?: boolean | MasterCategory$parentArgs<ExtArgs>
    children?: boolean | MasterCategory$childrenArgs<ExtArgs>
    courses?: boolean | MasterCategory$coursesArgs<ExtArgs>
    exams?: boolean | MasterCategory$examsArgs<ExtArgs>
    _count?: boolean | MasterCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masterCategory"]>

  export type MasterCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    level?: boolean
    parentId?: boolean
    parent?: boolean | MasterCategory$parentArgs<ExtArgs>
  }, ExtArgs["result"]["masterCategory"]>

  export type MasterCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    level?: boolean
    parentId?: boolean
    parent?: boolean | MasterCategory$parentArgs<ExtArgs>
  }, ExtArgs["result"]["masterCategory"]>

  export type MasterCategorySelectScalar = {
    id?: boolean
    name?: boolean
    level?: boolean
    parentId?: boolean
  }

  export type MasterCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "level" | "parentId", ExtArgs["result"]["masterCategory"]>
  export type MasterCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | MasterCategory$parentArgs<ExtArgs>
    children?: boolean | MasterCategory$childrenArgs<ExtArgs>
    courses?: boolean | MasterCategory$coursesArgs<ExtArgs>
    exams?: boolean | MasterCategory$examsArgs<ExtArgs>
    _count?: boolean | MasterCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MasterCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | MasterCategory$parentArgs<ExtArgs>
  }
  export type MasterCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | MasterCategory$parentArgs<ExtArgs>
  }

  export type $MasterCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MasterCategory"
    objects: {
      parent: Prisma.$MasterCategoryPayload<ExtArgs> | null
      children: Prisma.$MasterCategoryPayload<ExtArgs>[]
      courses: Prisma.$MasterCoursePayload<ExtArgs>[]
      exams: Prisma.$MasterExamPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      level: number
      parentId: string | null
    }, ExtArgs["result"]["masterCategory"]>
    composites: {}
  }

  type MasterCategoryGetPayload<S extends boolean | null | undefined | MasterCategoryDefaultArgs> = $Result.GetResult<Prisma.$MasterCategoryPayload, S>

  type MasterCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MasterCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MasterCategoryCountAggregateInputType | true
    }

  export interface MasterCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MasterCategory'], meta: { name: 'MasterCategory' } }
    /**
     * Find zero or one MasterCategory that matches the filter.
     * @param {MasterCategoryFindUniqueArgs} args - Arguments to find a MasterCategory
     * @example
     * // Get one MasterCategory
     * const masterCategory = await prisma.masterCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MasterCategoryFindUniqueArgs>(args: SelectSubset<T, MasterCategoryFindUniqueArgs<ExtArgs>>): Prisma__MasterCategoryClient<$Result.GetResult<Prisma.$MasterCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MasterCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MasterCategoryFindUniqueOrThrowArgs} args - Arguments to find a MasterCategory
     * @example
     * // Get one MasterCategory
     * const masterCategory = await prisma.masterCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MasterCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, MasterCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MasterCategoryClient<$Result.GetResult<Prisma.$MasterCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MasterCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterCategoryFindFirstArgs} args - Arguments to find a MasterCategory
     * @example
     * // Get one MasterCategory
     * const masterCategory = await prisma.masterCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MasterCategoryFindFirstArgs>(args?: SelectSubset<T, MasterCategoryFindFirstArgs<ExtArgs>>): Prisma__MasterCategoryClient<$Result.GetResult<Prisma.$MasterCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MasterCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterCategoryFindFirstOrThrowArgs} args - Arguments to find a MasterCategory
     * @example
     * // Get one MasterCategory
     * const masterCategory = await prisma.masterCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MasterCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, MasterCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MasterCategoryClient<$Result.GetResult<Prisma.$MasterCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MasterCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MasterCategories
     * const masterCategories = await prisma.masterCategory.findMany()
     * 
     * // Get first 10 MasterCategories
     * const masterCategories = await prisma.masterCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const masterCategoryWithIdOnly = await prisma.masterCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MasterCategoryFindManyArgs>(args?: SelectSubset<T, MasterCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MasterCategory.
     * @param {MasterCategoryCreateArgs} args - Arguments to create a MasterCategory.
     * @example
     * // Create one MasterCategory
     * const MasterCategory = await prisma.masterCategory.create({
     *   data: {
     *     // ... data to create a MasterCategory
     *   }
     * })
     * 
     */
    create<T extends MasterCategoryCreateArgs>(args: SelectSubset<T, MasterCategoryCreateArgs<ExtArgs>>): Prisma__MasterCategoryClient<$Result.GetResult<Prisma.$MasterCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MasterCategories.
     * @param {MasterCategoryCreateManyArgs} args - Arguments to create many MasterCategories.
     * @example
     * // Create many MasterCategories
     * const masterCategory = await prisma.masterCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MasterCategoryCreateManyArgs>(args?: SelectSubset<T, MasterCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MasterCategories and returns the data saved in the database.
     * @param {MasterCategoryCreateManyAndReturnArgs} args - Arguments to create many MasterCategories.
     * @example
     * // Create many MasterCategories
     * const masterCategory = await prisma.masterCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MasterCategories and only return the `id`
     * const masterCategoryWithIdOnly = await prisma.masterCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MasterCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, MasterCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MasterCategory.
     * @param {MasterCategoryDeleteArgs} args - Arguments to delete one MasterCategory.
     * @example
     * // Delete one MasterCategory
     * const MasterCategory = await prisma.masterCategory.delete({
     *   where: {
     *     // ... filter to delete one MasterCategory
     *   }
     * })
     * 
     */
    delete<T extends MasterCategoryDeleteArgs>(args: SelectSubset<T, MasterCategoryDeleteArgs<ExtArgs>>): Prisma__MasterCategoryClient<$Result.GetResult<Prisma.$MasterCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MasterCategory.
     * @param {MasterCategoryUpdateArgs} args - Arguments to update one MasterCategory.
     * @example
     * // Update one MasterCategory
     * const masterCategory = await prisma.masterCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MasterCategoryUpdateArgs>(args: SelectSubset<T, MasterCategoryUpdateArgs<ExtArgs>>): Prisma__MasterCategoryClient<$Result.GetResult<Prisma.$MasterCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MasterCategories.
     * @param {MasterCategoryDeleteManyArgs} args - Arguments to filter MasterCategories to delete.
     * @example
     * // Delete a few MasterCategories
     * const { count } = await prisma.masterCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MasterCategoryDeleteManyArgs>(args?: SelectSubset<T, MasterCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MasterCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MasterCategories
     * const masterCategory = await prisma.masterCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MasterCategoryUpdateManyArgs>(args: SelectSubset<T, MasterCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MasterCategories and returns the data updated in the database.
     * @param {MasterCategoryUpdateManyAndReturnArgs} args - Arguments to update many MasterCategories.
     * @example
     * // Update many MasterCategories
     * const masterCategory = await prisma.masterCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MasterCategories and only return the `id`
     * const masterCategoryWithIdOnly = await prisma.masterCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MasterCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, MasterCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MasterCategory.
     * @param {MasterCategoryUpsertArgs} args - Arguments to update or create a MasterCategory.
     * @example
     * // Update or create a MasterCategory
     * const masterCategory = await prisma.masterCategory.upsert({
     *   create: {
     *     // ... data to create a MasterCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MasterCategory we want to update
     *   }
     * })
     */
    upsert<T extends MasterCategoryUpsertArgs>(args: SelectSubset<T, MasterCategoryUpsertArgs<ExtArgs>>): Prisma__MasterCategoryClient<$Result.GetResult<Prisma.$MasterCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MasterCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterCategoryCountArgs} args - Arguments to filter MasterCategories to count.
     * @example
     * // Count the number of MasterCategories
     * const count = await prisma.masterCategory.count({
     *   where: {
     *     // ... the filter for the MasterCategories we want to count
     *   }
     * })
    **/
    count<T extends MasterCategoryCountArgs>(
      args?: Subset<T, MasterCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MasterCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MasterCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MasterCategoryAggregateArgs>(args: Subset<T, MasterCategoryAggregateArgs>): Prisma.PrismaPromise<GetMasterCategoryAggregateType<T>>

    /**
     * Group by MasterCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterCategoryGroupByArgs} args - Group by arguments.
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
      T extends MasterCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MasterCategoryGroupByArgs['orderBy'] }
        : { orderBy?: MasterCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MasterCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMasterCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MasterCategory model
   */
  readonly fields: MasterCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MasterCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MasterCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends MasterCategory$parentArgs<ExtArgs> = {}>(args?: Subset<T, MasterCategory$parentArgs<ExtArgs>>): Prisma__MasterCategoryClient<$Result.GetResult<Prisma.$MasterCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends MasterCategory$childrenArgs<ExtArgs> = {}>(args?: Subset<T, MasterCategory$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    courses<T extends MasterCategory$coursesArgs<ExtArgs> = {}>(args?: Subset<T, MasterCategory$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    exams<T extends MasterCategory$examsArgs<ExtArgs> = {}>(args?: Subset<T, MasterCategory$examsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MasterCategory model
   */ 
  interface MasterCategoryFieldRefs {
    readonly id: FieldRef<"MasterCategory", 'String'>
    readonly name: FieldRef<"MasterCategory", 'String'>
    readonly level: FieldRef<"MasterCategory", 'Int'>
    readonly parentId: FieldRef<"MasterCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MasterCategory findUnique
   */
  export type MasterCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCategory
     */
    select?: MasterCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCategory
     */
    omit?: MasterCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MasterCategory to fetch.
     */
    where: MasterCategoryWhereUniqueInput
  }

  /**
   * MasterCategory findUniqueOrThrow
   */
  export type MasterCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCategory
     */
    select?: MasterCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCategory
     */
    omit?: MasterCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MasterCategory to fetch.
     */
    where: MasterCategoryWhereUniqueInput
  }

  /**
   * MasterCategory findFirst
   */
  export type MasterCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCategory
     */
    select?: MasterCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCategory
     */
    omit?: MasterCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MasterCategory to fetch.
     */
    where?: MasterCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterCategories to fetch.
     */
    orderBy?: MasterCategoryOrderByWithRelationInput | MasterCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasterCategories.
     */
    cursor?: MasterCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterCategories.
     */
    distinct?: MasterCategoryScalarFieldEnum | MasterCategoryScalarFieldEnum[]
  }

  /**
   * MasterCategory findFirstOrThrow
   */
  export type MasterCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCategory
     */
    select?: MasterCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCategory
     */
    omit?: MasterCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MasterCategory to fetch.
     */
    where?: MasterCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterCategories to fetch.
     */
    orderBy?: MasterCategoryOrderByWithRelationInput | MasterCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasterCategories.
     */
    cursor?: MasterCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterCategories.
     */
    distinct?: MasterCategoryScalarFieldEnum | MasterCategoryScalarFieldEnum[]
  }

  /**
   * MasterCategory findMany
   */
  export type MasterCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCategory
     */
    select?: MasterCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCategory
     */
    omit?: MasterCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MasterCategories to fetch.
     */
    where?: MasterCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterCategories to fetch.
     */
    orderBy?: MasterCategoryOrderByWithRelationInput | MasterCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MasterCategories.
     */
    cursor?: MasterCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterCategories.
     */
    skip?: number
    distinct?: MasterCategoryScalarFieldEnum | MasterCategoryScalarFieldEnum[]
  }

  /**
   * MasterCategory create
   */
  export type MasterCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCategory
     */
    select?: MasterCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCategory
     */
    omit?: MasterCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a MasterCategory.
     */
    data: XOR<MasterCategoryCreateInput, MasterCategoryUncheckedCreateInput>
  }

  /**
   * MasterCategory createMany
   */
  export type MasterCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MasterCategories.
     */
    data: MasterCategoryCreateManyInput | MasterCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MasterCategory createManyAndReturn
   */
  export type MasterCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCategory
     */
    select?: MasterCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCategory
     */
    omit?: MasterCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many MasterCategories.
     */
    data: MasterCategoryCreateManyInput | MasterCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MasterCategory update
   */
  export type MasterCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCategory
     */
    select?: MasterCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCategory
     */
    omit?: MasterCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a MasterCategory.
     */
    data: XOR<MasterCategoryUpdateInput, MasterCategoryUncheckedUpdateInput>
    /**
     * Choose, which MasterCategory to update.
     */
    where: MasterCategoryWhereUniqueInput
  }

  /**
   * MasterCategory updateMany
   */
  export type MasterCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MasterCategories.
     */
    data: XOR<MasterCategoryUpdateManyMutationInput, MasterCategoryUncheckedUpdateManyInput>
    /**
     * Filter which MasterCategories to update
     */
    where?: MasterCategoryWhereInput
    /**
     * Limit how many MasterCategories to update.
     */
    limit?: number
  }

  /**
   * MasterCategory updateManyAndReturn
   */
  export type MasterCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCategory
     */
    select?: MasterCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCategory
     */
    omit?: MasterCategoryOmit<ExtArgs> | null
    /**
     * The data used to update MasterCategories.
     */
    data: XOR<MasterCategoryUpdateManyMutationInput, MasterCategoryUncheckedUpdateManyInput>
    /**
     * Filter which MasterCategories to update
     */
    where?: MasterCategoryWhereInput
    /**
     * Limit how many MasterCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MasterCategory upsert
   */
  export type MasterCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCategory
     */
    select?: MasterCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCategory
     */
    omit?: MasterCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the MasterCategory to update in case it exists.
     */
    where: MasterCategoryWhereUniqueInput
    /**
     * In case the MasterCategory found by the `where` argument doesn't exist, create a new MasterCategory with this data.
     */
    create: XOR<MasterCategoryCreateInput, MasterCategoryUncheckedCreateInput>
    /**
     * In case the MasterCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MasterCategoryUpdateInput, MasterCategoryUncheckedUpdateInput>
  }

  /**
   * MasterCategory delete
   */
  export type MasterCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCategory
     */
    select?: MasterCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCategory
     */
    omit?: MasterCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCategoryInclude<ExtArgs> | null
    /**
     * Filter which MasterCategory to delete.
     */
    where: MasterCategoryWhereUniqueInput
  }

  /**
   * MasterCategory deleteMany
   */
  export type MasterCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasterCategories to delete
     */
    where?: MasterCategoryWhereInput
    /**
     * Limit how many MasterCategories to delete.
     */
    limit?: number
  }

  /**
   * MasterCategory.parent
   */
  export type MasterCategory$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCategory
     */
    select?: MasterCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCategory
     */
    omit?: MasterCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCategoryInclude<ExtArgs> | null
    where?: MasterCategoryWhereInput
  }

  /**
   * MasterCategory.children
   */
  export type MasterCategory$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCategory
     */
    select?: MasterCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCategory
     */
    omit?: MasterCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCategoryInclude<ExtArgs> | null
    where?: MasterCategoryWhereInput
    orderBy?: MasterCategoryOrderByWithRelationInput | MasterCategoryOrderByWithRelationInput[]
    cursor?: MasterCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MasterCategoryScalarFieldEnum | MasterCategoryScalarFieldEnum[]
  }

  /**
   * MasterCategory.courses
   */
  export type MasterCategory$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourse
     */
    select?: MasterCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourse
     */
    omit?: MasterCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseInclude<ExtArgs> | null
    where?: MasterCourseWhereInput
    orderBy?: MasterCourseOrderByWithRelationInput | MasterCourseOrderByWithRelationInput[]
    cursor?: MasterCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MasterCourseScalarFieldEnum | MasterCourseScalarFieldEnum[]
  }

  /**
   * MasterCategory.exams
   */
  export type MasterCategory$examsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExam
     */
    select?: MasterExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExam
     */
    omit?: MasterExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExamInclude<ExtArgs> | null
    where?: MasterExamWhereInput
    orderBy?: MasterExamOrderByWithRelationInput | MasterExamOrderByWithRelationInput[]
    cursor?: MasterExamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MasterExamScalarFieldEnum | MasterExamScalarFieldEnum[]
  }

  /**
   * MasterCategory without action
   */
  export type MasterCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCategory
     */
    select?: MasterCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCategory
     */
    omit?: MasterCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCategoryInclude<ExtArgs> | null
  }


  /**
   * Model MasterTag
   */

  export type AggregateMasterTag = {
    _count: MasterTagCountAggregateOutputType | null
    _min: MasterTagMinAggregateOutputType | null
    _max: MasterTagMaxAggregateOutputType | null
  }

  export type MasterTagMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type MasterTagMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type MasterTagCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type MasterTagMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type MasterTagMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type MasterTagCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type MasterTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasterTag to aggregate.
     */
    where?: MasterTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterTags to fetch.
     */
    orderBy?: MasterTagOrderByWithRelationInput | MasterTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MasterTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MasterTags
    **/
    _count?: true | MasterTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MasterTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MasterTagMaxAggregateInputType
  }

  export type GetMasterTagAggregateType<T extends MasterTagAggregateArgs> = {
        [P in keyof T & keyof AggregateMasterTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMasterTag[P]>
      : GetScalarType<T[P], AggregateMasterTag[P]>
  }




  export type MasterTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterTagWhereInput
    orderBy?: MasterTagOrderByWithAggregationInput | MasterTagOrderByWithAggregationInput[]
    by: MasterTagScalarFieldEnum[] | MasterTagScalarFieldEnum
    having?: MasterTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MasterTagCountAggregateInputType | true
    _min?: MasterTagMinAggregateInputType
    _max?: MasterTagMaxAggregateInputType
  }

  export type MasterTagGroupByOutputType = {
    id: string
    name: string
    _count: MasterTagCountAggregateOutputType | null
    _min: MasterTagMinAggregateOutputType | null
    _max: MasterTagMaxAggregateOutputType | null
  }

  type GetMasterTagGroupByPayload<T extends MasterTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MasterTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MasterTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MasterTagGroupByOutputType[P]>
            : GetScalarType<T[P], MasterTagGroupByOutputType[P]>
        }
      >
    >


  export type MasterTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    courses?: boolean | MasterTag$coursesArgs<ExtArgs>
    _count?: boolean | MasterTagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masterTag"]>

  export type MasterTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["masterTag"]>

  export type MasterTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["masterTag"]>

  export type MasterTagSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type MasterTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["masterTag"]>
  export type MasterTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | MasterTag$coursesArgs<ExtArgs>
    _count?: boolean | MasterTagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MasterTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MasterTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MasterTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MasterTag"
    objects: {
      courses: Prisma.$MasterCoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["masterTag"]>
    composites: {}
  }

  type MasterTagGetPayload<S extends boolean | null | undefined | MasterTagDefaultArgs> = $Result.GetResult<Prisma.$MasterTagPayload, S>

  type MasterTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MasterTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MasterTagCountAggregateInputType | true
    }

  export interface MasterTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MasterTag'], meta: { name: 'MasterTag' } }
    /**
     * Find zero or one MasterTag that matches the filter.
     * @param {MasterTagFindUniqueArgs} args - Arguments to find a MasterTag
     * @example
     * // Get one MasterTag
     * const masterTag = await prisma.masterTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MasterTagFindUniqueArgs>(args: SelectSubset<T, MasterTagFindUniqueArgs<ExtArgs>>): Prisma__MasterTagClient<$Result.GetResult<Prisma.$MasterTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MasterTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MasterTagFindUniqueOrThrowArgs} args - Arguments to find a MasterTag
     * @example
     * // Get one MasterTag
     * const masterTag = await prisma.masterTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MasterTagFindUniqueOrThrowArgs>(args: SelectSubset<T, MasterTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MasterTagClient<$Result.GetResult<Prisma.$MasterTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MasterTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterTagFindFirstArgs} args - Arguments to find a MasterTag
     * @example
     * // Get one MasterTag
     * const masterTag = await prisma.masterTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MasterTagFindFirstArgs>(args?: SelectSubset<T, MasterTagFindFirstArgs<ExtArgs>>): Prisma__MasterTagClient<$Result.GetResult<Prisma.$MasterTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MasterTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterTagFindFirstOrThrowArgs} args - Arguments to find a MasterTag
     * @example
     * // Get one MasterTag
     * const masterTag = await prisma.masterTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MasterTagFindFirstOrThrowArgs>(args?: SelectSubset<T, MasterTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__MasterTagClient<$Result.GetResult<Prisma.$MasterTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MasterTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MasterTags
     * const masterTags = await prisma.masterTag.findMany()
     * 
     * // Get first 10 MasterTags
     * const masterTags = await prisma.masterTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const masterTagWithIdOnly = await prisma.masterTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MasterTagFindManyArgs>(args?: SelectSubset<T, MasterTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MasterTag.
     * @param {MasterTagCreateArgs} args - Arguments to create a MasterTag.
     * @example
     * // Create one MasterTag
     * const MasterTag = await prisma.masterTag.create({
     *   data: {
     *     // ... data to create a MasterTag
     *   }
     * })
     * 
     */
    create<T extends MasterTagCreateArgs>(args: SelectSubset<T, MasterTagCreateArgs<ExtArgs>>): Prisma__MasterTagClient<$Result.GetResult<Prisma.$MasterTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MasterTags.
     * @param {MasterTagCreateManyArgs} args - Arguments to create many MasterTags.
     * @example
     * // Create many MasterTags
     * const masterTag = await prisma.masterTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MasterTagCreateManyArgs>(args?: SelectSubset<T, MasterTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MasterTags and returns the data saved in the database.
     * @param {MasterTagCreateManyAndReturnArgs} args - Arguments to create many MasterTags.
     * @example
     * // Create many MasterTags
     * const masterTag = await prisma.masterTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MasterTags and only return the `id`
     * const masterTagWithIdOnly = await prisma.masterTag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MasterTagCreateManyAndReturnArgs>(args?: SelectSubset<T, MasterTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MasterTag.
     * @param {MasterTagDeleteArgs} args - Arguments to delete one MasterTag.
     * @example
     * // Delete one MasterTag
     * const MasterTag = await prisma.masterTag.delete({
     *   where: {
     *     // ... filter to delete one MasterTag
     *   }
     * })
     * 
     */
    delete<T extends MasterTagDeleteArgs>(args: SelectSubset<T, MasterTagDeleteArgs<ExtArgs>>): Prisma__MasterTagClient<$Result.GetResult<Prisma.$MasterTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MasterTag.
     * @param {MasterTagUpdateArgs} args - Arguments to update one MasterTag.
     * @example
     * // Update one MasterTag
     * const masterTag = await prisma.masterTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MasterTagUpdateArgs>(args: SelectSubset<T, MasterTagUpdateArgs<ExtArgs>>): Prisma__MasterTagClient<$Result.GetResult<Prisma.$MasterTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MasterTags.
     * @param {MasterTagDeleteManyArgs} args - Arguments to filter MasterTags to delete.
     * @example
     * // Delete a few MasterTags
     * const { count } = await prisma.masterTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MasterTagDeleteManyArgs>(args?: SelectSubset<T, MasterTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MasterTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MasterTags
     * const masterTag = await prisma.masterTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MasterTagUpdateManyArgs>(args: SelectSubset<T, MasterTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MasterTags and returns the data updated in the database.
     * @param {MasterTagUpdateManyAndReturnArgs} args - Arguments to update many MasterTags.
     * @example
     * // Update many MasterTags
     * const masterTag = await prisma.masterTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MasterTags and only return the `id`
     * const masterTagWithIdOnly = await prisma.masterTag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MasterTagUpdateManyAndReturnArgs>(args: SelectSubset<T, MasterTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MasterTag.
     * @param {MasterTagUpsertArgs} args - Arguments to update or create a MasterTag.
     * @example
     * // Update or create a MasterTag
     * const masterTag = await prisma.masterTag.upsert({
     *   create: {
     *     // ... data to create a MasterTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MasterTag we want to update
     *   }
     * })
     */
    upsert<T extends MasterTagUpsertArgs>(args: SelectSubset<T, MasterTagUpsertArgs<ExtArgs>>): Prisma__MasterTagClient<$Result.GetResult<Prisma.$MasterTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MasterTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterTagCountArgs} args - Arguments to filter MasterTags to count.
     * @example
     * // Count the number of MasterTags
     * const count = await prisma.masterTag.count({
     *   where: {
     *     // ... the filter for the MasterTags we want to count
     *   }
     * })
    **/
    count<T extends MasterTagCountArgs>(
      args?: Subset<T, MasterTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MasterTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MasterTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MasterTagAggregateArgs>(args: Subset<T, MasterTagAggregateArgs>): Prisma.PrismaPromise<GetMasterTagAggregateType<T>>

    /**
     * Group by MasterTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterTagGroupByArgs} args - Group by arguments.
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
      T extends MasterTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MasterTagGroupByArgs['orderBy'] }
        : { orderBy?: MasterTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MasterTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMasterTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MasterTag model
   */
  readonly fields: MasterTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MasterTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MasterTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courses<T extends MasterTag$coursesArgs<ExtArgs> = {}>(args?: Subset<T, MasterTag$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MasterTag model
   */ 
  interface MasterTagFieldRefs {
    readonly id: FieldRef<"MasterTag", 'String'>
    readonly name: FieldRef<"MasterTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MasterTag findUnique
   */
  export type MasterTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterTag
     */
    select?: MasterTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterTag
     */
    omit?: MasterTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterTagInclude<ExtArgs> | null
    /**
     * Filter, which MasterTag to fetch.
     */
    where: MasterTagWhereUniqueInput
  }

  /**
   * MasterTag findUniqueOrThrow
   */
  export type MasterTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterTag
     */
    select?: MasterTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterTag
     */
    omit?: MasterTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterTagInclude<ExtArgs> | null
    /**
     * Filter, which MasterTag to fetch.
     */
    where: MasterTagWhereUniqueInput
  }

  /**
   * MasterTag findFirst
   */
  export type MasterTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterTag
     */
    select?: MasterTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterTag
     */
    omit?: MasterTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterTagInclude<ExtArgs> | null
    /**
     * Filter, which MasterTag to fetch.
     */
    where?: MasterTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterTags to fetch.
     */
    orderBy?: MasterTagOrderByWithRelationInput | MasterTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasterTags.
     */
    cursor?: MasterTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterTags.
     */
    distinct?: MasterTagScalarFieldEnum | MasterTagScalarFieldEnum[]
  }

  /**
   * MasterTag findFirstOrThrow
   */
  export type MasterTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterTag
     */
    select?: MasterTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterTag
     */
    omit?: MasterTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterTagInclude<ExtArgs> | null
    /**
     * Filter, which MasterTag to fetch.
     */
    where?: MasterTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterTags to fetch.
     */
    orderBy?: MasterTagOrderByWithRelationInput | MasterTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasterTags.
     */
    cursor?: MasterTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterTags.
     */
    distinct?: MasterTagScalarFieldEnum | MasterTagScalarFieldEnum[]
  }

  /**
   * MasterTag findMany
   */
  export type MasterTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterTag
     */
    select?: MasterTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterTag
     */
    omit?: MasterTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterTagInclude<ExtArgs> | null
    /**
     * Filter, which MasterTags to fetch.
     */
    where?: MasterTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterTags to fetch.
     */
    orderBy?: MasterTagOrderByWithRelationInput | MasterTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MasterTags.
     */
    cursor?: MasterTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterTags.
     */
    skip?: number
    distinct?: MasterTagScalarFieldEnum | MasterTagScalarFieldEnum[]
  }

  /**
   * MasterTag create
   */
  export type MasterTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterTag
     */
    select?: MasterTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterTag
     */
    omit?: MasterTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterTagInclude<ExtArgs> | null
    /**
     * The data needed to create a MasterTag.
     */
    data: XOR<MasterTagCreateInput, MasterTagUncheckedCreateInput>
  }

  /**
   * MasterTag createMany
   */
  export type MasterTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MasterTags.
     */
    data: MasterTagCreateManyInput | MasterTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MasterTag createManyAndReturn
   */
  export type MasterTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterTag
     */
    select?: MasterTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MasterTag
     */
    omit?: MasterTagOmit<ExtArgs> | null
    /**
     * The data used to create many MasterTags.
     */
    data: MasterTagCreateManyInput | MasterTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MasterTag update
   */
  export type MasterTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterTag
     */
    select?: MasterTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterTag
     */
    omit?: MasterTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterTagInclude<ExtArgs> | null
    /**
     * The data needed to update a MasterTag.
     */
    data: XOR<MasterTagUpdateInput, MasterTagUncheckedUpdateInput>
    /**
     * Choose, which MasterTag to update.
     */
    where: MasterTagWhereUniqueInput
  }

  /**
   * MasterTag updateMany
   */
  export type MasterTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MasterTags.
     */
    data: XOR<MasterTagUpdateManyMutationInput, MasterTagUncheckedUpdateManyInput>
    /**
     * Filter which MasterTags to update
     */
    where?: MasterTagWhereInput
    /**
     * Limit how many MasterTags to update.
     */
    limit?: number
  }

  /**
   * MasterTag updateManyAndReturn
   */
  export type MasterTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterTag
     */
    select?: MasterTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MasterTag
     */
    omit?: MasterTagOmit<ExtArgs> | null
    /**
     * The data used to update MasterTags.
     */
    data: XOR<MasterTagUpdateManyMutationInput, MasterTagUncheckedUpdateManyInput>
    /**
     * Filter which MasterTags to update
     */
    where?: MasterTagWhereInput
    /**
     * Limit how many MasterTags to update.
     */
    limit?: number
  }

  /**
   * MasterTag upsert
   */
  export type MasterTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterTag
     */
    select?: MasterTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterTag
     */
    omit?: MasterTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterTagInclude<ExtArgs> | null
    /**
     * The filter to search for the MasterTag to update in case it exists.
     */
    where: MasterTagWhereUniqueInput
    /**
     * In case the MasterTag found by the `where` argument doesn't exist, create a new MasterTag with this data.
     */
    create: XOR<MasterTagCreateInput, MasterTagUncheckedCreateInput>
    /**
     * In case the MasterTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MasterTagUpdateInput, MasterTagUncheckedUpdateInput>
  }

  /**
   * MasterTag delete
   */
  export type MasterTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterTag
     */
    select?: MasterTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterTag
     */
    omit?: MasterTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterTagInclude<ExtArgs> | null
    /**
     * Filter which MasterTag to delete.
     */
    where: MasterTagWhereUniqueInput
  }

  /**
   * MasterTag deleteMany
   */
  export type MasterTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasterTags to delete
     */
    where?: MasterTagWhereInput
    /**
     * Limit how many MasterTags to delete.
     */
    limit?: number
  }

  /**
   * MasterTag.courses
   */
  export type MasterTag$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourse
     */
    select?: MasterCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourse
     */
    omit?: MasterCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseInclude<ExtArgs> | null
    where?: MasterCourseWhereInput
    orderBy?: MasterCourseOrderByWithRelationInput | MasterCourseOrderByWithRelationInput[]
    cursor?: MasterCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MasterCourseScalarFieldEnum | MasterCourseScalarFieldEnum[]
  }

  /**
   * MasterTag without action
   */
  export type MasterTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterTag
     */
    select?: MasterTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterTag
     */
    omit?: MasterTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterTagInclude<ExtArgs> | null
  }


  /**
   * Model MasterCourse
   */

  export type AggregateMasterCourse = {
    _count: MasterCourseCountAggregateOutputType | null
    _avg: MasterCourseAvgAggregateOutputType | null
    _sum: MasterCourseSumAggregateOutputType | null
    _min: MasterCourseMinAggregateOutputType | null
    _max: MasterCourseMaxAggregateOutputType | null
  }

  export type MasterCourseAvgAggregateOutputType = {
    durationMin: number | null
  }

  export type MasterCourseSumAggregateOutputType = {
    durationMin: number | null
  }

  export type MasterCourseMinAggregateOutputType = {
    id: string | null
    title: string | null
    summary: string | null
    description: string | null
    targetAudience: string | null
    difficulty: string | null
    durationMin: number | null
    createdAt: Date | null
    updatedAt: Date | null
    categoryId: string | null
  }

  export type MasterCourseMaxAggregateOutputType = {
    id: string | null
    title: string | null
    summary: string | null
    description: string | null
    targetAudience: string | null
    difficulty: string | null
    durationMin: number | null
    createdAt: Date | null
    updatedAt: Date | null
    categoryId: string | null
  }

  export type MasterCourseCountAggregateOutputType = {
    id: number
    title: number
    summary: number
    description: number
    targetAudience: number
    difficulty: number
    durationMin: number
    createdAt: number
    updatedAt: number
    categoryId: number
    _all: number
  }


  export type MasterCourseAvgAggregateInputType = {
    durationMin?: true
  }

  export type MasterCourseSumAggregateInputType = {
    durationMin?: true
  }

  export type MasterCourseMinAggregateInputType = {
    id?: true
    title?: true
    summary?: true
    description?: true
    targetAudience?: true
    difficulty?: true
    durationMin?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
  }

  export type MasterCourseMaxAggregateInputType = {
    id?: true
    title?: true
    summary?: true
    description?: true
    targetAudience?: true
    difficulty?: true
    durationMin?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
  }

  export type MasterCourseCountAggregateInputType = {
    id?: true
    title?: true
    summary?: true
    description?: true
    targetAudience?: true
    difficulty?: true
    durationMin?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
    _all?: true
  }

  export type MasterCourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasterCourse to aggregate.
     */
    where?: MasterCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterCourses to fetch.
     */
    orderBy?: MasterCourseOrderByWithRelationInput | MasterCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MasterCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MasterCourses
    **/
    _count?: true | MasterCourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MasterCourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MasterCourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MasterCourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MasterCourseMaxAggregateInputType
  }

  export type GetMasterCourseAggregateType<T extends MasterCourseAggregateArgs> = {
        [P in keyof T & keyof AggregateMasterCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMasterCourse[P]>
      : GetScalarType<T[P], AggregateMasterCourse[P]>
  }




  export type MasterCourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterCourseWhereInput
    orderBy?: MasterCourseOrderByWithAggregationInput | MasterCourseOrderByWithAggregationInput[]
    by: MasterCourseScalarFieldEnum[] | MasterCourseScalarFieldEnum
    having?: MasterCourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MasterCourseCountAggregateInputType | true
    _avg?: MasterCourseAvgAggregateInputType
    _sum?: MasterCourseSumAggregateInputType
    _min?: MasterCourseMinAggregateInputType
    _max?: MasterCourseMaxAggregateInputType
  }

  export type MasterCourseGroupByOutputType = {
    id: string
    title: string | null
    summary: string | null
    description: string | null
    targetAudience: string | null
    difficulty: string | null
    durationMin: number | null
    createdAt: Date
    updatedAt: Date
    categoryId: string
    _count: MasterCourseCountAggregateOutputType | null
    _avg: MasterCourseAvgAggregateOutputType | null
    _sum: MasterCourseSumAggregateOutputType | null
    _min: MasterCourseMinAggregateOutputType | null
    _max: MasterCourseMaxAggregateOutputType | null
  }

  type GetMasterCourseGroupByPayload<T extends MasterCourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MasterCourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MasterCourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MasterCourseGroupByOutputType[P]>
            : GetScalarType<T[P], MasterCourseGroupByOutputType[P]>
        }
      >
    >


  export type MasterCourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    summary?: boolean
    description?: boolean
    targetAudience?: boolean
    difficulty?: boolean
    durationMin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    category?: boolean | MasterCategoryDefaultArgs<ExtArgs>
    tags?: boolean | MasterCourse$tagsArgs<ExtArgs>
    courseContents?: boolean | MasterCourse$courseContentsArgs<ExtArgs>
    relatedCourses?: boolean | MasterCourse$relatedCoursesArgs<ExtArgs>
    relatedToCourses?: boolean | MasterCourse$relatedToCoursesArgs<ExtArgs>
    courseFAQs?: boolean | MasterCourse$courseFAQsArgs<ExtArgs>
    _count?: boolean | MasterCourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masterCourse"]>

  export type MasterCourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    summary?: boolean
    description?: boolean
    targetAudience?: boolean
    difficulty?: boolean
    durationMin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    category?: boolean | MasterCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masterCourse"]>

  export type MasterCourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    summary?: boolean
    description?: boolean
    targetAudience?: boolean
    difficulty?: boolean
    durationMin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    category?: boolean | MasterCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masterCourse"]>

  export type MasterCourseSelectScalar = {
    id?: boolean
    title?: boolean
    summary?: boolean
    description?: boolean
    targetAudience?: boolean
    difficulty?: boolean
    durationMin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
  }

  export type MasterCourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "summary" | "description" | "targetAudience" | "difficulty" | "durationMin" | "createdAt" | "updatedAt" | "categoryId", ExtArgs["result"]["masterCourse"]>
  export type MasterCourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | MasterCategoryDefaultArgs<ExtArgs>
    tags?: boolean | MasterCourse$tagsArgs<ExtArgs>
    courseContents?: boolean | MasterCourse$courseContentsArgs<ExtArgs>
    relatedCourses?: boolean | MasterCourse$relatedCoursesArgs<ExtArgs>
    relatedToCourses?: boolean | MasterCourse$relatedToCoursesArgs<ExtArgs>
    courseFAQs?: boolean | MasterCourse$courseFAQsArgs<ExtArgs>
    _count?: boolean | MasterCourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MasterCourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | MasterCategoryDefaultArgs<ExtArgs>
  }
  export type MasterCourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | MasterCategoryDefaultArgs<ExtArgs>
  }

  export type $MasterCoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MasterCourse"
    objects: {
      category: Prisma.$MasterCategoryPayload<ExtArgs>
      tags: Prisma.$MasterTagPayload<ExtArgs>[]
      courseContents: Prisma.$MasterCourseContentPayload<ExtArgs>[]
      relatedCourses: Prisma.$MasterCoursePayload<ExtArgs>[]
      relatedToCourses: Prisma.$MasterCoursePayload<ExtArgs>[]
      courseFAQs: Prisma.$MasterCourseFAQPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string | null
      summary: string | null
      description: string | null
      targetAudience: string | null
      difficulty: string | null
      durationMin: number | null
      createdAt: Date
      updatedAt: Date
      categoryId: string
    }, ExtArgs["result"]["masterCourse"]>
    composites: {}
  }

  type MasterCourseGetPayload<S extends boolean | null | undefined | MasterCourseDefaultArgs> = $Result.GetResult<Prisma.$MasterCoursePayload, S>

  type MasterCourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MasterCourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MasterCourseCountAggregateInputType | true
    }

  export interface MasterCourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MasterCourse'], meta: { name: 'MasterCourse' } }
    /**
     * Find zero or one MasterCourse that matches the filter.
     * @param {MasterCourseFindUniqueArgs} args - Arguments to find a MasterCourse
     * @example
     * // Get one MasterCourse
     * const masterCourse = await prisma.masterCourse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MasterCourseFindUniqueArgs>(args: SelectSubset<T, MasterCourseFindUniqueArgs<ExtArgs>>): Prisma__MasterCourseClient<$Result.GetResult<Prisma.$MasterCoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MasterCourse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MasterCourseFindUniqueOrThrowArgs} args - Arguments to find a MasterCourse
     * @example
     * // Get one MasterCourse
     * const masterCourse = await prisma.masterCourse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MasterCourseFindUniqueOrThrowArgs>(args: SelectSubset<T, MasterCourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MasterCourseClient<$Result.GetResult<Prisma.$MasterCoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MasterCourse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterCourseFindFirstArgs} args - Arguments to find a MasterCourse
     * @example
     * // Get one MasterCourse
     * const masterCourse = await prisma.masterCourse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MasterCourseFindFirstArgs>(args?: SelectSubset<T, MasterCourseFindFirstArgs<ExtArgs>>): Prisma__MasterCourseClient<$Result.GetResult<Prisma.$MasterCoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MasterCourse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterCourseFindFirstOrThrowArgs} args - Arguments to find a MasterCourse
     * @example
     * // Get one MasterCourse
     * const masterCourse = await prisma.masterCourse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MasterCourseFindFirstOrThrowArgs>(args?: SelectSubset<T, MasterCourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__MasterCourseClient<$Result.GetResult<Prisma.$MasterCoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MasterCourses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterCourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MasterCourses
     * const masterCourses = await prisma.masterCourse.findMany()
     * 
     * // Get first 10 MasterCourses
     * const masterCourses = await prisma.masterCourse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const masterCourseWithIdOnly = await prisma.masterCourse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MasterCourseFindManyArgs>(args?: SelectSubset<T, MasterCourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MasterCourse.
     * @param {MasterCourseCreateArgs} args - Arguments to create a MasterCourse.
     * @example
     * // Create one MasterCourse
     * const MasterCourse = await prisma.masterCourse.create({
     *   data: {
     *     // ... data to create a MasterCourse
     *   }
     * })
     * 
     */
    create<T extends MasterCourseCreateArgs>(args: SelectSubset<T, MasterCourseCreateArgs<ExtArgs>>): Prisma__MasterCourseClient<$Result.GetResult<Prisma.$MasterCoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MasterCourses.
     * @param {MasterCourseCreateManyArgs} args - Arguments to create many MasterCourses.
     * @example
     * // Create many MasterCourses
     * const masterCourse = await prisma.masterCourse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MasterCourseCreateManyArgs>(args?: SelectSubset<T, MasterCourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MasterCourses and returns the data saved in the database.
     * @param {MasterCourseCreateManyAndReturnArgs} args - Arguments to create many MasterCourses.
     * @example
     * // Create many MasterCourses
     * const masterCourse = await prisma.masterCourse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MasterCourses and only return the `id`
     * const masterCourseWithIdOnly = await prisma.masterCourse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MasterCourseCreateManyAndReturnArgs>(args?: SelectSubset<T, MasterCourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterCoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MasterCourse.
     * @param {MasterCourseDeleteArgs} args - Arguments to delete one MasterCourse.
     * @example
     * // Delete one MasterCourse
     * const MasterCourse = await prisma.masterCourse.delete({
     *   where: {
     *     // ... filter to delete one MasterCourse
     *   }
     * })
     * 
     */
    delete<T extends MasterCourseDeleteArgs>(args: SelectSubset<T, MasterCourseDeleteArgs<ExtArgs>>): Prisma__MasterCourseClient<$Result.GetResult<Prisma.$MasterCoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MasterCourse.
     * @param {MasterCourseUpdateArgs} args - Arguments to update one MasterCourse.
     * @example
     * // Update one MasterCourse
     * const masterCourse = await prisma.masterCourse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MasterCourseUpdateArgs>(args: SelectSubset<T, MasterCourseUpdateArgs<ExtArgs>>): Prisma__MasterCourseClient<$Result.GetResult<Prisma.$MasterCoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MasterCourses.
     * @param {MasterCourseDeleteManyArgs} args - Arguments to filter MasterCourses to delete.
     * @example
     * // Delete a few MasterCourses
     * const { count } = await prisma.masterCourse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MasterCourseDeleteManyArgs>(args?: SelectSubset<T, MasterCourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MasterCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterCourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MasterCourses
     * const masterCourse = await prisma.masterCourse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MasterCourseUpdateManyArgs>(args: SelectSubset<T, MasterCourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MasterCourses and returns the data updated in the database.
     * @param {MasterCourseUpdateManyAndReturnArgs} args - Arguments to update many MasterCourses.
     * @example
     * // Update many MasterCourses
     * const masterCourse = await prisma.masterCourse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MasterCourses and only return the `id`
     * const masterCourseWithIdOnly = await prisma.masterCourse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MasterCourseUpdateManyAndReturnArgs>(args: SelectSubset<T, MasterCourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterCoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MasterCourse.
     * @param {MasterCourseUpsertArgs} args - Arguments to update or create a MasterCourse.
     * @example
     * // Update or create a MasterCourse
     * const masterCourse = await prisma.masterCourse.upsert({
     *   create: {
     *     // ... data to create a MasterCourse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MasterCourse we want to update
     *   }
     * })
     */
    upsert<T extends MasterCourseUpsertArgs>(args: SelectSubset<T, MasterCourseUpsertArgs<ExtArgs>>): Prisma__MasterCourseClient<$Result.GetResult<Prisma.$MasterCoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MasterCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterCourseCountArgs} args - Arguments to filter MasterCourses to count.
     * @example
     * // Count the number of MasterCourses
     * const count = await prisma.masterCourse.count({
     *   where: {
     *     // ... the filter for the MasterCourses we want to count
     *   }
     * })
    **/
    count<T extends MasterCourseCountArgs>(
      args?: Subset<T, MasterCourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MasterCourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MasterCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterCourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MasterCourseAggregateArgs>(args: Subset<T, MasterCourseAggregateArgs>): Prisma.PrismaPromise<GetMasterCourseAggregateType<T>>

    /**
     * Group by MasterCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterCourseGroupByArgs} args - Group by arguments.
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
      T extends MasterCourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MasterCourseGroupByArgs['orderBy'] }
        : { orderBy?: MasterCourseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MasterCourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMasterCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MasterCourse model
   */
  readonly fields: MasterCourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MasterCourse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MasterCourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends MasterCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MasterCategoryDefaultArgs<ExtArgs>>): Prisma__MasterCategoryClient<$Result.GetResult<Prisma.$MasterCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends MasterCourse$tagsArgs<ExtArgs> = {}>(args?: Subset<T, MasterCourse$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    courseContents<T extends MasterCourse$courseContentsArgs<ExtArgs> = {}>(args?: Subset<T, MasterCourse$courseContentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterCourseContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    relatedCourses<T extends MasterCourse$relatedCoursesArgs<ExtArgs> = {}>(args?: Subset<T, MasterCourse$relatedCoursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    relatedToCourses<T extends MasterCourse$relatedToCoursesArgs<ExtArgs> = {}>(args?: Subset<T, MasterCourse$relatedToCoursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    courseFAQs<T extends MasterCourse$courseFAQsArgs<ExtArgs> = {}>(args?: Subset<T, MasterCourse$courseFAQsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterCourseFAQPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MasterCourse model
   */ 
  interface MasterCourseFieldRefs {
    readonly id: FieldRef<"MasterCourse", 'String'>
    readonly title: FieldRef<"MasterCourse", 'String'>
    readonly summary: FieldRef<"MasterCourse", 'String'>
    readonly description: FieldRef<"MasterCourse", 'String'>
    readonly targetAudience: FieldRef<"MasterCourse", 'String'>
    readonly difficulty: FieldRef<"MasterCourse", 'String'>
    readonly durationMin: FieldRef<"MasterCourse", 'Int'>
    readonly createdAt: FieldRef<"MasterCourse", 'DateTime'>
    readonly updatedAt: FieldRef<"MasterCourse", 'DateTime'>
    readonly categoryId: FieldRef<"MasterCourse", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MasterCourse findUnique
   */
  export type MasterCourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourse
     */
    select?: MasterCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourse
     */
    omit?: MasterCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseInclude<ExtArgs> | null
    /**
     * Filter, which MasterCourse to fetch.
     */
    where: MasterCourseWhereUniqueInput
  }

  /**
   * MasterCourse findUniqueOrThrow
   */
  export type MasterCourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourse
     */
    select?: MasterCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourse
     */
    omit?: MasterCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseInclude<ExtArgs> | null
    /**
     * Filter, which MasterCourse to fetch.
     */
    where: MasterCourseWhereUniqueInput
  }

  /**
   * MasterCourse findFirst
   */
  export type MasterCourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourse
     */
    select?: MasterCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourse
     */
    omit?: MasterCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseInclude<ExtArgs> | null
    /**
     * Filter, which MasterCourse to fetch.
     */
    where?: MasterCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterCourses to fetch.
     */
    orderBy?: MasterCourseOrderByWithRelationInput | MasterCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasterCourses.
     */
    cursor?: MasterCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterCourses.
     */
    distinct?: MasterCourseScalarFieldEnum | MasterCourseScalarFieldEnum[]
  }

  /**
   * MasterCourse findFirstOrThrow
   */
  export type MasterCourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourse
     */
    select?: MasterCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourse
     */
    omit?: MasterCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseInclude<ExtArgs> | null
    /**
     * Filter, which MasterCourse to fetch.
     */
    where?: MasterCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterCourses to fetch.
     */
    orderBy?: MasterCourseOrderByWithRelationInput | MasterCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasterCourses.
     */
    cursor?: MasterCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterCourses.
     */
    distinct?: MasterCourseScalarFieldEnum | MasterCourseScalarFieldEnum[]
  }

  /**
   * MasterCourse findMany
   */
  export type MasterCourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourse
     */
    select?: MasterCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourse
     */
    omit?: MasterCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseInclude<ExtArgs> | null
    /**
     * Filter, which MasterCourses to fetch.
     */
    where?: MasterCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterCourses to fetch.
     */
    orderBy?: MasterCourseOrderByWithRelationInput | MasterCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MasterCourses.
     */
    cursor?: MasterCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterCourses.
     */
    skip?: number
    distinct?: MasterCourseScalarFieldEnum | MasterCourseScalarFieldEnum[]
  }

  /**
   * MasterCourse create
   */
  export type MasterCourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourse
     */
    select?: MasterCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourse
     */
    omit?: MasterCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseInclude<ExtArgs> | null
    /**
     * The data needed to create a MasterCourse.
     */
    data: XOR<MasterCourseCreateInput, MasterCourseUncheckedCreateInput>
  }

  /**
   * MasterCourse createMany
   */
  export type MasterCourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MasterCourses.
     */
    data: MasterCourseCreateManyInput | MasterCourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MasterCourse createManyAndReturn
   */
  export type MasterCourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourse
     */
    select?: MasterCourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourse
     */
    omit?: MasterCourseOmit<ExtArgs> | null
    /**
     * The data used to create many MasterCourses.
     */
    data: MasterCourseCreateManyInput | MasterCourseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MasterCourse update
   */
  export type MasterCourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourse
     */
    select?: MasterCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourse
     */
    omit?: MasterCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseInclude<ExtArgs> | null
    /**
     * The data needed to update a MasterCourse.
     */
    data: XOR<MasterCourseUpdateInput, MasterCourseUncheckedUpdateInput>
    /**
     * Choose, which MasterCourse to update.
     */
    where: MasterCourseWhereUniqueInput
  }

  /**
   * MasterCourse updateMany
   */
  export type MasterCourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MasterCourses.
     */
    data: XOR<MasterCourseUpdateManyMutationInput, MasterCourseUncheckedUpdateManyInput>
    /**
     * Filter which MasterCourses to update
     */
    where?: MasterCourseWhereInput
    /**
     * Limit how many MasterCourses to update.
     */
    limit?: number
  }

  /**
   * MasterCourse updateManyAndReturn
   */
  export type MasterCourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourse
     */
    select?: MasterCourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourse
     */
    omit?: MasterCourseOmit<ExtArgs> | null
    /**
     * The data used to update MasterCourses.
     */
    data: XOR<MasterCourseUpdateManyMutationInput, MasterCourseUncheckedUpdateManyInput>
    /**
     * Filter which MasterCourses to update
     */
    where?: MasterCourseWhereInput
    /**
     * Limit how many MasterCourses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MasterCourse upsert
   */
  export type MasterCourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourse
     */
    select?: MasterCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourse
     */
    omit?: MasterCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseInclude<ExtArgs> | null
    /**
     * The filter to search for the MasterCourse to update in case it exists.
     */
    where: MasterCourseWhereUniqueInput
    /**
     * In case the MasterCourse found by the `where` argument doesn't exist, create a new MasterCourse with this data.
     */
    create: XOR<MasterCourseCreateInput, MasterCourseUncheckedCreateInput>
    /**
     * In case the MasterCourse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MasterCourseUpdateInput, MasterCourseUncheckedUpdateInput>
  }

  /**
   * MasterCourse delete
   */
  export type MasterCourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourse
     */
    select?: MasterCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourse
     */
    omit?: MasterCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseInclude<ExtArgs> | null
    /**
     * Filter which MasterCourse to delete.
     */
    where: MasterCourseWhereUniqueInput
  }

  /**
   * MasterCourse deleteMany
   */
  export type MasterCourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasterCourses to delete
     */
    where?: MasterCourseWhereInput
    /**
     * Limit how many MasterCourses to delete.
     */
    limit?: number
  }

  /**
   * MasterCourse.tags
   */
  export type MasterCourse$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterTag
     */
    select?: MasterTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterTag
     */
    omit?: MasterTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterTagInclude<ExtArgs> | null
    where?: MasterTagWhereInput
    orderBy?: MasterTagOrderByWithRelationInput | MasterTagOrderByWithRelationInput[]
    cursor?: MasterTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MasterTagScalarFieldEnum | MasterTagScalarFieldEnum[]
  }

  /**
   * MasterCourse.courseContents
   */
  export type MasterCourse$courseContentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourseContent
     */
    select?: MasterCourseContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourseContent
     */
    omit?: MasterCourseContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseContentInclude<ExtArgs> | null
    where?: MasterCourseContentWhereInput
    orderBy?: MasterCourseContentOrderByWithRelationInput | MasterCourseContentOrderByWithRelationInput[]
    cursor?: MasterCourseContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MasterCourseContentScalarFieldEnum | MasterCourseContentScalarFieldEnum[]
  }

  /**
   * MasterCourse.relatedCourses
   */
  export type MasterCourse$relatedCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourse
     */
    select?: MasterCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourse
     */
    omit?: MasterCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseInclude<ExtArgs> | null
    where?: MasterCourseWhereInput
    orderBy?: MasterCourseOrderByWithRelationInput | MasterCourseOrderByWithRelationInput[]
    cursor?: MasterCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MasterCourseScalarFieldEnum | MasterCourseScalarFieldEnum[]
  }

  /**
   * MasterCourse.relatedToCourses
   */
  export type MasterCourse$relatedToCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourse
     */
    select?: MasterCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourse
     */
    omit?: MasterCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseInclude<ExtArgs> | null
    where?: MasterCourseWhereInput
    orderBy?: MasterCourseOrderByWithRelationInput | MasterCourseOrderByWithRelationInput[]
    cursor?: MasterCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MasterCourseScalarFieldEnum | MasterCourseScalarFieldEnum[]
  }

  /**
   * MasterCourse.courseFAQs
   */
  export type MasterCourse$courseFAQsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourseFAQ
     */
    select?: MasterCourseFAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourseFAQ
     */
    omit?: MasterCourseFAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseFAQInclude<ExtArgs> | null
    where?: MasterCourseFAQWhereInput
    orderBy?: MasterCourseFAQOrderByWithRelationInput | MasterCourseFAQOrderByWithRelationInput[]
    cursor?: MasterCourseFAQWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MasterCourseFAQScalarFieldEnum | MasterCourseFAQScalarFieldEnum[]
  }

  /**
   * MasterCourse without action
   */
  export type MasterCourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourse
     */
    select?: MasterCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourse
     */
    omit?: MasterCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseInclude<ExtArgs> | null
  }


  /**
   * Model MasterCourseContent
   */

  export type AggregateMasterCourseContent = {
    _count: MasterCourseContentCountAggregateOutputType | null
    _avg: MasterCourseContentAvgAggregateOutputType | null
    _sum: MasterCourseContentSumAggregateOutputType | null
    _min: MasterCourseContentMinAggregateOutputType | null
    _max: MasterCourseContentMaxAggregateOutputType | null
  }

  export type MasterCourseContentAvgAggregateOutputType = {
    sequence: number | null
  }

  export type MasterCourseContentSumAggregateOutputType = {
    sequence: number | null
  }

  export type MasterCourseContentMinAggregateOutputType = {
    id: string | null
    courseId: string | null
    sequence: number | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MasterCourseContentMaxAggregateOutputType = {
    id: string | null
    courseId: string | null
    sequence: number | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MasterCourseContentCountAggregateOutputType = {
    id: number
    courseId: number
    sequence: number
    title: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MasterCourseContentAvgAggregateInputType = {
    sequence?: true
  }

  export type MasterCourseContentSumAggregateInputType = {
    sequence?: true
  }

  export type MasterCourseContentMinAggregateInputType = {
    id?: true
    courseId?: true
    sequence?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MasterCourseContentMaxAggregateInputType = {
    id?: true
    courseId?: true
    sequence?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MasterCourseContentCountAggregateInputType = {
    id?: true
    courseId?: true
    sequence?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MasterCourseContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasterCourseContent to aggregate.
     */
    where?: MasterCourseContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterCourseContents to fetch.
     */
    orderBy?: MasterCourseContentOrderByWithRelationInput | MasterCourseContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MasterCourseContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterCourseContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterCourseContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MasterCourseContents
    **/
    _count?: true | MasterCourseContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MasterCourseContentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MasterCourseContentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MasterCourseContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MasterCourseContentMaxAggregateInputType
  }

  export type GetMasterCourseContentAggregateType<T extends MasterCourseContentAggregateArgs> = {
        [P in keyof T & keyof AggregateMasterCourseContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMasterCourseContent[P]>
      : GetScalarType<T[P], AggregateMasterCourseContent[P]>
  }




  export type MasterCourseContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterCourseContentWhereInput
    orderBy?: MasterCourseContentOrderByWithAggregationInput | MasterCourseContentOrderByWithAggregationInput[]
    by: MasterCourseContentScalarFieldEnum[] | MasterCourseContentScalarFieldEnum
    having?: MasterCourseContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MasterCourseContentCountAggregateInputType | true
    _avg?: MasterCourseContentAvgAggregateInputType
    _sum?: MasterCourseContentSumAggregateInputType
    _min?: MasterCourseContentMinAggregateInputType
    _max?: MasterCourseContentMaxAggregateInputType
  }

  export type MasterCourseContentGroupByOutputType = {
    id: string
    courseId: string
    sequence: number
    title: string | null
    content: string | null
    createdAt: Date
    updatedAt: Date
    _count: MasterCourseContentCountAggregateOutputType | null
    _avg: MasterCourseContentAvgAggregateOutputType | null
    _sum: MasterCourseContentSumAggregateOutputType | null
    _min: MasterCourseContentMinAggregateOutputType | null
    _max: MasterCourseContentMaxAggregateOutputType | null
  }

  type GetMasterCourseContentGroupByPayload<T extends MasterCourseContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MasterCourseContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MasterCourseContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MasterCourseContentGroupByOutputType[P]>
            : GetScalarType<T[P], MasterCourseContentGroupByOutputType[P]>
        }
      >
    >


  export type MasterCourseContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    sequence?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | MasterCourseDefaultArgs<ExtArgs>
    exercises?: boolean | MasterCourseContent$exercisesArgs<ExtArgs>
    chatMessages?: boolean | MasterCourseContent$chatMessagesArgs<ExtArgs>
    chatRoom?: boolean | MasterCourseContent$chatRoomArgs<ExtArgs>
    _count?: boolean | MasterCourseContentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masterCourseContent"]>

  export type MasterCourseContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    sequence?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | MasterCourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masterCourseContent"]>

  export type MasterCourseContentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    sequence?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | MasterCourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masterCourseContent"]>

  export type MasterCourseContentSelectScalar = {
    id?: boolean
    courseId?: boolean
    sequence?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MasterCourseContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "sequence" | "title" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["masterCourseContent"]>
  export type MasterCourseContentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | MasterCourseDefaultArgs<ExtArgs>
    exercises?: boolean | MasterCourseContent$exercisesArgs<ExtArgs>
    chatMessages?: boolean | MasterCourseContent$chatMessagesArgs<ExtArgs>
    chatRoom?: boolean | MasterCourseContent$chatRoomArgs<ExtArgs>
    _count?: boolean | MasterCourseContentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MasterCourseContentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | MasterCourseDefaultArgs<ExtArgs>
  }
  export type MasterCourseContentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | MasterCourseDefaultArgs<ExtArgs>
  }

  export type $MasterCourseContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MasterCourseContent"
    objects: {
      course: Prisma.$MasterCoursePayload<ExtArgs>
      exercises: Prisma.$MasterExercisePayload<ExtArgs>[]
      chatMessages: Prisma.$ChatMessagePayload<ExtArgs>[]
      chatRoom: Prisma.$ChatRoomPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseId: string
      sequence: number
      title: string | null
      content: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["masterCourseContent"]>
    composites: {}
  }

  type MasterCourseContentGetPayload<S extends boolean | null | undefined | MasterCourseContentDefaultArgs> = $Result.GetResult<Prisma.$MasterCourseContentPayload, S>

  type MasterCourseContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MasterCourseContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MasterCourseContentCountAggregateInputType | true
    }

  export interface MasterCourseContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MasterCourseContent'], meta: { name: 'MasterCourseContent' } }
    /**
     * Find zero or one MasterCourseContent that matches the filter.
     * @param {MasterCourseContentFindUniqueArgs} args - Arguments to find a MasterCourseContent
     * @example
     * // Get one MasterCourseContent
     * const masterCourseContent = await prisma.masterCourseContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MasterCourseContentFindUniqueArgs>(args: SelectSubset<T, MasterCourseContentFindUniqueArgs<ExtArgs>>): Prisma__MasterCourseContentClient<$Result.GetResult<Prisma.$MasterCourseContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MasterCourseContent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MasterCourseContentFindUniqueOrThrowArgs} args - Arguments to find a MasterCourseContent
     * @example
     * // Get one MasterCourseContent
     * const masterCourseContent = await prisma.masterCourseContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MasterCourseContentFindUniqueOrThrowArgs>(args: SelectSubset<T, MasterCourseContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MasterCourseContentClient<$Result.GetResult<Prisma.$MasterCourseContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MasterCourseContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterCourseContentFindFirstArgs} args - Arguments to find a MasterCourseContent
     * @example
     * // Get one MasterCourseContent
     * const masterCourseContent = await prisma.masterCourseContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MasterCourseContentFindFirstArgs>(args?: SelectSubset<T, MasterCourseContentFindFirstArgs<ExtArgs>>): Prisma__MasterCourseContentClient<$Result.GetResult<Prisma.$MasterCourseContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MasterCourseContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterCourseContentFindFirstOrThrowArgs} args - Arguments to find a MasterCourseContent
     * @example
     * // Get one MasterCourseContent
     * const masterCourseContent = await prisma.masterCourseContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MasterCourseContentFindFirstOrThrowArgs>(args?: SelectSubset<T, MasterCourseContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__MasterCourseContentClient<$Result.GetResult<Prisma.$MasterCourseContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MasterCourseContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterCourseContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MasterCourseContents
     * const masterCourseContents = await prisma.masterCourseContent.findMany()
     * 
     * // Get first 10 MasterCourseContents
     * const masterCourseContents = await prisma.masterCourseContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const masterCourseContentWithIdOnly = await prisma.masterCourseContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MasterCourseContentFindManyArgs>(args?: SelectSubset<T, MasterCourseContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterCourseContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MasterCourseContent.
     * @param {MasterCourseContentCreateArgs} args - Arguments to create a MasterCourseContent.
     * @example
     * // Create one MasterCourseContent
     * const MasterCourseContent = await prisma.masterCourseContent.create({
     *   data: {
     *     // ... data to create a MasterCourseContent
     *   }
     * })
     * 
     */
    create<T extends MasterCourseContentCreateArgs>(args: SelectSubset<T, MasterCourseContentCreateArgs<ExtArgs>>): Prisma__MasterCourseContentClient<$Result.GetResult<Prisma.$MasterCourseContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MasterCourseContents.
     * @param {MasterCourseContentCreateManyArgs} args - Arguments to create many MasterCourseContents.
     * @example
     * // Create many MasterCourseContents
     * const masterCourseContent = await prisma.masterCourseContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MasterCourseContentCreateManyArgs>(args?: SelectSubset<T, MasterCourseContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MasterCourseContents and returns the data saved in the database.
     * @param {MasterCourseContentCreateManyAndReturnArgs} args - Arguments to create many MasterCourseContents.
     * @example
     * // Create many MasterCourseContents
     * const masterCourseContent = await prisma.masterCourseContent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MasterCourseContents and only return the `id`
     * const masterCourseContentWithIdOnly = await prisma.masterCourseContent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MasterCourseContentCreateManyAndReturnArgs>(args?: SelectSubset<T, MasterCourseContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterCourseContentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MasterCourseContent.
     * @param {MasterCourseContentDeleteArgs} args - Arguments to delete one MasterCourseContent.
     * @example
     * // Delete one MasterCourseContent
     * const MasterCourseContent = await prisma.masterCourseContent.delete({
     *   where: {
     *     // ... filter to delete one MasterCourseContent
     *   }
     * })
     * 
     */
    delete<T extends MasterCourseContentDeleteArgs>(args: SelectSubset<T, MasterCourseContentDeleteArgs<ExtArgs>>): Prisma__MasterCourseContentClient<$Result.GetResult<Prisma.$MasterCourseContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MasterCourseContent.
     * @param {MasterCourseContentUpdateArgs} args - Arguments to update one MasterCourseContent.
     * @example
     * // Update one MasterCourseContent
     * const masterCourseContent = await prisma.masterCourseContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MasterCourseContentUpdateArgs>(args: SelectSubset<T, MasterCourseContentUpdateArgs<ExtArgs>>): Prisma__MasterCourseContentClient<$Result.GetResult<Prisma.$MasterCourseContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MasterCourseContents.
     * @param {MasterCourseContentDeleteManyArgs} args - Arguments to filter MasterCourseContents to delete.
     * @example
     * // Delete a few MasterCourseContents
     * const { count } = await prisma.masterCourseContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MasterCourseContentDeleteManyArgs>(args?: SelectSubset<T, MasterCourseContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MasterCourseContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterCourseContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MasterCourseContents
     * const masterCourseContent = await prisma.masterCourseContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MasterCourseContentUpdateManyArgs>(args: SelectSubset<T, MasterCourseContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MasterCourseContents and returns the data updated in the database.
     * @param {MasterCourseContentUpdateManyAndReturnArgs} args - Arguments to update many MasterCourseContents.
     * @example
     * // Update many MasterCourseContents
     * const masterCourseContent = await prisma.masterCourseContent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MasterCourseContents and only return the `id`
     * const masterCourseContentWithIdOnly = await prisma.masterCourseContent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MasterCourseContentUpdateManyAndReturnArgs>(args: SelectSubset<T, MasterCourseContentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterCourseContentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MasterCourseContent.
     * @param {MasterCourseContentUpsertArgs} args - Arguments to update or create a MasterCourseContent.
     * @example
     * // Update or create a MasterCourseContent
     * const masterCourseContent = await prisma.masterCourseContent.upsert({
     *   create: {
     *     // ... data to create a MasterCourseContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MasterCourseContent we want to update
     *   }
     * })
     */
    upsert<T extends MasterCourseContentUpsertArgs>(args: SelectSubset<T, MasterCourseContentUpsertArgs<ExtArgs>>): Prisma__MasterCourseContentClient<$Result.GetResult<Prisma.$MasterCourseContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MasterCourseContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterCourseContentCountArgs} args - Arguments to filter MasterCourseContents to count.
     * @example
     * // Count the number of MasterCourseContents
     * const count = await prisma.masterCourseContent.count({
     *   where: {
     *     // ... the filter for the MasterCourseContents we want to count
     *   }
     * })
    **/
    count<T extends MasterCourseContentCountArgs>(
      args?: Subset<T, MasterCourseContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MasterCourseContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MasterCourseContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterCourseContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MasterCourseContentAggregateArgs>(args: Subset<T, MasterCourseContentAggregateArgs>): Prisma.PrismaPromise<GetMasterCourseContentAggregateType<T>>

    /**
     * Group by MasterCourseContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterCourseContentGroupByArgs} args - Group by arguments.
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
      T extends MasterCourseContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MasterCourseContentGroupByArgs['orderBy'] }
        : { orderBy?: MasterCourseContentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MasterCourseContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMasterCourseContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MasterCourseContent model
   */
  readonly fields: MasterCourseContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MasterCourseContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MasterCourseContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends MasterCourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MasterCourseDefaultArgs<ExtArgs>>): Prisma__MasterCourseClient<$Result.GetResult<Prisma.$MasterCoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exercises<T extends MasterCourseContent$exercisesArgs<ExtArgs> = {}>(args?: Subset<T, MasterCourseContent$exercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatMessages<T extends MasterCourseContent$chatMessagesArgs<ExtArgs> = {}>(args?: Subset<T, MasterCourseContent$chatMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatRoom<T extends MasterCourseContent$chatRoomArgs<ExtArgs> = {}>(args?: Subset<T, MasterCourseContent$chatRoomArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MasterCourseContent model
   */ 
  interface MasterCourseContentFieldRefs {
    readonly id: FieldRef<"MasterCourseContent", 'String'>
    readonly courseId: FieldRef<"MasterCourseContent", 'String'>
    readonly sequence: FieldRef<"MasterCourseContent", 'Int'>
    readonly title: FieldRef<"MasterCourseContent", 'String'>
    readonly content: FieldRef<"MasterCourseContent", 'String'>
    readonly createdAt: FieldRef<"MasterCourseContent", 'DateTime'>
    readonly updatedAt: FieldRef<"MasterCourseContent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MasterCourseContent findUnique
   */
  export type MasterCourseContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourseContent
     */
    select?: MasterCourseContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourseContent
     */
    omit?: MasterCourseContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseContentInclude<ExtArgs> | null
    /**
     * Filter, which MasterCourseContent to fetch.
     */
    where: MasterCourseContentWhereUniqueInput
  }

  /**
   * MasterCourseContent findUniqueOrThrow
   */
  export type MasterCourseContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourseContent
     */
    select?: MasterCourseContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourseContent
     */
    omit?: MasterCourseContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseContentInclude<ExtArgs> | null
    /**
     * Filter, which MasterCourseContent to fetch.
     */
    where: MasterCourseContentWhereUniqueInput
  }

  /**
   * MasterCourseContent findFirst
   */
  export type MasterCourseContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourseContent
     */
    select?: MasterCourseContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourseContent
     */
    omit?: MasterCourseContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseContentInclude<ExtArgs> | null
    /**
     * Filter, which MasterCourseContent to fetch.
     */
    where?: MasterCourseContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterCourseContents to fetch.
     */
    orderBy?: MasterCourseContentOrderByWithRelationInput | MasterCourseContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasterCourseContents.
     */
    cursor?: MasterCourseContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterCourseContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterCourseContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterCourseContents.
     */
    distinct?: MasterCourseContentScalarFieldEnum | MasterCourseContentScalarFieldEnum[]
  }

  /**
   * MasterCourseContent findFirstOrThrow
   */
  export type MasterCourseContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourseContent
     */
    select?: MasterCourseContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourseContent
     */
    omit?: MasterCourseContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseContentInclude<ExtArgs> | null
    /**
     * Filter, which MasterCourseContent to fetch.
     */
    where?: MasterCourseContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterCourseContents to fetch.
     */
    orderBy?: MasterCourseContentOrderByWithRelationInput | MasterCourseContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasterCourseContents.
     */
    cursor?: MasterCourseContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterCourseContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterCourseContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterCourseContents.
     */
    distinct?: MasterCourseContentScalarFieldEnum | MasterCourseContentScalarFieldEnum[]
  }

  /**
   * MasterCourseContent findMany
   */
  export type MasterCourseContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourseContent
     */
    select?: MasterCourseContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourseContent
     */
    omit?: MasterCourseContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseContentInclude<ExtArgs> | null
    /**
     * Filter, which MasterCourseContents to fetch.
     */
    where?: MasterCourseContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterCourseContents to fetch.
     */
    orderBy?: MasterCourseContentOrderByWithRelationInput | MasterCourseContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MasterCourseContents.
     */
    cursor?: MasterCourseContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterCourseContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterCourseContents.
     */
    skip?: number
    distinct?: MasterCourseContentScalarFieldEnum | MasterCourseContentScalarFieldEnum[]
  }

  /**
   * MasterCourseContent create
   */
  export type MasterCourseContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourseContent
     */
    select?: MasterCourseContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourseContent
     */
    omit?: MasterCourseContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseContentInclude<ExtArgs> | null
    /**
     * The data needed to create a MasterCourseContent.
     */
    data: XOR<MasterCourseContentCreateInput, MasterCourseContentUncheckedCreateInput>
  }

  /**
   * MasterCourseContent createMany
   */
  export type MasterCourseContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MasterCourseContents.
     */
    data: MasterCourseContentCreateManyInput | MasterCourseContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MasterCourseContent createManyAndReturn
   */
  export type MasterCourseContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourseContent
     */
    select?: MasterCourseContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourseContent
     */
    omit?: MasterCourseContentOmit<ExtArgs> | null
    /**
     * The data used to create many MasterCourseContents.
     */
    data: MasterCourseContentCreateManyInput | MasterCourseContentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseContentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MasterCourseContent update
   */
  export type MasterCourseContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourseContent
     */
    select?: MasterCourseContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourseContent
     */
    omit?: MasterCourseContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseContentInclude<ExtArgs> | null
    /**
     * The data needed to update a MasterCourseContent.
     */
    data: XOR<MasterCourseContentUpdateInput, MasterCourseContentUncheckedUpdateInput>
    /**
     * Choose, which MasterCourseContent to update.
     */
    where: MasterCourseContentWhereUniqueInput
  }

  /**
   * MasterCourseContent updateMany
   */
  export type MasterCourseContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MasterCourseContents.
     */
    data: XOR<MasterCourseContentUpdateManyMutationInput, MasterCourseContentUncheckedUpdateManyInput>
    /**
     * Filter which MasterCourseContents to update
     */
    where?: MasterCourseContentWhereInput
    /**
     * Limit how many MasterCourseContents to update.
     */
    limit?: number
  }

  /**
   * MasterCourseContent updateManyAndReturn
   */
  export type MasterCourseContentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourseContent
     */
    select?: MasterCourseContentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourseContent
     */
    omit?: MasterCourseContentOmit<ExtArgs> | null
    /**
     * The data used to update MasterCourseContents.
     */
    data: XOR<MasterCourseContentUpdateManyMutationInput, MasterCourseContentUncheckedUpdateManyInput>
    /**
     * Filter which MasterCourseContents to update
     */
    where?: MasterCourseContentWhereInput
    /**
     * Limit how many MasterCourseContents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseContentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MasterCourseContent upsert
   */
  export type MasterCourseContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourseContent
     */
    select?: MasterCourseContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourseContent
     */
    omit?: MasterCourseContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseContentInclude<ExtArgs> | null
    /**
     * The filter to search for the MasterCourseContent to update in case it exists.
     */
    where: MasterCourseContentWhereUniqueInput
    /**
     * In case the MasterCourseContent found by the `where` argument doesn't exist, create a new MasterCourseContent with this data.
     */
    create: XOR<MasterCourseContentCreateInput, MasterCourseContentUncheckedCreateInput>
    /**
     * In case the MasterCourseContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MasterCourseContentUpdateInput, MasterCourseContentUncheckedUpdateInput>
  }

  /**
   * MasterCourseContent delete
   */
  export type MasterCourseContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourseContent
     */
    select?: MasterCourseContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourseContent
     */
    omit?: MasterCourseContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseContentInclude<ExtArgs> | null
    /**
     * Filter which MasterCourseContent to delete.
     */
    where: MasterCourseContentWhereUniqueInput
  }

  /**
   * MasterCourseContent deleteMany
   */
  export type MasterCourseContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasterCourseContents to delete
     */
    where?: MasterCourseContentWhereInput
    /**
     * Limit how many MasterCourseContents to delete.
     */
    limit?: number
  }

  /**
   * MasterCourseContent.exercises
   */
  export type MasterCourseContent$exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExercise
     */
    select?: MasterExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExercise
     */
    omit?: MasterExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExerciseInclude<ExtArgs> | null
    where?: MasterExerciseWhereInput
    orderBy?: MasterExerciseOrderByWithRelationInput | MasterExerciseOrderByWithRelationInput[]
    cursor?: MasterExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MasterExerciseScalarFieldEnum | MasterExerciseScalarFieldEnum[]
  }

  /**
   * MasterCourseContent.chatMessages
   */
  export type MasterCourseContent$chatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * MasterCourseContent.chatRoom
   */
  export type MasterCourseContent$chatRoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    where?: ChatRoomWhereInput
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    cursor?: ChatRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * MasterCourseContent without action
   */
  export type MasterCourseContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourseContent
     */
    select?: MasterCourseContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourseContent
     */
    omit?: MasterCourseContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseContentInclude<ExtArgs> | null
  }


  /**
   * Model MasterExercise
   */

  export type AggregateMasterExercise = {
    _count: MasterExerciseCountAggregateOutputType | null
    _min: MasterExerciseMinAggregateOutputType | null
    _max: MasterExerciseMaxAggregateOutputType | null
  }

  export type MasterExerciseMinAggregateOutputType = {
    id: string | null
    courseContentId: string | null
    exerciseType: string | null
    question: string | null
    options: string | null
    correctAnswer: string | null
    createdAt: Date | null
  }

  export type MasterExerciseMaxAggregateOutputType = {
    id: string | null
    courseContentId: string | null
    exerciseType: string | null
    question: string | null
    options: string | null
    correctAnswer: string | null
    createdAt: Date | null
  }

  export type MasterExerciseCountAggregateOutputType = {
    id: number
    courseContentId: number
    exerciseType: number
    question: number
    options: number
    correctAnswer: number
    createdAt: number
    _all: number
  }


  export type MasterExerciseMinAggregateInputType = {
    id?: true
    courseContentId?: true
    exerciseType?: true
    question?: true
    options?: true
    correctAnswer?: true
    createdAt?: true
  }

  export type MasterExerciseMaxAggregateInputType = {
    id?: true
    courseContentId?: true
    exerciseType?: true
    question?: true
    options?: true
    correctAnswer?: true
    createdAt?: true
  }

  export type MasterExerciseCountAggregateInputType = {
    id?: true
    courseContentId?: true
    exerciseType?: true
    question?: true
    options?: true
    correctAnswer?: true
    createdAt?: true
    _all?: true
  }

  export type MasterExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasterExercise to aggregate.
     */
    where?: MasterExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterExercises to fetch.
     */
    orderBy?: MasterExerciseOrderByWithRelationInput | MasterExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MasterExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MasterExercises
    **/
    _count?: true | MasterExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MasterExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MasterExerciseMaxAggregateInputType
  }

  export type GetMasterExerciseAggregateType<T extends MasterExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateMasterExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMasterExercise[P]>
      : GetScalarType<T[P], AggregateMasterExercise[P]>
  }




  export type MasterExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterExerciseWhereInput
    orderBy?: MasterExerciseOrderByWithAggregationInput | MasterExerciseOrderByWithAggregationInput[]
    by: MasterExerciseScalarFieldEnum[] | MasterExerciseScalarFieldEnum
    having?: MasterExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MasterExerciseCountAggregateInputType | true
    _min?: MasterExerciseMinAggregateInputType
    _max?: MasterExerciseMaxAggregateInputType
  }

  export type MasterExerciseGroupByOutputType = {
    id: string
    courseContentId: string
    exerciseType: string
    question: string
    options: string | null
    correctAnswer: string | null
    createdAt: Date
    _count: MasterExerciseCountAggregateOutputType | null
    _min: MasterExerciseMinAggregateOutputType | null
    _max: MasterExerciseMaxAggregateOutputType | null
  }

  type GetMasterExerciseGroupByPayload<T extends MasterExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MasterExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MasterExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MasterExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], MasterExerciseGroupByOutputType[P]>
        }
      >
    >


  export type MasterExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseContentId?: boolean
    exerciseType?: boolean
    question?: boolean
    options?: boolean
    correctAnswer?: boolean
    createdAt?: boolean
    courseContent?: boolean | MasterCourseContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masterExercise"]>

  export type MasterExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseContentId?: boolean
    exerciseType?: boolean
    question?: boolean
    options?: boolean
    correctAnswer?: boolean
    createdAt?: boolean
    courseContent?: boolean | MasterCourseContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masterExercise"]>

  export type MasterExerciseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseContentId?: boolean
    exerciseType?: boolean
    question?: boolean
    options?: boolean
    correctAnswer?: boolean
    createdAt?: boolean
    courseContent?: boolean | MasterCourseContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masterExercise"]>

  export type MasterExerciseSelectScalar = {
    id?: boolean
    courseContentId?: boolean
    exerciseType?: boolean
    question?: boolean
    options?: boolean
    correctAnswer?: boolean
    createdAt?: boolean
  }

  export type MasterExerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseContentId" | "exerciseType" | "question" | "options" | "correctAnswer" | "createdAt", ExtArgs["result"]["masterExercise"]>
  export type MasterExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseContent?: boolean | MasterCourseContentDefaultArgs<ExtArgs>
  }
  export type MasterExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseContent?: boolean | MasterCourseContentDefaultArgs<ExtArgs>
  }
  export type MasterExerciseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseContent?: boolean | MasterCourseContentDefaultArgs<ExtArgs>
  }

  export type $MasterExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MasterExercise"
    objects: {
      courseContent: Prisma.$MasterCourseContentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseContentId: string
      exerciseType: string
      question: string
      options: string | null
      correctAnswer: string | null
      createdAt: Date
    }, ExtArgs["result"]["masterExercise"]>
    composites: {}
  }

  type MasterExerciseGetPayload<S extends boolean | null | undefined | MasterExerciseDefaultArgs> = $Result.GetResult<Prisma.$MasterExercisePayload, S>

  type MasterExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MasterExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MasterExerciseCountAggregateInputType | true
    }

  export interface MasterExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MasterExercise'], meta: { name: 'MasterExercise' } }
    /**
     * Find zero or one MasterExercise that matches the filter.
     * @param {MasterExerciseFindUniqueArgs} args - Arguments to find a MasterExercise
     * @example
     * // Get one MasterExercise
     * const masterExercise = await prisma.masterExercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MasterExerciseFindUniqueArgs>(args: SelectSubset<T, MasterExerciseFindUniqueArgs<ExtArgs>>): Prisma__MasterExerciseClient<$Result.GetResult<Prisma.$MasterExercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MasterExercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MasterExerciseFindUniqueOrThrowArgs} args - Arguments to find a MasterExercise
     * @example
     * // Get one MasterExercise
     * const masterExercise = await prisma.masterExercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MasterExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, MasterExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MasterExerciseClient<$Result.GetResult<Prisma.$MasterExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MasterExercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterExerciseFindFirstArgs} args - Arguments to find a MasterExercise
     * @example
     * // Get one MasterExercise
     * const masterExercise = await prisma.masterExercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MasterExerciseFindFirstArgs>(args?: SelectSubset<T, MasterExerciseFindFirstArgs<ExtArgs>>): Prisma__MasterExerciseClient<$Result.GetResult<Prisma.$MasterExercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MasterExercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterExerciseFindFirstOrThrowArgs} args - Arguments to find a MasterExercise
     * @example
     * // Get one MasterExercise
     * const masterExercise = await prisma.masterExercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MasterExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, MasterExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__MasterExerciseClient<$Result.GetResult<Prisma.$MasterExercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MasterExercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MasterExercises
     * const masterExercises = await prisma.masterExercise.findMany()
     * 
     * // Get first 10 MasterExercises
     * const masterExercises = await prisma.masterExercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const masterExerciseWithIdOnly = await prisma.masterExercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MasterExerciseFindManyArgs>(args?: SelectSubset<T, MasterExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MasterExercise.
     * @param {MasterExerciseCreateArgs} args - Arguments to create a MasterExercise.
     * @example
     * // Create one MasterExercise
     * const MasterExercise = await prisma.masterExercise.create({
     *   data: {
     *     // ... data to create a MasterExercise
     *   }
     * })
     * 
     */
    create<T extends MasterExerciseCreateArgs>(args: SelectSubset<T, MasterExerciseCreateArgs<ExtArgs>>): Prisma__MasterExerciseClient<$Result.GetResult<Prisma.$MasterExercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MasterExercises.
     * @param {MasterExerciseCreateManyArgs} args - Arguments to create many MasterExercises.
     * @example
     * // Create many MasterExercises
     * const masterExercise = await prisma.masterExercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MasterExerciseCreateManyArgs>(args?: SelectSubset<T, MasterExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MasterExercises and returns the data saved in the database.
     * @param {MasterExerciseCreateManyAndReturnArgs} args - Arguments to create many MasterExercises.
     * @example
     * // Create many MasterExercises
     * const masterExercise = await prisma.masterExercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MasterExercises and only return the `id`
     * const masterExerciseWithIdOnly = await prisma.masterExercise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MasterExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, MasterExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterExercisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MasterExercise.
     * @param {MasterExerciseDeleteArgs} args - Arguments to delete one MasterExercise.
     * @example
     * // Delete one MasterExercise
     * const MasterExercise = await prisma.masterExercise.delete({
     *   where: {
     *     // ... filter to delete one MasterExercise
     *   }
     * })
     * 
     */
    delete<T extends MasterExerciseDeleteArgs>(args: SelectSubset<T, MasterExerciseDeleteArgs<ExtArgs>>): Prisma__MasterExerciseClient<$Result.GetResult<Prisma.$MasterExercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MasterExercise.
     * @param {MasterExerciseUpdateArgs} args - Arguments to update one MasterExercise.
     * @example
     * // Update one MasterExercise
     * const masterExercise = await prisma.masterExercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MasterExerciseUpdateArgs>(args: SelectSubset<T, MasterExerciseUpdateArgs<ExtArgs>>): Prisma__MasterExerciseClient<$Result.GetResult<Prisma.$MasterExercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MasterExercises.
     * @param {MasterExerciseDeleteManyArgs} args - Arguments to filter MasterExercises to delete.
     * @example
     * // Delete a few MasterExercises
     * const { count } = await prisma.masterExercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MasterExerciseDeleteManyArgs>(args?: SelectSubset<T, MasterExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MasterExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MasterExercises
     * const masterExercise = await prisma.masterExercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MasterExerciseUpdateManyArgs>(args: SelectSubset<T, MasterExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MasterExercises and returns the data updated in the database.
     * @param {MasterExerciseUpdateManyAndReturnArgs} args - Arguments to update many MasterExercises.
     * @example
     * // Update many MasterExercises
     * const masterExercise = await prisma.masterExercise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MasterExercises and only return the `id`
     * const masterExerciseWithIdOnly = await prisma.masterExercise.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MasterExerciseUpdateManyAndReturnArgs>(args: SelectSubset<T, MasterExerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterExercisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MasterExercise.
     * @param {MasterExerciseUpsertArgs} args - Arguments to update or create a MasterExercise.
     * @example
     * // Update or create a MasterExercise
     * const masterExercise = await prisma.masterExercise.upsert({
     *   create: {
     *     // ... data to create a MasterExercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MasterExercise we want to update
     *   }
     * })
     */
    upsert<T extends MasterExerciseUpsertArgs>(args: SelectSubset<T, MasterExerciseUpsertArgs<ExtArgs>>): Prisma__MasterExerciseClient<$Result.GetResult<Prisma.$MasterExercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MasterExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterExerciseCountArgs} args - Arguments to filter MasterExercises to count.
     * @example
     * // Count the number of MasterExercises
     * const count = await prisma.masterExercise.count({
     *   where: {
     *     // ... the filter for the MasterExercises we want to count
     *   }
     * })
    **/
    count<T extends MasterExerciseCountArgs>(
      args?: Subset<T, MasterExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MasterExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MasterExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MasterExerciseAggregateArgs>(args: Subset<T, MasterExerciseAggregateArgs>): Prisma.PrismaPromise<GetMasterExerciseAggregateType<T>>

    /**
     * Group by MasterExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterExerciseGroupByArgs} args - Group by arguments.
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
      T extends MasterExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MasterExerciseGroupByArgs['orderBy'] }
        : { orderBy?: MasterExerciseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MasterExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMasterExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MasterExercise model
   */
  readonly fields: MasterExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MasterExercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MasterExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courseContent<T extends MasterCourseContentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MasterCourseContentDefaultArgs<ExtArgs>>): Prisma__MasterCourseContentClient<$Result.GetResult<Prisma.$MasterCourseContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MasterExercise model
   */ 
  interface MasterExerciseFieldRefs {
    readonly id: FieldRef<"MasterExercise", 'String'>
    readonly courseContentId: FieldRef<"MasterExercise", 'String'>
    readonly exerciseType: FieldRef<"MasterExercise", 'String'>
    readonly question: FieldRef<"MasterExercise", 'String'>
    readonly options: FieldRef<"MasterExercise", 'String'>
    readonly correctAnswer: FieldRef<"MasterExercise", 'String'>
    readonly createdAt: FieldRef<"MasterExercise", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MasterExercise findUnique
   */
  export type MasterExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExercise
     */
    select?: MasterExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExercise
     */
    omit?: MasterExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExerciseInclude<ExtArgs> | null
    /**
     * Filter, which MasterExercise to fetch.
     */
    where: MasterExerciseWhereUniqueInput
  }

  /**
   * MasterExercise findUniqueOrThrow
   */
  export type MasterExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExercise
     */
    select?: MasterExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExercise
     */
    omit?: MasterExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExerciseInclude<ExtArgs> | null
    /**
     * Filter, which MasterExercise to fetch.
     */
    where: MasterExerciseWhereUniqueInput
  }

  /**
   * MasterExercise findFirst
   */
  export type MasterExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExercise
     */
    select?: MasterExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExercise
     */
    omit?: MasterExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExerciseInclude<ExtArgs> | null
    /**
     * Filter, which MasterExercise to fetch.
     */
    where?: MasterExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterExercises to fetch.
     */
    orderBy?: MasterExerciseOrderByWithRelationInput | MasterExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasterExercises.
     */
    cursor?: MasterExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterExercises.
     */
    distinct?: MasterExerciseScalarFieldEnum | MasterExerciseScalarFieldEnum[]
  }

  /**
   * MasterExercise findFirstOrThrow
   */
  export type MasterExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExercise
     */
    select?: MasterExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExercise
     */
    omit?: MasterExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExerciseInclude<ExtArgs> | null
    /**
     * Filter, which MasterExercise to fetch.
     */
    where?: MasterExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterExercises to fetch.
     */
    orderBy?: MasterExerciseOrderByWithRelationInput | MasterExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasterExercises.
     */
    cursor?: MasterExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterExercises.
     */
    distinct?: MasterExerciseScalarFieldEnum | MasterExerciseScalarFieldEnum[]
  }

  /**
   * MasterExercise findMany
   */
  export type MasterExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExercise
     */
    select?: MasterExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExercise
     */
    omit?: MasterExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExerciseInclude<ExtArgs> | null
    /**
     * Filter, which MasterExercises to fetch.
     */
    where?: MasterExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterExercises to fetch.
     */
    orderBy?: MasterExerciseOrderByWithRelationInput | MasterExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MasterExercises.
     */
    cursor?: MasterExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterExercises.
     */
    skip?: number
    distinct?: MasterExerciseScalarFieldEnum | MasterExerciseScalarFieldEnum[]
  }

  /**
   * MasterExercise create
   */
  export type MasterExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExercise
     */
    select?: MasterExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExercise
     */
    omit?: MasterExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a MasterExercise.
     */
    data: XOR<MasterExerciseCreateInput, MasterExerciseUncheckedCreateInput>
  }

  /**
   * MasterExercise createMany
   */
  export type MasterExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MasterExercises.
     */
    data: MasterExerciseCreateManyInput | MasterExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MasterExercise createManyAndReturn
   */
  export type MasterExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExercise
     */
    select?: MasterExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExercise
     */
    omit?: MasterExerciseOmit<ExtArgs> | null
    /**
     * The data used to create many MasterExercises.
     */
    data: MasterExerciseCreateManyInput | MasterExerciseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExerciseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MasterExercise update
   */
  export type MasterExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExercise
     */
    select?: MasterExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExercise
     */
    omit?: MasterExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a MasterExercise.
     */
    data: XOR<MasterExerciseUpdateInput, MasterExerciseUncheckedUpdateInput>
    /**
     * Choose, which MasterExercise to update.
     */
    where: MasterExerciseWhereUniqueInput
  }

  /**
   * MasterExercise updateMany
   */
  export type MasterExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MasterExercises.
     */
    data: XOR<MasterExerciseUpdateManyMutationInput, MasterExerciseUncheckedUpdateManyInput>
    /**
     * Filter which MasterExercises to update
     */
    where?: MasterExerciseWhereInput
    /**
     * Limit how many MasterExercises to update.
     */
    limit?: number
  }

  /**
   * MasterExercise updateManyAndReturn
   */
  export type MasterExerciseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExercise
     */
    select?: MasterExerciseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExercise
     */
    omit?: MasterExerciseOmit<ExtArgs> | null
    /**
     * The data used to update MasterExercises.
     */
    data: XOR<MasterExerciseUpdateManyMutationInput, MasterExerciseUncheckedUpdateManyInput>
    /**
     * Filter which MasterExercises to update
     */
    where?: MasterExerciseWhereInput
    /**
     * Limit how many MasterExercises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExerciseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MasterExercise upsert
   */
  export type MasterExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExercise
     */
    select?: MasterExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExercise
     */
    omit?: MasterExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the MasterExercise to update in case it exists.
     */
    where: MasterExerciseWhereUniqueInput
    /**
     * In case the MasterExercise found by the `where` argument doesn't exist, create a new MasterExercise with this data.
     */
    create: XOR<MasterExerciseCreateInput, MasterExerciseUncheckedCreateInput>
    /**
     * In case the MasterExercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MasterExerciseUpdateInput, MasterExerciseUncheckedUpdateInput>
  }

  /**
   * MasterExercise delete
   */
  export type MasterExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExercise
     */
    select?: MasterExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExercise
     */
    omit?: MasterExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExerciseInclude<ExtArgs> | null
    /**
     * Filter which MasterExercise to delete.
     */
    where: MasterExerciseWhereUniqueInput
  }

  /**
   * MasterExercise deleteMany
   */
  export type MasterExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasterExercises to delete
     */
    where?: MasterExerciseWhereInput
    /**
     * Limit how many MasterExercises to delete.
     */
    limit?: number
  }

  /**
   * MasterExercise without action
   */
  export type MasterExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExercise
     */
    select?: MasterExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExercise
     */
    omit?: MasterExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExerciseInclude<ExtArgs> | null
  }


  /**
   * Model ChatRoom
   */

  export type AggregateChatRoom = {
    _count: ChatRoomCountAggregateOutputType | null
    _min: ChatRoomMinAggregateOutputType | null
    _max: ChatRoomMaxAggregateOutputType | null
  }

  export type ChatRoomMinAggregateOutputType = {
    id: string | null
    userId: string | null
    courseContentId: string | null
    createdAt: Date | null
  }

  export type ChatRoomMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    courseContentId: string | null
    createdAt: Date | null
  }

  export type ChatRoomCountAggregateOutputType = {
    id: number
    userId: number
    courseContentId: number
    createdAt: number
    _all: number
  }


  export type ChatRoomMinAggregateInputType = {
    id?: true
    userId?: true
    courseContentId?: true
    createdAt?: true
  }

  export type ChatRoomMaxAggregateInputType = {
    id?: true
    userId?: true
    courseContentId?: true
    createdAt?: true
  }

  export type ChatRoomCountAggregateInputType = {
    id?: true
    userId?: true
    courseContentId?: true
    createdAt?: true
    _all?: true
  }

  export type ChatRoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRoom to aggregate.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatRooms
    **/
    _count?: true | ChatRoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatRoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatRoomMaxAggregateInputType
  }

  export type GetChatRoomAggregateType<T extends ChatRoomAggregateArgs> = {
        [P in keyof T & keyof AggregateChatRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatRoom[P]>
      : GetScalarType<T[P], AggregateChatRoom[P]>
  }




  export type ChatRoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomWhereInput
    orderBy?: ChatRoomOrderByWithAggregationInput | ChatRoomOrderByWithAggregationInput[]
    by: ChatRoomScalarFieldEnum[] | ChatRoomScalarFieldEnum
    having?: ChatRoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatRoomCountAggregateInputType | true
    _min?: ChatRoomMinAggregateInputType
    _max?: ChatRoomMaxAggregateInputType
  }

  export type ChatRoomGroupByOutputType = {
    id: string
    userId: string
    courseContentId: string
    createdAt: Date
    _count: ChatRoomCountAggregateOutputType | null
    _min: ChatRoomMinAggregateOutputType | null
    _max: ChatRoomMaxAggregateOutputType | null
  }

  type GetChatRoomGroupByPayload<T extends ChatRoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatRoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatRoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatRoomGroupByOutputType[P]>
            : GetScalarType<T[P], ChatRoomGroupByOutputType[P]>
        }
      >
    >


  export type ChatRoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseContentId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    courseContent?: boolean | MasterCourseContentDefaultArgs<ExtArgs>
    chatMessage?: boolean | ChatRoom$chatMessageArgs<ExtArgs>
    _count?: boolean | ChatRoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatRoom"]>

  export type ChatRoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseContentId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    courseContent?: boolean | MasterCourseContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatRoom"]>

  export type ChatRoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseContentId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    courseContent?: boolean | MasterCourseContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatRoom"]>

  export type ChatRoomSelectScalar = {
    id?: boolean
    userId?: boolean
    courseContentId?: boolean
    createdAt?: boolean
  }

  export type ChatRoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "courseContentId" | "createdAt", ExtArgs["result"]["chatRoom"]>
  export type ChatRoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    courseContent?: boolean | MasterCourseContentDefaultArgs<ExtArgs>
    chatMessage?: boolean | ChatRoom$chatMessageArgs<ExtArgs>
    _count?: boolean | ChatRoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatRoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    courseContent?: boolean | MasterCourseContentDefaultArgs<ExtArgs>
  }
  export type ChatRoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    courseContent?: boolean | MasterCourseContentDefaultArgs<ExtArgs>
  }

  export type $ChatRoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatRoom"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      courseContent: Prisma.$MasterCourseContentPayload<ExtArgs>
      chatMessage: Prisma.$ChatMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      courseContentId: string
      createdAt: Date
    }, ExtArgs["result"]["chatRoom"]>
    composites: {}
  }

  type ChatRoomGetPayload<S extends boolean | null | undefined | ChatRoomDefaultArgs> = $Result.GetResult<Prisma.$ChatRoomPayload, S>

  type ChatRoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatRoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatRoomCountAggregateInputType | true
    }

  export interface ChatRoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatRoom'], meta: { name: 'ChatRoom' } }
    /**
     * Find zero or one ChatRoom that matches the filter.
     * @param {ChatRoomFindUniqueArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatRoomFindUniqueArgs>(args: SelectSubset<T, ChatRoomFindUniqueArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatRoom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatRoomFindUniqueOrThrowArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatRoomFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatRoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatRoom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindFirstArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatRoomFindFirstArgs>(args?: SelectSubset<T, ChatRoomFindFirstArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatRoom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindFirstOrThrowArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatRoomFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatRoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatRooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatRooms
     * const chatRooms = await prisma.chatRoom.findMany()
     * 
     * // Get first 10 ChatRooms
     * const chatRooms = await prisma.chatRoom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatRoomWithIdOnly = await prisma.chatRoom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatRoomFindManyArgs>(args?: SelectSubset<T, ChatRoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatRoom.
     * @param {ChatRoomCreateArgs} args - Arguments to create a ChatRoom.
     * @example
     * // Create one ChatRoom
     * const ChatRoom = await prisma.chatRoom.create({
     *   data: {
     *     // ... data to create a ChatRoom
     *   }
     * })
     * 
     */
    create<T extends ChatRoomCreateArgs>(args: SelectSubset<T, ChatRoomCreateArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatRooms.
     * @param {ChatRoomCreateManyArgs} args - Arguments to create many ChatRooms.
     * @example
     * // Create many ChatRooms
     * const chatRoom = await prisma.chatRoom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatRoomCreateManyArgs>(args?: SelectSubset<T, ChatRoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatRooms and returns the data saved in the database.
     * @param {ChatRoomCreateManyAndReturnArgs} args - Arguments to create many ChatRooms.
     * @example
     * // Create many ChatRooms
     * const chatRoom = await prisma.chatRoom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatRooms and only return the `id`
     * const chatRoomWithIdOnly = await prisma.chatRoom.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatRoomCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatRoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatRoom.
     * @param {ChatRoomDeleteArgs} args - Arguments to delete one ChatRoom.
     * @example
     * // Delete one ChatRoom
     * const ChatRoom = await prisma.chatRoom.delete({
     *   where: {
     *     // ... filter to delete one ChatRoom
     *   }
     * })
     * 
     */
    delete<T extends ChatRoomDeleteArgs>(args: SelectSubset<T, ChatRoomDeleteArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatRoom.
     * @param {ChatRoomUpdateArgs} args - Arguments to update one ChatRoom.
     * @example
     * // Update one ChatRoom
     * const chatRoom = await prisma.chatRoom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatRoomUpdateArgs>(args: SelectSubset<T, ChatRoomUpdateArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatRooms.
     * @param {ChatRoomDeleteManyArgs} args - Arguments to filter ChatRooms to delete.
     * @example
     * // Delete a few ChatRooms
     * const { count } = await prisma.chatRoom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatRoomDeleteManyArgs>(args?: SelectSubset<T, ChatRoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatRooms
     * const chatRoom = await prisma.chatRoom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatRoomUpdateManyArgs>(args: SelectSubset<T, ChatRoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatRooms and returns the data updated in the database.
     * @param {ChatRoomUpdateManyAndReturnArgs} args - Arguments to update many ChatRooms.
     * @example
     * // Update many ChatRooms
     * const chatRoom = await prisma.chatRoom.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatRooms and only return the `id`
     * const chatRoomWithIdOnly = await prisma.chatRoom.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatRoomUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatRoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatRoom.
     * @param {ChatRoomUpsertArgs} args - Arguments to update or create a ChatRoom.
     * @example
     * // Update or create a ChatRoom
     * const chatRoom = await prisma.chatRoom.upsert({
     *   create: {
     *     // ... data to create a ChatRoom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatRoom we want to update
     *   }
     * })
     */
    upsert<T extends ChatRoomUpsertArgs>(args: SelectSubset<T, ChatRoomUpsertArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomCountArgs} args - Arguments to filter ChatRooms to count.
     * @example
     * // Count the number of ChatRooms
     * const count = await prisma.chatRoom.count({
     *   where: {
     *     // ... the filter for the ChatRooms we want to count
     *   }
     * })
    **/
    count<T extends ChatRoomCountArgs>(
      args?: Subset<T, ChatRoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatRoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatRoomAggregateArgs>(args: Subset<T, ChatRoomAggregateArgs>): Prisma.PrismaPromise<GetChatRoomAggregateType<T>>

    /**
     * Group by ChatRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomGroupByArgs} args - Group by arguments.
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
      T extends ChatRoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatRoomGroupByArgs['orderBy'] }
        : { orderBy?: ChatRoomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatRoom model
   */
  readonly fields: ChatRoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatRoom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatRoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    courseContent<T extends MasterCourseContentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MasterCourseContentDefaultArgs<ExtArgs>>): Prisma__MasterCourseContentClient<$Result.GetResult<Prisma.$MasterCourseContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chatMessage<T extends ChatRoom$chatMessageArgs<ExtArgs> = {}>(args?: Subset<T, ChatRoom$chatMessageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatRoom model
   */ 
  interface ChatRoomFieldRefs {
    readonly id: FieldRef<"ChatRoom", 'String'>
    readonly userId: FieldRef<"ChatRoom", 'String'>
    readonly courseContentId: FieldRef<"ChatRoom", 'String'>
    readonly createdAt: FieldRef<"ChatRoom", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatRoom findUnique
   */
  export type ChatRoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom findUniqueOrThrow
   */
  export type ChatRoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom findFirst
   */
  export type ChatRoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRooms.
     */
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * ChatRoom findFirstOrThrow
   */
  export type ChatRoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRooms.
     */
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * ChatRoom findMany
   */
  export type ChatRoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRooms to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * ChatRoom create
   */
  export type ChatRoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatRoom.
     */
    data: XOR<ChatRoomCreateInput, ChatRoomUncheckedCreateInput>
  }

  /**
   * ChatRoom createMany
   */
  export type ChatRoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatRooms.
     */
    data: ChatRoomCreateManyInput | ChatRoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatRoom createManyAndReturn
   */
  export type ChatRoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * The data used to create many ChatRooms.
     */
    data: ChatRoomCreateManyInput | ChatRoomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatRoom update
   */
  export type ChatRoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatRoom.
     */
    data: XOR<ChatRoomUpdateInput, ChatRoomUncheckedUpdateInput>
    /**
     * Choose, which ChatRoom to update.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom updateMany
   */
  export type ChatRoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatRooms.
     */
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyInput>
    /**
     * Filter which ChatRooms to update
     */
    where?: ChatRoomWhereInput
    /**
     * Limit how many ChatRooms to update.
     */
    limit?: number
  }

  /**
   * ChatRoom updateManyAndReturn
   */
  export type ChatRoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * The data used to update ChatRooms.
     */
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyInput>
    /**
     * Filter which ChatRooms to update
     */
    where?: ChatRoomWhereInput
    /**
     * Limit how many ChatRooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatRoom upsert
   */
  export type ChatRoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatRoom to update in case it exists.
     */
    where: ChatRoomWhereUniqueInput
    /**
     * In case the ChatRoom found by the `where` argument doesn't exist, create a new ChatRoom with this data.
     */
    create: XOR<ChatRoomCreateInput, ChatRoomUncheckedCreateInput>
    /**
     * In case the ChatRoom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatRoomUpdateInput, ChatRoomUncheckedUpdateInput>
  }

  /**
   * ChatRoom delete
   */
  export type ChatRoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter which ChatRoom to delete.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom deleteMany
   */
  export type ChatRoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRooms to delete
     */
    where?: ChatRoomWhereInput
    /**
     * Limit how many ChatRooms to delete.
     */
    limit?: number
  }

  /**
   * ChatRoom.chatMessage
   */
  export type ChatRoom$chatMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatRoom without action
   */
  export type ChatRoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: string | null
    chatRoomId: string | null
    userId: string | null
    role: string | null
    message: string | null
    createdAt: Date | null
    masterCourseContentId: string | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: string | null
    chatRoomId: string | null
    userId: string | null
    role: string | null
    message: string | null
    createdAt: Date | null
    masterCourseContentId: string | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    chatRoomId: number
    userId: number
    role: number
    message: number
    createdAt: number
    masterCourseContentId: number
    _all: number
  }


  export type ChatMessageMinAggregateInputType = {
    id?: true
    chatRoomId?: true
    userId?: true
    role?: true
    message?: true
    createdAt?: true
    masterCourseContentId?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    chatRoomId?: true
    userId?: true
    role?: true
    message?: true
    createdAt?: true
    masterCourseContentId?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    chatRoomId?: true
    userId?: true
    role?: true
    message?: true
    createdAt?: true
    masterCourseContentId?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: string
    chatRoomId: string
    userId: string | null
    role: string
    message: string
    createdAt: Date
    masterCourseContentId: string | null
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatRoomId?: boolean
    userId?: boolean
    role?: boolean
    message?: boolean
    createdAt?: boolean
    masterCourseContentId?: boolean
    chatRoom?: boolean | ChatRoomDefaultArgs<ExtArgs>
    user?: boolean | ChatMessage$userArgs<ExtArgs>
    MasterCourseContent?: boolean | ChatMessage$MasterCourseContentArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatRoomId?: boolean
    userId?: boolean
    role?: boolean
    message?: boolean
    createdAt?: boolean
    masterCourseContentId?: boolean
    chatRoom?: boolean | ChatRoomDefaultArgs<ExtArgs>
    user?: boolean | ChatMessage$userArgs<ExtArgs>
    MasterCourseContent?: boolean | ChatMessage$MasterCourseContentArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatRoomId?: boolean
    userId?: boolean
    role?: boolean
    message?: boolean
    createdAt?: boolean
    masterCourseContentId?: boolean
    chatRoom?: boolean | ChatRoomDefaultArgs<ExtArgs>
    user?: boolean | ChatMessage$userArgs<ExtArgs>
    MasterCourseContent?: boolean | ChatMessage$MasterCourseContentArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    chatRoomId?: boolean
    userId?: boolean
    role?: boolean
    message?: boolean
    createdAt?: boolean
    masterCourseContentId?: boolean
  }

  export type ChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chatRoomId" | "userId" | "role" | "message" | "createdAt" | "masterCourseContentId", ExtArgs["result"]["chatMessage"]>
  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatRoom?: boolean | ChatRoomDefaultArgs<ExtArgs>
    user?: boolean | ChatMessage$userArgs<ExtArgs>
    MasterCourseContent?: boolean | ChatMessage$MasterCourseContentArgs<ExtArgs>
  }
  export type ChatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatRoom?: boolean | ChatRoomDefaultArgs<ExtArgs>
    user?: boolean | ChatMessage$userArgs<ExtArgs>
    MasterCourseContent?: boolean | ChatMessage$MasterCourseContentArgs<ExtArgs>
  }
  export type ChatMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatRoom?: boolean | ChatRoomDefaultArgs<ExtArgs>
    user?: boolean | ChatMessage$userArgs<ExtArgs>
    MasterCourseContent?: boolean | ChatMessage$MasterCourseContentArgs<ExtArgs>
  }

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      chatRoom: Prisma.$ChatRoomPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
      MasterCourseContent: Prisma.$MasterCourseContentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chatRoomId: string
      userId: string | null
      role: string
      message: string
      createdAt: Date
      masterCourseContentId: string | null
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages and returns the data updated in the database.
     * @param {ChatMessageUpdateManyAndReturnArgs} args - Arguments to update many ChatMessages.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
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
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chatRoom<T extends ChatRoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatRoomDefaultArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends ChatMessage$userArgs<ExtArgs> = {}>(args?: Subset<T, ChatMessage$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    MasterCourseContent<T extends ChatMessage$MasterCourseContentArgs<ExtArgs> = {}>(args?: Subset<T, ChatMessage$MasterCourseContentArgs<ExtArgs>>): Prisma__MasterCourseContentClient<$Result.GetResult<Prisma.$MasterCourseContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatMessage model
   */ 
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'String'>
    readonly chatRoomId: FieldRef<"ChatMessage", 'String'>
    readonly userId: FieldRef<"ChatMessage", 'String'>
    readonly role: FieldRef<"ChatMessage", 'String'>
    readonly message: FieldRef<"ChatMessage", 'String'>
    readonly createdAt: FieldRef<"ChatMessage", 'DateTime'>
    readonly masterCourseContentId: FieldRef<"ChatMessage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage updateManyAndReturn
   */
  export type ChatMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessage.user
   */
  export type ChatMessage$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ChatMessage.MasterCourseContent
   */
  export type ChatMessage$MasterCourseContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourseContent
     */
    select?: MasterCourseContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourseContent
     */
    omit?: MasterCourseContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseContentInclude<ExtArgs> | null
    where?: MasterCourseContentWhereInput
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
  }


  /**
   * Model MasterCourseFAQ
   */

  export type AggregateMasterCourseFAQ = {
    _count: MasterCourseFAQCountAggregateOutputType | null
    _min: MasterCourseFAQMinAggregateOutputType | null
    _max: MasterCourseFAQMaxAggregateOutputType | null
  }

  export type MasterCourseFAQMinAggregateOutputType = {
    id: string | null
    courseId: string | null
    question: string | null
    answer: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MasterCourseFAQMaxAggregateOutputType = {
    id: string | null
    courseId: string | null
    question: string | null
    answer: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MasterCourseFAQCountAggregateOutputType = {
    id: number
    courseId: number
    question: number
    answer: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MasterCourseFAQMinAggregateInputType = {
    id?: true
    courseId?: true
    question?: true
    answer?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MasterCourseFAQMaxAggregateInputType = {
    id?: true
    courseId?: true
    question?: true
    answer?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MasterCourseFAQCountAggregateInputType = {
    id?: true
    courseId?: true
    question?: true
    answer?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MasterCourseFAQAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasterCourseFAQ to aggregate.
     */
    where?: MasterCourseFAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterCourseFAQS to fetch.
     */
    orderBy?: MasterCourseFAQOrderByWithRelationInput | MasterCourseFAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MasterCourseFAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterCourseFAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterCourseFAQS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MasterCourseFAQS
    **/
    _count?: true | MasterCourseFAQCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MasterCourseFAQMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MasterCourseFAQMaxAggregateInputType
  }

  export type GetMasterCourseFAQAggregateType<T extends MasterCourseFAQAggregateArgs> = {
        [P in keyof T & keyof AggregateMasterCourseFAQ]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMasterCourseFAQ[P]>
      : GetScalarType<T[P], AggregateMasterCourseFAQ[P]>
  }




  export type MasterCourseFAQGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterCourseFAQWhereInput
    orderBy?: MasterCourseFAQOrderByWithAggregationInput | MasterCourseFAQOrderByWithAggregationInput[]
    by: MasterCourseFAQScalarFieldEnum[] | MasterCourseFAQScalarFieldEnum
    having?: MasterCourseFAQScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MasterCourseFAQCountAggregateInputType | true
    _min?: MasterCourseFAQMinAggregateInputType
    _max?: MasterCourseFAQMaxAggregateInputType
  }

  export type MasterCourseFAQGroupByOutputType = {
    id: string
    courseId: string
    question: string
    answer: string
    createdAt: Date
    updatedAt: Date
    _count: MasterCourseFAQCountAggregateOutputType | null
    _min: MasterCourseFAQMinAggregateOutputType | null
    _max: MasterCourseFAQMaxAggregateOutputType | null
  }

  type GetMasterCourseFAQGroupByPayload<T extends MasterCourseFAQGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MasterCourseFAQGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MasterCourseFAQGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MasterCourseFAQGroupByOutputType[P]>
            : GetScalarType<T[P], MasterCourseFAQGroupByOutputType[P]>
        }
      >
    >


  export type MasterCourseFAQSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    question?: boolean
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | MasterCourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masterCourseFAQ"]>

  export type MasterCourseFAQSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    question?: boolean
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | MasterCourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masterCourseFAQ"]>

  export type MasterCourseFAQSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    question?: boolean
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | MasterCourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masterCourseFAQ"]>

  export type MasterCourseFAQSelectScalar = {
    id?: boolean
    courseId?: boolean
    question?: boolean
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MasterCourseFAQOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "question" | "answer" | "createdAt" | "updatedAt", ExtArgs["result"]["masterCourseFAQ"]>
  export type MasterCourseFAQInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | MasterCourseDefaultArgs<ExtArgs>
  }
  export type MasterCourseFAQIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | MasterCourseDefaultArgs<ExtArgs>
  }
  export type MasterCourseFAQIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | MasterCourseDefaultArgs<ExtArgs>
  }

  export type $MasterCourseFAQPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MasterCourseFAQ"
    objects: {
      course: Prisma.$MasterCoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseId: string
      question: string
      answer: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["masterCourseFAQ"]>
    composites: {}
  }

  type MasterCourseFAQGetPayload<S extends boolean | null | undefined | MasterCourseFAQDefaultArgs> = $Result.GetResult<Prisma.$MasterCourseFAQPayload, S>

  type MasterCourseFAQCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MasterCourseFAQFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MasterCourseFAQCountAggregateInputType | true
    }

  export interface MasterCourseFAQDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MasterCourseFAQ'], meta: { name: 'MasterCourseFAQ' } }
    /**
     * Find zero or one MasterCourseFAQ that matches the filter.
     * @param {MasterCourseFAQFindUniqueArgs} args - Arguments to find a MasterCourseFAQ
     * @example
     * // Get one MasterCourseFAQ
     * const masterCourseFAQ = await prisma.masterCourseFAQ.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MasterCourseFAQFindUniqueArgs>(args: SelectSubset<T, MasterCourseFAQFindUniqueArgs<ExtArgs>>): Prisma__MasterCourseFAQClient<$Result.GetResult<Prisma.$MasterCourseFAQPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MasterCourseFAQ that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MasterCourseFAQFindUniqueOrThrowArgs} args - Arguments to find a MasterCourseFAQ
     * @example
     * // Get one MasterCourseFAQ
     * const masterCourseFAQ = await prisma.masterCourseFAQ.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MasterCourseFAQFindUniqueOrThrowArgs>(args: SelectSubset<T, MasterCourseFAQFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MasterCourseFAQClient<$Result.GetResult<Prisma.$MasterCourseFAQPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MasterCourseFAQ that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterCourseFAQFindFirstArgs} args - Arguments to find a MasterCourseFAQ
     * @example
     * // Get one MasterCourseFAQ
     * const masterCourseFAQ = await prisma.masterCourseFAQ.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MasterCourseFAQFindFirstArgs>(args?: SelectSubset<T, MasterCourseFAQFindFirstArgs<ExtArgs>>): Prisma__MasterCourseFAQClient<$Result.GetResult<Prisma.$MasterCourseFAQPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MasterCourseFAQ that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterCourseFAQFindFirstOrThrowArgs} args - Arguments to find a MasterCourseFAQ
     * @example
     * // Get one MasterCourseFAQ
     * const masterCourseFAQ = await prisma.masterCourseFAQ.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MasterCourseFAQFindFirstOrThrowArgs>(args?: SelectSubset<T, MasterCourseFAQFindFirstOrThrowArgs<ExtArgs>>): Prisma__MasterCourseFAQClient<$Result.GetResult<Prisma.$MasterCourseFAQPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MasterCourseFAQS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterCourseFAQFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MasterCourseFAQS
     * const masterCourseFAQS = await prisma.masterCourseFAQ.findMany()
     * 
     * // Get first 10 MasterCourseFAQS
     * const masterCourseFAQS = await prisma.masterCourseFAQ.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const masterCourseFAQWithIdOnly = await prisma.masterCourseFAQ.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MasterCourseFAQFindManyArgs>(args?: SelectSubset<T, MasterCourseFAQFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterCourseFAQPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MasterCourseFAQ.
     * @param {MasterCourseFAQCreateArgs} args - Arguments to create a MasterCourseFAQ.
     * @example
     * // Create one MasterCourseFAQ
     * const MasterCourseFAQ = await prisma.masterCourseFAQ.create({
     *   data: {
     *     // ... data to create a MasterCourseFAQ
     *   }
     * })
     * 
     */
    create<T extends MasterCourseFAQCreateArgs>(args: SelectSubset<T, MasterCourseFAQCreateArgs<ExtArgs>>): Prisma__MasterCourseFAQClient<$Result.GetResult<Prisma.$MasterCourseFAQPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MasterCourseFAQS.
     * @param {MasterCourseFAQCreateManyArgs} args - Arguments to create many MasterCourseFAQS.
     * @example
     * // Create many MasterCourseFAQS
     * const masterCourseFAQ = await prisma.masterCourseFAQ.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MasterCourseFAQCreateManyArgs>(args?: SelectSubset<T, MasterCourseFAQCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MasterCourseFAQS and returns the data saved in the database.
     * @param {MasterCourseFAQCreateManyAndReturnArgs} args - Arguments to create many MasterCourseFAQS.
     * @example
     * // Create many MasterCourseFAQS
     * const masterCourseFAQ = await prisma.masterCourseFAQ.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MasterCourseFAQS and only return the `id`
     * const masterCourseFAQWithIdOnly = await prisma.masterCourseFAQ.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MasterCourseFAQCreateManyAndReturnArgs>(args?: SelectSubset<T, MasterCourseFAQCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterCourseFAQPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MasterCourseFAQ.
     * @param {MasterCourseFAQDeleteArgs} args - Arguments to delete one MasterCourseFAQ.
     * @example
     * // Delete one MasterCourseFAQ
     * const MasterCourseFAQ = await prisma.masterCourseFAQ.delete({
     *   where: {
     *     // ... filter to delete one MasterCourseFAQ
     *   }
     * })
     * 
     */
    delete<T extends MasterCourseFAQDeleteArgs>(args: SelectSubset<T, MasterCourseFAQDeleteArgs<ExtArgs>>): Prisma__MasterCourseFAQClient<$Result.GetResult<Prisma.$MasterCourseFAQPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MasterCourseFAQ.
     * @param {MasterCourseFAQUpdateArgs} args - Arguments to update one MasterCourseFAQ.
     * @example
     * // Update one MasterCourseFAQ
     * const masterCourseFAQ = await prisma.masterCourseFAQ.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MasterCourseFAQUpdateArgs>(args: SelectSubset<T, MasterCourseFAQUpdateArgs<ExtArgs>>): Prisma__MasterCourseFAQClient<$Result.GetResult<Prisma.$MasterCourseFAQPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MasterCourseFAQS.
     * @param {MasterCourseFAQDeleteManyArgs} args - Arguments to filter MasterCourseFAQS to delete.
     * @example
     * // Delete a few MasterCourseFAQS
     * const { count } = await prisma.masterCourseFAQ.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MasterCourseFAQDeleteManyArgs>(args?: SelectSubset<T, MasterCourseFAQDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MasterCourseFAQS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterCourseFAQUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MasterCourseFAQS
     * const masterCourseFAQ = await prisma.masterCourseFAQ.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MasterCourseFAQUpdateManyArgs>(args: SelectSubset<T, MasterCourseFAQUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MasterCourseFAQS and returns the data updated in the database.
     * @param {MasterCourseFAQUpdateManyAndReturnArgs} args - Arguments to update many MasterCourseFAQS.
     * @example
     * // Update many MasterCourseFAQS
     * const masterCourseFAQ = await prisma.masterCourseFAQ.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MasterCourseFAQS and only return the `id`
     * const masterCourseFAQWithIdOnly = await prisma.masterCourseFAQ.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MasterCourseFAQUpdateManyAndReturnArgs>(args: SelectSubset<T, MasterCourseFAQUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterCourseFAQPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MasterCourseFAQ.
     * @param {MasterCourseFAQUpsertArgs} args - Arguments to update or create a MasterCourseFAQ.
     * @example
     * // Update or create a MasterCourseFAQ
     * const masterCourseFAQ = await prisma.masterCourseFAQ.upsert({
     *   create: {
     *     // ... data to create a MasterCourseFAQ
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MasterCourseFAQ we want to update
     *   }
     * })
     */
    upsert<T extends MasterCourseFAQUpsertArgs>(args: SelectSubset<T, MasterCourseFAQUpsertArgs<ExtArgs>>): Prisma__MasterCourseFAQClient<$Result.GetResult<Prisma.$MasterCourseFAQPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MasterCourseFAQS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterCourseFAQCountArgs} args - Arguments to filter MasterCourseFAQS to count.
     * @example
     * // Count the number of MasterCourseFAQS
     * const count = await prisma.masterCourseFAQ.count({
     *   where: {
     *     // ... the filter for the MasterCourseFAQS we want to count
     *   }
     * })
    **/
    count<T extends MasterCourseFAQCountArgs>(
      args?: Subset<T, MasterCourseFAQCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MasterCourseFAQCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MasterCourseFAQ.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterCourseFAQAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MasterCourseFAQAggregateArgs>(args: Subset<T, MasterCourseFAQAggregateArgs>): Prisma.PrismaPromise<GetMasterCourseFAQAggregateType<T>>

    /**
     * Group by MasterCourseFAQ.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterCourseFAQGroupByArgs} args - Group by arguments.
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
      T extends MasterCourseFAQGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MasterCourseFAQGroupByArgs['orderBy'] }
        : { orderBy?: MasterCourseFAQGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MasterCourseFAQGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMasterCourseFAQGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MasterCourseFAQ model
   */
  readonly fields: MasterCourseFAQFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MasterCourseFAQ.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MasterCourseFAQClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends MasterCourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MasterCourseDefaultArgs<ExtArgs>>): Prisma__MasterCourseClient<$Result.GetResult<Prisma.$MasterCoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MasterCourseFAQ model
   */ 
  interface MasterCourseFAQFieldRefs {
    readonly id: FieldRef<"MasterCourseFAQ", 'String'>
    readonly courseId: FieldRef<"MasterCourseFAQ", 'String'>
    readonly question: FieldRef<"MasterCourseFAQ", 'String'>
    readonly answer: FieldRef<"MasterCourseFAQ", 'String'>
    readonly createdAt: FieldRef<"MasterCourseFAQ", 'DateTime'>
    readonly updatedAt: FieldRef<"MasterCourseFAQ", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MasterCourseFAQ findUnique
   */
  export type MasterCourseFAQFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourseFAQ
     */
    select?: MasterCourseFAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourseFAQ
     */
    omit?: MasterCourseFAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseFAQInclude<ExtArgs> | null
    /**
     * Filter, which MasterCourseFAQ to fetch.
     */
    where: MasterCourseFAQWhereUniqueInput
  }

  /**
   * MasterCourseFAQ findUniqueOrThrow
   */
  export type MasterCourseFAQFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourseFAQ
     */
    select?: MasterCourseFAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourseFAQ
     */
    omit?: MasterCourseFAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseFAQInclude<ExtArgs> | null
    /**
     * Filter, which MasterCourseFAQ to fetch.
     */
    where: MasterCourseFAQWhereUniqueInput
  }

  /**
   * MasterCourseFAQ findFirst
   */
  export type MasterCourseFAQFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourseFAQ
     */
    select?: MasterCourseFAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourseFAQ
     */
    omit?: MasterCourseFAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseFAQInclude<ExtArgs> | null
    /**
     * Filter, which MasterCourseFAQ to fetch.
     */
    where?: MasterCourseFAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterCourseFAQS to fetch.
     */
    orderBy?: MasterCourseFAQOrderByWithRelationInput | MasterCourseFAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasterCourseFAQS.
     */
    cursor?: MasterCourseFAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterCourseFAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterCourseFAQS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterCourseFAQS.
     */
    distinct?: MasterCourseFAQScalarFieldEnum | MasterCourseFAQScalarFieldEnum[]
  }

  /**
   * MasterCourseFAQ findFirstOrThrow
   */
  export type MasterCourseFAQFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourseFAQ
     */
    select?: MasterCourseFAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourseFAQ
     */
    omit?: MasterCourseFAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseFAQInclude<ExtArgs> | null
    /**
     * Filter, which MasterCourseFAQ to fetch.
     */
    where?: MasterCourseFAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterCourseFAQS to fetch.
     */
    orderBy?: MasterCourseFAQOrderByWithRelationInput | MasterCourseFAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasterCourseFAQS.
     */
    cursor?: MasterCourseFAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterCourseFAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterCourseFAQS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterCourseFAQS.
     */
    distinct?: MasterCourseFAQScalarFieldEnum | MasterCourseFAQScalarFieldEnum[]
  }

  /**
   * MasterCourseFAQ findMany
   */
  export type MasterCourseFAQFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourseFAQ
     */
    select?: MasterCourseFAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourseFAQ
     */
    omit?: MasterCourseFAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseFAQInclude<ExtArgs> | null
    /**
     * Filter, which MasterCourseFAQS to fetch.
     */
    where?: MasterCourseFAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterCourseFAQS to fetch.
     */
    orderBy?: MasterCourseFAQOrderByWithRelationInput | MasterCourseFAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MasterCourseFAQS.
     */
    cursor?: MasterCourseFAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterCourseFAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterCourseFAQS.
     */
    skip?: number
    distinct?: MasterCourseFAQScalarFieldEnum | MasterCourseFAQScalarFieldEnum[]
  }

  /**
   * MasterCourseFAQ create
   */
  export type MasterCourseFAQCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourseFAQ
     */
    select?: MasterCourseFAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourseFAQ
     */
    omit?: MasterCourseFAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseFAQInclude<ExtArgs> | null
    /**
     * The data needed to create a MasterCourseFAQ.
     */
    data: XOR<MasterCourseFAQCreateInput, MasterCourseFAQUncheckedCreateInput>
  }

  /**
   * MasterCourseFAQ createMany
   */
  export type MasterCourseFAQCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MasterCourseFAQS.
     */
    data: MasterCourseFAQCreateManyInput | MasterCourseFAQCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MasterCourseFAQ createManyAndReturn
   */
  export type MasterCourseFAQCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourseFAQ
     */
    select?: MasterCourseFAQSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourseFAQ
     */
    omit?: MasterCourseFAQOmit<ExtArgs> | null
    /**
     * The data used to create many MasterCourseFAQS.
     */
    data: MasterCourseFAQCreateManyInput | MasterCourseFAQCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseFAQIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MasterCourseFAQ update
   */
  export type MasterCourseFAQUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourseFAQ
     */
    select?: MasterCourseFAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourseFAQ
     */
    omit?: MasterCourseFAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseFAQInclude<ExtArgs> | null
    /**
     * The data needed to update a MasterCourseFAQ.
     */
    data: XOR<MasterCourseFAQUpdateInput, MasterCourseFAQUncheckedUpdateInput>
    /**
     * Choose, which MasterCourseFAQ to update.
     */
    where: MasterCourseFAQWhereUniqueInput
  }

  /**
   * MasterCourseFAQ updateMany
   */
  export type MasterCourseFAQUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MasterCourseFAQS.
     */
    data: XOR<MasterCourseFAQUpdateManyMutationInput, MasterCourseFAQUncheckedUpdateManyInput>
    /**
     * Filter which MasterCourseFAQS to update
     */
    where?: MasterCourseFAQWhereInput
    /**
     * Limit how many MasterCourseFAQS to update.
     */
    limit?: number
  }

  /**
   * MasterCourseFAQ updateManyAndReturn
   */
  export type MasterCourseFAQUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourseFAQ
     */
    select?: MasterCourseFAQSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourseFAQ
     */
    omit?: MasterCourseFAQOmit<ExtArgs> | null
    /**
     * The data used to update MasterCourseFAQS.
     */
    data: XOR<MasterCourseFAQUpdateManyMutationInput, MasterCourseFAQUncheckedUpdateManyInput>
    /**
     * Filter which MasterCourseFAQS to update
     */
    where?: MasterCourseFAQWhereInput
    /**
     * Limit how many MasterCourseFAQS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseFAQIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MasterCourseFAQ upsert
   */
  export type MasterCourseFAQUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourseFAQ
     */
    select?: MasterCourseFAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourseFAQ
     */
    omit?: MasterCourseFAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseFAQInclude<ExtArgs> | null
    /**
     * The filter to search for the MasterCourseFAQ to update in case it exists.
     */
    where: MasterCourseFAQWhereUniqueInput
    /**
     * In case the MasterCourseFAQ found by the `where` argument doesn't exist, create a new MasterCourseFAQ with this data.
     */
    create: XOR<MasterCourseFAQCreateInput, MasterCourseFAQUncheckedCreateInput>
    /**
     * In case the MasterCourseFAQ was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MasterCourseFAQUpdateInput, MasterCourseFAQUncheckedUpdateInput>
  }

  /**
   * MasterCourseFAQ delete
   */
  export type MasterCourseFAQDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourseFAQ
     */
    select?: MasterCourseFAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourseFAQ
     */
    omit?: MasterCourseFAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseFAQInclude<ExtArgs> | null
    /**
     * Filter which MasterCourseFAQ to delete.
     */
    where: MasterCourseFAQWhereUniqueInput
  }

  /**
   * MasterCourseFAQ deleteMany
   */
  export type MasterCourseFAQDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasterCourseFAQS to delete
     */
    where?: MasterCourseFAQWhereInput
    /**
     * Limit how many MasterCourseFAQS to delete.
     */
    limit?: number
  }

  /**
   * MasterCourseFAQ without action
   */
  export type MasterCourseFAQDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterCourseFAQ
     */
    select?: MasterCourseFAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterCourseFAQ
     */
    omit?: MasterCourseFAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterCourseFAQInclude<ExtArgs> | null
  }


  /**
   * Model MasterExam
   */

  export type AggregateMasterExam = {
    _count: MasterExamCountAggregateOutputType | null
    _min: MasterExamMinAggregateOutputType | null
    _max: MasterExamMaxAggregateOutputType | null
  }

  export type MasterExamMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    categoryId: string | null
  }

  export type MasterExamMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    categoryId: string | null
  }

  export type MasterExamCountAggregateOutputType = {
    id: number
    title: number
    description: number
    createdAt: number
    updatedAt: number
    categoryId: number
    _all: number
  }


  export type MasterExamMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
  }

  export type MasterExamMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
  }

  export type MasterExamCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
    _all?: true
  }

  export type MasterExamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasterExam to aggregate.
     */
    where?: MasterExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterExams to fetch.
     */
    orderBy?: MasterExamOrderByWithRelationInput | MasterExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MasterExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterExams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterExams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MasterExams
    **/
    _count?: true | MasterExamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MasterExamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MasterExamMaxAggregateInputType
  }

  export type GetMasterExamAggregateType<T extends MasterExamAggregateArgs> = {
        [P in keyof T & keyof AggregateMasterExam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMasterExam[P]>
      : GetScalarType<T[P], AggregateMasterExam[P]>
  }




  export type MasterExamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterExamWhereInput
    orderBy?: MasterExamOrderByWithAggregationInput | MasterExamOrderByWithAggregationInput[]
    by: MasterExamScalarFieldEnum[] | MasterExamScalarFieldEnum
    having?: MasterExamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MasterExamCountAggregateInputType | true
    _min?: MasterExamMinAggregateInputType
    _max?: MasterExamMaxAggregateInputType
  }

  export type MasterExamGroupByOutputType = {
    id: string
    title: string
    description: string
    createdAt: Date
    updatedAt: Date
    categoryId: string
    _count: MasterExamCountAggregateOutputType | null
    _min: MasterExamMinAggregateOutputType | null
    _max: MasterExamMaxAggregateOutputType | null
  }

  type GetMasterExamGroupByPayload<T extends MasterExamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MasterExamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MasterExamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MasterExamGroupByOutputType[P]>
            : GetScalarType<T[P], MasterExamGroupByOutputType[P]>
        }
      >
    >


  export type MasterExamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    category?: boolean | MasterCategoryDefaultArgs<ExtArgs>
    examQuestions?: boolean | MasterExam$examQuestionsArgs<ExtArgs>
    ExamSubmission?: boolean | MasterExam$ExamSubmissionArgs<ExtArgs>
    _count?: boolean | MasterExamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masterExam"]>

  export type MasterExamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    category?: boolean | MasterCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masterExam"]>

  export type MasterExamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    category?: boolean | MasterCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masterExam"]>

  export type MasterExamSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
  }

  export type MasterExamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "createdAt" | "updatedAt" | "categoryId", ExtArgs["result"]["masterExam"]>
  export type MasterExamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | MasterCategoryDefaultArgs<ExtArgs>
    examQuestions?: boolean | MasterExam$examQuestionsArgs<ExtArgs>
    ExamSubmission?: boolean | MasterExam$ExamSubmissionArgs<ExtArgs>
    _count?: boolean | MasterExamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MasterExamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | MasterCategoryDefaultArgs<ExtArgs>
  }
  export type MasterExamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | MasterCategoryDefaultArgs<ExtArgs>
  }

  export type $MasterExamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MasterExam"
    objects: {
      category: Prisma.$MasterCategoryPayload<ExtArgs>
      examQuestions: Prisma.$MasterExamQuestionPayload<ExtArgs>[]
      ExamSubmission: Prisma.$ExamSubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      createdAt: Date
      updatedAt: Date
      categoryId: string
    }, ExtArgs["result"]["masterExam"]>
    composites: {}
  }

  type MasterExamGetPayload<S extends boolean | null | undefined | MasterExamDefaultArgs> = $Result.GetResult<Prisma.$MasterExamPayload, S>

  type MasterExamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MasterExamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MasterExamCountAggregateInputType | true
    }

  export interface MasterExamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MasterExam'], meta: { name: 'MasterExam' } }
    /**
     * Find zero or one MasterExam that matches the filter.
     * @param {MasterExamFindUniqueArgs} args - Arguments to find a MasterExam
     * @example
     * // Get one MasterExam
     * const masterExam = await prisma.masterExam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MasterExamFindUniqueArgs>(args: SelectSubset<T, MasterExamFindUniqueArgs<ExtArgs>>): Prisma__MasterExamClient<$Result.GetResult<Prisma.$MasterExamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MasterExam that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MasterExamFindUniqueOrThrowArgs} args - Arguments to find a MasterExam
     * @example
     * // Get one MasterExam
     * const masterExam = await prisma.masterExam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MasterExamFindUniqueOrThrowArgs>(args: SelectSubset<T, MasterExamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MasterExamClient<$Result.GetResult<Prisma.$MasterExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MasterExam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterExamFindFirstArgs} args - Arguments to find a MasterExam
     * @example
     * // Get one MasterExam
     * const masterExam = await prisma.masterExam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MasterExamFindFirstArgs>(args?: SelectSubset<T, MasterExamFindFirstArgs<ExtArgs>>): Prisma__MasterExamClient<$Result.GetResult<Prisma.$MasterExamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MasterExam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterExamFindFirstOrThrowArgs} args - Arguments to find a MasterExam
     * @example
     * // Get one MasterExam
     * const masterExam = await prisma.masterExam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MasterExamFindFirstOrThrowArgs>(args?: SelectSubset<T, MasterExamFindFirstOrThrowArgs<ExtArgs>>): Prisma__MasterExamClient<$Result.GetResult<Prisma.$MasterExamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MasterExams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterExamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MasterExams
     * const masterExams = await prisma.masterExam.findMany()
     * 
     * // Get first 10 MasterExams
     * const masterExams = await prisma.masterExam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const masterExamWithIdOnly = await prisma.masterExam.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MasterExamFindManyArgs>(args?: SelectSubset<T, MasterExamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MasterExam.
     * @param {MasterExamCreateArgs} args - Arguments to create a MasterExam.
     * @example
     * // Create one MasterExam
     * const MasterExam = await prisma.masterExam.create({
     *   data: {
     *     // ... data to create a MasterExam
     *   }
     * })
     * 
     */
    create<T extends MasterExamCreateArgs>(args: SelectSubset<T, MasterExamCreateArgs<ExtArgs>>): Prisma__MasterExamClient<$Result.GetResult<Prisma.$MasterExamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MasterExams.
     * @param {MasterExamCreateManyArgs} args - Arguments to create many MasterExams.
     * @example
     * // Create many MasterExams
     * const masterExam = await prisma.masterExam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MasterExamCreateManyArgs>(args?: SelectSubset<T, MasterExamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MasterExams and returns the data saved in the database.
     * @param {MasterExamCreateManyAndReturnArgs} args - Arguments to create many MasterExams.
     * @example
     * // Create many MasterExams
     * const masterExam = await prisma.masterExam.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MasterExams and only return the `id`
     * const masterExamWithIdOnly = await prisma.masterExam.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MasterExamCreateManyAndReturnArgs>(args?: SelectSubset<T, MasterExamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterExamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MasterExam.
     * @param {MasterExamDeleteArgs} args - Arguments to delete one MasterExam.
     * @example
     * // Delete one MasterExam
     * const MasterExam = await prisma.masterExam.delete({
     *   where: {
     *     // ... filter to delete one MasterExam
     *   }
     * })
     * 
     */
    delete<T extends MasterExamDeleteArgs>(args: SelectSubset<T, MasterExamDeleteArgs<ExtArgs>>): Prisma__MasterExamClient<$Result.GetResult<Prisma.$MasterExamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MasterExam.
     * @param {MasterExamUpdateArgs} args - Arguments to update one MasterExam.
     * @example
     * // Update one MasterExam
     * const masterExam = await prisma.masterExam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MasterExamUpdateArgs>(args: SelectSubset<T, MasterExamUpdateArgs<ExtArgs>>): Prisma__MasterExamClient<$Result.GetResult<Prisma.$MasterExamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MasterExams.
     * @param {MasterExamDeleteManyArgs} args - Arguments to filter MasterExams to delete.
     * @example
     * // Delete a few MasterExams
     * const { count } = await prisma.masterExam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MasterExamDeleteManyArgs>(args?: SelectSubset<T, MasterExamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MasterExams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterExamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MasterExams
     * const masterExam = await prisma.masterExam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MasterExamUpdateManyArgs>(args: SelectSubset<T, MasterExamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MasterExams and returns the data updated in the database.
     * @param {MasterExamUpdateManyAndReturnArgs} args - Arguments to update many MasterExams.
     * @example
     * // Update many MasterExams
     * const masterExam = await prisma.masterExam.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MasterExams and only return the `id`
     * const masterExamWithIdOnly = await prisma.masterExam.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MasterExamUpdateManyAndReturnArgs>(args: SelectSubset<T, MasterExamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterExamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MasterExam.
     * @param {MasterExamUpsertArgs} args - Arguments to update or create a MasterExam.
     * @example
     * // Update or create a MasterExam
     * const masterExam = await prisma.masterExam.upsert({
     *   create: {
     *     // ... data to create a MasterExam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MasterExam we want to update
     *   }
     * })
     */
    upsert<T extends MasterExamUpsertArgs>(args: SelectSubset<T, MasterExamUpsertArgs<ExtArgs>>): Prisma__MasterExamClient<$Result.GetResult<Prisma.$MasterExamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MasterExams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterExamCountArgs} args - Arguments to filter MasterExams to count.
     * @example
     * // Count the number of MasterExams
     * const count = await prisma.masterExam.count({
     *   where: {
     *     // ... the filter for the MasterExams we want to count
     *   }
     * })
    **/
    count<T extends MasterExamCountArgs>(
      args?: Subset<T, MasterExamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MasterExamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MasterExam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterExamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MasterExamAggregateArgs>(args: Subset<T, MasterExamAggregateArgs>): Prisma.PrismaPromise<GetMasterExamAggregateType<T>>

    /**
     * Group by MasterExam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterExamGroupByArgs} args - Group by arguments.
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
      T extends MasterExamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MasterExamGroupByArgs['orderBy'] }
        : { orderBy?: MasterExamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MasterExamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMasterExamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MasterExam model
   */
  readonly fields: MasterExamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MasterExam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MasterExamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends MasterCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MasterCategoryDefaultArgs<ExtArgs>>): Prisma__MasterCategoryClient<$Result.GetResult<Prisma.$MasterCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    examQuestions<T extends MasterExam$examQuestionsArgs<ExtArgs> = {}>(args?: Subset<T, MasterExam$examQuestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterExamQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ExamSubmission<T extends MasterExam$ExamSubmissionArgs<ExtArgs> = {}>(args?: Subset<T, MasterExam$ExamSubmissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MasterExam model
   */ 
  interface MasterExamFieldRefs {
    readonly id: FieldRef<"MasterExam", 'String'>
    readonly title: FieldRef<"MasterExam", 'String'>
    readonly description: FieldRef<"MasterExam", 'String'>
    readonly createdAt: FieldRef<"MasterExam", 'DateTime'>
    readonly updatedAt: FieldRef<"MasterExam", 'DateTime'>
    readonly categoryId: FieldRef<"MasterExam", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MasterExam findUnique
   */
  export type MasterExamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExam
     */
    select?: MasterExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExam
     */
    omit?: MasterExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExamInclude<ExtArgs> | null
    /**
     * Filter, which MasterExam to fetch.
     */
    where: MasterExamWhereUniqueInput
  }

  /**
   * MasterExam findUniqueOrThrow
   */
  export type MasterExamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExam
     */
    select?: MasterExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExam
     */
    omit?: MasterExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExamInclude<ExtArgs> | null
    /**
     * Filter, which MasterExam to fetch.
     */
    where: MasterExamWhereUniqueInput
  }

  /**
   * MasterExam findFirst
   */
  export type MasterExamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExam
     */
    select?: MasterExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExam
     */
    omit?: MasterExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExamInclude<ExtArgs> | null
    /**
     * Filter, which MasterExam to fetch.
     */
    where?: MasterExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterExams to fetch.
     */
    orderBy?: MasterExamOrderByWithRelationInput | MasterExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasterExams.
     */
    cursor?: MasterExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterExams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterExams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterExams.
     */
    distinct?: MasterExamScalarFieldEnum | MasterExamScalarFieldEnum[]
  }

  /**
   * MasterExam findFirstOrThrow
   */
  export type MasterExamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExam
     */
    select?: MasterExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExam
     */
    omit?: MasterExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExamInclude<ExtArgs> | null
    /**
     * Filter, which MasterExam to fetch.
     */
    where?: MasterExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterExams to fetch.
     */
    orderBy?: MasterExamOrderByWithRelationInput | MasterExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasterExams.
     */
    cursor?: MasterExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterExams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterExams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterExams.
     */
    distinct?: MasterExamScalarFieldEnum | MasterExamScalarFieldEnum[]
  }

  /**
   * MasterExam findMany
   */
  export type MasterExamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExam
     */
    select?: MasterExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExam
     */
    omit?: MasterExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExamInclude<ExtArgs> | null
    /**
     * Filter, which MasterExams to fetch.
     */
    where?: MasterExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterExams to fetch.
     */
    orderBy?: MasterExamOrderByWithRelationInput | MasterExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MasterExams.
     */
    cursor?: MasterExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterExams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterExams.
     */
    skip?: number
    distinct?: MasterExamScalarFieldEnum | MasterExamScalarFieldEnum[]
  }

  /**
   * MasterExam create
   */
  export type MasterExamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExam
     */
    select?: MasterExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExam
     */
    omit?: MasterExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExamInclude<ExtArgs> | null
    /**
     * The data needed to create a MasterExam.
     */
    data: XOR<MasterExamCreateInput, MasterExamUncheckedCreateInput>
  }

  /**
   * MasterExam createMany
   */
  export type MasterExamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MasterExams.
     */
    data: MasterExamCreateManyInput | MasterExamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MasterExam createManyAndReturn
   */
  export type MasterExamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExam
     */
    select?: MasterExamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExam
     */
    omit?: MasterExamOmit<ExtArgs> | null
    /**
     * The data used to create many MasterExams.
     */
    data: MasterExamCreateManyInput | MasterExamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MasterExam update
   */
  export type MasterExamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExam
     */
    select?: MasterExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExam
     */
    omit?: MasterExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExamInclude<ExtArgs> | null
    /**
     * The data needed to update a MasterExam.
     */
    data: XOR<MasterExamUpdateInput, MasterExamUncheckedUpdateInput>
    /**
     * Choose, which MasterExam to update.
     */
    where: MasterExamWhereUniqueInput
  }

  /**
   * MasterExam updateMany
   */
  export type MasterExamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MasterExams.
     */
    data: XOR<MasterExamUpdateManyMutationInput, MasterExamUncheckedUpdateManyInput>
    /**
     * Filter which MasterExams to update
     */
    where?: MasterExamWhereInput
    /**
     * Limit how many MasterExams to update.
     */
    limit?: number
  }

  /**
   * MasterExam updateManyAndReturn
   */
  export type MasterExamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExam
     */
    select?: MasterExamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExam
     */
    omit?: MasterExamOmit<ExtArgs> | null
    /**
     * The data used to update MasterExams.
     */
    data: XOR<MasterExamUpdateManyMutationInput, MasterExamUncheckedUpdateManyInput>
    /**
     * Filter which MasterExams to update
     */
    where?: MasterExamWhereInput
    /**
     * Limit how many MasterExams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MasterExam upsert
   */
  export type MasterExamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExam
     */
    select?: MasterExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExam
     */
    omit?: MasterExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExamInclude<ExtArgs> | null
    /**
     * The filter to search for the MasterExam to update in case it exists.
     */
    where: MasterExamWhereUniqueInput
    /**
     * In case the MasterExam found by the `where` argument doesn't exist, create a new MasterExam with this data.
     */
    create: XOR<MasterExamCreateInput, MasterExamUncheckedCreateInput>
    /**
     * In case the MasterExam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MasterExamUpdateInput, MasterExamUncheckedUpdateInput>
  }

  /**
   * MasterExam delete
   */
  export type MasterExamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExam
     */
    select?: MasterExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExam
     */
    omit?: MasterExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExamInclude<ExtArgs> | null
    /**
     * Filter which MasterExam to delete.
     */
    where: MasterExamWhereUniqueInput
  }

  /**
   * MasterExam deleteMany
   */
  export type MasterExamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasterExams to delete
     */
    where?: MasterExamWhereInput
    /**
     * Limit how many MasterExams to delete.
     */
    limit?: number
  }

  /**
   * MasterExam.examQuestions
   */
  export type MasterExam$examQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExamQuestion
     */
    select?: MasterExamQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExamQuestion
     */
    omit?: MasterExamQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExamQuestionInclude<ExtArgs> | null
    where?: MasterExamQuestionWhereInput
    orderBy?: MasterExamQuestionOrderByWithRelationInput | MasterExamQuestionOrderByWithRelationInput[]
    cursor?: MasterExamQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MasterExamQuestionScalarFieldEnum | MasterExamQuestionScalarFieldEnum[]
  }

  /**
   * MasterExam.ExamSubmission
   */
  export type MasterExam$ExamSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSubmission
     */
    omit?: ExamSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionInclude<ExtArgs> | null
    where?: ExamSubmissionWhereInput
    orderBy?: ExamSubmissionOrderByWithRelationInput | ExamSubmissionOrderByWithRelationInput[]
    cursor?: ExamSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamSubmissionScalarFieldEnum | ExamSubmissionScalarFieldEnum[]
  }

  /**
   * MasterExam without action
   */
  export type MasterExamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExam
     */
    select?: MasterExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExam
     */
    omit?: MasterExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExamInclude<ExtArgs> | null
  }


  /**
   * Model MasterExamQuestion
   */

  export type AggregateMasterExamQuestion = {
    _count: MasterExamQuestionCountAggregateOutputType | null
    _min: MasterExamQuestionMinAggregateOutputType | null
    _max: MasterExamQuestionMaxAggregateOutputType | null
  }

  export type MasterExamQuestionMinAggregateOutputType = {
    id: string | null
    examId: string | null
    question: string | null
    questionType: string | null
    options: string | null
    correctAnswer: string | null
    createdAt: Date | null
  }

  export type MasterExamQuestionMaxAggregateOutputType = {
    id: string | null
    examId: string | null
    question: string | null
    questionType: string | null
    options: string | null
    correctAnswer: string | null
    createdAt: Date | null
  }

  export type MasterExamQuestionCountAggregateOutputType = {
    id: number
    examId: number
    question: number
    questionType: number
    options: number
    correctAnswer: number
    createdAt: number
    _all: number
  }


  export type MasterExamQuestionMinAggregateInputType = {
    id?: true
    examId?: true
    question?: true
    questionType?: true
    options?: true
    correctAnswer?: true
    createdAt?: true
  }

  export type MasterExamQuestionMaxAggregateInputType = {
    id?: true
    examId?: true
    question?: true
    questionType?: true
    options?: true
    correctAnswer?: true
    createdAt?: true
  }

  export type MasterExamQuestionCountAggregateInputType = {
    id?: true
    examId?: true
    question?: true
    questionType?: true
    options?: true
    correctAnswer?: true
    createdAt?: true
    _all?: true
  }

  export type MasterExamQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasterExamQuestion to aggregate.
     */
    where?: MasterExamQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterExamQuestions to fetch.
     */
    orderBy?: MasterExamQuestionOrderByWithRelationInput | MasterExamQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MasterExamQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterExamQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterExamQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MasterExamQuestions
    **/
    _count?: true | MasterExamQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MasterExamQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MasterExamQuestionMaxAggregateInputType
  }

  export type GetMasterExamQuestionAggregateType<T extends MasterExamQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateMasterExamQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMasterExamQuestion[P]>
      : GetScalarType<T[P], AggregateMasterExamQuestion[P]>
  }




  export type MasterExamQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterExamQuestionWhereInput
    orderBy?: MasterExamQuestionOrderByWithAggregationInput | MasterExamQuestionOrderByWithAggregationInput[]
    by: MasterExamQuestionScalarFieldEnum[] | MasterExamQuestionScalarFieldEnum
    having?: MasterExamQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MasterExamQuestionCountAggregateInputType | true
    _min?: MasterExamQuestionMinAggregateInputType
    _max?: MasterExamQuestionMaxAggregateInputType
  }

  export type MasterExamQuestionGroupByOutputType = {
    id: string
    examId: string
    question: string
    questionType: string
    options: string | null
    correctAnswer: string | null
    createdAt: Date
    _count: MasterExamQuestionCountAggregateOutputType | null
    _min: MasterExamQuestionMinAggregateOutputType | null
    _max: MasterExamQuestionMaxAggregateOutputType | null
  }

  type GetMasterExamQuestionGroupByPayload<T extends MasterExamQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MasterExamQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MasterExamQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MasterExamQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], MasterExamQuestionGroupByOutputType[P]>
        }
      >
    >


  export type MasterExamQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    examId?: boolean
    question?: boolean
    questionType?: boolean
    options?: boolean
    correctAnswer?: boolean
    createdAt?: boolean
    exam?: boolean | MasterExamDefaultArgs<ExtArgs>
    ExamAnswer?: boolean | MasterExamQuestion$ExamAnswerArgs<ExtArgs>
    _count?: boolean | MasterExamQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masterExamQuestion"]>

  export type MasterExamQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    examId?: boolean
    question?: boolean
    questionType?: boolean
    options?: boolean
    correctAnswer?: boolean
    createdAt?: boolean
    exam?: boolean | MasterExamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masterExamQuestion"]>

  export type MasterExamQuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    examId?: boolean
    question?: boolean
    questionType?: boolean
    options?: boolean
    correctAnswer?: boolean
    createdAt?: boolean
    exam?: boolean | MasterExamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masterExamQuestion"]>

  export type MasterExamQuestionSelectScalar = {
    id?: boolean
    examId?: boolean
    question?: boolean
    questionType?: boolean
    options?: boolean
    correctAnswer?: boolean
    createdAt?: boolean
  }

  export type MasterExamQuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "examId" | "question" | "questionType" | "options" | "correctAnswer" | "createdAt", ExtArgs["result"]["masterExamQuestion"]>
  export type MasterExamQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exam?: boolean | MasterExamDefaultArgs<ExtArgs>
    ExamAnswer?: boolean | MasterExamQuestion$ExamAnswerArgs<ExtArgs>
    _count?: boolean | MasterExamQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MasterExamQuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exam?: boolean | MasterExamDefaultArgs<ExtArgs>
  }
  export type MasterExamQuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exam?: boolean | MasterExamDefaultArgs<ExtArgs>
  }

  export type $MasterExamQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MasterExamQuestion"
    objects: {
      exam: Prisma.$MasterExamPayload<ExtArgs>
      ExamAnswer: Prisma.$ExamAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      examId: string
      question: string
      questionType: string
      options: string | null
      correctAnswer: string | null
      createdAt: Date
    }, ExtArgs["result"]["masterExamQuestion"]>
    composites: {}
  }

  type MasterExamQuestionGetPayload<S extends boolean | null | undefined | MasterExamQuestionDefaultArgs> = $Result.GetResult<Prisma.$MasterExamQuestionPayload, S>

  type MasterExamQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MasterExamQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MasterExamQuestionCountAggregateInputType | true
    }

  export interface MasterExamQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MasterExamQuestion'], meta: { name: 'MasterExamQuestion' } }
    /**
     * Find zero or one MasterExamQuestion that matches the filter.
     * @param {MasterExamQuestionFindUniqueArgs} args - Arguments to find a MasterExamQuestion
     * @example
     * // Get one MasterExamQuestion
     * const masterExamQuestion = await prisma.masterExamQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MasterExamQuestionFindUniqueArgs>(args: SelectSubset<T, MasterExamQuestionFindUniqueArgs<ExtArgs>>): Prisma__MasterExamQuestionClient<$Result.GetResult<Prisma.$MasterExamQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MasterExamQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MasterExamQuestionFindUniqueOrThrowArgs} args - Arguments to find a MasterExamQuestion
     * @example
     * // Get one MasterExamQuestion
     * const masterExamQuestion = await prisma.masterExamQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MasterExamQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, MasterExamQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MasterExamQuestionClient<$Result.GetResult<Prisma.$MasterExamQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MasterExamQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterExamQuestionFindFirstArgs} args - Arguments to find a MasterExamQuestion
     * @example
     * // Get one MasterExamQuestion
     * const masterExamQuestion = await prisma.masterExamQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MasterExamQuestionFindFirstArgs>(args?: SelectSubset<T, MasterExamQuestionFindFirstArgs<ExtArgs>>): Prisma__MasterExamQuestionClient<$Result.GetResult<Prisma.$MasterExamQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MasterExamQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterExamQuestionFindFirstOrThrowArgs} args - Arguments to find a MasterExamQuestion
     * @example
     * // Get one MasterExamQuestion
     * const masterExamQuestion = await prisma.masterExamQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MasterExamQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, MasterExamQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MasterExamQuestionClient<$Result.GetResult<Prisma.$MasterExamQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MasterExamQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterExamQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MasterExamQuestions
     * const masterExamQuestions = await prisma.masterExamQuestion.findMany()
     * 
     * // Get first 10 MasterExamQuestions
     * const masterExamQuestions = await prisma.masterExamQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const masterExamQuestionWithIdOnly = await prisma.masterExamQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MasterExamQuestionFindManyArgs>(args?: SelectSubset<T, MasterExamQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterExamQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MasterExamQuestion.
     * @param {MasterExamQuestionCreateArgs} args - Arguments to create a MasterExamQuestion.
     * @example
     * // Create one MasterExamQuestion
     * const MasterExamQuestion = await prisma.masterExamQuestion.create({
     *   data: {
     *     // ... data to create a MasterExamQuestion
     *   }
     * })
     * 
     */
    create<T extends MasterExamQuestionCreateArgs>(args: SelectSubset<T, MasterExamQuestionCreateArgs<ExtArgs>>): Prisma__MasterExamQuestionClient<$Result.GetResult<Prisma.$MasterExamQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MasterExamQuestions.
     * @param {MasterExamQuestionCreateManyArgs} args - Arguments to create many MasterExamQuestions.
     * @example
     * // Create many MasterExamQuestions
     * const masterExamQuestion = await prisma.masterExamQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MasterExamQuestionCreateManyArgs>(args?: SelectSubset<T, MasterExamQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MasterExamQuestions and returns the data saved in the database.
     * @param {MasterExamQuestionCreateManyAndReturnArgs} args - Arguments to create many MasterExamQuestions.
     * @example
     * // Create many MasterExamQuestions
     * const masterExamQuestion = await prisma.masterExamQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MasterExamQuestions and only return the `id`
     * const masterExamQuestionWithIdOnly = await prisma.masterExamQuestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MasterExamQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, MasterExamQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterExamQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MasterExamQuestion.
     * @param {MasterExamQuestionDeleteArgs} args - Arguments to delete one MasterExamQuestion.
     * @example
     * // Delete one MasterExamQuestion
     * const MasterExamQuestion = await prisma.masterExamQuestion.delete({
     *   where: {
     *     // ... filter to delete one MasterExamQuestion
     *   }
     * })
     * 
     */
    delete<T extends MasterExamQuestionDeleteArgs>(args: SelectSubset<T, MasterExamQuestionDeleteArgs<ExtArgs>>): Prisma__MasterExamQuestionClient<$Result.GetResult<Prisma.$MasterExamQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MasterExamQuestion.
     * @param {MasterExamQuestionUpdateArgs} args - Arguments to update one MasterExamQuestion.
     * @example
     * // Update one MasterExamQuestion
     * const masterExamQuestion = await prisma.masterExamQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MasterExamQuestionUpdateArgs>(args: SelectSubset<T, MasterExamQuestionUpdateArgs<ExtArgs>>): Prisma__MasterExamQuestionClient<$Result.GetResult<Prisma.$MasterExamQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MasterExamQuestions.
     * @param {MasterExamQuestionDeleteManyArgs} args - Arguments to filter MasterExamQuestions to delete.
     * @example
     * // Delete a few MasterExamQuestions
     * const { count } = await prisma.masterExamQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MasterExamQuestionDeleteManyArgs>(args?: SelectSubset<T, MasterExamQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MasterExamQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterExamQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MasterExamQuestions
     * const masterExamQuestion = await prisma.masterExamQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MasterExamQuestionUpdateManyArgs>(args: SelectSubset<T, MasterExamQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MasterExamQuestions and returns the data updated in the database.
     * @param {MasterExamQuestionUpdateManyAndReturnArgs} args - Arguments to update many MasterExamQuestions.
     * @example
     * // Update many MasterExamQuestions
     * const masterExamQuestion = await prisma.masterExamQuestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MasterExamQuestions and only return the `id`
     * const masterExamQuestionWithIdOnly = await prisma.masterExamQuestion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MasterExamQuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, MasterExamQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterExamQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MasterExamQuestion.
     * @param {MasterExamQuestionUpsertArgs} args - Arguments to update or create a MasterExamQuestion.
     * @example
     * // Update or create a MasterExamQuestion
     * const masterExamQuestion = await prisma.masterExamQuestion.upsert({
     *   create: {
     *     // ... data to create a MasterExamQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MasterExamQuestion we want to update
     *   }
     * })
     */
    upsert<T extends MasterExamQuestionUpsertArgs>(args: SelectSubset<T, MasterExamQuestionUpsertArgs<ExtArgs>>): Prisma__MasterExamQuestionClient<$Result.GetResult<Prisma.$MasterExamQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MasterExamQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterExamQuestionCountArgs} args - Arguments to filter MasterExamQuestions to count.
     * @example
     * // Count the number of MasterExamQuestions
     * const count = await prisma.masterExamQuestion.count({
     *   where: {
     *     // ... the filter for the MasterExamQuestions we want to count
     *   }
     * })
    **/
    count<T extends MasterExamQuestionCountArgs>(
      args?: Subset<T, MasterExamQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MasterExamQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MasterExamQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterExamQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MasterExamQuestionAggregateArgs>(args: Subset<T, MasterExamQuestionAggregateArgs>): Prisma.PrismaPromise<GetMasterExamQuestionAggregateType<T>>

    /**
     * Group by MasterExamQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterExamQuestionGroupByArgs} args - Group by arguments.
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
      T extends MasterExamQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MasterExamQuestionGroupByArgs['orderBy'] }
        : { orderBy?: MasterExamQuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MasterExamQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMasterExamQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MasterExamQuestion model
   */
  readonly fields: MasterExamQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MasterExamQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MasterExamQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exam<T extends MasterExamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MasterExamDefaultArgs<ExtArgs>>): Prisma__MasterExamClient<$Result.GetResult<Prisma.$MasterExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ExamAnswer<T extends MasterExamQuestion$ExamAnswerArgs<ExtArgs> = {}>(args?: Subset<T, MasterExamQuestion$ExamAnswerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MasterExamQuestion model
   */ 
  interface MasterExamQuestionFieldRefs {
    readonly id: FieldRef<"MasterExamQuestion", 'String'>
    readonly examId: FieldRef<"MasterExamQuestion", 'String'>
    readonly question: FieldRef<"MasterExamQuestion", 'String'>
    readonly questionType: FieldRef<"MasterExamQuestion", 'String'>
    readonly options: FieldRef<"MasterExamQuestion", 'String'>
    readonly correctAnswer: FieldRef<"MasterExamQuestion", 'String'>
    readonly createdAt: FieldRef<"MasterExamQuestion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MasterExamQuestion findUnique
   */
  export type MasterExamQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExamQuestion
     */
    select?: MasterExamQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExamQuestion
     */
    omit?: MasterExamQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExamQuestionInclude<ExtArgs> | null
    /**
     * Filter, which MasterExamQuestion to fetch.
     */
    where: MasterExamQuestionWhereUniqueInput
  }

  /**
   * MasterExamQuestion findUniqueOrThrow
   */
  export type MasterExamQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExamQuestion
     */
    select?: MasterExamQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExamQuestion
     */
    omit?: MasterExamQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExamQuestionInclude<ExtArgs> | null
    /**
     * Filter, which MasterExamQuestion to fetch.
     */
    where: MasterExamQuestionWhereUniqueInput
  }

  /**
   * MasterExamQuestion findFirst
   */
  export type MasterExamQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExamQuestion
     */
    select?: MasterExamQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExamQuestion
     */
    omit?: MasterExamQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExamQuestionInclude<ExtArgs> | null
    /**
     * Filter, which MasterExamQuestion to fetch.
     */
    where?: MasterExamQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterExamQuestions to fetch.
     */
    orderBy?: MasterExamQuestionOrderByWithRelationInput | MasterExamQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasterExamQuestions.
     */
    cursor?: MasterExamQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterExamQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterExamQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterExamQuestions.
     */
    distinct?: MasterExamQuestionScalarFieldEnum | MasterExamQuestionScalarFieldEnum[]
  }

  /**
   * MasterExamQuestion findFirstOrThrow
   */
  export type MasterExamQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExamQuestion
     */
    select?: MasterExamQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExamQuestion
     */
    omit?: MasterExamQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExamQuestionInclude<ExtArgs> | null
    /**
     * Filter, which MasterExamQuestion to fetch.
     */
    where?: MasterExamQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterExamQuestions to fetch.
     */
    orderBy?: MasterExamQuestionOrderByWithRelationInput | MasterExamQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasterExamQuestions.
     */
    cursor?: MasterExamQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterExamQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterExamQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterExamQuestions.
     */
    distinct?: MasterExamQuestionScalarFieldEnum | MasterExamQuestionScalarFieldEnum[]
  }

  /**
   * MasterExamQuestion findMany
   */
  export type MasterExamQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExamQuestion
     */
    select?: MasterExamQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExamQuestion
     */
    omit?: MasterExamQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExamQuestionInclude<ExtArgs> | null
    /**
     * Filter, which MasterExamQuestions to fetch.
     */
    where?: MasterExamQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterExamQuestions to fetch.
     */
    orderBy?: MasterExamQuestionOrderByWithRelationInput | MasterExamQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MasterExamQuestions.
     */
    cursor?: MasterExamQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterExamQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterExamQuestions.
     */
    skip?: number
    distinct?: MasterExamQuestionScalarFieldEnum | MasterExamQuestionScalarFieldEnum[]
  }

  /**
   * MasterExamQuestion create
   */
  export type MasterExamQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExamQuestion
     */
    select?: MasterExamQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExamQuestion
     */
    omit?: MasterExamQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExamQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a MasterExamQuestion.
     */
    data: XOR<MasterExamQuestionCreateInput, MasterExamQuestionUncheckedCreateInput>
  }

  /**
   * MasterExamQuestion createMany
   */
  export type MasterExamQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MasterExamQuestions.
     */
    data: MasterExamQuestionCreateManyInput | MasterExamQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MasterExamQuestion createManyAndReturn
   */
  export type MasterExamQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExamQuestion
     */
    select?: MasterExamQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExamQuestion
     */
    omit?: MasterExamQuestionOmit<ExtArgs> | null
    /**
     * The data used to create many MasterExamQuestions.
     */
    data: MasterExamQuestionCreateManyInput | MasterExamQuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExamQuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MasterExamQuestion update
   */
  export type MasterExamQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExamQuestion
     */
    select?: MasterExamQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExamQuestion
     */
    omit?: MasterExamQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExamQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a MasterExamQuestion.
     */
    data: XOR<MasterExamQuestionUpdateInput, MasterExamQuestionUncheckedUpdateInput>
    /**
     * Choose, which MasterExamQuestion to update.
     */
    where: MasterExamQuestionWhereUniqueInput
  }

  /**
   * MasterExamQuestion updateMany
   */
  export type MasterExamQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MasterExamQuestions.
     */
    data: XOR<MasterExamQuestionUpdateManyMutationInput, MasterExamQuestionUncheckedUpdateManyInput>
    /**
     * Filter which MasterExamQuestions to update
     */
    where?: MasterExamQuestionWhereInput
    /**
     * Limit how many MasterExamQuestions to update.
     */
    limit?: number
  }

  /**
   * MasterExamQuestion updateManyAndReturn
   */
  export type MasterExamQuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExamQuestion
     */
    select?: MasterExamQuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExamQuestion
     */
    omit?: MasterExamQuestionOmit<ExtArgs> | null
    /**
     * The data used to update MasterExamQuestions.
     */
    data: XOR<MasterExamQuestionUpdateManyMutationInput, MasterExamQuestionUncheckedUpdateManyInput>
    /**
     * Filter which MasterExamQuestions to update
     */
    where?: MasterExamQuestionWhereInput
    /**
     * Limit how many MasterExamQuestions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExamQuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MasterExamQuestion upsert
   */
  export type MasterExamQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExamQuestion
     */
    select?: MasterExamQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExamQuestion
     */
    omit?: MasterExamQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExamQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the MasterExamQuestion to update in case it exists.
     */
    where: MasterExamQuestionWhereUniqueInput
    /**
     * In case the MasterExamQuestion found by the `where` argument doesn't exist, create a new MasterExamQuestion with this data.
     */
    create: XOR<MasterExamQuestionCreateInput, MasterExamQuestionUncheckedCreateInput>
    /**
     * In case the MasterExamQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MasterExamQuestionUpdateInput, MasterExamQuestionUncheckedUpdateInput>
  }

  /**
   * MasterExamQuestion delete
   */
  export type MasterExamQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExamQuestion
     */
    select?: MasterExamQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExamQuestion
     */
    omit?: MasterExamQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExamQuestionInclude<ExtArgs> | null
    /**
     * Filter which MasterExamQuestion to delete.
     */
    where: MasterExamQuestionWhereUniqueInput
  }

  /**
   * MasterExamQuestion deleteMany
   */
  export type MasterExamQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasterExamQuestions to delete
     */
    where?: MasterExamQuestionWhereInput
    /**
     * Limit how many MasterExamQuestions to delete.
     */
    limit?: number
  }

  /**
   * MasterExamQuestion.ExamAnswer
   */
  export type MasterExamQuestion$ExamAnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAnswer
     */
    select?: ExamAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAnswer
     */
    omit?: ExamAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAnswerInclude<ExtArgs> | null
    where?: ExamAnswerWhereInput
    orderBy?: ExamAnswerOrderByWithRelationInput | ExamAnswerOrderByWithRelationInput[]
    cursor?: ExamAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamAnswerScalarFieldEnum | ExamAnswerScalarFieldEnum[]
  }

  /**
   * MasterExamQuestion without action
   */
  export type MasterExamQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterExamQuestion
     */
    select?: MasterExamQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterExamQuestion
     */
    omit?: MasterExamQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterExamQuestionInclude<ExtArgs> | null
  }


  /**
   * Model ExamSubmission
   */

  export type AggregateExamSubmission = {
    _count: ExamSubmissionCountAggregateOutputType | null
    _avg: ExamSubmissionAvgAggregateOutputType | null
    _sum: ExamSubmissionSumAggregateOutputType | null
    _min: ExamSubmissionMinAggregateOutputType | null
    _max: ExamSubmissionMaxAggregateOutputType | null
  }

  export type ExamSubmissionAvgAggregateOutputType = {
    score: number | null
    percentile: number | null
  }

  export type ExamSubmissionSumAggregateOutputType = {
    score: number | null
    percentile: number | null
  }

  export type ExamSubmissionMinAggregateOutputType = {
    id: string | null
    examId: string | null
    userId: string | null
    submittedAt: Date | null
    score: number | null
    percentile: number | null
  }

  export type ExamSubmissionMaxAggregateOutputType = {
    id: string | null
    examId: string | null
    userId: string | null
    submittedAt: Date | null
    score: number | null
    percentile: number | null
  }

  export type ExamSubmissionCountAggregateOutputType = {
    id: number
    examId: number
    userId: number
    submittedAt: number
    score: number
    percentile: number
    _all: number
  }


  export type ExamSubmissionAvgAggregateInputType = {
    score?: true
    percentile?: true
  }

  export type ExamSubmissionSumAggregateInputType = {
    score?: true
    percentile?: true
  }

  export type ExamSubmissionMinAggregateInputType = {
    id?: true
    examId?: true
    userId?: true
    submittedAt?: true
    score?: true
    percentile?: true
  }

  export type ExamSubmissionMaxAggregateInputType = {
    id?: true
    examId?: true
    userId?: true
    submittedAt?: true
    score?: true
    percentile?: true
  }

  export type ExamSubmissionCountAggregateInputType = {
    id?: true
    examId?: true
    userId?: true
    submittedAt?: true
    score?: true
    percentile?: true
    _all?: true
  }

  export type ExamSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamSubmission to aggregate.
     */
    where?: ExamSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamSubmissions to fetch.
     */
    orderBy?: ExamSubmissionOrderByWithRelationInput | ExamSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExamSubmissions
    **/
    _count?: true | ExamSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExamSubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExamSubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamSubmissionMaxAggregateInputType
  }

  export type GetExamSubmissionAggregateType<T extends ExamSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateExamSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExamSubmission[P]>
      : GetScalarType<T[P], AggregateExamSubmission[P]>
  }




  export type ExamSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamSubmissionWhereInput
    orderBy?: ExamSubmissionOrderByWithAggregationInput | ExamSubmissionOrderByWithAggregationInput[]
    by: ExamSubmissionScalarFieldEnum[] | ExamSubmissionScalarFieldEnum
    having?: ExamSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamSubmissionCountAggregateInputType | true
    _avg?: ExamSubmissionAvgAggregateInputType
    _sum?: ExamSubmissionSumAggregateInputType
    _min?: ExamSubmissionMinAggregateInputType
    _max?: ExamSubmissionMaxAggregateInputType
  }

  export type ExamSubmissionGroupByOutputType = {
    id: string
    examId: string
    userId: string
    submittedAt: Date
    score: number
    percentile: number
    _count: ExamSubmissionCountAggregateOutputType | null
    _avg: ExamSubmissionAvgAggregateOutputType | null
    _sum: ExamSubmissionSumAggregateOutputType | null
    _min: ExamSubmissionMinAggregateOutputType | null
    _max: ExamSubmissionMaxAggregateOutputType | null
  }

  type GetExamSubmissionGroupByPayload<T extends ExamSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], ExamSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type ExamSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    examId?: boolean
    userId?: boolean
    submittedAt?: boolean
    score?: boolean
    percentile?: boolean
    exam?: boolean | MasterExamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    examAnswers?: boolean | ExamSubmission$examAnswersArgs<ExtArgs>
    _count?: boolean | ExamSubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examSubmission"]>

  export type ExamSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    examId?: boolean
    userId?: boolean
    submittedAt?: boolean
    score?: boolean
    percentile?: boolean
    exam?: boolean | MasterExamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examSubmission"]>

  export type ExamSubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    examId?: boolean
    userId?: boolean
    submittedAt?: boolean
    score?: boolean
    percentile?: boolean
    exam?: boolean | MasterExamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examSubmission"]>

  export type ExamSubmissionSelectScalar = {
    id?: boolean
    examId?: boolean
    userId?: boolean
    submittedAt?: boolean
    score?: boolean
    percentile?: boolean
  }

  export type ExamSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "examId" | "userId" | "submittedAt" | "score" | "percentile", ExtArgs["result"]["examSubmission"]>
  export type ExamSubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exam?: boolean | MasterExamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    examAnswers?: boolean | ExamSubmission$examAnswersArgs<ExtArgs>
    _count?: boolean | ExamSubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExamSubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exam?: boolean | MasterExamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ExamSubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exam?: boolean | MasterExamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ExamSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExamSubmission"
    objects: {
      exam: Prisma.$MasterExamPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      examAnswers: Prisma.$ExamAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      examId: string
      userId: string
      submittedAt: Date
      score: number
      percentile: number
    }, ExtArgs["result"]["examSubmission"]>
    composites: {}
  }

  type ExamSubmissionGetPayload<S extends boolean | null | undefined | ExamSubmissionDefaultArgs> = $Result.GetResult<Prisma.$ExamSubmissionPayload, S>

  type ExamSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExamSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExamSubmissionCountAggregateInputType | true
    }

  export interface ExamSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExamSubmission'], meta: { name: 'ExamSubmission' } }
    /**
     * Find zero or one ExamSubmission that matches the filter.
     * @param {ExamSubmissionFindUniqueArgs} args - Arguments to find a ExamSubmission
     * @example
     * // Get one ExamSubmission
     * const examSubmission = await prisma.examSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamSubmissionFindUniqueArgs>(args: SelectSubset<T, ExamSubmissionFindUniqueArgs<ExtArgs>>): Prisma__ExamSubmissionClient<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExamSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExamSubmissionFindUniqueOrThrowArgs} args - Arguments to find a ExamSubmission
     * @example
     * // Get one ExamSubmission
     * const examSubmission = await prisma.examSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamSubmissionClient<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExamSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamSubmissionFindFirstArgs} args - Arguments to find a ExamSubmission
     * @example
     * // Get one ExamSubmission
     * const examSubmission = await prisma.examSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamSubmissionFindFirstArgs>(args?: SelectSubset<T, ExamSubmissionFindFirstArgs<ExtArgs>>): Prisma__ExamSubmissionClient<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExamSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamSubmissionFindFirstOrThrowArgs} args - Arguments to find a ExamSubmission
     * @example
     * // Get one ExamSubmission
     * const examSubmission = await prisma.examSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamSubmissionClient<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExamSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExamSubmissions
     * const examSubmissions = await prisma.examSubmission.findMany()
     * 
     * // Get first 10 ExamSubmissions
     * const examSubmissions = await prisma.examSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examSubmissionWithIdOnly = await prisma.examSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamSubmissionFindManyArgs>(args?: SelectSubset<T, ExamSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExamSubmission.
     * @param {ExamSubmissionCreateArgs} args - Arguments to create a ExamSubmission.
     * @example
     * // Create one ExamSubmission
     * const ExamSubmission = await prisma.examSubmission.create({
     *   data: {
     *     // ... data to create a ExamSubmission
     *   }
     * })
     * 
     */
    create<T extends ExamSubmissionCreateArgs>(args: SelectSubset<T, ExamSubmissionCreateArgs<ExtArgs>>): Prisma__ExamSubmissionClient<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExamSubmissions.
     * @param {ExamSubmissionCreateManyArgs} args - Arguments to create many ExamSubmissions.
     * @example
     * // Create many ExamSubmissions
     * const examSubmission = await prisma.examSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamSubmissionCreateManyArgs>(args?: SelectSubset<T, ExamSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExamSubmissions and returns the data saved in the database.
     * @param {ExamSubmissionCreateManyAndReturnArgs} args - Arguments to create many ExamSubmissions.
     * @example
     * // Create many ExamSubmissions
     * const examSubmission = await prisma.examSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExamSubmissions and only return the `id`
     * const examSubmissionWithIdOnly = await prisma.examSubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExamSubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, ExamSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExamSubmission.
     * @param {ExamSubmissionDeleteArgs} args - Arguments to delete one ExamSubmission.
     * @example
     * // Delete one ExamSubmission
     * const ExamSubmission = await prisma.examSubmission.delete({
     *   where: {
     *     // ... filter to delete one ExamSubmission
     *   }
     * })
     * 
     */
    delete<T extends ExamSubmissionDeleteArgs>(args: SelectSubset<T, ExamSubmissionDeleteArgs<ExtArgs>>): Prisma__ExamSubmissionClient<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExamSubmission.
     * @param {ExamSubmissionUpdateArgs} args - Arguments to update one ExamSubmission.
     * @example
     * // Update one ExamSubmission
     * const examSubmission = await prisma.examSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamSubmissionUpdateArgs>(args: SelectSubset<T, ExamSubmissionUpdateArgs<ExtArgs>>): Prisma__ExamSubmissionClient<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExamSubmissions.
     * @param {ExamSubmissionDeleteManyArgs} args - Arguments to filter ExamSubmissions to delete.
     * @example
     * // Delete a few ExamSubmissions
     * const { count } = await prisma.examSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamSubmissionDeleteManyArgs>(args?: SelectSubset<T, ExamSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExamSubmissions
     * const examSubmission = await prisma.examSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamSubmissionUpdateManyArgs>(args: SelectSubset<T, ExamSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamSubmissions and returns the data updated in the database.
     * @param {ExamSubmissionUpdateManyAndReturnArgs} args - Arguments to update many ExamSubmissions.
     * @example
     * // Update many ExamSubmissions
     * const examSubmission = await prisma.examSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExamSubmissions and only return the `id`
     * const examSubmissionWithIdOnly = await prisma.examSubmission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExamSubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, ExamSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExamSubmission.
     * @param {ExamSubmissionUpsertArgs} args - Arguments to update or create a ExamSubmission.
     * @example
     * // Update or create a ExamSubmission
     * const examSubmission = await prisma.examSubmission.upsert({
     *   create: {
     *     // ... data to create a ExamSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExamSubmission we want to update
     *   }
     * })
     */
    upsert<T extends ExamSubmissionUpsertArgs>(args: SelectSubset<T, ExamSubmissionUpsertArgs<ExtArgs>>): Prisma__ExamSubmissionClient<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExamSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamSubmissionCountArgs} args - Arguments to filter ExamSubmissions to count.
     * @example
     * // Count the number of ExamSubmissions
     * const count = await prisma.examSubmission.count({
     *   where: {
     *     // ... the filter for the ExamSubmissions we want to count
     *   }
     * })
    **/
    count<T extends ExamSubmissionCountArgs>(
      args?: Subset<T, ExamSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExamSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExamSubmissionAggregateArgs>(args: Subset<T, ExamSubmissionAggregateArgs>): Prisma.PrismaPromise<GetExamSubmissionAggregateType<T>>

    /**
     * Group by ExamSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamSubmissionGroupByArgs} args - Group by arguments.
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
      T extends ExamSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: ExamSubmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExamSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExamSubmission model
   */
  readonly fields: ExamSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExamSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exam<T extends MasterExamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MasterExamDefaultArgs<ExtArgs>>): Prisma__MasterExamClient<$Result.GetResult<Prisma.$MasterExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    examAnswers<T extends ExamSubmission$examAnswersArgs<ExtArgs> = {}>(args?: Subset<T, ExamSubmission$examAnswersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExamSubmission model
   */ 
  interface ExamSubmissionFieldRefs {
    readonly id: FieldRef<"ExamSubmission", 'String'>
    readonly examId: FieldRef<"ExamSubmission", 'String'>
    readonly userId: FieldRef<"ExamSubmission", 'String'>
    readonly submittedAt: FieldRef<"ExamSubmission", 'DateTime'>
    readonly score: FieldRef<"ExamSubmission", 'Float'>
    readonly percentile: FieldRef<"ExamSubmission", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ExamSubmission findUnique
   */
  export type ExamSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSubmission
     */
    omit?: ExamSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which ExamSubmission to fetch.
     */
    where: ExamSubmissionWhereUniqueInput
  }

  /**
   * ExamSubmission findUniqueOrThrow
   */
  export type ExamSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSubmission
     */
    omit?: ExamSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which ExamSubmission to fetch.
     */
    where: ExamSubmissionWhereUniqueInput
  }

  /**
   * ExamSubmission findFirst
   */
  export type ExamSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSubmission
     */
    omit?: ExamSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which ExamSubmission to fetch.
     */
    where?: ExamSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamSubmissions to fetch.
     */
    orderBy?: ExamSubmissionOrderByWithRelationInput | ExamSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamSubmissions.
     */
    cursor?: ExamSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamSubmissions.
     */
    distinct?: ExamSubmissionScalarFieldEnum | ExamSubmissionScalarFieldEnum[]
  }

  /**
   * ExamSubmission findFirstOrThrow
   */
  export type ExamSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSubmission
     */
    omit?: ExamSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which ExamSubmission to fetch.
     */
    where?: ExamSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamSubmissions to fetch.
     */
    orderBy?: ExamSubmissionOrderByWithRelationInput | ExamSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamSubmissions.
     */
    cursor?: ExamSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamSubmissions.
     */
    distinct?: ExamSubmissionScalarFieldEnum | ExamSubmissionScalarFieldEnum[]
  }

  /**
   * ExamSubmission findMany
   */
  export type ExamSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSubmission
     */
    omit?: ExamSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which ExamSubmissions to fetch.
     */
    where?: ExamSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamSubmissions to fetch.
     */
    orderBy?: ExamSubmissionOrderByWithRelationInput | ExamSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExamSubmissions.
     */
    cursor?: ExamSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamSubmissions.
     */
    skip?: number
    distinct?: ExamSubmissionScalarFieldEnum | ExamSubmissionScalarFieldEnum[]
  }

  /**
   * ExamSubmission create
   */
  export type ExamSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSubmission
     */
    omit?: ExamSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a ExamSubmission.
     */
    data: XOR<ExamSubmissionCreateInput, ExamSubmissionUncheckedCreateInput>
  }

  /**
   * ExamSubmission createMany
   */
  export type ExamSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExamSubmissions.
     */
    data: ExamSubmissionCreateManyInput | ExamSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExamSubmission createManyAndReturn
   */
  export type ExamSubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSubmission
     */
    omit?: ExamSubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many ExamSubmissions.
     */
    data: ExamSubmissionCreateManyInput | ExamSubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExamSubmission update
   */
  export type ExamSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSubmission
     */
    omit?: ExamSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a ExamSubmission.
     */
    data: XOR<ExamSubmissionUpdateInput, ExamSubmissionUncheckedUpdateInput>
    /**
     * Choose, which ExamSubmission to update.
     */
    where: ExamSubmissionWhereUniqueInput
  }

  /**
   * ExamSubmission updateMany
   */
  export type ExamSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExamSubmissions.
     */
    data: XOR<ExamSubmissionUpdateManyMutationInput, ExamSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which ExamSubmissions to update
     */
    where?: ExamSubmissionWhereInput
    /**
     * Limit how many ExamSubmissions to update.
     */
    limit?: number
  }

  /**
   * ExamSubmission updateManyAndReturn
   */
  export type ExamSubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSubmission
     */
    omit?: ExamSubmissionOmit<ExtArgs> | null
    /**
     * The data used to update ExamSubmissions.
     */
    data: XOR<ExamSubmissionUpdateManyMutationInput, ExamSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which ExamSubmissions to update
     */
    where?: ExamSubmissionWhereInput
    /**
     * Limit how many ExamSubmissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExamSubmission upsert
   */
  export type ExamSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSubmission
     */
    omit?: ExamSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the ExamSubmission to update in case it exists.
     */
    where: ExamSubmissionWhereUniqueInput
    /**
     * In case the ExamSubmission found by the `where` argument doesn't exist, create a new ExamSubmission with this data.
     */
    create: XOR<ExamSubmissionCreateInput, ExamSubmissionUncheckedCreateInput>
    /**
     * In case the ExamSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamSubmissionUpdateInput, ExamSubmissionUncheckedUpdateInput>
  }

  /**
   * ExamSubmission delete
   */
  export type ExamSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSubmission
     */
    omit?: ExamSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionInclude<ExtArgs> | null
    /**
     * Filter which ExamSubmission to delete.
     */
    where: ExamSubmissionWhereUniqueInput
  }

  /**
   * ExamSubmission deleteMany
   */
  export type ExamSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamSubmissions to delete
     */
    where?: ExamSubmissionWhereInput
    /**
     * Limit how many ExamSubmissions to delete.
     */
    limit?: number
  }

  /**
   * ExamSubmission.examAnswers
   */
  export type ExamSubmission$examAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAnswer
     */
    select?: ExamAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAnswer
     */
    omit?: ExamAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAnswerInclude<ExtArgs> | null
    where?: ExamAnswerWhereInput
    orderBy?: ExamAnswerOrderByWithRelationInput | ExamAnswerOrderByWithRelationInput[]
    cursor?: ExamAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamAnswerScalarFieldEnum | ExamAnswerScalarFieldEnum[]
  }

  /**
   * ExamSubmission without action
   */
  export type ExamSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamSubmission
     */
    omit?: ExamSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionInclude<ExtArgs> | null
  }


  /**
   * Model ExamAnswer
   */

  export type AggregateExamAnswer = {
    _count: ExamAnswerCountAggregateOutputType | null
    _min: ExamAnswerMinAggregateOutputType | null
    _max: ExamAnswerMaxAggregateOutputType | null
  }

  export type ExamAnswerMinAggregateOutputType = {
    id: string | null
    examSubmissionId: string | null
    examQuestionId: string | null
    answer: string | null
    isCorrect: boolean | null
  }

  export type ExamAnswerMaxAggregateOutputType = {
    id: string | null
    examSubmissionId: string | null
    examQuestionId: string | null
    answer: string | null
    isCorrect: boolean | null
  }

  export type ExamAnswerCountAggregateOutputType = {
    id: number
    examSubmissionId: number
    examQuestionId: number
    answer: number
    isCorrect: number
    _all: number
  }


  export type ExamAnswerMinAggregateInputType = {
    id?: true
    examSubmissionId?: true
    examQuestionId?: true
    answer?: true
    isCorrect?: true
  }

  export type ExamAnswerMaxAggregateInputType = {
    id?: true
    examSubmissionId?: true
    examQuestionId?: true
    answer?: true
    isCorrect?: true
  }

  export type ExamAnswerCountAggregateInputType = {
    id?: true
    examSubmissionId?: true
    examQuestionId?: true
    answer?: true
    isCorrect?: true
    _all?: true
  }

  export type ExamAnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamAnswer to aggregate.
     */
    where?: ExamAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamAnswers to fetch.
     */
    orderBy?: ExamAnswerOrderByWithRelationInput | ExamAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExamAnswers
    **/
    _count?: true | ExamAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamAnswerMaxAggregateInputType
  }

  export type GetExamAnswerAggregateType<T extends ExamAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateExamAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExamAnswer[P]>
      : GetScalarType<T[P], AggregateExamAnswer[P]>
  }




  export type ExamAnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamAnswerWhereInput
    orderBy?: ExamAnswerOrderByWithAggregationInput | ExamAnswerOrderByWithAggregationInput[]
    by: ExamAnswerScalarFieldEnum[] | ExamAnswerScalarFieldEnum
    having?: ExamAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamAnswerCountAggregateInputType | true
    _min?: ExamAnswerMinAggregateInputType
    _max?: ExamAnswerMaxAggregateInputType
  }

  export type ExamAnswerGroupByOutputType = {
    id: string
    examSubmissionId: string
    examQuestionId: string
    answer: string
    isCorrect: boolean
    _count: ExamAnswerCountAggregateOutputType | null
    _min: ExamAnswerMinAggregateOutputType | null
    _max: ExamAnswerMaxAggregateOutputType | null
  }

  type GetExamAnswerGroupByPayload<T extends ExamAnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], ExamAnswerGroupByOutputType[P]>
        }
      >
    >


  export type ExamAnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    examSubmissionId?: boolean
    examQuestionId?: boolean
    answer?: boolean
    isCorrect?: boolean
    examSubmission?: boolean | ExamSubmissionDefaultArgs<ExtArgs>
    examQuestion?: boolean | MasterExamQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examAnswer"]>

  export type ExamAnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    examSubmissionId?: boolean
    examQuestionId?: boolean
    answer?: boolean
    isCorrect?: boolean
    examSubmission?: boolean | ExamSubmissionDefaultArgs<ExtArgs>
    examQuestion?: boolean | MasterExamQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examAnswer"]>

  export type ExamAnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    examSubmissionId?: boolean
    examQuestionId?: boolean
    answer?: boolean
    isCorrect?: boolean
    examSubmission?: boolean | ExamSubmissionDefaultArgs<ExtArgs>
    examQuestion?: boolean | MasterExamQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examAnswer"]>

  export type ExamAnswerSelectScalar = {
    id?: boolean
    examSubmissionId?: boolean
    examQuestionId?: boolean
    answer?: boolean
    isCorrect?: boolean
  }

  export type ExamAnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "examSubmissionId" | "examQuestionId" | "answer" | "isCorrect", ExtArgs["result"]["examAnswer"]>
  export type ExamAnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examSubmission?: boolean | ExamSubmissionDefaultArgs<ExtArgs>
    examQuestion?: boolean | MasterExamQuestionDefaultArgs<ExtArgs>
  }
  export type ExamAnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examSubmission?: boolean | ExamSubmissionDefaultArgs<ExtArgs>
    examQuestion?: boolean | MasterExamQuestionDefaultArgs<ExtArgs>
  }
  export type ExamAnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examSubmission?: boolean | ExamSubmissionDefaultArgs<ExtArgs>
    examQuestion?: boolean | MasterExamQuestionDefaultArgs<ExtArgs>
  }

  export type $ExamAnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExamAnswer"
    objects: {
      examSubmission: Prisma.$ExamSubmissionPayload<ExtArgs>
      examQuestion: Prisma.$MasterExamQuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      examSubmissionId: string
      examQuestionId: string
      answer: string
      isCorrect: boolean
    }, ExtArgs["result"]["examAnswer"]>
    composites: {}
  }

  type ExamAnswerGetPayload<S extends boolean | null | undefined | ExamAnswerDefaultArgs> = $Result.GetResult<Prisma.$ExamAnswerPayload, S>

  type ExamAnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExamAnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExamAnswerCountAggregateInputType | true
    }

  export interface ExamAnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExamAnswer'], meta: { name: 'ExamAnswer' } }
    /**
     * Find zero or one ExamAnswer that matches the filter.
     * @param {ExamAnswerFindUniqueArgs} args - Arguments to find a ExamAnswer
     * @example
     * // Get one ExamAnswer
     * const examAnswer = await prisma.examAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamAnswerFindUniqueArgs>(args: SelectSubset<T, ExamAnswerFindUniqueArgs<ExtArgs>>): Prisma__ExamAnswerClient<$Result.GetResult<Prisma.$ExamAnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExamAnswer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExamAnswerFindUniqueOrThrowArgs} args - Arguments to find a ExamAnswer
     * @example
     * // Get one ExamAnswer
     * const examAnswer = await prisma.examAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamAnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamAnswerClient<$Result.GetResult<Prisma.$ExamAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExamAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAnswerFindFirstArgs} args - Arguments to find a ExamAnswer
     * @example
     * // Get one ExamAnswer
     * const examAnswer = await prisma.examAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamAnswerFindFirstArgs>(args?: SelectSubset<T, ExamAnswerFindFirstArgs<ExtArgs>>): Prisma__ExamAnswerClient<$Result.GetResult<Prisma.$ExamAnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExamAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAnswerFindFirstOrThrowArgs} args - Arguments to find a ExamAnswer
     * @example
     * // Get one ExamAnswer
     * const examAnswer = await prisma.examAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamAnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamAnswerClient<$Result.GetResult<Prisma.$ExamAnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExamAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExamAnswers
     * const examAnswers = await prisma.examAnswer.findMany()
     * 
     * // Get first 10 ExamAnswers
     * const examAnswers = await prisma.examAnswer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examAnswerWithIdOnly = await prisma.examAnswer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamAnswerFindManyArgs>(args?: SelectSubset<T, ExamAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExamAnswer.
     * @param {ExamAnswerCreateArgs} args - Arguments to create a ExamAnswer.
     * @example
     * // Create one ExamAnswer
     * const ExamAnswer = await prisma.examAnswer.create({
     *   data: {
     *     // ... data to create a ExamAnswer
     *   }
     * })
     * 
     */
    create<T extends ExamAnswerCreateArgs>(args: SelectSubset<T, ExamAnswerCreateArgs<ExtArgs>>): Prisma__ExamAnswerClient<$Result.GetResult<Prisma.$ExamAnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExamAnswers.
     * @param {ExamAnswerCreateManyArgs} args - Arguments to create many ExamAnswers.
     * @example
     * // Create many ExamAnswers
     * const examAnswer = await prisma.examAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamAnswerCreateManyArgs>(args?: SelectSubset<T, ExamAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExamAnswers and returns the data saved in the database.
     * @param {ExamAnswerCreateManyAndReturnArgs} args - Arguments to create many ExamAnswers.
     * @example
     * // Create many ExamAnswers
     * const examAnswer = await prisma.examAnswer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExamAnswers and only return the `id`
     * const examAnswerWithIdOnly = await prisma.examAnswer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExamAnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, ExamAnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamAnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExamAnswer.
     * @param {ExamAnswerDeleteArgs} args - Arguments to delete one ExamAnswer.
     * @example
     * // Delete one ExamAnswer
     * const ExamAnswer = await prisma.examAnswer.delete({
     *   where: {
     *     // ... filter to delete one ExamAnswer
     *   }
     * })
     * 
     */
    delete<T extends ExamAnswerDeleteArgs>(args: SelectSubset<T, ExamAnswerDeleteArgs<ExtArgs>>): Prisma__ExamAnswerClient<$Result.GetResult<Prisma.$ExamAnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExamAnswer.
     * @param {ExamAnswerUpdateArgs} args - Arguments to update one ExamAnswer.
     * @example
     * // Update one ExamAnswer
     * const examAnswer = await prisma.examAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamAnswerUpdateArgs>(args: SelectSubset<T, ExamAnswerUpdateArgs<ExtArgs>>): Prisma__ExamAnswerClient<$Result.GetResult<Prisma.$ExamAnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExamAnswers.
     * @param {ExamAnswerDeleteManyArgs} args - Arguments to filter ExamAnswers to delete.
     * @example
     * // Delete a few ExamAnswers
     * const { count } = await prisma.examAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamAnswerDeleteManyArgs>(args?: SelectSubset<T, ExamAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExamAnswers
     * const examAnswer = await prisma.examAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamAnswerUpdateManyArgs>(args: SelectSubset<T, ExamAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamAnswers and returns the data updated in the database.
     * @param {ExamAnswerUpdateManyAndReturnArgs} args - Arguments to update many ExamAnswers.
     * @example
     * // Update many ExamAnswers
     * const examAnswer = await prisma.examAnswer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExamAnswers and only return the `id`
     * const examAnswerWithIdOnly = await prisma.examAnswer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExamAnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, ExamAnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamAnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExamAnswer.
     * @param {ExamAnswerUpsertArgs} args - Arguments to update or create a ExamAnswer.
     * @example
     * // Update or create a ExamAnswer
     * const examAnswer = await prisma.examAnswer.upsert({
     *   create: {
     *     // ... data to create a ExamAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExamAnswer we want to update
     *   }
     * })
     */
    upsert<T extends ExamAnswerUpsertArgs>(args: SelectSubset<T, ExamAnswerUpsertArgs<ExtArgs>>): Prisma__ExamAnswerClient<$Result.GetResult<Prisma.$ExamAnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExamAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAnswerCountArgs} args - Arguments to filter ExamAnswers to count.
     * @example
     * // Count the number of ExamAnswers
     * const count = await prisma.examAnswer.count({
     *   where: {
     *     // ... the filter for the ExamAnswers we want to count
     *   }
     * })
    **/
    count<T extends ExamAnswerCountArgs>(
      args?: Subset<T, ExamAnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExamAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExamAnswerAggregateArgs>(args: Subset<T, ExamAnswerAggregateArgs>): Prisma.PrismaPromise<GetExamAnswerAggregateType<T>>

    /**
     * Group by ExamAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAnswerGroupByArgs} args - Group by arguments.
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
      T extends ExamAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamAnswerGroupByArgs['orderBy'] }
        : { orderBy?: ExamAnswerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExamAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExamAnswer model
   */
  readonly fields: ExamAnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExamAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamAnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    examSubmission<T extends ExamSubmissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExamSubmissionDefaultArgs<ExtArgs>>): Prisma__ExamSubmissionClient<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    examQuestion<T extends MasterExamQuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MasterExamQuestionDefaultArgs<ExtArgs>>): Prisma__MasterExamQuestionClient<$Result.GetResult<Prisma.$MasterExamQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExamAnswer model
   */ 
  interface ExamAnswerFieldRefs {
    readonly id: FieldRef<"ExamAnswer", 'String'>
    readonly examSubmissionId: FieldRef<"ExamAnswer", 'String'>
    readonly examQuestionId: FieldRef<"ExamAnswer", 'String'>
    readonly answer: FieldRef<"ExamAnswer", 'String'>
    readonly isCorrect: FieldRef<"ExamAnswer", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ExamAnswer findUnique
   */
  export type ExamAnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAnswer
     */
    select?: ExamAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAnswer
     */
    omit?: ExamAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAnswerInclude<ExtArgs> | null
    /**
     * Filter, which ExamAnswer to fetch.
     */
    where: ExamAnswerWhereUniqueInput
  }

  /**
   * ExamAnswer findUniqueOrThrow
   */
  export type ExamAnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAnswer
     */
    select?: ExamAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAnswer
     */
    omit?: ExamAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAnswerInclude<ExtArgs> | null
    /**
     * Filter, which ExamAnswer to fetch.
     */
    where: ExamAnswerWhereUniqueInput
  }

  /**
   * ExamAnswer findFirst
   */
  export type ExamAnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAnswer
     */
    select?: ExamAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAnswer
     */
    omit?: ExamAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAnswerInclude<ExtArgs> | null
    /**
     * Filter, which ExamAnswer to fetch.
     */
    where?: ExamAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamAnswers to fetch.
     */
    orderBy?: ExamAnswerOrderByWithRelationInput | ExamAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamAnswers.
     */
    cursor?: ExamAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamAnswers.
     */
    distinct?: ExamAnswerScalarFieldEnum | ExamAnswerScalarFieldEnum[]
  }

  /**
   * ExamAnswer findFirstOrThrow
   */
  export type ExamAnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAnswer
     */
    select?: ExamAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAnswer
     */
    omit?: ExamAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAnswerInclude<ExtArgs> | null
    /**
     * Filter, which ExamAnswer to fetch.
     */
    where?: ExamAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamAnswers to fetch.
     */
    orderBy?: ExamAnswerOrderByWithRelationInput | ExamAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamAnswers.
     */
    cursor?: ExamAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamAnswers.
     */
    distinct?: ExamAnswerScalarFieldEnum | ExamAnswerScalarFieldEnum[]
  }

  /**
   * ExamAnswer findMany
   */
  export type ExamAnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAnswer
     */
    select?: ExamAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAnswer
     */
    omit?: ExamAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAnswerInclude<ExtArgs> | null
    /**
     * Filter, which ExamAnswers to fetch.
     */
    where?: ExamAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamAnswers to fetch.
     */
    orderBy?: ExamAnswerOrderByWithRelationInput | ExamAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExamAnswers.
     */
    cursor?: ExamAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamAnswers.
     */
    skip?: number
    distinct?: ExamAnswerScalarFieldEnum | ExamAnswerScalarFieldEnum[]
  }

  /**
   * ExamAnswer create
   */
  export type ExamAnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAnswer
     */
    select?: ExamAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAnswer
     */
    omit?: ExamAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a ExamAnswer.
     */
    data: XOR<ExamAnswerCreateInput, ExamAnswerUncheckedCreateInput>
  }

  /**
   * ExamAnswer createMany
   */
  export type ExamAnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExamAnswers.
     */
    data: ExamAnswerCreateManyInput | ExamAnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExamAnswer createManyAndReturn
   */
  export type ExamAnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAnswer
     */
    select?: ExamAnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAnswer
     */
    omit?: ExamAnswerOmit<ExtArgs> | null
    /**
     * The data used to create many ExamAnswers.
     */
    data: ExamAnswerCreateManyInput | ExamAnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExamAnswer update
   */
  export type ExamAnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAnswer
     */
    select?: ExamAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAnswer
     */
    omit?: ExamAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a ExamAnswer.
     */
    data: XOR<ExamAnswerUpdateInput, ExamAnswerUncheckedUpdateInput>
    /**
     * Choose, which ExamAnswer to update.
     */
    where: ExamAnswerWhereUniqueInput
  }

  /**
   * ExamAnswer updateMany
   */
  export type ExamAnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExamAnswers.
     */
    data: XOR<ExamAnswerUpdateManyMutationInput, ExamAnswerUncheckedUpdateManyInput>
    /**
     * Filter which ExamAnswers to update
     */
    where?: ExamAnswerWhereInput
    /**
     * Limit how many ExamAnswers to update.
     */
    limit?: number
  }

  /**
   * ExamAnswer updateManyAndReturn
   */
  export type ExamAnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAnswer
     */
    select?: ExamAnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAnswer
     */
    omit?: ExamAnswerOmit<ExtArgs> | null
    /**
     * The data used to update ExamAnswers.
     */
    data: XOR<ExamAnswerUpdateManyMutationInput, ExamAnswerUncheckedUpdateManyInput>
    /**
     * Filter which ExamAnswers to update
     */
    where?: ExamAnswerWhereInput
    /**
     * Limit how many ExamAnswers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExamAnswer upsert
   */
  export type ExamAnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAnswer
     */
    select?: ExamAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAnswer
     */
    omit?: ExamAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the ExamAnswer to update in case it exists.
     */
    where: ExamAnswerWhereUniqueInput
    /**
     * In case the ExamAnswer found by the `where` argument doesn't exist, create a new ExamAnswer with this data.
     */
    create: XOR<ExamAnswerCreateInput, ExamAnswerUncheckedCreateInput>
    /**
     * In case the ExamAnswer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamAnswerUpdateInput, ExamAnswerUncheckedUpdateInput>
  }

  /**
   * ExamAnswer delete
   */
  export type ExamAnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAnswer
     */
    select?: ExamAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAnswer
     */
    omit?: ExamAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAnswerInclude<ExtArgs> | null
    /**
     * Filter which ExamAnswer to delete.
     */
    where: ExamAnswerWhereUniqueInput
  }

  /**
   * ExamAnswer deleteMany
   */
  export type ExamAnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamAnswers to delete
     */
    where?: ExamAnswerWhereInput
    /**
     * Limit how many ExamAnswers to delete.
     */
    limit?: number
  }

  /**
   * ExamAnswer without action
   */
  export type ExamAnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAnswer
     */
    select?: ExamAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAnswer
     */
    omit?: ExamAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAnswerInclude<ExtArgs> | null
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
    displayId: 'displayId',
    firebaseUserId: 'firebaseUserId',
    stripeUserId: 'stripeUserId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    plan: 'plan'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MasterCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    level: 'level',
    parentId: 'parentId'
  };

  export type MasterCategoryScalarFieldEnum = (typeof MasterCategoryScalarFieldEnum)[keyof typeof MasterCategoryScalarFieldEnum]


  export const MasterTagScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type MasterTagScalarFieldEnum = (typeof MasterTagScalarFieldEnum)[keyof typeof MasterTagScalarFieldEnum]


  export const MasterCourseScalarFieldEnum: {
    id: 'id',
    title: 'title',
    summary: 'summary',
    description: 'description',
    targetAudience: 'targetAudience',
    difficulty: 'difficulty',
    durationMin: 'durationMin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    categoryId: 'categoryId'
  };

  export type MasterCourseScalarFieldEnum = (typeof MasterCourseScalarFieldEnum)[keyof typeof MasterCourseScalarFieldEnum]


  export const MasterCourseContentScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    sequence: 'sequence',
    title: 'title',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MasterCourseContentScalarFieldEnum = (typeof MasterCourseContentScalarFieldEnum)[keyof typeof MasterCourseContentScalarFieldEnum]


  export const MasterExerciseScalarFieldEnum: {
    id: 'id',
    courseContentId: 'courseContentId',
    exerciseType: 'exerciseType',
    question: 'question',
    options: 'options',
    correctAnswer: 'correctAnswer',
    createdAt: 'createdAt'
  };

  export type MasterExerciseScalarFieldEnum = (typeof MasterExerciseScalarFieldEnum)[keyof typeof MasterExerciseScalarFieldEnum]


  export const ChatRoomScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    courseContentId: 'courseContentId',
    createdAt: 'createdAt'
  };

  export type ChatRoomScalarFieldEnum = (typeof ChatRoomScalarFieldEnum)[keyof typeof ChatRoomScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    chatRoomId: 'chatRoomId',
    userId: 'userId',
    role: 'role',
    message: 'message',
    createdAt: 'createdAt',
    masterCourseContentId: 'masterCourseContentId'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const MasterCourseFAQScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    question: 'question',
    answer: 'answer',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MasterCourseFAQScalarFieldEnum = (typeof MasterCourseFAQScalarFieldEnum)[keyof typeof MasterCourseFAQScalarFieldEnum]


  export const MasterExamScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    categoryId: 'categoryId'
  };

  export type MasterExamScalarFieldEnum = (typeof MasterExamScalarFieldEnum)[keyof typeof MasterExamScalarFieldEnum]


  export const MasterExamQuestionScalarFieldEnum: {
    id: 'id',
    examId: 'examId',
    question: 'question',
    questionType: 'questionType',
    options: 'options',
    correctAnswer: 'correctAnswer',
    createdAt: 'createdAt'
  };

  export type MasterExamQuestionScalarFieldEnum = (typeof MasterExamQuestionScalarFieldEnum)[keyof typeof MasterExamQuestionScalarFieldEnum]


  export const ExamSubmissionScalarFieldEnum: {
    id: 'id',
    examId: 'examId',
    userId: 'userId',
    submittedAt: 'submittedAt',
    score: 'score',
    percentile: 'percentile'
  };

  export type ExamSubmissionScalarFieldEnum = (typeof ExamSubmissionScalarFieldEnum)[keyof typeof ExamSubmissionScalarFieldEnum]


  export const ExamAnswerScalarFieldEnum: {
    id: 'id',
    examSubmissionId: 'examSubmissionId',
    examQuestionId: 'examQuestionId',
    answer: 'answer',
    isCorrect: 'isCorrect'
  };

  export type ExamAnswerScalarFieldEnum = (typeof ExamAnswerScalarFieldEnum)[keyof typeof ExamAnswerScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    displayId?: StringFilter<"User"> | string
    firebaseUserId?: StringFilter<"User"> | string
    stripeUserId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    plan?: StringFilter<"User"> | string
    examSubmissions?: ExamSubmissionListRelationFilter
    chatMessages?: ChatMessageListRelationFilter
    chatRoom?: ChatRoomListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    displayId?: SortOrder
    firebaseUserId?: SortOrder
    stripeUserId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: SortOrder
    examSubmissions?: ExamSubmissionOrderByRelationAggregateInput
    chatMessages?: ChatMessageOrderByRelationAggregateInput
    chatRoom?: ChatRoomOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    displayId?: string
    firebaseUserId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    stripeUserId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    plan?: StringFilter<"User"> | string
    examSubmissions?: ExamSubmissionListRelationFilter
    chatMessages?: ChatMessageListRelationFilter
    chatRoom?: ChatRoomListRelationFilter
  }, "id" | "displayId" | "firebaseUserId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    displayId?: SortOrder
    firebaseUserId?: SortOrder
    stripeUserId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    displayId?: StringWithAggregatesFilter<"User"> | string
    firebaseUserId?: StringWithAggregatesFilter<"User"> | string
    stripeUserId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    plan?: StringWithAggregatesFilter<"User"> | string
  }

  export type MasterCategoryWhereInput = {
    AND?: MasterCategoryWhereInput | MasterCategoryWhereInput[]
    OR?: MasterCategoryWhereInput[]
    NOT?: MasterCategoryWhereInput | MasterCategoryWhereInput[]
    id?: StringFilter<"MasterCategory"> | string
    name?: StringFilter<"MasterCategory"> | string
    level?: IntFilter<"MasterCategory"> | number
    parentId?: StringNullableFilter<"MasterCategory"> | string | null
    parent?: XOR<MasterCategoryNullableScalarRelationFilter, MasterCategoryWhereInput> | null
    children?: MasterCategoryListRelationFilter
    courses?: MasterCourseListRelationFilter
    exams?: MasterExamListRelationFilter
  }

  export type MasterCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    parentId?: SortOrderInput | SortOrder
    parent?: MasterCategoryOrderByWithRelationInput
    children?: MasterCategoryOrderByRelationAggregateInput
    courses?: MasterCourseOrderByRelationAggregateInput
    exams?: MasterExamOrderByRelationAggregateInput
  }

  export type MasterCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MasterCategoryWhereInput | MasterCategoryWhereInput[]
    OR?: MasterCategoryWhereInput[]
    NOT?: MasterCategoryWhereInput | MasterCategoryWhereInput[]
    name?: StringFilter<"MasterCategory"> | string
    level?: IntFilter<"MasterCategory"> | number
    parentId?: StringNullableFilter<"MasterCategory"> | string | null
    parent?: XOR<MasterCategoryNullableScalarRelationFilter, MasterCategoryWhereInput> | null
    children?: MasterCategoryListRelationFilter
    courses?: MasterCourseListRelationFilter
    exams?: MasterExamListRelationFilter
  }, "id">

  export type MasterCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    parentId?: SortOrderInput | SortOrder
    _count?: MasterCategoryCountOrderByAggregateInput
    _avg?: MasterCategoryAvgOrderByAggregateInput
    _max?: MasterCategoryMaxOrderByAggregateInput
    _min?: MasterCategoryMinOrderByAggregateInput
    _sum?: MasterCategorySumOrderByAggregateInput
  }

  export type MasterCategoryScalarWhereWithAggregatesInput = {
    AND?: MasterCategoryScalarWhereWithAggregatesInput | MasterCategoryScalarWhereWithAggregatesInput[]
    OR?: MasterCategoryScalarWhereWithAggregatesInput[]
    NOT?: MasterCategoryScalarWhereWithAggregatesInput | MasterCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MasterCategory"> | string
    name?: StringWithAggregatesFilter<"MasterCategory"> | string
    level?: IntWithAggregatesFilter<"MasterCategory"> | number
    parentId?: StringNullableWithAggregatesFilter<"MasterCategory"> | string | null
  }

  export type MasterTagWhereInput = {
    AND?: MasterTagWhereInput | MasterTagWhereInput[]
    OR?: MasterTagWhereInput[]
    NOT?: MasterTagWhereInput | MasterTagWhereInput[]
    id?: StringFilter<"MasterTag"> | string
    name?: StringFilter<"MasterTag"> | string
    courses?: MasterCourseListRelationFilter
  }

  export type MasterTagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    courses?: MasterCourseOrderByRelationAggregateInput
  }

  export type MasterTagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: MasterTagWhereInput | MasterTagWhereInput[]
    OR?: MasterTagWhereInput[]
    NOT?: MasterTagWhereInput | MasterTagWhereInput[]
    courses?: MasterCourseListRelationFilter
  }, "id" | "name">

  export type MasterTagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: MasterTagCountOrderByAggregateInput
    _max?: MasterTagMaxOrderByAggregateInput
    _min?: MasterTagMinOrderByAggregateInput
  }

  export type MasterTagScalarWhereWithAggregatesInput = {
    AND?: MasterTagScalarWhereWithAggregatesInput | MasterTagScalarWhereWithAggregatesInput[]
    OR?: MasterTagScalarWhereWithAggregatesInput[]
    NOT?: MasterTagScalarWhereWithAggregatesInput | MasterTagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MasterTag"> | string
    name?: StringWithAggregatesFilter<"MasterTag"> | string
  }

  export type MasterCourseWhereInput = {
    AND?: MasterCourseWhereInput | MasterCourseWhereInput[]
    OR?: MasterCourseWhereInput[]
    NOT?: MasterCourseWhereInput | MasterCourseWhereInput[]
    id?: StringFilter<"MasterCourse"> | string
    title?: StringNullableFilter<"MasterCourse"> | string | null
    summary?: StringNullableFilter<"MasterCourse"> | string | null
    description?: StringNullableFilter<"MasterCourse"> | string | null
    targetAudience?: StringNullableFilter<"MasterCourse"> | string | null
    difficulty?: StringNullableFilter<"MasterCourse"> | string | null
    durationMin?: IntNullableFilter<"MasterCourse"> | number | null
    createdAt?: DateTimeFilter<"MasterCourse"> | Date | string
    updatedAt?: DateTimeFilter<"MasterCourse"> | Date | string
    categoryId?: StringFilter<"MasterCourse"> | string
    category?: XOR<MasterCategoryScalarRelationFilter, MasterCategoryWhereInput>
    tags?: MasterTagListRelationFilter
    courseContents?: MasterCourseContentListRelationFilter
    relatedCourses?: MasterCourseListRelationFilter
    relatedToCourses?: MasterCourseListRelationFilter
    courseFAQs?: MasterCourseFAQListRelationFilter
  }

  export type MasterCourseOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    targetAudience?: SortOrderInput | SortOrder
    difficulty?: SortOrderInput | SortOrder
    durationMin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    category?: MasterCategoryOrderByWithRelationInput
    tags?: MasterTagOrderByRelationAggregateInput
    courseContents?: MasterCourseContentOrderByRelationAggregateInput
    relatedCourses?: MasterCourseOrderByRelationAggregateInput
    relatedToCourses?: MasterCourseOrderByRelationAggregateInput
    courseFAQs?: MasterCourseFAQOrderByRelationAggregateInput
  }

  export type MasterCourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MasterCourseWhereInput | MasterCourseWhereInput[]
    OR?: MasterCourseWhereInput[]
    NOT?: MasterCourseWhereInput | MasterCourseWhereInput[]
    title?: StringNullableFilter<"MasterCourse"> | string | null
    summary?: StringNullableFilter<"MasterCourse"> | string | null
    description?: StringNullableFilter<"MasterCourse"> | string | null
    targetAudience?: StringNullableFilter<"MasterCourse"> | string | null
    difficulty?: StringNullableFilter<"MasterCourse"> | string | null
    durationMin?: IntNullableFilter<"MasterCourse"> | number | null
    createdAt?: DateTimeFilter<"MasterCourse"> | Date | string
    updatedAt?: DateTimeFilter<"MasterCourse"> | Date | string
    categoryId?: StringFilter<"MasterCourse"> | string
    category?: XOR<MasterCategoryScalarRelationFilter, MasterCategoryWhereInput>
    tags?: MasterTagListRelationFilter
    courseContents?: MasterCourseContentListRelationFilter
    relatedCourses?: MasterCourseListRelationFilter
    relatedToCourses?: MasterCourseListRelationFilter
    courseFAQs?: MasterCourseFAQListRelationFilter
  }, "id">

  export type MasterCourseOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    targetAudience?: SortOrderInput | SortOrder
    difficulty?: SortOrderInput | SortOrder
    durationMin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    _count?: MasterCourseCountOrderByAggregateInput
    _avg?: MasterCourseAvgOrderByAggregateInput
    _max?: MasterCourseMaxOrderByAggregateInput
    _min?: MasterCourseMinOrderByAggregateInput
    _sum?: MasterCourseSumOrderByAggregateInput
  }

  export type MasterCourseScalarWhereWithAggregatesInput = {
    AND?: MasterCourseScalarWhereWithAggregatesInput | MasterCourseScalarWhereWithAggregatesInput[]
    OR?: MasterCourseScalarWhereWithAggregatesInput[]
    NOT?: MasterCourseScalarWhereWithAggregatesInput | MasterCourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MasterCourse"> | string
    title?: StringNullableWithAggregatesFilter<"MasterCourse"> | string | null
    summary?: StringNullableWithAggregatesFilter<"MasterCourse"> | string | null
    description?: StringNullableWithAggregatesFilter<"MasterCourse"> | string | null
    targetAudience?: StringNullableWithAggregatesFilter<"MasterCourse"> | string | null
    difficulty?: StringNullableWithAggregatesFilter<"MasterCourse"> | string | null
    durationMin?: IntNullableWithAggregatesFilter<"MasterCourse"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"MasterCourse"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MasterCourse"> | Date | string
    categoryId?: StringWithAggregatesFilter<"MasterCourse"> | string
  }

  export type MasterCourseContentWhereInput = {
    AND?: MasterCourseContentWhereInput | MasterCourseContentWhereInput[]
    OR?: MasterCourseContentWhereInput[]
    NOT?: MasterCourseContentWhereInput | MasterCourseContentWhereInput[]
    id?: StringFilter<"MasterCourseContent"> | string
    courseId?: StringFilter<"MasterCourseContent"> | string
    sequence?: IntFilter<"MasterCourseContent"> | number
    title?: StringNullableFilter<"MasterCourseContent"> | string | null
    content?: StringNullableFilter<"MasterCourseContent"> | string | null
    createdAt?: DateTimeFilter<"MasterCourseContent"> | Date | string
    updatedAt?: DateTimeFilter<"MasterCourseContent"> | Date | string
    course?: XOR<MasterCourseScalarRelationFilter, MasterCourseWhereInput>
    exercises?: MasterExerciseListRelationFilter
    chatMessages?: ChatMessageListRelationFilter
    chatRoom?: ChatRoomListRelationFilter
  }

  export type MasterCourseContentOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    sequence?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    course?: MasterCourseOrderByWithRelationInput
    exercises?: MasterExerciseOrderByRelationAggregateInput
    chatMessages?: ChatMessageOrderByRelationAggregateInput
    chatRoom?: ChatRoomOrderByRelationAggregateInput
  }

  export type MasterCourseContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MasterCourseContentWhereInput | MasterCourseContentWhereInput[]
    OR?: MasterCourseContentWhereInput[]
    NOT?: MasterCourseContentWhereInput | MasterCourseContentWhereInput[]
    courseId?: StringFilter<"MasterCourseContent"> | string
    sequence?: IntFilter<"MasterCourseContent"> | number
    title?: StringNullableFilter<"MasterCourseContent"> | string | null
    content?: StringNullableFilter<"MasterCourseContent"> | string | null
    createdAt?: DateTimeFilter<"MasterCourseContent"> | Date | string
    updatedAt?: DateTimeFilter<"MasterCourseContent"> | Date | string
    course?: XOR<MasterCourseScalarRelationFilter, MasterCourseWhereInput>
    exercises?: MasterExerciseListRelationFilter
    chatMessages?: ChatMessageListRelationFilter
    chatRoom?: ChatRoomListRelationFilter
  }, "id">

  export type MasterCourseContentOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    sequence?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MasterCourseContentCountOrderByAggregateInput
    _avg?: MasterCourseContentAvgOrderByAggregateInput
    _max?: MasterCourseContentMaxOrderByAggregateInput
    _min?: MasterCourseContentMinOrderByAggregateInput
    _sum?: MasterCourseContentSumOrderByAggregateInput
  }

  export type MasterCourseContentScalarWhereWithAggregatesInput = {
    AND?: MasterCourseContentScalarWhereWithAggregatesInput | MasterCourseContentScalarWhereWithAggregatesInput[]
    OR?: MasterCourseContentScalarWhereWithAggregatesInput[]
    NOT?: MasterCourseContentScalarWhereWithAggregatesInput | MasterCourseContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MasterCourseContent"> | string
    courseId?: StringWithAggregatesFilter<"MasterCourseContent"> | string
    sequence?: IntWithAggregatesFilter<"MasterCourseContent"> | number
    title?: StringNullableWithAggregatesFilter<"MasterCourseContent"> | string | null
    content?: StringNullableWithAggregatesFilter<"MasterCourseContent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MasterCourseContent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MasterCourseContent"> | Date | string
  }

  export type MasterExerciseWhereInput = {
    AND?: MasterExerciseWhereInput | MasterExerciseWhereInput[]
    OR?: MasterExerciseWhereInput[]
    NOT?: MasterExerciseWhereInput | MasterExerciseWhereInput[]
    id?: StringFilter<"MasterExercise"> | string
    courseContentId?: StringFilter<"MasterExercise"> | string
    exerciseType?: StringFilter<"MasterExercise"> | string
    question?: StringFilter<"MasterExercise"> | string
    options?: StringNullableFilter<"MasterExercise"> | string | null
    correctAnswer?: StringNullableFilter<"MasterExercise"> | string | null
    createdAt?: DateTimeFilter<"MasterExercise"> | Date | string
    courseContent?: XOR<MasterCourseContentScalarRelationFilter, MasterCourseContentWhereInput>
  }

  export type MasterExerciseOrderByWithRelationInput = {
    id?: SortOrder
    courseContentId?: SortOrder
    exerciseType?: SortOrder
    question?: SortOrder
    options?: SortOrderInput | SortOrder
    correctAnswer?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    courseContent?: MasterCourseContentOrderByWithRelationInput
  }

  export type MasterExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MasterExerciseWhereInput | MasterExerciseWhereInput[]
    OR?: MasterExerciseWhereInput[]
    NOT?: MasterExerciseWhereInput | MasterExerciseWhereInput[]
    courseContentId?: StringFilter<"MasterExercise"> | string
    exerciseType?: StringFilter<"MasterExercise"> | string
    question?: StringFilter<"MasterExercise"> | string
    options?: StringNullableFilter<"MasterExercise"> | string | null
    correctAnswer?: StringNullableFilter<"MasterExercise"> | string | null
    createdAt?: DateTimeFilter<"MasterExercise"> | Date | string
    courseContent?: XOR<MasterCourseContentScalarRelationFilter, MasterCourseContentWhereInput>
  }, "id">

  export type MasterExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    courseContentId?: SortOrder
    exerciseType?: SortOrder
    question?: SortOrder
    options?: SortOrderInput | SortOrder
    correctAnswer?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MasterExerciseCountOrderByAggregateInput
    _max?: MasterExerciseMaxOrderByAggregateInput
    _min?: MasterExerciseMinOrderByAggregateInput
  }

  export type MasterExerciseScalarWhereWithAggregatesInput = {
    AND?: MasterExerciseScalarWhereWithAggregatesInput | MasterExerciseScalarWhereWithAggregatesInput[]
    OR?: MasterExerciseScalarWhereWithAggregatesInput[]
    NOT?: MasterExerciseScalarWhereWithAggregatesInput | MasterExerciseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MasterExercise"> | string
    courseContentId?: StringWithAggregatesFilter<"MasterExercise"> | string
    exerciseType?: StringWithAggregatesFilter<"MasterExercise"> | string
    question?: StringWithAggregatesFilter<"MasterExercise"> | string
    options?: StringNullableWithAggregatesFilter<"MasterExercise"> | string | null
    correctAnswer?: StringNullableWithAggregatesFilter<"MasterExercise"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MasterExercise"> | Date | string
  }

  export type ChatRoomWhereInput = {
    AND?: ChatRoomWhereInput | ChatRoomWhereInput[]
    OR?: ChatRoomWhereInput[]
    NOT?: ChatRoomWhereInput | ChatRoomWhereInput[]
    id?: StringFilter<"ChatRoom"> | string
    userId?: StringFilter<"ChatRoom"> | string
    courseContentId?: StringFilter<"ChatRoom"> | string
    createdAt?: DateTimeFilter<"ChatRoom"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    courseContent?: XOR<MasterCourseContentScalarRelationFilter, MasterCourseContentWhereInput>
    chatMessage?: ChatMessageListRelationFilter
  }

  export type ChatRoomOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseContentId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    courseContent?: MasterCourseContentOrderByWithRelationInput
    chatMessage?: ChatMessageOrderByRelationAggregateInput
  }

  export type ChatRoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatRoomWhereInput | ChatRoomWhereInput[]
    OR?: ChatRoomWhereInput[]
    NOT?: ChatRoomWhereInput | ChatRoomWhereInput[]
    userId?: StringFilter<"ChatRoom"> | string
    courseContentId?: StringFilter<"ChatRoom"> | string
    createdAt?: DateTimeFilter<"ChatRoom"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    courseContent?: XOR<MasterCourseContentScalarRelationFilter, MasterCourseContentWhereInput>
    chatMessage?: ChatMessageListRelationFilter
  }, "id">

  export type ChatRoomOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseContentId?: SortOrder
    createdAt?: SortOrder
    _count?: ChatRoomCountOrderByAggregateInput
    _max?: ChatRoomMaxOrderByAggregateInput
    _min?: ChatRoomMinOrderByAggregateInput
  }

  export type ChatRoomScalarWhereWithAggregatesInput = {
    AND?: ChatRoomScalarWhereWithAggregatesInput | ChatRoomScalarWhereWithAggregatesInput[]
    OR?: ChatRoomScalarWhereWithAggregatesInput[]
    NOT?: ChatRoomScalarWhereWithAggregatesInput | ChatRoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatRoom"> | string
    userId?: StringWithAggregatesFilter<"ChatRoom"> | string
    courseContentId?: StringWithAggregatesFilter<"ChatRoom"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatRoom"> | Date | string
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    chatRoomId?: StringFilter<"ChatMessage"> | string
    userId?: StringNullableFilter<"ChatMessage"> | string | null
    role?: StringFilter<"ChatMessage"> | string
    message?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    masterCourseContentId?: StringNullableFilter<"ChatMessage"> | string | null
    chatRoom?: XOR<ChatRoomScalarRelationFilter, ChatRoomWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    MasterCourseContent?: XOR<MasterCourseContentNullableScalarRelationFilter, MasterCourseContentWhereInput> | null
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    chatRoomId?: SortOrder
    userId?: SortOrderInput | SortOrder
    role?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    masterCourseContentId?: SortOrderInput | SortOrder
    chatRoom?: ChatRoomOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    MasterCourseContent?: MasterCourseContentOrderByWithRelationInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    chatRoomId?: StringFilter<"ChatMessage"> | string
    userId?: StringNullableFilter<"ChatMessage"> | string | null
    role?: StringFilter<"ChatMessage"> | string
    message?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    masterCourseContentId?: StringNullableFilter<"ChatMessage"> | string | null
    chatRoom?: XOR<ChatRoomScalarRelationFilter, ChatRoomWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    MasterCourseContent?: XOR<MasterCourseContentNullableScalarRelationFilter, MasterCourseContentWhereInput> | null
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    chatRoomId?: SortOrder
    userId?: SortOrderInput | SortOrder
    role?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    masterCourseContentId?: SortOrderInput | SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatMessage"> | string
    chatRoomId?: StringWithAggregatesFilter<"ChatMessage"> | string
    userId?: StringNullableWithAggregatesFilter<"ChatMessage"> | string | null
    role?: StringWithAggregatesFilter<"ChatMessage"> | string
    message?: StringWithAggregatesFilter<"ChatMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
    masterCourseContentId?: StringNullableWithAggregatesFilter<"ChatMessage"> | string | null
  }

  export type MasterCourseFAQWhereInput = {
    AND?: MasterCourseFAQWhereInput | MasterCourseFAQWhereInput[]
    OR?: MasterCourseFAQWhereInput[]
    NOT?: MasterCourseFAQWhereInput | MasterCourseFAQWhereInput[]
    id?: StringFilter<"MasterCourseFAQ"> | string
    courseId?: StringFilter<"MasterCourseFAQ"> | string
    question?: StringFilter<"MasterCourseFAQ"> | string
    answer?: StringFilter<"MasterCourseFAQ"> | string
    createdAt?: DateTimeFilter<"MasterCourseFAQ"> | Date | string
    updatedAt?: DateTimeFilter<"MasterCourseFAQ"> | Date | string
    course?: XOR<MasterCourseScalarRelationFilter, MasterCourseWhereInput>
  }

  export type MasterCourseFAQOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    course?: MasterCourseOrderByWithRelationInput
  }

  export type MasterCourseFAQWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MasterCourseFAQWhereInput | MasterCourseFAQWhereInput[]
    OR?: MasterCourseFAQWhereInput[]
    NOT?: MasterCourseFAQWhereInput | MasterCourseFAQWhereInput[]
    courseId?: StringFilter<"MasterCourseFAQ"> | string
    question?: StringFilter<"MasterCourseFAQ"> | string
    answer?: StringFilter<"MasterCourseFAQ"> | string
    createdAt?: DateTimeFilter<"MasterCourseFAQ"> | Date | string
    updatedAt?: DateTimeFilter<"MasterCourseFAQ"> | Date | string
    course?: XOR<MasterCourseScalarRelationFilter, MasterCourseWhereInput>
  }, "id">

  export type MasterCourseFAQOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MasterCourseFAQCountOrderByAggregateInput
    _max?: MasterCourseFAQMaxOrderByAggregateInput
    _min?: MasterCourseFAQMinOrderByAggregateInput
  }

  export type MasterCourseFAQScalarWhereWithAggregatesInput = {
    AND?: MasterCourseFAQScalarWhereWithAggregatesInput | MasterCourseFAQScalarWhereWithAggregatesInput[]
    OR?: MasterCourseFAQScalarWhereWithAggregatesInput[]
    NOT?: MasterCourseFAQScalarWhereWithAggregatesInput | MasterCourseFAQScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MasterCourseFAQ"> | string
    courseId?: StringWithAggregatesFilter<"MasterCourseFAQ"> | string
    question?: StringWithAggregatesFilter<"MasterCourseFAQ"> | string
    answer?: StringWithAggregatesFilter<"MasterCourseFAQ"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MasterCourseFAQ"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MasterCourseFAQ"> | Date | string
  }

  export type MasterExamWhereInput = {
    AND?: MasterExamWhereInput | MasterExamWhereInput[]
    OR?: MasterExamWhereInput[]
    NOT?: MasterExamWhereInput | MasterExamWhereInput[]
    id?: StringFilter<"MasterExam"> | string
    title?: StringFilter<"MasterExam"> | string
    description?: StringFilter<"MasterExam"> | string
    createdAt?: DateTimeFilter<"MasterExam"> | Date | string
    updatedAt?: DateTimeFilter<"MasterExam"> | Date | string
    categoryId?: StringFilter<"MasterExam"> | string
    category?: XOR<MasterCategoryScalarRelationFilter, MasterCategoryWhereInput>
    examQuestions?: MasterExamQuestionListRelationFilter
    ExamSubmission?: ExamSubmissionListRelationFilter
  }

  export type MasterExamOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    category?: MasterCategoryOrderByWithRelationInput
    examQuestions?: MasterExamQuestionOrderByRelationAggregateInput
    ExamSubmission?: ExamSubmissionOrderByRelationAggregateInput
  }

  export type MasterExamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MasterExamWhereInput | MasterExamWhereInput[]
    OR?: MasterExamWhereInput[]
    NOT?: MasterExamWhereInput | MasterExamWhereInput[]
    title?: StringFilter<"MasterExam"> | string
    description?: StringFilter<"MasterExam"> | string
    createdAt?: DateTimeFilter<"MasterExam"> | Date | string
    updatedAt?: DateTimeFilter<"MasterExam"> | Date | string
    categoryId?: StringFilter<"MasterExam"> | string
    category?: XOR<MasterCategoryScalarRelationFilter, MasterCategoryWhereInput>
    examQuestions?: MasterExamQuestionListRelationFilter
    ExamSubmission?: ExamSubmissionListRelationFilter
  }, "id">

  export type MasterExamOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    _count?: MasterExamCountOrderByAggregateInput
    _max?: MasterExamMaxOrderByAggregateInput
    _min?: MasterExamMinOrderByAggregateInput
  }

  export type MasterExamScalarWhereWithAggregatesInput = {
    AND?: MasterExamScalarWhereWithAggregatesInput | MasterExamScalarWhereWithAggregatesInput[]
    OR?: MasterExamScalarWhereWithAggregatesInput[]
    NOT?: MasterExamScalarWhereWithAggregatesInput | MasterExamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MasterExam"> | string
    title?: StringWithAggregatesFilter<"MasterExam"> | string
    description?: StringWithAggregatesFilter<"MasterExam"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MasterExam"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MasterExam"> | Date | string
    categoryId?: StringWithAggregatesFilter<"MasterExam"> | string
  }

  export type MasterExamQuestionWhereInput = {
    AND?: MasterExamQuestionWhereInput | MasterExamQuestionWhereInput[]
    OR?: MasterExamQuestionWhereInput[]
    NOT?: MasterExamQuestionWhereInput | MasterExamQuestionWhereInput[]
    id?: StringFilter<"MasterExamQuestion"> | string
    examId?: StringFilter<"MasterExamQuestion"> | string
    question?: StringFilter<"MasterExamQuestion"> | string
    questionType?: StringFilter<"MasterExamQuestion"> | string
    options?: StringNullableFilter<"MasterExamQuestion"> | string | null
    correctAnswer?: StringNullableFilter<"MasterExamQuestion"> | string | null
    createdAt?: DateTimeFilter<"MasterExamQuestion"> | Date | string
    exam?: XOR<MasterExamScalarRelationFilter, MasterExamWhereInput>
    ExamAnswer?: ExamAnswerListRelationFilter
  }

  export type MasterExamQuestionOrderByWithRelationInput = {
    id?: SortOrder
    examId?: SortOrder
    question?: SortOrder
    questionType?: SortOrder
    options?: SortOrderInput | SortOrder
    correctAnswer?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    exam?: MasterExamOrderByWithRelationInput
    ExamAnswer?: ExamAnswerOrderByRelationAggregateInput
  }

  export type MasterExamQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MasterExamQuestionWhereInput | MasterExamQuestionWhereInput[]
    OR?: MasterExamQuestionWhereInput[]
    NOT?: MasterExamQuestionWhereInput | MasterExamQuestionWhereInput[]
    examId?: StringFilter<"MasterExamQuestion"> | string
    question?: StringFilter<"MasterExamQuestion"> | string
    questionType?: StringFilter<"MasterExamQuestion"> | string
    options?: StringNullableFilter<"MasterExamQuestion"> | string | null
    correctAnswer?: StringNullableFilter<"MasterExamQuestion"> | string | null
    createdAt?: DateTimeFilter<"MasterExamQuestion"> | Date | string
    exam?: XOR<MasterExamScalarRelationFilter, MasterExamWhereInput>
    ExamAnswer?: ExamAnswerListRelationFilter
  }, "id">

  export type MasterExamQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    examId?: SortOrder
    question?: SortOrder
    questionType?: SortOrder
    options?: SortOrderInput | SortOrder
    correctAnswer?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MasterExamQuestionCountOrderByAggregateInput
    _max?: MasterExamQuestionMaxOrderByAggregateInput
    _min?: MasterExamQuestionMinOrderByAggregateInput
  }

  export type MasterExamQuestionScalarWhereWithAggregatesInput = {
    AND?: MasterExamQuestionScalarWhereWithAggregatesInput | MasterExamQuestionScalarWhereWithAggregatesInput[]
    OR?: MasterExamQuestionScalarWhereWithAggregatesInput[]
    NOT?: MasterExamQuestionScalarWhereWithAggregatesInput | MasterExamQuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MasterExamQuestion"> | string
    examId?: StringWithAggregatesFilter<"MasterExamQuestion"> | string
    question?: StringWithAggregatesFilter<"MasterExamQuestion"> | string
    questionType?: StringWithAggregatesFilter<"MasterExamQuestion"> | string
    options?: StringNullableWithAggregatesFilter<"MasterExamQuestion"> | string | null
    correctAnswer?: StringNullableWithAggregatesFilter<"MasterExamQuestion"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MasterExamQuestion"> | Date | string
  }

  export type ExamSubmissionWhereInput = {
    AND?: ExamSubmissionWhereInput | ExamSubmissionWhereInput[]
    OR?: ExamSubmissionWhereInput[]
    NOT?: ExamSubmissionWhereInput | ExamSubmissionWhereInput[]
    id?: StringFilter<"ExamSubmission"> | string
    examId?: StringFilter<"ExamSubmission"> | string
    userId?: StringFilter<"ExamSubmission"> | string
    submittedAt?: DateTimeFilter<"ExamSubmission"> | Date | string
    score?: FloatFilter<"ExamSubmission"> | number
    percentile?: FloatFilter<"ExamSubmission"> | number
    exam?: XOR<MasterExamScalarRelationFilter, MasterExamWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    examAnswers?: ExamAnswerListRelationFilter
  }

  export type ExamSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    examId?: SortOrder
    userId?: SortOrder
    submittedAt?: SortOrder
    score?: SortOrder
    percentile?: SortOrder
    exam?: MasterExamOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    examAnswers?: ExamAnswerOrderByRelationAggregateInput
  }

  export type ExamSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExamSubmissionWhereInput | ExamSubmissionWhereInput[]
    OR?: ExamSubmissionWhereInput[]
    NOT?: ExamSubmissionWhereInput | ExamSubmissionWhereInput[]
    examId?: StringFilter<"ExamSubmission"> | string
    userId?: StringFilter<"ExamSubmission"> | string
    submittedAt?: DateTimeFilter<"ExamSubmission"> | Date | string
    score?: FloatFilter<"ExamSubmission"> | number
    percentile?: FloatFilter<"ExamSubmission"> | number
    exam?: XOR<MasterExamScalarRelationFilter, MasterExamWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    examAnswers?: ExamAnswerListRelationFilter
  }, "id">

  export type ExamSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    examId?: SortOrder
    userId?: SortOrder
    submittedAt?: SortOrder
    score?: SortOrder
    percentile?: SortOrder
    _count?: ExamSubmissionCountOrderByAggregateInput
    _avg?: ExamSubmissionAvgOrderByAggregateInput
    _max?: ExamSubmissionMaxOrderByAggregateInput
    _min?: ExamSubmissionMinOrderByAggregateInput
    _sum?: ExamSubmissionSumOrderByAggregateInput
  }

  export type ExamSubmissionScalarWhereWithAggregatesInput = {
    AND?: ExamSubmissionScalarWhereWithAggregatesInput | ExamSubmissionScalarWhereWithAggregatesInput[]
    OR?: ExamSubmissionScalarWhereWithAggregatesInput[]
    NOT?: ExamSubmissionScalarWhereWithAggregatesInput | ExamSubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExamSubmission"> | string
    examId?: StringWithAggregatesFilter<"ExamSubmission"> | string
    userId?: StringWithAggregatesFilter<"ExamSubmission"> | string
    submittedAt?: DateTimeWithAggregatesFilter<"ExamSubmission"> | Date | string
    score?: FloatWithAggregatesFilter<"ExamSubmission"> | number
    percentile?: FloatWithAggregatesFilter<"ExamSubmission"> | number
  }

  export type ExamAnswerWhereInput = {
    AND?: ExamAnswerWhereInput | ExamAnswerWhereInput[]
    OR?: ExamAnswerWhereInput[]
    NOT?: ExamAnswerWhereInput | ExamAnswerWhereInput[]
    id?: StringFilter<"ExamAnswer"> | string
    examSubmissionId?: StringFilter<"ExamAnswer"> | string
    examQuestionId?: StringFilter<"ExamAnswer"> | string
    answer?: StringFilter<"ExamAnswer"> | string
    isCorrect?: BoolFilter<"ExamAnswer"> | boolean
    examSubmission?: XOR<ExamSubmissionScalarRelationFilter, ExamSubmissionWhereInput>
    examQuestion?: XOR<MasterExamQuestionScalarRelationFilter, MasterExamQuestionWhereInput>
  }

  export type ExamAnswerOrderByWithRelationInput = {
    id?: SortOrder
    examSubmissionId?: SortOrder
    examQuestionId?: SortOrder
    answer?: SortOrder
    isCorrect?: SortOrder
    examSubmission?: ExamSubmissionOrderByWithRelationInput
    examQuestion?: MasterExamQuestionOrderByWithRelationInput
  }

  export type ExamAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExamAnswerWhereInput | ExamAnswerWhereInput[]
    OR?: ExamAnswerWhereInput[]
    NOT?: ExamAnswerWhereInput | ExamAnswerWhereInput[]
    examSubmissionId?: StringFilter<"ExamAnswer"> | string
    examQuestionId?: StringFilter<"ExamAnswer"> | string
    answer?: StringFilter<"ExamAnswer"> | string
    isCorrect?: BoolFilter<"ExamAnswer"> | boolean
    examSubmission?: XOR<ExamSubmissionScalarRelationFilter, ExamSubmissionWhereInput>
    examQuestion?: XOR<MasterExamQuestionScalarRelationFilter, MasterExamQuestionWhereInput>
  }, "id">

  export type ExamAnswerOrderByWithAggregationInput = {
    id?: SortOrder
    examSubmissionId?: SortOrder
    examQuestionId?: SortOrder
    answer?: SortOrder
    isCorrect?: SortOrder
    _count?: ExamAnswerCountOrderByAggregateInput
    _max?: ExamAnswerMaxOrderByAggregateInput
    _min?: ExamAnswerMinOrderByAggregateInput
  }

  export type ExamAnswerScalarWhereWithAggregatesInput = {
    AND?: ExamAnswerScalarWhereWithAggregatesInput | ExamAnswerScalarWhereWithAggregatesInput[]
    OR?: ExamAnswerScalarWhereWithAggregatesInput[]
    NOT?: ExamAnswerScalarWhereWithAggregatesInput | ExamAnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExamAnswer"> | string
    examSubmissionId?: StringWithAggregatesFilter<"ExamAnswer"> | string
    examQuestionId?: StringWithAggregatesFilter<"ExamAnswer"> | string
    answer?: StringWithAggregatesFilter<"ExamAnswer"> | string
    isCorrect?: BoolWithAggregatesFilter<"ExamAnswer"> | boolean
  }

  export type UserCreateInput = {
    id: string
    displayId: string
    firebaseUserId: string
    stripeUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
    examSubmissions?: ExamSubmissionCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    chatRoom?: ChatRoomCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    displayId: string
    firebaseUserId: string
    stripeUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
    examSubmissions?: ExamSubmissionUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    chatRoom?: ChatRoomUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayId?: StringFieldUpdateOperationsInput | string
    firebaseUserId?: StringFieldUpdateOperationsInput | string
    stripeUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    examSubmissions?: ExamSubmissionUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    chatRoom?: ChatRoomUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayId?: StringFieldUpdateOperationsInput | string
    firebaseUserId?: StringFieldUpdateOperationsInput | string
    stripeUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    examSubmissions?: ExamSubmissionUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    chatRoom?: ChatRoomUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    displayId: string
    firebaseUserId: string
    stripeUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayId?: StringFieldUpdateOperationsInput | string
    firebaseUserId?: StringFieldUpdateOperationsInput | string
    stripeUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayId?: StringFieldUpdateOperationsInput | string
    firebaseUserId?: StringFieldUpdateOperationsInput | string
    stripeUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
  }

  export type MasterCategoryCreateInput = {
    id: string
    name: string
    level: number
    parent?: MasterCategoryCreateNestedOneWithoutChildrenInput
    children?: MasterCategoryCreateNestedManyWithoutParentInput
    courses?: MasterCourseCreateNestedManyWithoutCategoryInput
    exams?: MasterExamCreateNestedManyWithoutCategoryInput
  }

  export type MasterCategoryUncheckedCreateInput = {
    id: string
    name: string
    level: number
    parentId?: string | null
    children?: MasterCategoryUncheckedCreateNestedManyWithoutParentInput
    courses?: MasterCourseUncheckedCreateNestedManyWithoutCategoryInput
    exams?: MasterExamUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type MasterCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    parent?: MasterCategoryUpdateOneWithoutChildrenNestedInput
    children?: MasterCategoryUpdateManyWithoutParentNestedInput
    courses?: MasterCourseUpdateManyWithoutCategoryNestedInput
    exams?: MasterExamUpdateManyWithoutCategoryNestedInput
  }

  export type MasterCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: MasterCategoryUncheckedUpdateManyWithoutParentNestedInput
    courses?: MasterCourseUncheckedUpdateManyWithoutCategoryNestedInput
    exams?: MasterExamUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type MasterCategoryCreateManyInput = {
    id: string
    name: string
    level: number
    parentId?: string | null
  }

  export type MasterCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
  }

  export type MasterCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MasterTagCreateInput = {
    id: string
    name: string
    courses?: MasterCourseCreateNestedManyWithoutTagsInput
  }

  export type MasterTagUncheckedCreateInput = {
    id: string
    name: string
    courses?: MasterCourseUncheckedCreateNestedManyWithoutTagsInput
  }

  export type MasterTagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courses?: MasterCourseUpdateManyWithoutTagsNestedInput
  }

  export type MasterTagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courses?: MasterCourseUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type MasterTagCreateManyInput = {
    id: string
    name: string
  }

  export type MasterTagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MasterTagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MasterCourseCreateInput = {
    id: string
    title?: string | null
    summary?: string | null
    description?: string | null
    targetAudience?: string | null
    difficulty?: string | null
    durationMin?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: MasterCategoryCreateNestedOneWithoutCoursesInput
    tags?: MasterTagCreateNestedManyWithoutCoursesInput
    courseContents?: MasterCourseContentCreateNestedManyWithoutCourseInput
    relatedCourses?: MasterCourseCreateNestedManyWithoutRelatedToCoursesInput
    relatedToCourses?: MasterCourseCreateNestedManyWithoutRelatedCoursesInput
    courseFAQs?: MasterCourseFAQCreateNestedManyWithoutCourseInput
  }

  export type MasterCourseUncheckedCreateInput = {
    id: string
    title?: string | null
    summary?: string | null
    description?: string | null
    targetAudience?: string | null
    difficulty?: string | null
    durationMin?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    tags?: MasterTagUncheckedCreateNestedManyWithoutCoursesInput
    courseContents?: MasterCourseContentUncheckedCreateNestedManyWithoutCourseInput
    relatedCourses?: MasterCourseUncheckedCreateNestedManyWithoutRelatedToCoursesInput
    relatedToCourses?: MasterCourseUncheckedCreateNestedManyWithoutRelatedCoursesInput
    courseFAQs?: MasterCourseFAQUncheckedCreateNestedManyWithoutCourseInput
  }

  export type MasterCourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetAudience?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    durationMin?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: MasterCategoryUpdateOneRequiredWithoutCoursesNestedInput
    tags?: MasterTagUpdateManyWithoutCoursesNestedInput
    courseContents?: MasterCourseContentUpdateManyWithoutCourseNestedInput
    relatedCourses?: MasterCourseUpdateManyWithoutRelatedToCoursesNestedInput
    relatedToCourses?: MasterCourseUpdateManyWithoutRelatedCoursesNestedInput
    courseFAQs?: MasterCourseFAQUpdateManyWithoutCourseNestedInput
  }

  export type MasterCourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetAudience?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    durationMin?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    tags?: MasterTagUncheckedUpdateManyWithoutCoursesNestedInput
    courseContents?: MasterCourseContentUncheckedUpdateManyWithoutCourseNestedInput
    relatedCourses?: MasterCourseUncheckedUpdateManyWithoutRelatedToCoursesNestedInput
    relatedToCourses?: MasterCourseUncheckedUpdateManyWithoutRelatedCoursesNestedInput
    courseFAQs?: MasterCourseFAQUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type MasterCourseCreateManyInput = {
    id: string
    title?: string | null
    summary?: string | null
    description?: string | null
    targetAudience?: string | null
    difficulty?: string | null
    durationMin?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
  }

  export type MasterCourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetAudience?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    durationMin?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterCourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetAudience?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    durationMin?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type MasterCourseContentCreateInput = {
    id: string
    sequence: number
    title?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    course: MasterCourseCreateNestedOneWithoutCourseContentsInput
    exercises?: MasterExerciseCreateNestedManyWithoutCourseContentInput
    chatMessages?: ChatMessageCreateNestedManyWithoutMasterCourseContentInput
    chatRoom?: ChatRoomCreateNestedManyWithoutCourseContentInput
  }

  export type MasterCourseContentUncheckedCreateInput = {
    id: string
    courseId: string
    sequence: number
    title?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    exercises?: MasterExerciseUncheckedCreateNestedManyWithoutCourseContentInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutMasterCourseContentInput
    chatRoom?: ChatRoomUncheckedCreateNestedManyWithoutCourseContentInput
  }

  export type MasterCourseContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: MasterCourseUpdateOneRequiredWithoutCourseContentsNestedInput
    exercises?: MasterExerciseUpdateManyWithoutCourseContentNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutMasterCourseContentNestedInput
    chatRoom?: ChatRoomUpdateManyWithoutCourseContentNestedInput
  }

  export type MasterCourseContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercises?: MasterExerciseUncheckedUpdateManyWithoutCourseContentNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutMasterCourseContentNestedInput
    chatRoom?: ChatRoomUncheckedUpdateManyWithoutCourseContentNestedInput
  }

  export type MasterCourseContentCreateManyInput = {
    id: string
    courseId: string
    sequence: number
    title?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MasterCourseContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterCourseContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterExerciseCreateInput = {
    id: string
    exerciseType: string
    question: string
    options?: string | null
    correctAnswer?: string | null
    createdAt?: Date | string
    courseContent: MasterCourseContentCreateNestedOneWithoutExercisesInput
  }

  export type MasterExerciseUncheckedCreateInput = {
    id: string
    courseContentId: string
    exerciseType: string
    question: string
    options?: string | null
    correctAnswer?: string | null
    createdAt?: Date | string
  }

  export type MasterExerciseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseType?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseContent?: MasterCourseContentUpdateOneRequiredWithoutExercisesNestedInput
  }

  export type MasterExerciseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseContentId?: StringFieldUpdateOperationsInput | string
    exerciseType?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterExerciseCreateManyInput = {
    id: string
    courseContentId: string
    exerciseType: string
    question: string
    options?: string | null
    correctAnswer?: string | null
    createdAt?: Date | string
  }

  export type MasterExerciseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseType?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterExerciseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseContentId?: StringFieldUpdateOperationsInput | string
    exerciseType?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatRoomCreateInput = {
    id: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutChatRoomInput
    courseContent: MasterCourseContentCreateNestedOneWithoutChatRoomInput
    chatMessage?: ChatMessageCreateNestedManyWithoutChatRoomInput
  }

  export type ChatRoomUncheckedCreateInput = {
    id: string
    userId: string
    courseContentId: string
    createdAt?: Date | string
    chatMessage?: ChatMessageUncheckedCreateNestedManyWithoutChatRoomInput
  }

  export type ChatRoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatRoomNestedInput
    courseContent?: MasterCourseContentUpdateOneRequiredWithoutChatRoomNestedInput
    chatMessage?: ChatMessageUpdateManyWithoutChatRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseContentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatMessage?: ChatMessageUncheckedUpdateManyWithoutChatRoomNestedInput
  }

  export type ChatRoomCreateManyInput = {
    id: string
    userId: string
    courseContentId: string
    createdAt?: Date | string
  }

  export type ChatRoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatRoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseContentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateInput = {
    id: string
    role: string
    message: string
    createdAt?: Date | string
    chatRoom: ChatRoomCreateNestedOneWithoutChatMessageInput
    user?: UserCreateNestedOneWithoutChatMessagesInput
    MasterCourseContent?: MasterCourseContentCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessageUncheckedCreateInput = {
    id: string
    chatRoomId: string
    userId?: string | null
    role: string
    message: string
    createdAt?: Date | string
    masterCourseContentId?: string | null
  }

  export type ChatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatRoom?: ChatRoomUpdateOneRequiredWithoutChatMessageNestedInput
    user?: UserUpdateOneWithoutChatMessagesNestedInput
    MasterCourseContent?: MasterCourseContentUpdateOneWithoutChatMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatRoomId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    masterCourseContentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatMessageCreateManyInput = {
    id: string
    chatRoomId: string
    userId?: string | null
    role: string
    message: string
    createdAt?: Date | string
    masterCourseContentId?: string | null
  }

  export type ChatMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatRoomId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    masterCourseContentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MasterCourseFAQCreateInput = {
    id: string
    question: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: MasterCourseCreateNestedOneWithoutCourseFAQsInput
  }

  export type MasterCourseFAQUncheckedCreateInput = {
    id: string
    courseId: string
    question: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MasterCourseFAQUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: MasterCourseUpdateOneRequiredWithoutCourseFAQsNestedInput
  }

  export type MasterCourseFAQUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterCourseFAQCreateManyInput = {
    id: string
    courseId: string
    question: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MasterCourseFAQUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterCourseFAQUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterExamCreateInput = {
    id: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: MasterCategoryCreateNestedOneWithoutExamsInput
    examQuestions?: MasterExamQuestionCreateNestedManyWithoutExamInput
    ExamSubmission?: ExamSubmissionCreateNestedManyWithoutExamInput
  }

  export type MasterExamUncheckedCreateInput = {
    id: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    examQuestions?: MasterExamQuestionUncheckedCreateNestedManyWithoutExamInput
    ExamSubmission?: ExamSubmissionUncheckedCreateNestedManyWithoutExamInput
  }

  export type MasterExamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: MasterCategoryUpdateOneRequiredWithoutExamsNestedInput
    examQuestions?: MasterExamQuestionUpdateManyWithoutExamNestedInput
    ExamSubmission?: ExamSubmissionUpdateManyWithoutExamNestedInput
  }

  export type MasterExamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    examQuestions?: MasterExamQuestionUncheckedUpdateManyWithoutExamNestedInput
    ExamSubmission?: ExamSubmissionUncheckedUpdateManyWithoutExamNestedInput
  }

  export type MasterExamCreateManyInput = {
    id: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
  }

  export type MasterExamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterExamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type MasterExamQuestionCreateInput = {
    id: string
    question: string
    questionType: string
    options?: string | null
    correctAnswer?: string | null
    createdAt?: Date | string
    exam: MasterExamCreateNestedOneWithoutExamQuestionsInput
    ExamAnswer?: ExamAnswerCreateNestedManyWithoutExamQuestionInput
  }

  export type MasterExamQuestionUncheckedCreateInput = {
    id: string
    examId: string
    question: string
    questionType: string
    options?: string | null
    correctAnswer?: string | null
    createdAt?: Date | string
    ExamAnswer?: ExamAnswerUncheckedCreateNestedManyWithoutExamQuestionInput
  }

  export type MasterExamQuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    questionType?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exam?: MasterExamUpdateOneRequiredWithoutExamQuestionsNestedInput
    ExamAnswer?: ExamAnswerUpdateManyWithoutExamQuestionNestedInput
  }

  export type MasterExamQuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    questionType?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ExamAnswer?: ExamAnswerUncheckedUpdateManyWithoutExamQuestionNestedInput
  }

  export type MasterExamQuestionCreateManyInput = {
    id: string
    examId: string
    question: string
    questionType: string
    options?: string | null
    correctAnswer?: string | null
    createdAt?: Date | string
  }

  export type MasterExamQuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    questionType?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterExamQuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    questionType?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamSubmissionCreateInput = {
    id: string
    submittedAt?: Date | string
    score: number
    percentile: number
    exam: MasterExamCreateNestedOneWithoutExamSubmissionInput
    user: UserCreateNestedOneWithoutExamSubmissionsInput
    examAnswers?: ExamAnswerCreateNestedManyWithoutExamSubmissionInput
  }

  export type ExamSubmissionUncheckedCreateInput = {
    id: string
    examId: string
    userId: string
    submittedAt?: Date | string
    score: number
    percentile: number
    examAnswers?: ExamAnswerUncheckedCreateNestedManyWithoutExamSubmissionInput
  }

  export type ExamSubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    percentile?: FloatFieldUpdateOperationsInput | number
    exam?: MasterExamUpdateOneRequiredWithoutExamSubmissionNestedInput
    user?: UserUpdateOneRequiredWithoutExamSubmissionsNestedInput
    examAnswers?: ExamAnswerUpdateManyWithoutExamSubmissionNestedInput
  }

  export type ExamSubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    percentile?: FloatFieldUpdateOperationsInput | number
    examAnswers?: ExamAnswerUncheckedUpdateManyWithoutExamSubmissionNestedInput
  }

  export type ExamSubmissionCreateManyInput = {
    id: string
    examId: string
    userId: string
    submittedAt?: Date | string
    score: number
    percentile: number
  }

  export type ExamSubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    percentile?: FloatFieldUpdateOperationsInput | number
  }

  export type ExamSubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    percentile?: FloatFieldUpdateOperationsInput | number
  }

  export type ExamAnswerCreateInput = {
    id: string
    answer: string
    isCorrect: boolean
    examSubmission: ExamSubmissionCreateNestedOneWithoutExamAnswersInput
    examQuestion: MasterExamQuestionCreateNestedOneWithoutExamAnswerInput
  }

  export type ExamAnswerUncheckedCreateInput = {
    id: string
    examSubmissionId: string
    examQuestionId: string
    answer: string
    isCorrect: boolean
  }

  export type ExamAnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    examSubmission?: ExamSubmissionUpdateOneRequiredWithoutExamAnswersNestedInput
    examQuestion?: MasterExamQuestionUpdateOneRequiredWithoutExamAnswerNestedInput
  }

  export type ExamAnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    examSubmissionId?: StringFieldUpdateOperationsInput | string
    examQuestionId?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExamAnswerCreateManyInput = {
    id: string
    examSubmissionId: string
    examQuestionId: string
    answer: string
    isCorrect: boolean
  }

  export type ExamAnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExamAnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    examSubmissionId?: StringFieldUpdateOperationsInput | string
    examQuestionId?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
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

  export type ExamSubmissionListRelationFilter = {
    every?: ExamSubmissionWhereInput
    some?: ExamSubmissionWhereInput
    none?: ExamSubmissionWhereInput
  }

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput
    some?: ChatMessageWhereInput
    none?: ChatMessageWhereInput
  }

  export type ChatRoomListRelationFilter = {
    every?: ChatRoomWhereInput
    some?: ChatRoomWhereInput
    none?: ChatRoomWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ExamSubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatRoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    displayId?: SortOrder
    firebaseUserId?: SortOrder
    stripeUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    displayId?: SortOrder
    firebaseUserId?: SortOrder
    stripeUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    displayId?: SortOrder
    firebaseUserId?: SortOrder
    stripeUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: SortOrder
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type MasterCategoryNullableScalarRelationFilter = {
    is?: MasterCategoryWhereInput | null
    isNot?: MasterCategoryWhereInput | null
  }

  export type MasterCategoryListRelationFilter = {
    every?: MasterCategoryWhereInput
    some?: MasterCategoryWhereInput
    none?: MasterCategoryWhereInput
  }

  export type MasterCourseListRelationFilter = {
    every?: MasterCourseWhereInput
    some?: MasterCourseWhereInput
    none?: MasterCourseWhereInput
  }

  export type MasterExamListRelationFilter = {
    every?: MasterExamWhereInput
    some?: MasterExamWhereInput
    none?: MasterExamWhereInput
  }

  export type MasterCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MasterCourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MasterExamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MasterCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    parentId?: SortOrder
  }

  export type MasterCategoryAvgOrderByAggregateInput = {
    level?: SortOrder
  }

  export type MasterCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    parentId?: SortOrder
  }

  export type MasterCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    parentId?: SortOrder
  }

  export type MasterCategorySumOrderByAggregateInput = {
    level?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type MasterTagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MasterTagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MasterTagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MasterCategoryScalarRelationFilter = {
    is?: MasterCategoryWhereInput
    isNot?: MasterCategoryWhereInput
  }

  export type MasterTagListRelationFilter = {
    every?: MasterTagWhereInput
    some?: MasterTagWhereInput
    none?: MasterTagWhereInput
  }

  export type MasterCourseContentListRelationFilter = {
    every?: MasterCourseContentWhereInput
    some?: MasterCourseContentWhereInput
    none?: MasterCourseContentWhereInput
  }

  export type MasterCourseFAQListRelationFilter = {
    every?: MasterCourseFAQWhereInput
    some?: MasterCourseFAQWhereInput
    none?: MasterCourseFAQWhereInput
  }

  export type MasterTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MasterCourseContentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MasterCourseFAQOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MasterCourseCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    description?: SortOrder
    targetAudience?: SortOrder
    difficulty?: SortOrder
    durationMin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
  }

  export type MasterCourseAvgOrderByAggregateInput = {
    durationMin?: SortOrder
  }

  export type MasterCourseMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    description?: SortOrder
    targetAudience?: SortOrder
    difficulty?: SortOrder
    durationMin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
  }

  export type MasterCourseMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    description?: SortOrder
    targetAudience?: SortOrder
    difficulty?: SortOrder
    durationMin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
  }

  export type MasterCourseSumOrderByAggregateInput = {
    durationMin?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type MasterCourseScalarRelationFilter = {
    is?: MasterCourseWhereInput
    isNot?: MasterCourseWhereInput
  }

  export type MasterExerciseListRelationFilter = {
    every?: MasterExerciseWhereInput
    some?: MasterExerciseWhereInput
    none?: MasterExerciseWhereInput
  }

  export type MasterExerciseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MasterCourseContentCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    sequence?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MasterCourseContentAvgOrderByAggregateInput = {
    sequence?: SortOrder
  }

  export type MasterCourseContentMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    sequence?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MasterCourseContentMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    sequence?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MasterCourseContentSumOrderByAggregateInput = {
    sequence?: SortOrder
  }

  export type MasterCourseContentScalarRelationFilter = {
    is?: MasterCourseContentWhereInput
    isNot?: MasterCourseContentWhereInput
  }

  export type MasterExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    courseContentId?: SortOrder
    exerciseType?: SortOrder
    question?: SortOrder
    options?: SortOrder
    correctAnswer?: SortOrder
    createdAt?: SortOrder
  }

  export type MasterExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    courseContentId?: SortOrder
    exerciseType?: SortOrder
    question?: SortOrder
    options?: SortOrder
    correctAnswer?: SortOrder
    createdAt?: SortOrder
  }

  export type MasterExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    courseContentId?: SortOrder
    exerciseType?: SortOrder
    question?: SortOrder
    options?: SortOrder
    correctAnswer?: SortOrder
    createdAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ChatRoomCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseContentId?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatRoomMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseContentId?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatRoomMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseContentId?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatRoomScalarRelationFilter = {
    is?: ChatRoomWhereInput
    isNot?: ChatRoomWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type MasterCourseContentNullableScalarRelationFilter = {
    is?: MasterCourseContentWhereInput | null
    isNot?: MasterCourseContentWhereInput | null
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    chatRoomId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    masterCourseContentId?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    chatRoomId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    masterCourseContentId?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    chatRoomId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    masterCourseContentId?: SortOrder
  }

  export type MasterCourseFAQCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MasterCourseFAQMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MasterCourseFAQMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MasterExamQuestionListRelationFilter = {
    every?: MasterExamQuestionWhereInput
    some?: MasterExamQuestionWhereInput
    none?: MasterExamQuestionWhereInput
  }

  export type MasterExamQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MasterExamCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
  }

  export type MasterExamMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
  }

  export type MasterExamMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
  }

  export type MasterExamScalarRelationFilter = {
    is?: MasterExamWhereInput
    isNot?: MasterExamWhereInput
  }

  export type ExamAnswerListRelationFilter = {
    every?: ExamAnswerWhereInput
    some?: ExamAnswerWhereInput
    none?: ExamAnswerWhereInput
  }

  export type ExamAnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MasterExamQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    examId?: SortOrder
    question?: SortOrder
    questionType?: SortOrder
    options?: SortOrder
    correctAnswer?: SortOrder
    createdAt?: SortOrder
  }

  export type MasterExamQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    examId?: SortOrder
    question?: SortOrder
    questionType?: SortOrder
    options?: SortOrder
    correctAnswer?: SortOrder
    createdAt?: SortOrder
  }

  export type MasterExamQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    examId?: SortOrder
    question?: SortOrder
    questionType?: SortOrder
    options?: SortOrder
    correctAnswer?: SortOrder
    createdAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ExamSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    examId?: SortOrder
    userId?: SortOrder
    submittedAt?: SortOrder
    score?: SortOrder
    percentile?: SortOrder
  }

  export type ExamSubmissionAvgOrderByAggregateInput = {
    score?: SortOrder
    percentile?: SortOrder
  }

  export type ExamSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    examId?: SortOrder
    userId?: SortOrder
    submittedAt?: SortOrder
    score?: SortOrder
    percentile?: SortOrder
  }

  export type ExamSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    examId?: SortOrder
    userId?: SortOrder
    submittedAt?: SortOrder
    score?: SortOrder
    percentile?: SortOrder
  }

  export type ExamSubmissionSumOrderByAggregateInput = {
    score?: SortOrder
    percentile?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ExamSubmissionScalarRelationFilter = {
    is?: ExamSubmissionWhereInput
    isNot?: ExamSubmissionWhereInput
  }

  export type MasterExamQuestionScalarRelationFilter = {
    is?: MasterExamQuestionWhereInput
    isNot?: MasterExamQuestionWhereInput
  }

  export type ExamAnswerCountOrderByAggregateInput = {
    id?: SortOrder
    examSubmissionId?: SortOrder
    examQuestionId?: SortOrder
    answer?: SortOrder
    isCorrect?: SortOrder
  }

  export type ExamAnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    examSubmissionId?: SortOrder
    examQuestionId?: SortOrder
    answer?: SortOrder
    isCorrect?: SortOrder
  }

  export type ExamAnswerMinOrderByAggregateInput = {
    id?: SortOrder
    examSubmissionId?: SortOrder
    examQuestionId?: SortOrder
    answer?: SortOrder
    isCorrect?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ExamSubmissionCreateNestedManyWithoutUserInput = {
    create?: XOR<ExamSubmissionCreateWithoutUserInput, ExamSubmissionUncheckedCreateWithoutUserInput> | ExamSubmissionCreateWithoutUserInput[] | ExamSubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExamSubmissionCreateOrConnectWithoutUserInput | ExamSubmissionCreateOrConnectWithoutUserInput[]
    createMany?: ExamSubmissionCreateManyUserInputEnvelope
    connect?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
  }

  export type ChatMessageCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatRoomCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatRoomCreateWithoutUserInput, ChatRoomUncheckedCreateWithoutUserInput> | ChatRoomCreateWithoutUserInput[] | ChatRoomUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutUserInput | ChatRoomCreateOrConnectWithoutUserInput[]
    createMany?: ChatRoomCreateManyUserInputEnvelope
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
  }

  export type ExamSubmissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ExamSubmissionCreateWithoutUserInput, ExamSubmissionUncheckedCreateWithoutUserInput> | ExamSubmissionCreateWithoutUserInput[] | ExamSubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExamSubmissionCreateOrConnectWithoutUserInput | ExamSubmissionCreateOrConnectWithoutUserInput[]
    createMany?: ExamSubmissionCreateManyUserInputEnvelope
    connect?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatRoomUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatRoomCreateWithoutUserInput, ChatRoomUncheckedCreateWithoutUserInput> | ChatRoomCreateWithoutUserInput[] | ChatRoomUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutUserInput | ChatRoomCreateOrConnectWithoutUserInput[]
    createMany?: ChatRoomCreateManyUserInputEnvelope
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ExamSubmissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExamSubmissionCreateWithoutUserInput, ExamSubmissionUncheckedCreateWithoutUserInput> | ExamSubmissionCreateWithoutUserInput[] | ExamSubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExamSubmissionCreateOrConnectWithoutUserInput | ExamSubmissionCreateOrConnectWithoutUserInput[]
    upsert?: ExamSubmissionUpsertWithWhereUniqueWithoutUserInput | ExamSubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExamSubmissionCreateManyUserInputEnvelope
    set?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    disconnect?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    delete?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    connect?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    update?: ExamSubmissionUpdateWithWhereUniqueWithoutUserInput | ExamSubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExamSubmissionUpdateManyWithWhereWithoutUserInput | ExamSubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExamSubmissionScalarWhereInput | ExamSubmissionScalarWhereInput[]
  }

  export type ChatMessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutUserInput | ChatMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutUserInput | ChatMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutUserInput | ChatMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatRoomUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatRoomCreateWithoutUserInput, ChatRoomUncheckedCreateWithoutUserInput> | ChatRoomCreateWithoutUserInput[] | ChatRoomUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutUserInput | ChatRoomCreateOrConnectWithoutUserInput[]
    upsert?: ChatRoomUpsertWithWhereUniqueWithoutUserInput | ChatRoomUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatRoomCreateManyUserInputEnvelope
    set?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    disconnect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    delete?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    update?: ChatRoomUpdateWithWhereUniqueWithoutUserInput | ChatRoomUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatRoomUpdateManyWithWhereWithoutUserInput | ChatRoomUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
  }

  export type ExamSubmissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExamSubmissionCreateWithoutUserInput, ExamSubmissionUncheckedCreateWithoutUserInput> | ExamSubmissionCreateWithoutUserInput[] | ExamSubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExamSubmissionCreateOrConnectWithoutUserInput | ExamSubmissionCreateOrConnectWithoutUserInput[]
    upsert?: ExamSubmissionUpsertWithWhereUniqueWithoutUserInput | ExamSubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExamSubmissionCreateManyUserInputEnvelope
    set?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    disconnect?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    delete?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    connect?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    update?: ExamSubmissionUpdateWithWhereUniqueWithoutUserInput | ExamSubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExamSubmissionUpdateManyWithWhereWithoutUserInput | ExamSubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExamSubmissionScalarWhereInput | ExamSubmissionScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutUserInput | ChatMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutUserInput | ChatMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutUserInput | ChatMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatRoomUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatRoomCreateWithoutUserInput, ChatRoomUncheckedCreateWithoutUserInput> | ChatRoomCreateWithoutUserInput[] | ChatRoomUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutUserInput | ChatRoomCreateOrConnectWithoutUserInput[]
    upsert?: ChatRoomUpsertWithWhereUniqueWithoutUserInput | ChatRoomUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatRoomCreateManyUserInputEnvelope
    set?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    disconnect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    delete?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    update?: ChatRoomUpdateWithWhereUniqueWithoutUserInput | ChatRoomUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatRoomUpdateManyWithWhereWithoutUserInput | ChatRoomUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
  }

  export type MasterCategoryCreateNestedOneWithoutChildrenInput = {
    create?: XOR<MasterCategoryCreateWithoutChildrenInput, MasterCategoryUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: MasterCategoryCreateOrConnectWithoutChildrenInput
    connect?: MasterCategoryWhereUniqueInput
  }

  export type MasterCategoryCreateNestedManyWithoutParentInput = {
    create?: XOR<MasterCategoryCreateWithoutParentInput, MasterCategoryUncheckedCreateWithoutParentInput> | MasterCategoryCreateWithoutParentInput[] | MasterCategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: MasterCategoryCreateOrConnectWithoutParentInput | MasterCategoryCreateOrConnectWithoutParentInput[]
    createMany?: MasterCategoryCreateManyParentInputEnvelope
    connect?: MasterCategoryWhereUniqueInput | MasterCategoryWhereUniqueInput[]
  }

  export type MasterCourseCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MasterCourseCreateWithoutCategoryInput, MasterCourseUncheckedCreateWithoutCategoryInput> | MasterCourseCreateWithoutCategoryInput[] | MasterCourseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MasterCourseCreateOrConnectWithoutCategoryInput | MasterCourseCreateOrConnectWithoutCategoryInput[]
    createMany?: MasterCourseCreateManyCategoryInputEnvelope
    connect?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
  }

  export type MasterExamCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MasterExamCreateWithoutCategoryInput, MasterExamUncheckedCreateWithoutCategoryInput> | MasterExamCreateWithoutCategoryInput[] | MasterExamUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MasterExamCreateOrConnectWithoutCategoryInput | MasterExamCreateOrConnectWithoutCategoryInput[]
    createMany?: MasterExamCreateManyCategoryInputEnvelope
    connect?: MasterExamWhereUniqueInput | MasterExamWhereUniqueInput[]
  }

  export type MasterCategoryUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<MasterCategoryCreateWithoutParentInput, MasterCategoryUncheckedCreateWithoutParentInput> | MasterCategoryCreateWithoutParentInput[] | MasterCategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: MasterCategoryCreateOrConnectWithoutParentInput | MasterCategoryCreateOrConnectWithoutParentInput[]
    createMany?: MasterCategoryCreateManyParentInputEnvelope
    connect?: MasterCategoryWhereUniqueInput | MasterCategoryWhereUniqueInput[]
  }

  export type MasterCourseUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MasterCourseCreateWithoutCategoryInput, MasterCourseUncheckedCreateWithoutCategoryInput> | MasterCourseCreateWithoutCategoryInput[] | MasterCourseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MasterCourseCreateOrConnectWithoutCategoryInput | MasterCourseCreateOrConnectWithoutCategoryInput[]
    createMany?: MasterCourseCreateManyCategoryInputEnvelope
    connect?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
  }

  export type MasterExamUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MasterExamCreateWithoutCategoryInput, MasterExamUncheckedCreateWithoutCategoryInput> | MasterExamCreateWithoutCategoryInput[] | MasterExamUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MasterExamCreateOrConnectWithoutCategoryInput | MasterExamCreateOrConnectWithoutCategoryInput[]
    createMany?: MasterExamCreateManyCategoryInputEnvelope
    connect?: MasterExamWhereUniqueInput | MasterExamWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MasterCategoryUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<MasterCategoryCreateWithoutChildrenInput, MasterCategoryUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: MasterCategoryCreateOrConnectWithoutChildrenInput
    upsert?: MasterCategoryUpsertWithoutChildrenInput
    disconnect?: MasterCategoryWhereInput | boolean
    delete?: MasterCategoryWhereInput | boolean
    connect?: MasterCategoryWhereUniqueInput
    update?: XOR<XOR<MasterCategoryUpdateToOneWithWhereWithoutChildrenInput, MasterCategoryUpdateWithoutChildrenInput>, MasterCategoryUncheckedUpdateWithoutChildrenInput>
  }

  export type MasterCategoryUpdateManyWithoutParentNestedInput = {
    create?: XOR<MasterCategoryCreateWithoutParentInput, MasterCategoryUncheckedCreateWithoutParentInput> | MasterCategoryCreateWithoutParentInput[] | MasterCategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: MasterCategoryCreateOrConnectWithoutParentInput | MasterCategoryCreateOrConnectWithoutParentInput[]
    upsert?: MasterCategoryUpsertWithWhereUniqueWithoutParentInput | MasterCategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: MasterCategoryCreateManyParentInputEnvelope
    set?: MasterCategoryWhereUniqueInput | MasterCategoryWhereUniqueInput[]
    disconnect?: MasterCategoryWhereUniqueInput | MasterCategoryWhereUniqueInput[]
    delete?: MasterCategoryWhereUniqueInput | MasterCategoryWhereUniqueInput[]
    connect?: MasterCategoryWhereUniqueInput | MasterCategoryWhereUniqueInput[]
    update?: MasterCategoryUpdateWithWhereUniqueWithoutParentInput | MasterCategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: MasterCategoryUpdateManyWithWhereWithoutParentInput | MasterCategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: MasterCategoryScalarWhereInput | MasterCategoryScalarWhereInput[]
  }

  export type MasterCourseUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MasterCourseCreateWithoutCategoryInput, MasterCourseUncheckedCreateWithoutCategoryInput> | MasterCourseCreateWithoutCategoryInput[] | MasterCourseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MasterCourseCreateOrConnectWithoutCategoryInput | MasterCourseCreateOrConnectWithoutCategoryInput[]
    upsert?: MasterCourseUpsertWithWhereUniqueWithoutCategoryInput | MasterCourseUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MasterCourseCreateManyCategoryInputEnvelope
    set?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
    disconnect?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
    delete?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
    connect?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
    update?: MasterCourseUpdateWithWhereUniqueWithoutCategoryInput | MasterCourseUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MasterCourseUpdateManyWithWhereWithoutCategoryInput | MasterCourseUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MasterCourseScalarWhereInput | MasterCourseScalarWhereInput[]
  }

  export type MasterExamUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MasterExamCreateWithoutCategoryInput, MasterExamUncheckedCreateWithoutCategoryInput> | MasterExamCreateWithoutCategoryInput[] | MasterExamUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MasterExamCreateOrConnectWithoutCategoryInput | MasterExamCreateOrConnectWithoutCategoryInput[]
    upsert?: MasterExamUpsertWithWhereUniqueWithoutCategoryInput | MasterExamUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MasterExamCreateManyCategoryInputEnvelope
    set?: MasterExamWhereUniqueInput | MasterExamWhereUniqueInput[]
    disconnect?: MasterExamWhereUniqueInput | MasterExamWhereUniqueInput[]
    delete?: MasterExamWhereUniqueInput | MasterExamWhereUniqueInput[]
    connect?: MasterExamWhereUniqueInput | MasterExamWhereUniqueInput[]
    update?: MasterExamUpdateWithWhereUniqueWithoutCategoryInput | MasterExamUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MasterExamUpdateManyWithWhereWithoutCategoryInput | MasterExamUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MasterExamScalarWhereInput | MasterExamScalarWhereInput[]
  }

  export type MasterCategoryUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<MasterCategoryCreateWithoutParentInput, MasterCategoryUncheckedCreateWithoutParentInput> | MasterCategoryCreateWithoutParentInput[] | MasterCategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: MasterCategoryCreateOrConnectWithoutParentInput | MasterCategoryCreateOrConnectWithoutParentInput[]
    upsert?: MasterCategoryUpsertWithWhereUniqueWithoutParentInput | MasterCategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: MasterCategoryCreateManyParentInputEnvelope
    set?: MasterCategoryWhereUniqueInput | MasterCategoryWhereUniqueInput[]
    disconnect?: MasterCategoryWhereUniqueInput | MasterCategoryWhereUniqueInput[]
    delete?: MasterCategoryWhereUniqueInput | MasterCategoryWhereUniqueInput[]
    connect?: MasterCategoryWhereUniqueInput | MasterCategoryWhereUniqueInput[]
    update?: MasterCategoryUpdateWithWhereUniqueWithoutParentInput | MasterCategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: MasterCategoryUpdateManyWithWhereWithoutParentInput | MasterCategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: MasterCategoryScalarWhereInput | MasterCategoryScalarWhereInput[]
  }

  export type MasterCourseUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MasterCourseCreateWithoutCategoryInput, MasterCourseUncheckedCreateWithoutCategoryInput> | MasterCourseCreateWithoutCategoryInput[] | MasterCourseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MasterCourseCreateOrConnectWithoutCategoryInput | MasterCourseCreateOrConnectWithoutCategoryInput[]
    upsert?: MasterCourseUpsertWithWhereUniqueWithoutCategoryInput | MasterCourseUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MasterCourseCreateManyCategoryInputEnvelope
    set?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
    disconnect?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
    delete?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
    connect?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
    update?: MasterCourseUpdateWithWhereUniqueWithoutCategoryInput | MasterCourseUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MasterCourseUpdateManyWithWhereWithoutCategoryInput | MasterCourseUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MasterCourseScalarWhereInput | MasterCourseScalarWhereInput[]
  }

  export type MasterExamUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MasterExamCreateWithoutCategoryInput, MasterExamUncheckedCreateWithoutCategoryInput> | MasterExamCreateWithoutCategoryInput[] | MasterExamUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MasterExamCreateOrConnectWithoutCategoryInput | MasterExamCreateOrConnectWithoutCategoryInput[]
    upsert?: MasterExamUpsertWithWhereUniqueWithoutCategoryInput | MasterExamUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MasterExamCreateManyCategoryInputEnvelope
    set?: MasterExamWhereUniqueInput | MasterExamWhereUniqueInput[]
    disconnect?: MasterExamWhereUniqueInput | MasterExamWhereUniqueInput[]
    delete?: MasterExamWhereUniqueInput | MasterExamWhereUniqueInput[]
    connect?: MasterExamWhereUniqueInput | MasterExamWhereUniqueInput[]
    update?: MasterExamUpdateWithWhereUniqueWithoutCategoryInput | MasterExamUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MasterExamUpdateManyWithWhereWithoutCategoryInput | MasterExamUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MasterExamScalarWhereInput | MasterExamScalarWhereInput[]
  }

  export type MasterCourseCreateNestedManyWithoutTagsInput = {
    create?: XOR<MasterCourseCreateWithoutTagsInput, MasterCourseUncheckedCreateWithoutTagsInput> | MasterCourseCreateWithoutTagsInput[] | MasterCourseUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: MasterCourseCreateOrConnectWithoutTagsInput | MasterCourseCreateOrConnectWithoutTagsInput[]
    connect?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
  }

  export type MasterCourseUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<MasterCourseCreateWithoutTagsInput, MasterCourseUncheckedCreateWithoutTagsInput> | MasterCourseCreateWithoutTagsInput[] | MasterCourseUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: MasterCourseCreateOrConnectWithoutTagsInput | MasterCourseCreateOrConnectWithoutTagsInput[]
    connect?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
  }

  export type MasterCourseUpdateManyWithoutTagsNestedInput = {
    create?: XOR<MasterCourseCreateWithoutTagsInput, MasterCourseUncheckedCreateWithoutTagsInput> | MasterCourseCreateWithoutTagsInput[] | MasterCourseUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: MasterCourseCreateOrConnectWithoutTagsInput | MasterCourseCreateOrConnectWithoutTagsInput[]
    upsert?: MasterCourseUpsertWithWhereUniqueWithoutTagsInput | MasterCourseUpsertWithWhereUniqueWithoutTagsInput[]
    set?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
    disconnect?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
    delete?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
    connect?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
    update?: MasterCourseUpdateWithWhereUniqueWithoutTagsInput | MasterCourseUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: MasterCourseUpdateManyWithWhereWithoutTagsInput | MasterCourseUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: MasterCourseScalarWhereInput | MasterCourseScalarWhereInput[]
  }

  export type MasterCourseUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<MasterCourseCreateWithoutTagsInput, MasterCourseUncheckedCreateWithoutTagsInput> | MasterCourseCreateWithoutTagsInput[] | MasterCourseUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: MasterCourseCreateOrConnectWithoutTagsInput | MasterCourseCreateOrConnectWithoutTagsInput[]
    upsert?: MasterCourseUpsertWithWhereUniqueWithoutTagsInput | MasterCourseUpsertWithWhereUniqueWithoutTagsInput[]
    set?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
    disconnect?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
    delete?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
    connect?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
    update?: MasterCourseUpdateWithWhereUniqueWithoutTagsInput | MasterCourseUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: MasterCourseUpdateManyWithWhereWithoutTagsInput | MasterCourseUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: MasterCourseScalarWhereInput | MasterCourseScalarWhereInput[]
  }

  export type MasterCategoryCreateNestedOneWithoutCoursesInput = {
    create?: XOR<MasterCategoryCreateWithoutCoursesInput, MasterCategoryUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: MasterCategoryCreateOrConnectWithoutCoursesInput
    connect?: MasterCategoryWhereUniqueInput
  }

  export type MasterTagCreateNestedManyWithoutCoursesInput = {
    create?: XOR<MasterTagCreateWithoutCoursesInput, MasterTagUncheckedCreateWithoutCoursesInput> | MasterTagCreateWithoutCoursesInput[] | MasterTagUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: MasterTagCreateOrConnectWithoutCoursesInput | MasterTagCreateOrConnectWithoutCoursesInput[]
    connect?: MasterTagWhereUniqueInput | MasterTagWhereUniqueInput[]
  }

  export type MasterCourseContentCreateNestedManyWithoutCourseInput = {
    create?: XOR<MasterCourseContentCreateWithoutCourseInput, MasterCourseContentUncheckedCreateWithoutCourseInput> | MasterCourseContentCreateWithoutCourseInput[] | MasterCourseContentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: MasterCourseContentCreateOrConnectWithoutCourseInput | MasterCourseContentCreateOrConnectWithoutCourseInput[]
    createMany?: MasterCourseContentCreateManyCourseInputEnvelope
    connect?: MasterCourseContentWhereUniqueInput | MasterCourseContentWhereUniqueInput[]
  }

  export type MasterCourseCreateNestedManyWithoutRelatedToCoursesInput = {
    create?: XOR<MasterCourseCreateWithoutRelatedToCoursesInput, MasterCourseUncheckedCreateWithoutRelatedToCoursesInput> | MasterCourseCreateWithoutRelatedToCoursesInput[] | MasterCourseUncheckedCreateWithoutRelatedToCoursesInput[]
    connectOrCreate?: MasterCourseCreateOrConnectWithoutRelatedToCoursesInput | MasterCourseCreateOrConnectWithoutRelatedToCoursesInput[]
    connect?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
  }

  export type MasterCourseCreateNestedManyWithoutRelatedCoursesInput = {
    create?: XOR<MasterCourseCreateWithoutRelatedCoursesInput, MasterCourseUncheckedCreateWithoutRelatedCoursesInput> | MasterCourseCreateWithoutRelatedCoursesInput[] | MasterCourseUncheckedCreateWithoutRelatedCoursesInput[]
    connectOrCreate?: MasterCourseCreateOrConnectWithoutRelatedCoursesInput | MasterCourseCreateOrConnectWithoutRelatedCoursesInput[]
    connect?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
  }

  export type MasterCourseFAQCreateNestedManyWithoutCourseInput = {
    create?: XOR<MasterCourseFAQCreateWithoutCourseInput, MasterCourseFAQUncheckedCreateWithoutCourseInput> | MasterCourseFAQCreateWithoutCourseInput[] | MasterCourseFAQUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: MasterCourseFAQCreateOrConnectWithoutCourseInput | MasterCourseFAQCreateOrConnectWithoutCourseInput[]
    createMany?: MasterCourseFAQCreateManyCourseInputEnvelope
    connect?: MasterCourseFAQWhereUniqueInput | MasterCourseFAQWhereUniqueInput[]
  }

  export type MasterTagUncheckedCreateNestedManyWithoutCoursesInput = {
    create?: XOR<MasterTagCreateWithoutCoursesInput, MasterTagUncheckedCreateWithoutCoursesInput> | MasterTagCreateWithoutCoursesInput[] | MasterTagUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: MasterTagCreateOrConnectWithoutCoursesInput | MasterTagCreateOrConnectWithoutCoursesInput[]
    connect?: MasterTagWhereUniqueInput | MasterTagWhereUniqueInput[]
  }

  export type MasterCourseContentUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<MasterCourseContentCreateWithoutCourseInput, MasterCourseContentUncheckedCreateWithoutCourseInput> | MasterCourseContentCreateWithoutCourseInput[] | MasterCourseContentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: MasterCourseContentCreateOrConnectWithoutCourseInput | MasterCourseContentCreateOrConnectWithoutCourseInput[]
    createMany?: MasterCourseContentCreateManyCourseInputEnvelope
    connect?: MasterCourseContentWhereUniqueInput | MasterCourseContentWhereUniqueInput[]
  }

  export type MasterCourseUncheckedCreateNestedManyWithoutRelatedToCoursesInput = {
    create?: XOR<MasterCourseCreateWithoutRelatedToCoursesInput, MasterCourseUncheckedCreateWithoutRelatedToCoursesInput> | MasterCourseCreateWithoutRelatedToCoursesInput[] | MasterCourseUncheckedCreateWithoutRelatedToCoursesInput[]
    connectOrCreate?: MasterCourseCreateOrConnectWithoutRelatedToCoursesInput | MasterCourseCreateOrConnectWithoutRelatedToCoursesInput[]
    connect?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
  }

  export type MasterCourseUncheckedCreateNestedManyWithoutRelatedCoursesInput = {
    create?: XOR<MasterCourseCreateWithoutRelatedCoursesInput, MasterCourseUncheckedCreateWithoutRelatedCoursesInput> | MasterCourseCreateWithoutRelatedCoursesInput[] | MasterCourseUncheckedCreateWithoutRelatedCoursesInput[]
    connectOrCreate?: MasterCourseCreateOrConnectWithoutRelatedCoursesInput | MasterCourseCreateOrConnectWithoutRelatedCoursesInput[]
    connect?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
  }

  export type MasterCourseFAQUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<MasterCourseFAQCreateWithoutCourseInput, MasterCourseFAQUncheckedCreateWithoutCourseInput> | MasterCourseFAQCreateWithoutCourseInput[] | MasterCourseFAQUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: MasterCourseFAQCreateOrConnectWithoutCourseInput | MasterCourseFAQCreateOrConnectWithoutCourseInput[]
    createMany?: MasterCourseFAQCreateManyCourseInputEnvelope
    connect?: MasterCourseFAQWhereUniqueInput | MasterCourseFAQWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MasterCategoryUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<MasterCategoryCreateWithoutCoursesInput, MasterCategoryUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: MasterCategoryCreateOrConnectWithoutCoursesInput
    upsert?: MasterCategoryUpsertWithoutCoursesInput
    connect?: MasterCategoryWhereUniqueInput
    update?: XOR<XOR<MasterCategoryUpdateToOneWithWhereWithoutCoursesInput, MasterCategoryUpdateWithoutCoursesInput>, MasterCategoryUncheckedUpdateWithoutCoursesInput>
  }

  export type MasterTagUpdateManyWithoutCoursesNestedInput = {
    create?: XOR<MasterTagCreateWithoutCoursesInput, MasterTagUncheckedCreateWithoutCoursesInput> | MasterTagCreateWithoutCoursesInput[] | MasterTagUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: MasterTagCreateOrConnectWithoutCoursesInput | MasterTagCreateOrConnectWithoutCoursesInput[]
    upsert?: MasterTagUpsertWithWhereUniqueWithoutCoursesInput | MasterTagUpsertWithWhereUniqueWithoutCoursesInput[]
    set?: MasterTagWhereUniqueInput | MasterTagWhereUniqueInput[]
    disconnect?: MasterTagWhereUniqueInput | MasterTagWhereUniqueInput[]
    delete?: MasterTagWhereUniqueInput | MasterTagWhereUniqueInput[]
    connect?: MasterTagWhereUniqueInput | MasterTagWhereUniqueInput[]
    update?: MasterTagUpdateWithWhereUniqueWithoutCoursesInput | MasterTagUpdateWithWhereUniqueWithoutCoursesInput[]
    updateMany?: MasterTagUpdateManyWithWhereWithoutCoursesInput | MasterTagUpdateManyWithWhereWithoutCoursesInput[]
    deleteMany?: MasterTagScalarWhereInput | MasterTagScalarWhereInput[]
  }

  export type MasterCourseContentUpdateManyWithoutCourseNestedInput = {
    create?: XOR<MasterCourseContentCreateWithoutCourseInput, MasterCourseContentUncheckedCreateWithoutCourseInput> | MasterCourseContentCreateWithoutCourseInput[] | MasterCourseContentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: MasterCourseContentCreateOrConnectWithoutCourseInput | MasterCourseContentCreateOrConnectWithoutCourseInput[]
    upsert?: MasterCourseContentUpsertWithWhereUniqueWithoutCourseInput | MasterCourseContentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: MasterCourseContentCreateManyCourseInputEnvelope
    set?: MasterCourseContentWhereUniqueInput | MasterCourseContentWhereUniqueInput[]
    disconnect?: MasterCourseContentWhereUniqueInput | MasterCourseContentWhereUniqueInput[]
    delete?: MasterCourseContentWhereUniqueInput | MasterCourseContentWhereUniqueInput[]
    connect?: MasterCourseContentWhereUniqueInput | MasterCourseContentWhereUniqueInput[]
    update?: MasterCourseContentUpdateWithWhereUniqueWithoutCourseInput | MasterCourseContentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: MasterCourseContentUpdateManyWithWhereWithoutCourseInput | MasterCourseContentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: MasterCourseContentScalarWhereInput | MasterCourseContentScalarWhereInput[]
  }

  export type MasterCourseUpdateManyWithoutRelatedToCoursesNestedInput = {
    create?: XOR<MasterCourseCreateWithoutRelatedToCoursesInput, MasterCourseUncheckedCreateWithoutRelatedToCoursesInput> | MasterCourseCreateWithoutRelatedToCoursesInput[] | MasterCourseUncheckedCreateWithoutRelatedToCoursesInput[]
    connectOrCreate?: MasterCourseCreateOrConnectWithoutRelatedToCoursesInput | MasterCourseCreateOrConnectWithoutRelatedToCoursesInput[]
    upsert?: MasterCourseUpsertWithWhereUniqueWithoutRelatedToCoursesInput | MasterCourseUpsertWithWhereUniqueWithoutRelatedToCoursesInput[]
    set?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
    disconnect?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
    delete?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
    connect?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
    update?: MasterCourseUpdateWithWhereUniqueWithoutRelatedToCoursesInput | MasterCourseUpdateWithWhereUniqueWithoutRelatedToCoursesInput[]
    updateMany?: MasterCourseUpdateManyWithWhereWithoutRelatedToCoursesInput | MasterCourseUpdateManyWithWhereWithoutRelatedToCoursesInput[]
    deleteMany?: MasterCourseScalarWhereInput | MasterCourseScalarWhereInput[]
  }

  export type MasterCourseUpdateManyWithoutRelatedCoursesNestedInput = {
    create?: XOR<MasterCourseCreateWithoutRelatedCoursesInput, MasterCourseUncheckedCreateWithoutRelatedCoursesInput> | MasterCourseCreateWithoutRelatedCoursesInput[] | MasterCourseUncheckedCreateWithoutRelatedCoursesInput[]
    connectOrCreate?: MasterCourseCreateOrConnectWithoutRelatedCoursesInput | MasterCourseCreateOrConnectWithoutRelatedCoursesInput[]
    upsert?: MasterCourseUpsertWithWhereUniqueWithoutRelatedCoursesInput | MasterCourseUpsertWithWhereUniqueWithoutRelatedCoursesInput[]
    set?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
    disconnect?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
    delete?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
    connect?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
    update?: MasterCourseUpdateWithWhereUniqueWithoutRelatedCoursesInput | MasterCourseUpdateWithWhereUniqueWithoutRelatedCoursesInput[]
    updateMany?: MasterCourseUpdateManyWithWhereWithoutRelatedCoursesInput | MasterCourseUpdateManyWithWhereWithoutRelatedCoursesInput[]
    deleteMany?: MasterCourseScalarWhereInput | MasterCourseScalarWhereInput[]
  }

  export type MasterCourseFAQUpdateManyWithoutCourseNestedInput = {
    create?: XOR<MasterCourseFAQCreateWithoutCourseInput, MasterCourseFAQUncheckedCreateWithoutCourseInput> | MasterCourseFAQCreateWithoutCourseInput[] | MasterCourseFAQUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: MasterCourseFAQCreateOrConnectWithoutCourseInput | MasterCourseFAQCreateOrConnectWithoutCourseInput[]
    upsert?: MasterCourseFAQUpsertWithWhereUniqueWithoutCourseInput | MasterCourseFAQUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: MasterCourseFAQCreateManyCourseInputEnvelope
    set?: MasterCourseFAQWhereUniqueInput | MasterCourseFAQWhereUniqueInput[]
    disconnect?: MasterCourseFAQWhereUniqueInput | MasterCourseFAQWhereUniqueInput[]
    delete?: MasterCourseFAQWhereUniqueInput | MasterCourseFAQWhereUniqueInput[]
    connect?: MasterCourseFAQWhereUniqueInput | MasterCourseFAQWhereUniqueInput[]
    update?: MasterCourseFAQUpdateWithWhereUniqueWithoutCourseInput | MasterCourseFAQUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: MasterCourseFAQUpdateManyWithWhereWithoutCourseInput | MasterCourseFAQUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: MasterCourseFAQScalarWhereInput | MasterCourseFAQScalarWhereInput[]
  }

  export type MasterTagUncheckedUpdateManyWithoutCoursesNestedInput = {
    create?: XOR<MasterTagCreateWithoutCoursesInput, MasterTagUncheckedCreateWithoutCoursesInput> | MasterTagCreateWithoutCoursesInput[] | MasterTagUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: MasterTagCreateOrConnectWithoutCoursesInput | MasterTagCreateOrConnectWithoutCoursesInput[]
    upsert?: MasterTagUpsertWithWhereUniqueWithoutCoursesInput | MasterTagUpsertWithWhereUniqueWithoutCoursesInput[]
    set?: MasterTagWhereUniqueInput | MasterTagWhereUniqueInput[]
    disconnect?: MasterTagWhereUniqueInput | MasterTagWhereUniqueInput[]
    delete?: MasterTagWhereUniqueInput | MasterTagWhereUniqueInput[]
    connect?: MasterTagWhereUniqueInput | MasterTagWhereUniqueInput[]
    update?: MasterTagUpdateWithWhereUniqueWithoutCoursesInput | MasterTagUpdateWithWhereUniqueWithoutCoursesInput[]
    updateMany?: MasterTagUpdateManyWithWhereWithoutCoursesInput | MasterTagUpdateManyWithWhereWithoutCoursesInput[]
    deleteMany?: MasterTagScalarWhereInput | MasterTagScalarWhereInput[]
  }

  export type MasterCourseContentUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<MasterCourseContentCreateWithoutCourseInput, MasterCourseContentUncheckedCreateWithoutCourseInput> | MasterCourseContentCreateWithoutCourseInput[] | MasterCourseContentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: MasterCourseContentCreateOrConnectWithoutCourseInput | MasterCourseContentCreateOrConnectWithoutCourseInput[]
    upsert?: MasterCourseContentUpsertWithWhereUniqueWithoutCourseInput | MasterCourseContentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: MasterCourseContentCreateManyCourseInputEnvelope
    set?: MasterCourseContentWhereUniqueInput | MasterCourseContentWhereUniqueInput[]
    disconnect?: MasterCourseContentWhereUniqueInput | MasterCourseContentWhereUniqueInput[]
    delete?: MasterCourseContentWhereUniqueInput | MasterCourseContentWhereUniqueInput[]
    connect?: MasterCourseContentWhereUniqueInput | MasterCourseContentWhereUniqueInput[]
    update?: MasterCourseContentUpdateWithWhereUniqueWithoutCourseInput | MasterCourseContentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: MasterCourseContentUpdateManyWithWhereWithoutCourseInput | MasterCourseContentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: MasterCourseContentScalarWhereInput | MasterCourseContentScalarWhereInput[]
  }

  export type MasterCourseUncheckedUpdateManyWithoutRelatedToCoursesNestedInput = {
    create?: XOR<MasterCourseCreateWithoutRelatedToCoursesInput, MasterCourseUncheckedCreateWithoutRelatedToCoursesInput> | MasterCourseCreateWithoutRelatedToCoursesInput[] | MasterCourseUncheckedCreateWithoutRelatedToCoursesInput[]
    connectOrCreate?: MasterCourseCreateOrConnectWithoutRelatedToCoursesInput | MasterCourseCreateOrConnectWithoutRelatedToCoursesInput[]
    upsert?: MasterCourseUpsertWithWhereUniqueWithoutRelatedToCoursesInput | MasterCourseUpsertWithWhereUniqueWithoutRelatedToCoursesInput[]
    set?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
    disconnect?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
    delete?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
    connect?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
    update?: MasterCourseUpdateWithWhereUniqueWithoutRelatedToCoursesInput | MasterCourseUpdateWithWhereUniqueWithoutRelatedToCoursesInput[]
    updateMany?: MasterCourseUpdateManyWithWhereWithoutRelatedToCoursesInput | MasterCourseUpdateManyWithWhereWithoutRelatedToCoursesInput[]
    deleteMany?: MasterCourseScalarWhereInput | MasterCourseScalarWhereInput[]
  }

  export type MasterCourseUncheckedUpdateManyWithoutRelatedCoursesNestedInput = {
    create?: XOR<MasterCourseCreateWithoutRelatedCoursesInput, MasterCourseUncheckedCreateWithoutRelatedCoursesInput> | MasterCourseCreateWithoutRelatedCoursesInput[] | MasterCourseUncheckedCreateWithoutRelatedCoursesInput[]
    connectOrCreate?: MasterCourseCreateOrConnectWithoutRelatedCoursesInput | MasterCourseCreateOrConnectWithoutRelatedCoursesInput[]
    upsert?: MasterCourseUpsertWithWhereUniqueWithoutRelatedCoursesInput | MasterCourseUpsertWithWhereUniqueWithoutRelatedCoursesInput[]
    set?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
    disconnect?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
    delete?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
    connect?: MasterCourseWhereUniqueInput | MasterCourseWhereUniqueInput[]
    update?: MasterCourseUpdateWithWhereUniqueWithoutRelatedCoursesInput | MasterCourseUpdateWithWhereUniqueWithoutRelatedCoursesInput[]
    updateMany?: MasterCourseUpdateManyWithWhereWithoutRelatedCoursesInput | MasterCourseUpdateManyWithWhereWithoutRelatedCoursesInput[]
    deleteMany?: MasterCourseScalarWhereInput | MasterCourseScalarWhereInput[]
  }

  export type MasterCourseFAQUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<MasterCourseFAQCreateWithoutCourseInput, MasterCourseFAQUncheckedCreateWithoutCourseInput> | MasterCourseFAQCreateWithoutCourseInput[] | MasterCourseFAQUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: MasterCourseFAQCreateOrConnectWithoutCourseInput | MasterCourseFAQCreateOrConnectWithoutCourseInput[]
    upsert?: MasterCourseFAQUpsertWithWhereUniqueWithoutCourseInput | MasterCourseFAQUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: MasterCourseFAQCreateManyCourseInputEnvelope
    set?: MasterCourseFAQWhereUniqueInput | MasterCourseFAQWhereUniqueInput[]
    disconnect?: MasterCourseFAQWhereUniqueInput | MasterCourseFAQWhereUniqueInput[]
    delete?: MasterCourseFAQWhereUniqueInput | MasterCourseFAQWhereUniqueInput[]
    connect?: MasterCourseFAQWhereUniqueInput | MasterCourseFAQWhereUniqueInput[]
    update?: MasterCourseFAQUpdateWithWhereUniqueWithoutCourseInput | MasterCourseFAQUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: MasterCourseFAQUpdateManyWithWhereWithoutCourseInput | MasterCourseFAQUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: MasterCourseFAQScalarWhereInput | MasterCourseFAQScalarWhereInput[]
  }

  export type MasterCourseCreateNestedOneWithoutCourseContentsInput = {
    create?: XOR<MasterCourseCreateWithoutCourseContentsInput, MasterCourseUncheckedCreateWithoutCourseContentsInput>
    connectOrCreate?: MasterCourseCreateOrConnectWithoutCourseContentsInput
    connect?: MasterCourseWhereUniqueInput
  }

  export type MasterExerciseCreateNestedManyWithoutCourseContentInput = {
    create?: XOR<MasterExerciseCreateWithoutCourseContentInput, MasterExerciseUncheckedCreateWithoutCourseContentInput> | MasterExerciseCreateWithoutCourseContentInput[] | MasterExerciseUncheckedCreateWithoutCourseContentInput[]
    connectOrCreate?: MasterExerciseCreateOrConnectWithoutCourseContentInput | MasterExerciseCreateOrConnectWithoutCourseContentInput[]
    createMany?: MasterExerciseCreateManyCourseContentInputEnvelope
    connect?: MasterExerciseWhereUniqueInput | MasterExerciseWhereUniqueInput[]
  }

  export type ChatMessageCreateNestedManyWithoutMasterCourseContentInput = {
    create?: XOR<ChatMessageCreateWithoutMasterCourseContentInput, ChatMessageUncheckedCreateWithoutMasterCourseContentInput> | ChatMessageCreateWithoutMasterCourseContentInput[] | ChatMessageUncheckedCreateWithoutMasterCourseContentInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutMasterCourseContentInput | ChatMessageCreateOrConnectWithoutMasterCourseContentInput[]
    createMany?: ChatMessageCreateManyMasterCourseContentInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatRoomCreateNestedManyWithoutCourseContentInput = {
    create?: XOR<ChatRoomCreateWithoutCourseContentInput, ChatRoomUncheckedCreateWithoutCourseContentInput> | ChatRoomCreateWithoutCourseContentInput[] | ChatRoomUncheckedCreateWithoutCourseContentInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutCourseContentInput | ChatRoomCreateOrConnectWithoutCourseContentInput[]
    createMany?: ChatRoomCreateManyCourseContentInputEnvelope
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
  }

  export type MasterExerciseUncheckedCreateNestedManyWithoutCourseContentInput = {
    create?: XOR<MasterExerciseCreateWithoutCourseContentInput, MasterExerciseUncheckedCreateWithoutCourseContentInput> | MasterExerciseCreateWithoutCourseContentInput[] | MasterExerciseUncheckedCreateWithoutCourseContentInput[]
    connectOrCreate?: MasterExerciseCreateOrConnectWithoutCourseContentInput | MasterExerciseCreateOrConnectWithoutCourseContentInput[]
    createMany?: MasterExerciseCreateManyCourseContentInputEnvelope
    connect?: MasterExerciseWhereUniqueInput | MasterExerciseWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutMasterCourseContentInput = {
    create?: XOR<ChatMessageCreateWithoutMasterCourseContentInput, ChatMessageUncheckedCreateWithoutMasterCourseContentInput> | ChatMessageCreateWithoutMasterCourseContentInput[] | ChatMessageUncheckedCreateWithoutMasterCourseContentInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutMasterCourseContentInput | ChatMessageCreateOrConnectWithoutMasterCourseContentInput[]
    createMany?: ChatMessageCreateManyMasterCourseContentInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatRoomUncheckedCreateNestedManyWithoutCourseContentInput = {
    create?: XOR<ChatRoomCreateWithoutCourseContentInput, ChatRoomUncheckedCreateWithoutCourseContentInput> | ChatRoomCreateWithoutCourseContentInput[] | ChatRoomUncheckedCreateWithoutCourseContentInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutCourseContentInput | ChatRoomCreateOrConnectWithoutCourseContentInput[]
    createMany?: ChatRoomCreateManyCourseContentInputEnvelope
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
  }

  export type MasterCourseUpdateOneRequiredWithoutCourseContentsNestedInput = {
    create?: XOR<MasterCourseCreateWithoutCourseContentsInput, MasterCourseUncheckedCreateWithoutCourseContentsInput>
    connectOrCreate?: MasterCourseCreateOrConnectWithoutCourseContentsInput
    upsert?: MasterCourseUpsertWithoutCourseContentsInput
    connect?: MasterCourseWhereUniqueInput
    update?: XOR<XOR<MasterCourseUpdateToOneWithWhereWithoutCourseContentsInput, MasterCourseUpdateWithoutCourseContentsInput>, MasterCourseUncheckedUpdateWithoutCourseContentsInput>
  }

  export type MasterExerciseUpdateManyWithoutCourseContentNestedInput = {
    create?: XOR<MasterExerciseCreateWithoutCourseContentInput, MasterExerciseUncheckedCreateWithoutCourseContentInput> | MasterExerciseCreateWithoutCourseContentInput[] | MasterExerciseUncheckedCreateWithoutCourseContentInput[]
    connectOrCreate?: MasterExerciseCreateOrConnectWithoutCourseContentInput | MasterExerciseCreateOrConnectWithoutCourseContentInput[]
    upsert?: MasterExerciseUpsertWithWhereUniqueWithoutCourseContentInput | MasterExerciseUpsertWithWhereUniqueWithoutCourseContentInput[]
    createMany?: MasterExerciseCreateManyCourseContentInputEnvelope
    set?: MasterExerciseWhereUniqueInput | MasterExerciseWhereUniqueInput[]
    disconnect?: MasterExerciseWhereUniqueInput | MasterExerciseWhereUniqueInput[]
    delete?: MasterExerciseWhereUniqueInput | MasterExerciseWhereUniqueInput[]
    connect?: MasterExerciseWhereUniqueInput | MasterExerciseWhereUniqueInput[]
    update?: MasterExerciseUpdateWithWhereUniqueWithoutCourseContentInput | MasterExerciseUpdateWithWhereUniqueWithoutCourseContentInput[]
    updateMany?: MasterExerciseUpdateManyWithWhereWithoutCourseContentInput | MasterExerciseUpdateManyWithWhereWithoutCourseContentInput[]
    deleteMany?: MasterExerciseScalarWhereInput | MasterExerciseScalarWhereInput[]
  }

  export type ChatMessageUpdateManyWithoutMasterCourseContentNestedInput = {
    create?: XOR<ChatMessageCreateWithoutMasterCourseContentInput, ChatMessageUncheckedCreateWithoutMasterCourseContentInput> | ChatMessageCreateWithoutMasterCourseContentInput[] | ChatMessageUncheckedCreateWithoutMasterCourseContentInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutMasterCourseContentInput | ChatMessageCreateOrConnectWithoutMasterCourseContentInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutMasterCourseContentInput | ChatMessageUpsertWithWhereUniqueWithoutMasterCourseContentInput[]
    createMany?: ChatMessageCreateManyMasterCourseContentInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutMasterCourseContentInput | ChatMessageUpdateWithWhereUniqueWithoutMasterCourseContentInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutMasterCourseContentInput | ChatMessageUpdateManyWithWhereWithoutMasterCourseContentInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatRoomUpdateManyWithoutCourseContentNestedInput = {
    create?: XOR<ChatRoomCreateWithoutCourseContentInput, ChatRoomUncheckedCreateWithoutCourseContentInput> | ChatRoomCreateWithoutCourseContentInput[] | ChatRoomUncheckedCreateWithoutCourseContentInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutCourseContentInput | ChatRoomCreateOrConnectWithoutCourseContentInput[]
    upsert?: ChatRoomUpsertWithWhereUniqueWithoutCourseContentInput | ChatRoomUpsertWithWhereUniqueWithoutCourseContentInput[]
    createMany?: ChatRoomCreateManyCourseContentInputEnvelope
    set?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    disconnect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    delete?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    update?: ChatRoomUpdateWithWhereUniqueWithoutCourseContentInput | ChatRoomUpdateWithWhereUniqueWithoutCourseContentInput[]
    updateMany?: ChatRoomUpdateManyWithWhereWithoutCourseContentInput | ChatRoomUpdateManyWithWhereWithoutCourseContentInput[]
    deleteMany?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
  }

  export type MasterExerciseUncheckedUpdateManyWithoutCourseContentNestedInput = {
    create?: XOR<MasterExerciseCreateWithoutCourseContentInput, MasterExerciseUncheckedCreateWithoutCourseContentInput> | MasterExerciseCreateWithoutCourseContentInput[] | MasterExerciseUncheckedCreateWithoutCourseContentInput[]
    connectOrCreate?: MasterExerciseCreateOrConnectWithoutCourseContentInput | MasterExerciseCreateOrConnectWithoutCourseContentInput[]
    upsert?: MasterExerciseUpsertWithWhereUniqueWithoutCourseContentInput | MasterExerciseUpsertWithWhereUniqueWithoutCourseContentInput[]
    createMany?: MasterExerciseCreateManyCourseContentInputEnvelope
    set?: MasterExerciseWhereUniqueInput | MasterExerciseWhereUniqueInput[]
    disconnect?: MasterExerciseWhereUniqueInput | MasterExerciseWhereUniqueInput[]
    delete?: MasterExerciseWhereUniqueInput | MasterExerciseWhereUniqueInput[]
    connect?: MasterExerciseWhereUniqueInput | MasterExerciseWhereUniqueInput[]
    update?: MasterExerciseUpdateWithWhereUniqueWithoutCourseContentInput | MasterExerciseUpdateWithWhereUniqueWithoutCourseContentInput[]
    updateMany?: MasterExerciseUpdateManyWithWhereWithoutCourseContentInput | MasterExerciseUpdateManyWithWhereWithoutCourseContentInput[]
    deleteMany?: MasterExerciseScalarWhereInput | MasterExerciseScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutMasterCourseContentNestedInput = {
    create?: XOR<ChatMessageCreateWithoutMasterCourseContentInput, ChatMessageUncheckedCreateWithoutMasterCourseContentInput> | ChatMessageCreateWithoutMasterCourseContentInput[] | ChatMessageUncheckedCreateWithoutMasterCourseContentInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutMasterCourseContentInput | ChatMessageCreateOrConnectWithoutMasterCourseContentInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutMasterCourseContentInput | ChatMessageUpsertWithWhereUniqueWithoutMasterCourseContentInput[]
    createMany?: ChatMessageCreateManyMasterCourseContentInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutMasterCourseContentInput | ChatMessageUpdateWithWhereUniqueWithoutMasterCourseContentInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutMasterCourseContentInput | ChatMessageUpdateManyWithWhereWithoutMasterCourseContentInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatRoomUncheckedUpdateManyWithoutCourseContentNestedInput = {
    create?: XOR<ChatRoomCreateWithoutCourseContentInput, ChatRoomUncheckedCreateWithoutCourseContentInput> | ChatRoomCreateWithoutCourseContentInput[] | ChatRoomUncheckedCreateWithoutCourseContentInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutCourseContentInput | ChatRoomCreateOrConnectWithoutCourseContentInput[]
    upsert?: ChatRoomUpsertWithWhereUniqueWithoutCourseContentInput | ChatRoomUpsertWithWhereUniqueWithoutCourseContentInput[]
    createMany?: ChatRoomCreateManyCourseContentInputEnvelope
    set?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    disconnect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    delete?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    update?: ChatRoomUpdateWithWhereUniqueWithoutCourseContentInput | ChatRoomUpdateWithWhereUniqueWithoutCourseContentInput[]
    updateMany?: ChatRoomUpdateManyWithWhereWithoutCourseContentInput | ChatRoomUpdateManyWithWhereWithoutCourseContentInput[]
    deleteMany?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
  }

  export type MasterCourseContentCreateNestedOneWithoutExercisesInput = {
    create?: XOR<MasterCourseContentCreateWithoutExercisesInput, MasterCourseContentUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: MasterCourseContentCreateOrConnectWithoutExercisesInput
    connect?: MasterCourseContentWhereUniqueInput
  }

  export type MasterCourseContentUpdateOneRequiredWithoutExercisesNestedInput = {
    create?: XOR<MasterCourseContentCreateWithoutExercisesInput, MasterCourseContentUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: MasterCourseContentCreateOrConnectWithoutExercisesInput
    upsert?: MasterCourseContentUpsertWithoutExercisesInput
    connect?: MasterCourseContentWhereUniqueInput
    update?: XOR<XOR<MasterCourseContentUpdateToOneWithWhereWithoutExercisesInput, MasterCourseContentUpdateWithoutExercisesInput>, MasterCourseContentUncheckedUpdateWithoutExercisesInput>
  }

  export type UserCreateNestedOneWithoutChatRoomInput = {
    create?: XOR<UserCreateWithoutChatRoomInput, UserUncheckedCreateWithoutChatRoomInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatRoomInput
    connect?: UserWhereUniqueInput
  }

  export type MasterCourseContentCreateNestedOneWithoutChatRoomInput = {
    create?: XOR<MasterCourseContentCreateWithoutChatRoomInput, MasterCourseContentUncheckedCreateWithoutChatRoomInput>
    connectOrCreate?: MasterCourseContentCreateOrConnectWithoutChatRoomInput
    connect?: MasterCourseContentWhereUniqueInput
  }

  export type ChatMessageCreateNestedManyWithoutChatRoomInput = {
    create?: XOR<ChatMessageCreateWithoutChatRoomInput, ChatMessageUncheckedCreateWithoutChatRoomInput> | ChatMessageCreateWithoutChatRoomInput[] | ChatMessageUncheckedCreateWithoutChatRoomInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatRoomInput | ChatMessageCreateOrConnectWithoutChatRoomInput[]
    createMany?: ChatMessageCreateManyChatRoomInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutChatRoomInput = {
    create?: XOR<ChatMessageCreateWithoutChatRoomInput, ChatMessageUncheckedCreateWithoutChatRoomInput> | ChatMessageCreateWithoutChatRoomInput[] | ChatMessageUncheckedCreateWithoutChatRoomInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatRoomInput | ChatMessageCreateOrConnectWithoutChatRoomInput[]
    createMany?: ChatMessageCreateManyChatRoomInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutChatRoomNestedInput = {
    create?: XOR<UserCreateWithoutChatRoomInput, UserUncheckedCreateWithoutChatRoomInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatRoomInput
    upsert?: UserUpsertWithoutChatRoomInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatRoomInput, UserUpdateWithoutChatRoomInput>, UserUncheckedUpdateWithoutChatRoomInput>
  }

  export type MasterCourseContentUpdateOneRequiredWithoutChatRoomNestedInput = {
    create?: XOR<MasterCourseContentCreateWithoutChatRoomInput, MasterCourseContentUncheckedCreateWithoutChatRoomInput>
    connectOrCreate?: MasterCourseContentCreateOrConnectWithoutChatRoomInput
    upsert?: MasterCourseContentUpsertWithoutChatRoomInput
    connect?: MasterCourseContentWhereUniqueInput
    update?: XOR<XOR<MasterCourseContentUpdateToOneWithWhereWithoutChatRoomInput, MasterCourseContentUpdateWithoutChatRoomInput>, MasterCourseContentUncheckedUpdateWithoutChatRoomInput>
  }

  export type ChatMessageUpdateManyWithoutChatRoomNestedInput = {
    create?: XOR<ChatMessageCreateWithoutChatRoomInput, ChatMessageUncheckedCreateWithoutChatRoomInput> | ChatMessageCreateWithoutChatRoomInput[] | ChatMessageUncheckedCreateWithoutChatRoomInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatRoomInput | ChatMessageCreateOrConnectWithoutChatRoomInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutChatRoomInput | ChatMessageUpsertWithWhereUniqueWithoutChatRoomInput[]
    createMany?: ChatMessageCreateManyChatRoomInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutChatRoomInput | ChatMessageUpdateWithWhereUniqueWithoutChatRoomInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutChatRoomInput | ChatMessageUpdateManyWithWhereWithoutChatRoomInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutChatRoomNestedInput = {
    create?: XOR<ChatMessageCreateWithoutChatRoomInput, ChatMessageUncheckedCreateWithoutChatRoomInput> | ChatMessageCreateWithoutChatRoomInput[] | ChatMessageUncheckedCreateWithoutChatRoomInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatRoomInput | ChatMessageCreateOrConnectWithoutChatRoomInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutChatRoomInput | ChatMessageUpsertWithWhereUniqueWithoutChatRoomInput[]
    createMany?: ChatMessageCreateManyChatRoomInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutChatRoomInput | ChatMessageUpdateWithWhereUniqueWithoutChatRoomInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutChatRoomInput | ChatMessageUpdateManyWithWhereWithoutChatRoomInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatRoomCreateNestedOneWithoutChatMessageInput = {
    create?: XOR<ChatRoomCreateWithoutChatMessageInput, ChatRoomUncheckedCreateWithoutChatMessageInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutChatMessageInput
    connect?: ChatRoomWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChatMessagesInput = {
    create?: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type MasterCourseContentCreateNestedOneWithoutChatMessagesInput = {
    create?: XOR<MasterCourseContentCreateWithoutChatMessagesInput, MasterCourseContentUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: MasterCourseContentCreateOrConnectWithoutChatMessagesInput
    connect?: MasterCourseContentWhereUniqueInput
  }

  export type ChatRoomUpdateOneRequiredWithoutChatMessageNestedInput = {
    create?: XOR<ChatRoomCreateWithoutChatMessageInput, ChatRoomUncheckedCreateWithoutChatMessageInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutChatMessageInput
    upsert?: ChatRoomUpsertWithoutChatMessageInput
    connect?: ChatRoomWhereUniqueInput
    update?: XOR<XOR<ChatRoomUpdateToOneWithWhereWithoutChatMessageInput, ChatRoomUpdateWithoutChatMessageInput>, ChatRoomUncheckedUpdateWithoutChatMessageInput>
  }

  export type UserUpdateOneWithoutChatMessagesNestedInput = {
    create?: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMessagesInput
    upsert?: UserUpsertWithoutChatMessagesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatMessagesInput, UserUpdateWithoutChatMessagesInput>, UserUncheckedUpdateWithoutChatMessagesInput>
  }

  export type MasterCourseContentUpdateOneWithoutChatMessagesNestedInput = {
    create?: XOR<MasterCourseContentCreateWithoutChatMessagesInput, MasterCourseContentUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: MasterCourseContentCreateOrConnectWithoutChatMessagesInput
    upsert?: MasterCourseContentUpsertWithoutChatMessagesInput
    disconnect?: MasterCourseContentWhereInput | boolean
    delete?: MasterCourseContentWhereInput | boolean
    connect?: MasterCourseContentWhereUniqueInput
    update?: XOR<XOR<MasterCourseContentUpdateToOneWithWhereWithoutChatMessagesInput, MasterCourseContentUpdateWithoutChatMessagesInput>, MasterCourseContentUncheckedUpdateWithoutChatMessagesInput>
  }

  export type MasterCourseCreateNestedOneWithoutCourseFAQsInput = {
    create?: XOR<MasterCourseCreateWithoutCourseFAQsInput, MasterCourseUncheckedCreateWithoutCourseFAQsInput>
    connectOrCreate?: MasterCourseCreateOrConnectWithoutCourseFAQsInput
    connect?: MasterCourseWhereUniqueInput
  }

  export type MasterCourseUpdateOneRequiredWithoutCourseFAQsNestedInput = {
    create?: XOR<MasterCourseCreateWithoutCourseFAQsInput, MasterCourseUncheckedCreateWithoutCourseFAQsInput>
    connectOrCreate?: MasterCourseCreateOrConnectWithoutCourseFAQsInput
    upsert?: MasterCourseUpsertWithoutCourseFAQsInput
    connect?: MasterCourseWhereUniqueInput
    update?: XOR<XOR<MasterCourseUpdateToOneWithWhereWithoutCourseFAQsInput, MasterCourseUpdateWithoutCourseFAQsInput>, MasterCourseUncheckedUpdateWithoutCourseFAQsInput>
  }

  export type MasterCategoryCreateNestedOneWithoutExamsInput = {
    create?: XOR<MasterCategoryCreateWithoutExamsInput, MasterCategoryUncheckedCreateWithoutExamsInput>
    connectOrCreate?: MasterCategoryCreateOrConnectWithoutExamsInput
    connect?: MasterCategoryWhereUniqueInput
  }

  export type MasterExamQuestionCreateNestedManyWithoutExamInput = {
    create?: XOR<MasterExamQuestionCreateWithoutExamInput, MasterExamQuestionUncheckedCreateWithoutExamInput> | MasterExamQuestionCreateWithoutExamInput[] | MasterExamQuestionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: MasterExamQuestionCreateOrConnectWithoutExamInput | MasterExamQuestionCreateOrConnectWithoutExamInput[]
    createMany?: MasterExamQuestionCreateManyExamInputEnvelope
    connect?: MasterExamQuestionWhereUniqueInput | MasterExamQuestionWhereUniqueInput[]
  }

  export type ExamSubmissionCreateNestedManyWithoutExamInput = {
    create?: XOR<ExamSubmissionCreateWithoutExamInput, ExamSubmissionUncheckedCreateWithoutExamInput> | ExamSubmissionCreateWithoutExamInput[] | ExamSubmissionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamSubmissionCreateOrConnectWithoutExamInput | ExamSubmissionCreateOrConnectWithoutExamInput[]
    createMany?: ExamSubmissionCreateManyExamInputEnvelope
    connect?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
  }

  export type MasterExamQuestionUncheckedCreateNestedManyWithoutExamInput = {
    create?: XOR<MasterExamQuestionCreateWithoutExamInput, MasterExamQuestionUncheckedCreateWithoutExamInput> | MasterExamQuestionCreateWithoutExamInput[] | MasterExamQuestionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: MasterExamQuestionCreateOrConnectWithoutExamInput | MasterExamQuestionCreateOrConnectWithoutExamInput[]
    createMany?: MasterExamQuestionCreateManyExamInputEnvelope
    connect?: MasterExamQuestionWhereUniqueInput | MasterExamQuestionWhereUniqueInput[]
  }

  export type ExamSubmissionUncheckedCreateNestedManyWithoutExamInput = {
    create?: XOR<ExamSubmissionCreateWithoutExamInput, ExamSubmissionUncheckedCreateWithoutExamInput> | ExamSubmissionCreateWithoutExamInput[] | ExamSubmissionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamSubmissionCreateOrConnectWithoutExamInput | ExamSubmissionCreateOrConnectWithoutExamInput[]
    createMany?: ExamSubmissionCreateManyExamInputEnvelope
    connect?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
  }

  export type MasterCategoryUpdateOneRequiredWithoutExamsNestedInput = {
    create?: XOR<MasterCategoryCreateWithoutExamsInput, MasterCategoryUncheckedCreateWithoutExamsInput>
    connectOrCreate?: MasterCategoryCreateOrConnectWithoutExamsInput
    upsert?: MasterCategoryUpsertWithoutExamsInput
    connect?: MasterCategoryWhereUniqueInput
    update?: XOR<XOR<MasterCategoryUpdateToOneWithWhereWithoutExamsInput, MasterCategoryUpdateWithoutExamsInput>, MasterCategoryUncheckedUpdateWithoutExamsInput>
  }

  export type MasterExamQuestionUpdateManyWithoutExamNestedInput = {
    create?: XOR<MasterExamQuestionCreateWithoutExamInput, MasterExamQuestionUncheckedCreateWithoutExamInput> | MasterExamQuestionCreateWithoutExamInput[] | MasterExamQuestionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: MasterExamQuestionCreateOrConnectWithoutExamInput | MasterExamQuestionCreateOrConnectWithoutExamInput[]
    upsert?: MasterExamQuestionUpsertWithWhereUniqueWithoutExamInput | MasterExamQuestionUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: MasterExamQuestionCreateManyExamInputEnvelope
    set?: MasterExamQuestionWhereUniqueInput | MasterExamQuestionWhereUniqueInput[]
    disconnect?: MasterExamQuestionWhereUniqueInput | MasterExamQuestionWhereUniqueInput[]
    delete?: MasterExamQuestionWhereUniqueInput | MasterExamQuestionWhereUniqueInput[]
    connect?: MasterExamQuestionWhereUniqueInput | MasterExamQuestionWhereUniqueInput[]
    update?: MasterExamQuestionUpdateWithWhereUniqueWithoutExamInput | MasterExamQuestionUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: MasterExamQuestionUpdateManyWithWhereWithoutExamInput | MasterExamQuestionUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: MasterExamQuestionScalarWhereInput | MasterExamQuestionScalarWhereInput[]
  }

  export type ExamSubmissionUpdateManyWithoutExamNestedInput = {
    create?: XOR<ExamSubmissionCreateWithoutExamInput, ExamSubmissionUncheckedCreateWithoutExamInput> | ExamSubmissionCreateWithoutExamInput[] | ExamSubmissionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamSubmissionCreateOrConnectWithoutExamInput | ExamSubmissionCreateOrConnectWithoutExamInput[]
    upsert?: ExamSubmissionUpsertWithWhereUniqueWithoutExamInput | ExamSubmissionUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: ExamSubmissionCreateManyExamInputEnvelope
    set?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    disconnect?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    delete?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    connect?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    update?: ExamSubmissionUpdateWithWhereUniqueWithoutExamInput | ExamSubmissionUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: ExamSubmissionUpdateManyWithWhereWithoutExamInput | ExamSubmissionUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: ExamSubmissionScalarWhereInput | ExamSubmissionScalarWhereInput[]
  }

  export type MasterExamQuestionUncheckedUpdateManyWithoutExamNestedInput = {
    create?: XOR<MasterExamQuestionCreateWithoutExamInput, MasterExamQuestionUncheckedCreateWithoutExamInput> | MasterExamQuestionCreateWithoutExamInput[] | MasterExamQuestionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: MasterExamQuestionCreateOrConnectWithoutExamInput | MasterExamQuestionCreateOrConnectWithoutExamInput[]
    upsert?: MasterExamQuestionUpsertWithWhereUniqueWithoutExamInput | MasterExamQuestionUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: MasterExamQuestionCreateManyExamInputEnvelope
    set?: MasterExamQuestionWhereUniqueInput | MasterExamQuestionWhereUniqueInput[]
    disconnect?: MasterExamQuestionWhereUniqueInput | MasterExamQuestionWhereUniqueInput[]
    delete?: MasterExamQuestionWhereUniqueInput | MasterExamQuestionWhereUniqueInput[]
    connect?: MasterExamQuestionWhereUniqueInput | MasterExamQuestionWhereUniqueInput[]
    update?: MasterExamQuestionUpdateWithWhereUniqueWithoutExamInput | MasterExamQuestionUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: MasterExamQuestionUpdateManyWithWhereWithoutExamInput | MasterExamQuestionUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: MasterExamQuestionScalarWhereInput | MasterExamQuestionScalarWhereInput[]
  }

  export type ExamSubmissionUncheckedUpdateManyWithoutExamNestedInput = {
    create?: XOR<ExamSubmissionCreateWithoutExamInput, ExamSubmissionUncheckedCreateWithoutExamInput> | ExamSubmissionCreateWithoutExamInput[] | ExamSubmissionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamSubmissionCreateOrConnectWithoutExamInput | ExamSubmissionCreateOrConnectWithoutExamInput[]
    upsert?: ExamSubmissionUpsertWithWhereUniqueWithoutExamInput | ExamSubmissionUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: ExamSubmissionCreateManyExamInputEnvelope
    set?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    disconnect?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    delete?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    connect?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    update?: ExamSubmissionUpdateWithWhereUniqueWithoutExamInput | ExamSubmissionUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: ExamSubmissionUpdateManyWithWhereWithoutExamInput | ExamSubmissionUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: ExamSubmissionScalarWhereInput | ExamSubmissionScalarWhereInput[]
  }

  export type MasterExamCreateNestedOneWithoutExamQuestionsInput = {
    create?: XOR<MasterExamCreateWithoutExamQuestionsInput, MasterExamUncheckedCreateWithoutExamQuestionsInput>
    connectOrCreate?: MasterExamCreateOrConnectWithoutExamQuestionsInput
    connect?: MasterExamWhereUniqueInput
  }

  export type ExamAnswerCreateNestedManyWithoutExamQuestionInput = {
    create?: XOR<ExamAnswerCreateWithoutExamQuestionInput, ExamAnswerUncheckedCreateWithoutExamQuestionInput> | ExamAnswerCreateWithoutExamQuestionInput[] | ExamAnswerUncheckedCreateWithoutExamQuestionInput[]
    connectOrCreate?: ExamAnswerCreateOrConnectWithoutExamQuestionInput | ExamAnswerCreateOrConnectWithoutExamQuestionInput[]
    createMany?: ExamAnswerCreateManyExamQuestionInputEnvelope
    connect?: ExamAnswerWhereUniqueInput | ExamAnswerWhereUniqueInput[]
  }

  export type ExamAnswerUncheckedCreateNestedManyWithoutExamQuestionInput = {
    create?: XOR<ExamAnswerCreateWithoutExamQuestionInput, ExamAnswerUncheckedCreateWithoutExamQuestionInput> | ExamAnswerCreateWithoutExamQuestionInput[] | ExamAnswerUncheckedCreateWithoutExamQuestionInput[]
    connectOrCreate?: ExamAnswerCreateOrConnectWithoutExamQuestionInput | ExamAnswerCreateOrConnectWithoutExamQuestionInput[]
    createMany?: ExamAnswerCreateManyExamQuestionInputEnvelope
    connect?: ExamAnswerWhereUniqueInput | ExamAnswerWhereUniqueInput[]
  }

  export type MasterExamUpdateOneRequiredWithoutExamQuestionsNestedInput = {
    create?: XOR<MasterExamCreateWithoutExamQuestionsInput, MasterExamUncheckedCreateWithoutExamQuestionsInput>
    connectOrCreate?: MasterExamCreateOrConnectWithoutExamQuestionsInput
    upsert?: MasterExamUpsertWithoutExamQuestionsInput
    connect?: MasterExamWhereUniqueInput
    update?: XOR<XOR<MasterExamUpdateToOneWithWhereWithoutExamQuestionsInput, MasterExamUpdateWithoutExamQuestionsInput>, MasterExamUncheckedUpdateWithoutExamQuestionsInput>
  }

  export type ExamAnswerUpdateManyWithoutExamQuestionNestedInput = {
    create?: XOR<ExamAnswerCreateWithoutExamQuestionInput, ExamAnswerUncheckedCreateWithoutExamQuestionInput> | ExamAnswerCreateWithoutExamQuestionInput[] | ExamAnswerUncheckedCreateWithoutExamQuestionInput[]
    connectOrCreate?: ExamAnswerCreateOrConnectWithoutExamQuestionInput | ExamAnswerCreateOrConnectWithoutExamQuestionInput[]
    upsert?: ExamAnswerUpsertWithWhereUniqueWithoutExamQuestionInput | ExamAnswerUpsertWithWhereUniqueWithoutExamQuestionInput[]
    createMany?: ExamAnswerCreateManyExamQuestionInputEnvelope
    set?: ExamAnswerWhereUniqueInput | ExamAnswerWhereUniqueInput[]
    disconnect?: ExamAnswerWhereUniqueInput | ExamAnswerWhereUniqueInput[]
    delete?: ExamAnswerWhereUniqueInput | ExamAnswerWhereUniqueInput[]
    connect?: ExamAnswerWhereUniqueInput | ExamAnswerWhereUniqueInput[]
    update?: ExamAnswerUpdateWithWhereUniqueWithoutExamQuestionInput | ExamAnswerUpdateWithWhereUniqueWithoutExamQuestionInput[]
    updateMany?: ExamAnswerUpdateManyWithWhereWithoutExamQuestionInput | ExamAnswerUpdateManyWithWhereWithoutExamQuestionInput[]
    deleteMany?: ExamAnswerScalarWhereInput | ExamAnswerScalarWhereInput[]
  }

  export type ExamAnswerUncheckedUpdateManyWithoutExamQuestionNestedInput = {
    create?: XOR<ExamAnswerCreateWithoutExamQuestionInput, ExamAnswerUncheckedCreateWithoutExamQuestionInput> | ExamAnswerCreateWithoutExamQuestionInput[] | ExamAnswerUncheckedCreateWithoutExamQuestionInput[]
    connectOrCreate?: ExamAnswerCreateOrConnectWithoutExamQuestionInput | ExamAnswerCreateOrConnectWithoutExamQuestionInput[]
    upsert?: ExamAnswerUpsertWithWhereUniqueWithoutExamQuestionInput | ExamAnswerUpsertWithWhereUniqueWithoutExamQuestionInput[]
    createMany?: ExamAnswerCreateManyExamQuestionInputEnvelope
    set?: ExamAnswerWhereUniqueInput | ExamAnswerWhereUniqueInput[]
    disconnect?: ExamAnswerWhereUniqueInput | ExamAnswerWhereUniqueInput[]
    delete?: ExamAnswerWhereUniqueInput | ExamAnswerWhereUniqueInput[]
    connect?: ExamAnswerWhereUniqueInput | ExamAnswerWhereUniqueInput[]
    update?: ExamAnswerUpdateWithWhereUniqueWithoutExamQuestionInput | ExamAnswerUpdateWithWhereUniqueWithoutExamQuestionInput[]
    updateMany?: ExamAnswerUpdateManyWithWhereWithoutExamQuestionInput | ExamAnswerUpdateManyWithWhereWithoutExamQuestionInput[]
    deleteMany?: ExamAnswerScalarWhereInput | ExamAnswerScalarWhereInput[]
  }

  export type MasterExamCreateNestedOneWithoutExamSubmissionInput = {
    create?: XOR<MasterExamCreateWithoutExamSubmissionInput, MasterExamUncheckedCreateWithoutExamSubmissionInput>
    connectOrCreate?: MasterExamCreateOrConnectWithoutExamSubmissionInput
    connect?: MasterExamWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutExamSubmissionsInput = {
    create?: XOR<UserCreateWithoutExamSubmissionsInput, UserUncheckedCreateWithoutExamSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutExamSubmissionsInput
    connect?: UserWhereUniqueInput
  }

  export type ExamAnswerCreateNestedManyWithoutExamSubmissionInput = {
    create?: XOR<ExamAnswerCreateWithoutExamSubmissionInput, ExamAnswerUncheckedCreateWithoutExamSubmissionInput> | ExamAnswerCreateWithoutExamSubmissionInput[] | ExamAnswerUncheckedCreateWithoutExamSubmissionInput[]
    connectOrCreate?: ExamAnswerCreateOrConnectWithoutExamSubmissionInput | ExamAnswerCreateOrConnectWithoutExamSubmissionInput[]
    createMany?: ExamAnswerCreateManyExamSubmissionInputEnvelope
    connect?: ExamAnswerWhereUniqueInput | ExamAnswerWhereUniqueInput[]
  }

  export type ExamAnswerUncheckedCreateNestedManyWithoutExamSubmissionInput = {
    create?: XOR<ExamAnswerCreateWithoutExamSubmissionInput, ExamAnswerUncheckedCreateWithoutExamSubmissionInput> | ExamAnswerCreateWithoutExamSubmissionInput[] | ExamAnswerUncheckedCreateWithoutExamSubmissionInput[]
    connectOrCreate?: ExamAnswerCreateOrConnectWithoutExamSubmissionInput | ExamAnswerCreateOrConnectWithoutExamSubmissionInput[]
    createMany?: ExamAnswerCreateManyExamSubmissionInputEnvelope
    connect?: ExamAnswerWhereUniqueInput | ExamAnswerWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MasterExamUpdateOneRequiredWithoutExamSubmissionNestedInput = {
    create?: XOR<MasterExamCreateWithoutExamSubmissionInput, MasterExamUncheckedCreateWithoutExamSubmissionInput>
    connectOrCreate?: MasterExamCreateOrConnectWithoutExamSubmissionInput
    upsert?: MasterExamUpsertWithoutExamSubmissionInput
    connect?: MasterExamWhereUniqueInput
    update?: XOR<XOR<MasterExamUpdateToOneWithWhereWithoutExamSubmissionInput, MasterExamUpdateWithoutExamSubmissionInput>, MasterExamUncheckedUpdateWithoutExamSubmissionInput>
  }

  export type UserUpdateOneRequiredWithoutExamSubmissionsNestedInput = {
    create?: XOR<UserCreateWithoutExamSubmissionsInput, UserUncheckedCreateWithoutExamSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutExamSubmissionsInput
    upsert?: UserUpsertWithoutExamSubmissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExamSubmissionsInput, UserUpdateWithoutExamSubmissionsInput>, UserUncheckedUpdateWithoutExamSubmissionsInput>
  }

  export type ExamAnswerUpdateManyWithoutExamSubmissionNestedInput = {
    create?: XOR<ExamAnswerCreateWithoutExamSubmissionInput, ExamAnswerUncheckedCreateWithoutExamSubmissionInput> | ExamAnswerCreateWithoutExamSubmissionInput[] | ExamAnswerUncheckedCreateWithoutExamSubmissionInput[]
    connectOrCreate?: ExamAnswerCreateOrConnectWithoutExamSubmissionInput | ExamAnswerCreateOrConnectWithoutExamSubmissionInput[]
    upsert?: ExamAnswerUpsertWithWhereUniqueWithoutExamSubmissionInput | ExamAnswerUpsertWithWhereUniqueWithoutExamSubmissionInput[]
    createMany?: ExamAnswerCreateManyExamSubmissionInputEnvelope
    set?: ExamAnswerWhereUniqueInput | ExamAnswerWhereUniqueInput[]
    disconnect?: ExamAnswerWhereUniqueInput | ExamAnswerWhereUniqueInput[]
    delete?: ExamAnswerWhereUniqueInput | ExamAnswerWhereUniqueInput[]
    connect?: ExamAnswerWhereUniqueInput | ExamAnswerWhereUniqueInput[]
    update?: ExamAnswerUpdateWithWhereUniqueWithoutExamSubmissionInput | ExamAnswerUpdateWithWhereUniqueWithoutExamSubmissionInput[]
    updateMany?: ExamAnswerUpdateManyWithWhereWithoutExamSubmissionInput | ExamAnswerUpdateManyWithWhereWithoutExamSubmissionInput[]
    deleteMany?: ExamAnswerScalarWhereInput | ExamAnswerScalarWhereInput[]
  }

  export type ExamAnswerUncheckedUpdateManyWithoutExamSubmissionNestedInput = {
    create?: XOR<ExamAnswerCreateWithoutExamSubmissionInput, ExamAnswerUncheckedCreateWithoutExamSubmissionInput> | ExamAnswerCreateWithoutExamSubmissionInput[] | ExamAnswerUncheckedCreateWithoutExamSubmissionInput[]
    connectOrCreate?: ExamAnswerCreateOrConnectWithoutExamSubmissionInput | ExamAnswerCreateOrConnectWithoutExamSubmissionInput[]
    upsert?: ExamAnswerUpsertWithWhereUniqueWithoutExamSubmissionInput | ExamAnswerUpsertWithWhereUniqueWithoutExamSubmissionInput[]
    createMany?: ExamAnswerCreateManyExamSubmissionInputEnvelope
    set?: ExamAnswerWhereUniqueInput | ExamAnswerWhereUniqueInput[]
    disconnect?: ExamAnswerWhereUniqueInput | ExamAnswerWhereUniqueInput[]
    delete?: ExamAnswerWhereUniqueInput | ExamAnswerWhereUniqueInput[]
    connect?: ExamAnswerWhereUniqueInput | ExamAnswerWhereUniqueInput[]
    update?: ExamAnswerUpdateWithWhereUniqueWithoutExamSubmissionInput | ExamAnswerUpdateWithWhereUniqueWithoutExamSubmissionInput[]
    updateMany?: ExamAnswerUpdateManyWithWhereWithoutExamSubmissionInput | ExamAnswerUpdateManyWithWhereWithoutExamSubmissionInput[]
    deleteMany?: ExamAnswerScalarWhereInput | ExamAnswerScalarWhereInput[]
  }

  export type ExamSubmissionCreateNestedOneWithoutExamAnswersInput = {
    create?: XOR<ExamSubmissionCreateWithoutExamAnswersInput, ExamSubmissionUncheckedCreateWithoutExamAnswersInput>
    connectOrCreate?: ExamSubmissionCreateOrConnectWithoutExamAnswersInput
    connect?: ExamSubmissionWhereUniqueInput
  }

  export type MasterExamQuestionCreateNestedOneWithoutExamAnswerInput = {
    create?: XOR<MasterExamQuestionCreateWithoutExamAnswerInput, MasterExamQuestionUncheckedCreateWithoutExamAnswerInput>
    connectOrCreate?: MasterExamQuestionCreateOrConnectWithoutExamAnswerInput
    connect?: MasterExamQuestionWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ExamSubmissionUpdateOneRequiredWithoutExamAnswersNestedInput = {
    create?: XOR<ExamSubmissionCreateWithoutExamAnswersInput, ExamSubmissionUncheckedCreateWithoutExamAnswersInput>
    connectOrCreate?: ExamSubmissionCreateOrConnectWithoutExamAnswersInput
    upsert?: ExamSubmissionUpsertWithoutExamAnswersInput
    connect?: ExamSubmissionWhereUniqueInput
    update?: XOR<XOR<ExamSubmissionUpdateToOneWithWhereWithoutExamAnswersInput, ExamSubmissionUpdateWithoutExamAnswersInput>, ExamSubmissionUncheckedUpdateWithoutExamAnswersInput>
  }

  export type MasterExamQuestionUpdateOneRequiredWithoutExamAnswerNestedInput = {
    create?: XOR<MasterExamQuestionCreateWithoutExamAnswerInput, MasterExamQuestionUncheckedCreateWithoutExamAnswerInput>
    connectOrCreate?: MasterExamQuestionCreateOrConnectWithoutExamAnswerInput
    upsert?: MasterExamQuestionUpsertWithoutExamAnswerInput
    connect?: MasterExamQuestionWhereUniqueInput
    update?: XOR<XOR<MasterExamQuestionUpdateToOneWithWhereWithoutExamAnswerInput, MasterExamQuestionUpdateWithoutExamAnswerInput>, MasterExamQuestionUncheckedUpdateWithoutExamAnswerInput>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ExamSubmissionCreateWithoutUserInput = {
    id: string
    submittedAt?: Date | string
    score: number
    percentile: number
    exam: MasterExamCreateNestedOneWithoutExamSubmissionInput
    examAnswers?: ExamAnswerCreateNestedManyWithoutExamSubmissionInput
  }

  export type ExamSubmissionUncheckedCreateWithoutUserInput = {
    id: string
    examId: string
    submittedAt?: Date | string
    score: number
    percentile: number
    examAnswers?: ExamAnswerUncheckedCreateNestedManyWithoutExamSubmissionInput
  }

  export type ExamSubmissionCreateOrConnectWithoutUserInput = {
    where: ExamSubmissionWhereUniqueInput
    create: XOR<ExamSubmissionCreateWithoutUserInput, ExamSubmissionUncheckedCreateWithoutUserInput>
  }

  export type ExamSubmissionCreateManyUserInputEnvelope = {
    data: ExamSubmissionCreateManyUserInput | ExamSubmissionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessageCreateWithoutUserInput = {
    id: string
    role: string
    message: string
    createdAt?: Date | string
    chatRoom: ChatRoomCreateNestedOneWithoutChatMessageInput
    MasterCourseContent?: MasterCourseContentCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutUserInput = {
    id: string
    chatRoomId: string
    role: string
    message: string
    createdAt?: Date | string
    masterCourseContentId?: string | null
  }

  export type ChatMessageCreateOrConnectWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput>
  }

  export type ChatMessageCreateManyUserInputEnvelope = {
    data: ChatMessageCreateManyUserInput | ChatMessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatRoomCreateWithoutUserInput = {
    id: string
    createdAt?: Date | string
    courseContent: MasterCourseContentCreateNestedOneWithoutChatRoomInput
    chatMessage?: ChatMessageCreateNestedManyWithoutChatRoomInput
  }

  export type ChatRoomUncheckedCreateWithoutUserInput = {
    id: string
    courseContentId: string
    createdAt?: Date | string
    chatMessage?: ChatMessageUncheckedCreateNestedManyWithoutChatRoomInput
  }

  export type ChatRoomCreateOrConnectWithoutUserInput = {
    where: ChatRoomWhereUniqueInput
    create: XOR<ChatRoomCreateWithoutUserInput, ChatRoomUncheckedCreateWithoutUserInput>
  }

  export type ChatRoomCreateManyUserInputEnvelope = {
    data: ChatRoomCreateManyUserInput | ChatRoomCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ExamSubmissionUpsertWithWhereUniqueWithoutUserInput = {
    where: ExamSubmissionWhereUniqueInput
    update: XOR<ExamSubmissionUpdateWithoutUserInput, ExamSubmissionUncheckedUpdateWithoutUserInput>
    create: XOR<ExamSubmissionCreateWithoutUserInput, ExamSubmissionUncheckedCreateWithoutUserInput>
  }

  export type ExamSubmissionUpdateWithWhereUniqueWithoutUserInput = {
    where: ExamSubmissionWhereUniqueInput
    data: XOR<ExamSubmissionUpdateWithoutUserInput, ExamSubmissionUncheckedUpdateWithoutUserInput>
  }

  export type ExamSubmissionUpdateManyWithWhereWithoutUserInput = {
    where: ExamSubmissionScalarWhereInput
    data: XOR<ExamSubmissionUpdateManyMutationInput, ExamSubmissionUncheckedUpdateManyWithoutUserInput>
  }

  export type ExamSubmissionScalarWhereInput = {
    AND?: ExamSubmissionScalarWhereInput | ExamSubmissionScalarWhereInput[]
    OR?: ExamSubmissionScalarWhereInput[]
    NOT?: ExamSubmissionScalarWhereInput | ExamSubmissionScalarWhereInput[]
    id?: StringFilter<"ExamSubmission"> | string
    examId?: StringFilter<"ExamSubmission"> | string
    userId?: StringFilter<"ExamSubmission"> | string
    submittedAt?: DateTimeFilter<"ExamSubmission"> | Date | string
    score?: FloatFilter<"ExamSubmission"> | number
    percentile?: FloatFilter<"ExamSubmission"> | number
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutUserInput, ChatMessageUncheckedUpdateWithoutUserInput>
    create: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutUserInput, ChatMessageUncheckedUpdateWithoutUserInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutUserInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    OR?: ChatMessageScalarWhereInput[]
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    chatRoomId?: StringFilter<"ChatMessage"> | string
    userId?: StringNullableFilter<"ChatMessage"> | string | null
    role?: StringFilter<"ChatMessage"> | string
    message?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    masterCourseContentId?: StringNullableFilter<"ChatMessage"> | string | null
  }

  export type ChatRoomUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatRoomWhereUniqueInput
    update: XOR<ChatRoomUpdateWithoutUserInput, ChatRoomUncheckedUpdateWithoutUserInput>
    create: XOR<ChatRoomCreateWithoutUserInput, ChatRoomUncheckedCreateWithoutUserInput>
  }

  export type ChatRoomUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatRoomWhereUniqueInput
    data: XOR<ChatRoomUpdateWithoutUserInput, ChatRoomUncheckedUpdateWithoutUserInput>
  }

  export type ChatRoomUpdateManyWithWhereWithoutUserInput = {
    where: ChatRoomScalarWhereInput
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatRoomScalarWhereInput = {
    AND?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
    OR?: ChatRoomScalarWhereInput[]
    NOT?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
    id?: StringFilter<"ChatRoom"> | string
    userId?: StringFilter<"ChatRoom"> | string
    courseContentId?: StringFilter<"ChatRoom"> | string
    createdAt?: DateTimeFilter<"ChatRoom"> | Date | string
  }

  export type MasterCategoryCreateWithoutChildrenInput = {
    id: string
    name: string
    level: number
    parent?: MasterCategoryCreateNestedOneWithoutChildrenInput
    courses?: MasterCourseCreateNestedManyWithoutCategoryInput
    exams?: MasterExamCreateNestedManyWithoutCategoryInput
  }

  export type MasterCategoryUncheckedCreateWithoutChildrenInput = {
    id: string
    name: string
    level: number
    parentId?: string | null
    courses?: MasterCourseUncheckedCreateNestedManyWithoutCategoryInput
    exams?: MasterExamUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type MasterCategoryCreateOrConnectWithoutChildrenInput = {
    where: MasterCategoryWhereUniqueInput
    create: XOR<MasterCategoryCreateWithoutChildrenInput, MasterCategoryUncheckedCreateWithoutChildrenInput>
  }

  export type MasterCategoryCreateWithoutParentInput = {
    id: string
    name: string
    level: number
    children?: MasterCategoryCreateNestedManyWithoutParentInput
    courses?: MasterCourseCreateNestedManyWithoutCategoryInput
    exams?: MasterExamCreateNestedManyWithoutCategoryInput
  }

  export type MasterCategoryUncheckedCreateWithoutParentInput = {
    id: string
    name: string
    level: number
    children?: MasterCategoryUncheckedCreateNestedManyWithoutParentInput
    courses?: MasterCourseUncheckedCreateNestedManyWithoutCategoryInput
    exams?: MasterExamUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type MasterCategoryCreateOrConnectWithoutParentInput = {
    where: MasterCategoryWhereUniqueInput
    create: XOR<MasterCategoryCreateWithoutParentInput, MasterCategoryUncheckedCreateWithoutParentInput>
  }

  export type MasterCategoryCreateManyParentInputEnvelope = {
    data: MasterCategoryCreateManyParentInput | MasterCategoryCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type MasterCourseCreateWithoutCategoryInput = {
    id: string
    title?: string | null
    summary?: string | null
    description?: string | null
    targetAudience?: string | null
    difficulty?: string | null
    durationMin?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: MasterTagCreateNestedManyWithoutCoursesInput
    courseContents?: MasterCourseContentCreateNestedManyWithoutCourseInput
    relatedCourses?: MasterCourseCreateNestedManyWithoutRelatedToCoursesInput
    relatedToCourses?: MasterCourseCreateNestedManyWithoutRelatedCoursesInput
    courseFAQs?: MasterCourseFAQCreateNestedManyWithoutCourseInput
  }

  export type MasterCourseUncheckedCreateWithoutCategoryInput = {
    id: string
    title?: string | null
    summary?: string | null
    description?: string | null
    targetAudience?: string | null
    difficulty?: string | null
    durationMin?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: MasterTagUncheckedCreateNestedManyWithoutCoursesInput
    courseContents?: MasterCourseContentUncheckedCreateNestedManyWithoutCourseInput
    relatedCourses?: MasterCourseUncheckedCreateNestedManyWithoutRelatedToCoursesInput
    relatedToCourses?: MasterCourseUncheckedCreateNestedManyWithoutRelatedCoursesInput
    courseFAQs?: MasterCourseFAQUncheckedCreateNestedManyWithoutCourseInput
  }

  export type MasterCourseCreateOrConnectWithoutCategoryInput = {
    where: MasterCourseWhereUniqueInput
    create: XOR<MasterCourseCreateWithoutCategoryInput, MasterCourseUncheckedCreateWithoutCategoryInput>
  }

  export type MasterCourseCreateManyCategoryInputEnvelope = {
    data: MasterCourseCreateManyCategoryInput | MasterCourseCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type MasterExamCreateWithoutCategoryInput = {
    id: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    examQuestions?: MasterExamQuestionCreateNestedManyWithoutExamInput
    ExamSubmission?: ExamSubmissionCreateNestedManyWithoutExamInput
  }

  export type MasterExamUncheckedCreateWithoutCategoryInput = {
    id: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    examQuestions?: MasterExamQuestionUncheckedCreateNestedManyWithoutExamInput
    ExamSubmission?: ExamSubmissionUncheckedCreateNestedManyWithoutExamInput
  }

  export type MasterExamCreateOrConnectWithoutCategoryInput = {
    where: MasterExamWhereUniqueInput
    create: XOR<MasterExamCreateWithoutCategoryInput, MasterExamUncheckedCreateWithoutCategoryInput>
  }

  export type MasterExamCreateManyCategoryInputEnvelope = {
    data: MasterExamCreateManyCategoryInput | MasterExamCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type MasterCategoryUpsertWithoutChildrenInput = {
    update: XOR<MasterCategoryUpdateWithoutChildrenInput, MasterCategoryUncheckedUpdateWithoutChildrenInput>
    create: XOR<MasterCategoryCreateWithoutChildrenInput, MasterCategoryUncheckedCreateWithoutChildrenInput>
    where?: MasterCategoryWhereInput
  }

  export type MasterCategoryUpdateToOneWithWhereWithoutChildrenInput = {
    where?: MasterCategoryWhereInput
    data: XOR<MasterCategoryUpdateWithoutChildrenInput, MasterCategoryUncheckedUpdateWithoutChildrenInput>
  }

  export type MasterCategoryUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    parent?: MasterCategoryUpdateOneWithoutChildrenNestedInput
    courses?: MasterCourseUpdateManyWithoutCategoryNestedInput
    exams?: MasterExamUpdateManyWithoutCategoryNestedInput
  }

  export type MasterCategoryUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    courses?: MasterCourseUncheckedUpdateManyWithoutCategoryNestedInput
    exams?: MasterExamUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type MasterCategoryUpsertWithWhereUniqueWithoutParentInput = {
    where: MasterCategoryWhereUniqueInput
    update: XOR<MasterCategoryUpdateWithoutParentInput, MasterCategoryUncheckedUpdateWithoutParentInput>
    create: XOR<MasterCategoryCreateWithoutParentInput, MasterCategoryUncheckedCreateWithoutParentInput>
  }

  export type MasterCategoryUpdateWithWhereUniqueWithoutParentInput = {
    where: MasterCategoryWhereUniqueInput
    data: XOR<MasterCategoryUpdateWithoutParentInput, MasterCategoryUncheckedUpdateWithoutParentInput>
  }

  export type MasterCategoryUpdateManyWithWhereWithoutParentInput = {
    where: MasterCategoryScalarWhereInput
    data: XOR<MasterCategoryUpdateManyMutationInput, MasterCategoryUncheckedUpdateManyWithoutParentInput>
  }

  export type MasterCategoryScalarWhereInput = {
    AND?: MasterCategoryScalarWhereInput | MasterCategoryScalarWhereInput[]
    OR?: MasterCategoryScalarWhereInput[]
    NOT?: MasterCategoryScalarWhereInput | MasterCategoryScalarWhereInput[]
    id?: StringFilter<"MasterCategory"> | string
    name?: StringFilter<"MasterCategory"> | string
    level?: IntFilter<"MasterCategory"> | number
    parentId?: StringNullableFilter<"MasterCategory"> | string | null
  }

  export type MasterCourseUpsertWithWhereUniqueWithoutCategoryInput = {
    where: MasterCourseWhereUniqueInput
    update: XOR<MasterCourseUpdateWithoutCategoryInput, MasterCourseUncheckedUpdateWithoutCategoryInput>
    create: XOR<MasterCourseCreateWithoutCategoryInput, MasterCourseUncheckedCreateWithoutCategoryInput>
  }

  export type MasterCourseUpdateWithWhereUniqueWithoutCategoryInput = {
    where: MasterCourseWhereUniqueInput
    data: XOR<MasterCourseUpdateWithoutCategoryInput, MasterCourseUncheckedUpdateWithoutCategoryInput>
  }

  export type MasterCourseUpdateManyWithWhereWithoutCategoryInput = {
    where: MasterCourseScalarWhereInput
    data: XOR<MasterCourseUpdateManyMutationInput, MasterCourseUncheckedUpdateManyWithoutCategoryInput>
  }

  export type MasterCourseScalarWhereInput = {
    AND?: MasterCourseScalarWhereInput | MasterCourseScalarWhereInput[]
    OR?: MasterCourseScalarWhereInput[]
    NOT?: MasterCourseScalarWhereInput | MasterCourseScalarWhereInput[]
    id?: StringFilter<"MasterCourse"> | string
    title?: StringNullableFilter<"MasterCourse"> | string | null
    summary?: StringNullableFilter<"MasterCourse"> | string | null
    description?: StringNullableFilter<"MasterCourse"> | string | null
    targetAudience?: StringNullableFilter<"MasterCourse"> | string | null
    difficulty?: StringNullableFilter<"MasterCourse"> | string | null
    durationMin?: IntNullableFilter<"MasterCourse"> | number | null
    createdAt?: DateTimeFilter<"MasterCourse"> | Date | string
    updatedAt?: DateTimeFilter<"MasterCourse"> | Date | string
    categoryId?: StringFilter<"MasterCourse"> | string
  }

  export type MasterExamUpsertWithWhereUniqueWithoutCategoryInput = {
    where: MasterExamWhereUniqueInput
    update: XOR<MasterExamUpdateWithoutCategoryInput, MasterExamUncheckedUpdateWithoutCategoryInput>
    create: XOR<MasterExamCreateWithoutCategoryInput, MasterExamUncheckedCreateWithoutCategoryInput>
  }

  export type MasterExamUpdateWithWhereUniqueWithoutCategoryInput = {
    where: MasterExamWhereUniqueInput
    data: XOR<MasterExamUpdateWithoutCategoryInput, MasterExamUncheckedUpdateWithoutCategoryInput>
  }

  export type MasterExamUpdateManyWithWhereWithoutCategoryInput = {
    where: MasterExamScalarWhereInput
    data: XOR<MasterExamUpdateManyMutationInput, MasterExamUncheckedUpdateManyWithoutCategoryInput>
  }

  export type MasterExamScalarWhereInput = {
    AND?: MasterExamScalarWhereInput | MasterExamScalarWhereInput[]
    OR?: MasterExamScalarWhereInput[]
    NOT?: MasterExamScalarWhereInput | MasterExamScalarWhereInput[]
    id?: StringFilter<"MasterExam"> | string
    title?: StringFilter<"MasterExam"> | string
    description?: StringFilter<"MasterExam"> | string
    createdAt?: DateTimeFilter<"MasterExam"> | Date | string
    updatedAt?: DateTimeFilter<"MasterExam"> | Date | string
    categoryId?: StringFilter<"MasterExam"> | string
  }

  export type MasterCourseCreateWithoutTagsInput = {
    id: string
    title?: string | null
    summary?: string | null
    description?: string | null
    targetAudience?: string | null
    difficulty?: string | null
    durationMin?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: MasterCategoryCreateNestedOneWithoutCoursesInput
    courseContents?: MasterCourseContentCreateNestedManyWithoutCourseInput
    relatedCourses?: MasterCourseCreateNestedManyWithoutRelatedToCoursesInput
    relatedToCourses?: MasterCourseCreateNestedManyWithoutRelatedCoursesInput
    courseFAQs?: MasterCourseFAQCreateNestedManyWithoutCourseInput
  }

  export type MasterCourseUncheckedCreateWithoutTagsInput = {
    id: string
    title?: string | null
    summary?: string | null
    description?: string | null
    targetAudience?: string | null
    difficulty?: string | null
    durationMin?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    courseContents?: MasterCourseContentUncheckedCreateNestedManyWithoutCourseInput
    relatedCourses?: MasterCourseUncheckedCreateNestedManyWithoutRelatedToCoursesInput
    relatedToCourses?: MasterCourseUncheckedCreateNestedManyWithoutRelatedCoursesInput
    courseFAQs?: MasterCourseFAQUncheckedCreateNestedManyWithoutCourseInput
  }

  export type MasterCourseCreateOrConnectWithoutTagsInput = {
    where: MasterCourseWhereUniqueInput
    create: XOR<MasterCourseCreateWithoutTagsInput, MasterCourseUncheckedCreateWithoutTagsInput>
  }

  export type MasterCourseUpsertWithWhereUniqueWithoutTagsInput = {
    where: MasterCourseWhereUniqueInput
    update: XOR<MasterCourseUpdateWithoutTagsInput, MasterCourseUncheckedUpdateWithoutTagsInput>
    create: XOR<MasterCourseCreateWithoutTagsInput, MasterCourseUncheckedCreateWithoutTagsInput>
  }

  export type MasterCourseUpdateWithWhereUniqueWithoutTagsInput = {
    where: MasterCourseWhereUniqueInput
    data: XOR<MasterCourseUpdateWithoutTagsInput, MasterCourseUncheckedUpdateWithoutTagsInput>
  }

  export type MasterCourseUpdateManyWithWhereWithoutTagsInput = {
    where: MasterCourseScalarWhereInput
    data: XOR<MasterCourseUpdateManyMutationInput, MasterCourseUncheckedUpdateManyWithoutTagsInput>
  }

  export type MasterCategoryCreateWithoutCoursesInput = {
    id: string
    name: string
    level: number
    parent?: MasterCategoryCreateNestedOneWithoutChildrenInput
    children?: MasterCategoryCreateNestedManyWithoutParentInput
    exams?: MasterExamCreateNestedManyWithoutCategoryInput
  }

  export type MasterCategoryUncheckedCreateWithoutCoursesInput = {
    id: string
    name: string
    level: number
    parentId?: string | null
    children?: MasterCategoryUncheckedCreateNestedManyWithoutParentInput
    exams?: MasterExamUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type MasterCategoryCreateOrConnectWithoutCoursesInput = {
    where: MasterCategoryWhereUniqueInput
    create: XOR<MasterCategoryCreateWithoutCoursesInput, MasterCategoryUncheckedCreateWithoutCoursesInput>
  }

  export type MasterTagCreateWithoutCoursesInput = {
    id: string
    name: string
  }

  export type MasterTagUncheckedCreateWithoutCoursesInput = {
    id: string
    name: string
  }

  export type MasterTagCreateOrConnectWithoutCoursesInput = {
    where: MasterTagWhereUniqueInput
    create: XOR<MasterTagCreateWithoutCoursesInput, MasterTagUncheckedCreateWithoutCoursesInput>
  }

  export type MasterCourseContentCreateWithoutCourseInput = {
    id: string
    sequence: number
    title?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    exercises?: MasterExerciseCreateNestedManyWithoutCourseContentInput
    chatMessages?: ChatMessageCreateNestedManyWithoutMasterCourseContentInput
    chatRoom?: ChatRoomCreateNestedManyWithoutCourseContentInput
  }

  export type MasterCourseContentUncheckedCreateWithoutCourseInput = {
    id: string
    sequence: number
    title?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    exercises?: MasterExerciseUncheckedCreateNestedManyWithoutCourseContentInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutMasterCourseContentInput
    chatRoom?: ChatRoomUncheckedCreateNestedManyWithoutCourseContentInput
  }

  export type MasterCourseContentCreateOrConnectWithoutCourseInput = {
    where: MasterCourseContentWhereUniqueInput
    create: XOR<MasterCourseContentCreateWithoutCourseInput, MasterCourseContentUncheckedCreateWithoutCourseInput>
  }

  export type MasterCourseContentCreateManyCourseInputEnvelope = {
    data: MasterCourseContentCreateManyCourseInput | MasterCourseContentCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type MasterCourseCreateWithoutRelatedToCoursesInput = {
    id: string
    title?: string | null
    summary?: string | null
    description?: string | null
    targetAudience?: string | null
    difficulty?: string | null
    durationMin?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: MasterCategoryCreateNestedOneWithoutCoursesInput
    tags?: MasterTagCreateNestedManyWithoutCoursesInput
    courseContents?: MasterCourseContentCreateNestedManyWithoutCourseInput
    relatedCourses?: MasterCourseCreateNestedManyWithoutRelatedToCoursesInput
    courseFAQs?: MasterCourseFAQCreateNestedManyWithoutCourseInput
  }

  export type MasterCourseUncheckedCreateWithoutRelatedToCoursesInput = {
    id: string
    title?: string | null
    summary?: string | null
    description?: string | null
    targetAudience?: string | null
    difficulty?: string | null
    durationMin?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    tags?: MasterTagUncheckedCreateNestedManyWithoutCoursesInput
    courseContents?: MasterCourseContentUncheckedCreateNestedManyWithoutCourseInput
    relatedCourses?: MasterCourseUncheckedCreateNestedManyWithoutRelatedToCoursesInput
    courseFAQs?: MasterCourseFAQUncheckedCreateNestedManyWithoutCourseInput
  }

  export type MasterCourseCreateOrConnectWithoutRelatedToCoursesInput = {
    where: MasterCourseWhereUniqueInput
    create: XOR<MasterCourseCreateWithoutRelatedToCoursesInput, MasterCourseUncheckedCreateWithoutRelatedToCoursesInput>
  }

  export type MasterCourseCreateWithoutRelatedCoursesInput = {
    id: string
    title?: string | null
    summary?: string | null
    description?: string | null
    targetAudience?: string | null
    difficulty?: string | null
    durationMin?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: MasterCategoryCreateNestedOneWithoutCoursesInput
    tags?: MasterTagCreateNestedManyWithoutCoursesInput
    courseContents?: MasterCourseContentCreateNestedManyWithoutCourseInput
    relatedToCourses?: MasterCourseCreateNestedManyWithoutRelatedCoursesInput
    courseFAQs?: MasterCourseFAQCreateNestedManyWithoutCourseInput
  }

  export type MasterCourseUncheckedCreateWithoutRelatedCoursesInput = {
    id: string
    title?: string | null
    summary?: string | null
    description?: string | null
    targetAudience?: string | null
    difficulty?: string | null
    durationMin?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    tags?: MasterTagUncheckedCreateNestedManyWithoutCoursesInput
    courseContents?: MasterCourseContentUncheckedCreateNestedManyWithoutCourseInput
    relatedToCourses?: MasterCourseUncheckedCreateNestedManyWithoutRelatedCoursesInput
    courseFAQs?: MasterCourseFAQUncheckedCreateNestedManyWithoutCourseInput
  }

  export type MasterCourseCreateOrConnectWithoutRelatedCoursesInput = {
    where: MasterCourseWhereUniqueInput
    create: XOR<MasterCourseCreateWithoutRelatedCoursesInput, MasterCourseUncheckedCreateWithoutRelatedCoursesInput>
  }

  export type MasterCourseFAQCreateWithoutCourseInput = {
    id: string
    question: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MasterCourseFAQUncheckedCreateWithoutCourseInput = {
    id: string
    question: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MasterCourseFAQCreateOrConnectWithoutCourseInput = {
    where: MasterCourseFAQWhereUniqueInput
    create: XOR<MasterCourseFAQCreateWithoutCourseInput, MasterCourseFAQUncheckedCreateWithoutCourseInput>
  }

  export type MasterCourseFAQCreateManyCourseInputEnvelope = {
    data: MasterCourseFAQCreateManyCourseInput | MasterCourseFAQCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type MasterCategoryUpsertWithoutCoursesInput = {
    update: XOR<MasterCategoryUpdateWithoutCoursesInput, MasterCategoryUncheckedUpdateWithoutCoursesInput>
    create: XOR<MasterCategoryCreateWithoutCoursesInput, MasterCategoryUncheckedCreateWithoutCoursesInput>
    where?: MasterCategoryWhereInput
  }

  export type MasterCategoryUpdateToOneWithWhereWithoutCoursesInput = {
    where?: MasterCategoryWhereInput
    data: XOR<MasterCategoryUpdateWithoutCoursesInput, MasterCategoryUncheckedUpdateWithoutCoursesInput>
  }

  export type MasterCategoryUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    parent?: MasterCategoryUpdateOneWithoutChildrenNestedInput
    children?: MasterCategoryUpdateManyWithoutParentNestedInput
    exams?: MasterExamUpdateManyWithoutCategoryNestedInput
  }

  export type MasterCategoryUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: MasterCategoryUncheckedUpdateManyWithoutParentNestedInput
    exams?: MasterExamUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type MasterTagUpsertWithWhereUniqueWithoutCoursesInput = {
    where: MasterTagWhereUniqueInput
    update: XOR<MasterTagUpdateWithoutCoursesInput, MasterTagUncheckedUpdateWithoutCoursesInput>
    create: XOR<MasterTagCreateWithoutCoursesInput, MasterTagUncheckedCreateWithoutCoursesInput>
  }

  export type MasterTagUpdateWithWhereUniqueWithoutCoursesInput = {
    where: MasterTagWhereUniqueInput
    data: XOR<MasterTagUpdateWithoutCoursesInput, MasterTagUncheckedUpdateWithoutCoursesInput>
  }

  export type MasterTagUpdateManyWithWhereWithoutCoursesInput = {
    where: MasterTagScalarWhereInput
    data: XOR<MasterTagUpdateManyMutationInput, MasterTagUncheckedUpdateManyWithoutCoursesInput>
  }

  export type MasterTagScalarWhereInput = {
    AND?: MasterTagScalarWhereInput | MasterTagScalarWhereInput[]
    OR?: MasterTagScalarWhereInput[]
    NOT?: MasterTagScalarWhereInput | MasterTagScalarWhereInput[]
    id?: StringFilter<"MasterTag"> | string
    name?: StringFilter<"MasterTag"> | string
  }

  export type MasterCourseContentUpsertWithWhereUniqueWithoutCourseInput = {
    where: MasterCourseContentWhereUniqueInput
    update: XOR<MasterCourseContentUpdateWithoutCourseInput, MasterCourseContentUncheckedUpdateWithoutCourseInput>
    create: XOR<MasterCourseContentCreateWithoutCourseInput, MasterCourseContentUncheckedCreateWithoutCourseInput>
  }

  export type MasterCourseContentUpdateWithWhereUniqueWithoutCourseInput = {
    where: MasterCourseContentWhereUniqueInput
    data: XOR<MasterCourseContentUpdateWithoutCourseInput, MasterCourseContentUncheckedUpdateWithoutCourseInput>
  }

  export type MasterCourseContentUpdateManyWithWhereWithoutCourseInput = {
    where: MasterCourseContentScalarWhereInput
    data: XOR<MasterCourseContentUpdateManyMutationInput, MasterCourseContentUncheckedUpdateManyWithoutCourseInput>
  }

  export type MasterCourseContentScalarWhereInput = {
    AND?: MasterCourseContentScalarWhereInput | MasterCourseContentScalarWhereInput[]
    OR?: MasterCourseContentScalarWhereInput[]
    NOT?: MasterCourseContentScalarWhereInput | MasterCourseContentScalarWhereInput[]
    id?: StringFilter<"MasterCourseContent"> | string
    courseId?: StringFilter<"MasterCourseContent"> | string
    sequence?: IntFilter<"MasterCourseContent"> | number
    title?: StringNullableFilter<"MasterCourseContent"> | string | null
    content?: StringNullableFilter<"MasterCourseContent"> | string | null
    createdAt?: DateTimeFilter<"MasterCourseContent"> | Date | string
    updatedAt?: DateTimeFilter<"MasterCourseContent"> | Date | string
  }

  export type MasterCourseUpsertWithWhereUniqueWithoutRelatedToCoursesInput = {
    where: MasterCourseWhereUniqueInput
    update: XOR<MasterCourseUpdateWithoutRelatedToCoursesInput, MasterCourseUncheckedUpdateWithoutRelatedToCoursesInput>
    create: XOR<MasterCourseCreateWithoutRelatedToCoursesInput, MasterCourseUncheckedCreateWithoutRelatedToCoursesInput>
  }

  export type MasterCourseUpdateWithWhereUniqueWithoutRelatedToCoursesInput = {
    where: MasterCourseWhereUniqueInput
    data: XOR<MasterCourseUpdateWithoutRelatedToCoursesInput, MasterCourseUncheckedUpdateWithoutRelatedToCoursesInput>
  }

  export type MasterCourseUpdateManyWithWhereWithoutRelatedToCoursesInput = {
    where: MasterCourseScalarWhereInput
    data: XOR<MasterCourseUpdateManyMutationInput, MasterCourseUncheckedUpdateManyWithoutRelatedToCoursesInput>
  }

  export type MasterCourseUpsertWithWhereUniqueWithoutRelatedCoursesInput = {
    where: MasterCourseWhereUniqueInput
    update: XOR<MasterCourseUpdateWithoutRelatedCoursesInput, MasterCourseUncheckedUpdateWithoutRelatedCoursesInput>
    create: XOR<MasterCourseCreateWithoutRelatedCoursesInput, MasterCourseUncheckedCreateWithoutRelatedCoursesInput>
  }

  export type MasterCourseUpdateWithWhereUniqueWithoutRelatedCoursesInput = {
    where: MasterCourseWhereUniqueInput
    data: XOR<MasterCourseUpdateWithoutRelatedCoursesInput, MasterCourseUncheckedUpdateWithoutRelatedCoursesInput>
  }

  export type MasterCourseUpdateManyWithWhereWithoutRelatedCoursesInput = {
    where: MasterCourseScalarWhereInput
    data: XOR<MasterCourseUpdateManyMutationInput, MasterCourseUncheckedUpdateManyWithoutRelatedCoursesInput>
  }

  export type MasterCourseFAQUpsertWithWhereUniqueWithoutCourseInput = {
    where: MasterCourseFAQWhereUniqueInput
    update: XOR<MasterCourseFAQUpdateWithoutCourseInput, MasterCourseFAQUncheckedUpdateWithoutCourseInput>
    create: XOR<MasterCourseFAQCreateWithoutCourseInput, MasterCourseFAQUncheckedCreateWithoutCourseInput>
  }

  export type MasterCourseFAQUpdateWithWhereUniqueWithoutCourseInput = {
    where: MasterCourseFAQWhereUniqueInput
    data: XOR<MasterCourseFAQUpdateWithoutCourseInput, MasterCourseFAQUncheckedUpdateWithoutCourseInput>
  }

  export type MasterCourseFAQUpdateManyWithWhereWithoutCourseInput = {
    where: MasterCourseFAQScalarWhereInput
    data: XOR<MasterCourseFAQUpdateManyMutationInput, MasterCourseFAQUncheckedUpdateManyWithoutCourseInput>
  }

  export type MasterCourseFAQScalarWhereInput = {
    AND?: MasterCourseFAQScalarWhereInput | MasterCourseFAQScalarWhereInput[]
    OR?: MasterCourseFAQScalarWhereInput[]
    NOT?: MasterCourseFAQScalarWhereInput | MasterCourseFAQScalarWhereInput[]
    id?: StringFilter<"MasterCourseFAQ"> | string
    courseId?: StringFilter<"MasterCourseFAQ"> | string
    question?: StringFilter<"MasterCourseFAQ"> | string
    answer?: StringFilter<"MasterCourseFAQ"> | string
    createdAt?: DateTimeFilter<"MasterCourseFAQ"> | Date | string
    updatedAt?: DateTimeFilter<"MasterCourseFAQ"> | Date | string
  }

  export type MasterCourseCreateWithoutCourseContentsInput = {
    id: string
    title?: string | null
    summary?: string | null
    description?: string | null
    targetAudience?: string | null
    difficulty?: string | null
    durationMin?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: MasterCategoryCreateNestedOneWithoutCoursesInput
    tags?: MasterTagCreateNestedManyWithoutCoursesInput
    relatedCourses?: MasterCourseCreateNestedManyWithoutRelatedToCoursesInput
    relatedToCourses?: MasterCourseCreateNestedManyWithoutRelatedCoursesInput
    courseFAQs?: MasterCourseFAQCreateNestedManyWithoutCourseInput
  }

  export type MasterCourseUncheckedCreateWithoutCourseContentsInput = {
    id: string
    title?: string | null
    summary?: string | null
    description?: string | null
    targetAudience?: string | null
    difficulty?: string | null
    durationMin?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    tags?: MasterTagUncheckedCreateNestedManyWithoutCoursesInput
    relatedCourses?: MasterCourseUncheckedCreateNestedManyWithoutRelatedToCoursesInput
    relatedToCourses?: MasterCourseUncheckedCreateNestedManyWithoutRelatedCoursesInput
    courseFAQs?: MasterCourseFAQUncheckedCreateNestedManyWithoutCourseInput
  }

  export type MasterCourseCreateOrConnectWithoutCourseContentsInput = {
    where: MasterCourseWhereUniqueInput
    create: XOR<MasterCourseCreateWithoutCourseContentsInput, MasterCourseUncheckedCreateWithoutCourseContentsInput>
  }

  export type MasterExerciseCreateWithoutCourseContentInput = {
    id: string
    exerciseType: string
    question: string
    options?: string | null
    correctAnswer?: string | null
    createdAt?: Date | string
  }

  export type MasterExerciseUncheckedCreateWithoutCourseContentInput = {
    id: string
    exerciseType: string
    question: string
    options?: string | null
    correctAnswer?: string | null
    createdAt?: Date | string
  }

  export type MasterExerciseCreateOrConnectWithoutCourseContentInput = {
    where: MasterExerciseWhereUniqueInput
    create: XOR<MasterExerciseCreateWithoutCourseContentInput, MasterExerciseUncheckedCreateWithoutCourseContentInput>
  }

  export type MasterExerciseCreateManyCourseContentInputEnvelope = {
    data: MasterExerciseCreateManyCourseContentInput | MasterExerciseCreateManyCourseContentInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessageCreateWithoutMasterCourseContentInput = {
    id: string
    role: string
    message: string
    createdAt?: Date | string
    chatRoom: ChatRoomCreateNestedOneWithoutChatMessageInput
    user?: UserCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutMasterCourseContentInput = {
    id: string
    chatRoomId: string
    userId?: string | null
    role: string
    message: string
    createdAt?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutMasterCourseContentInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutMasterCourseContentInput, ChatMessageUncheckedCreateWithoutMasterCourseContentInput>
  }

  export type ChatMessageCreateManyMasterCourseContentInputEnvelope = {
    data: ChatMessageCreateManyMasterCourseContentInput | ChatMessageCreateManyMasterCourseContentInput[]
    skipDuplicates?: boolean
  }

  export type ChatRoomCreateWithoutCourseContentInput = {
    id: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutChatRoomInput
    chatMessage?: ChatMessageCreateNestedManyWithoutChatRoomInput
  }

  export type ChatRoomUncheckedCreateWithoutCourseContentInput = {
    id: string
    userId: string
    createdAt?: Date | string
    chatMessage?: ChatMessageUncheckedCreateNestedManyWithoutChatRoomInput
  }

  export type ChatRoomCreateOrConnectWithoutCourseContentInput = {
    where: ChatRoomWhereUniqueInput
    create: XOR<ChatRoomCreateWithoutCourseContentInput, ChatRoomUncheckedCreateWithoutCourseContentInput>
  }

  export type ChatRoomCreateManyCourseContentInputEnvelope = {
    data: ChatRoomCreateManyCourseContentInput | ChatRoomCreateManyCourseContentInput[]
    skipDuplicates?: boolean
  }

  export type MasterCourseUpsertWithoutCourseContentsInput = {
    update: XOR<MasterCourseUpdateWithoutCourseContentsInput, MasterCourseUncheckedUpdateWithoutCourseContentsInput>
    create: XOR<MasterCourseCreateWithoutCourseContentsInput, MasterCourseUncheckedCreateWithoutCourseContentsInput>
    where?: MasterCourseWhereInput
  }

  export type MasterCourseUpdateToOneWithWhereWithoutCourseContentsInput = {
    where?: MasterCourseWhereInput
    data: XOR<MasterCourseUpdateWithoutCourseContentsInput, MasterCourseUncheckedUpdateWithoutCourseContentsInput>
  }

  export type MasterCourseUpdateWithoutCourseContentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetAudience?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    durationMin?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: MasterCategoryUpdateOneRequiredWithoutCoursesNestedInput
    tags?: MasterTagUpdateManyWithoutCoursesNestedInput
    relatedCourses?: MasterCourseUpdateManyWithoutRelatedToCoursesNestedInput
    relatedToCourses?: MasterCourseUpdateManyWithoutRelatedCoursesNestedInput
    courseFAQs?: MasterCourseFAQUpdateManyWithoutCourseNestedInput
  }

  export type MasterCourseUncheckedUpdateWithoutCourseContentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetAudience?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    durationMin?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    tags?: MasterTagUncheckedUpdateManyWithoutCoursesNestedInput
    relatedCourses?: MasterCourseUncheckedUpdateManyWithoutRelatedToCoursesNestedInput
    relatedToCourses?: MasterCourseUncheckedUpdateManyWithoutRelatedCoursesNestedInput
    courseFAQs?: MasterCourseFAQUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type MasterExerciseUpsertWithWhereUniqueWithoutCourseContentInput = {
    where: MasterExerciseWhereUniqueInput
    update: XOR<MasterExerciseUpdateWithoutCourseContentInput, MasterExerciseUncheckedUpdateWithoutCourseContentInput>
    create: XOR<MasterExerciseCreateWithoutCourseContentInput, MasterExerciseUncheckedCreateWithoutCourseContentInput>
  }

  export type MasterExerciseUpdateWithWhereUniqueWithoutCourseContentInput = {
    where: MasterExerciseWhereUniqueInput
    data: XOR<MasterExerciseUpdateWithoutCourseContentInput, MasterExerciseUncheckedUpdateWithoutCourseContentInput>
  }

  export type MasterExerciseUpdateManyWithWhereWithoutCourseContentInput = {
    where: MasterExerciseScalarWhereInput
    data: XOR<MasterExerciseUpdateManyMutationInput, MasterExerciseUncheckedUpdateManyWithoutCourseContentInput>
  }

  export type MasterExerciseScalarWhereInput = {
    AND?: MasterExerciseScalarWhereInput | MasterExerciseScalarWhereInput[]
    OR?: MasterExerciseScalarWhereInput[]
    NOT?: MasterExerciseScalarWhereInput | MasterExerciseScalarWhereInput[]
    id?: StringFilter<"MasterExercise"> | string
    courseContentId?: StringFilter<"MasterExercise"> | string
    exerciseType?: StringFilter<"MasterExercise"> | string
    question?: StringFilter<"MasterExercise"> | string
    options?: StringNullableFilter<"MasterExercise"> | string | null
    correctAnswer?: StringNullableFilter<"MasterExercise"> | string | null
    createdAt?: DateTimeFilter<"MasterExercise"> | Date | string
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutMasterCourseContentInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutMasterCourseContentInput, ChatMessageUncheckedUpdateWithoutMasterCourseContentInput>
    create: XOR<ChatMessageCreateWithoutMasterCourseContentInput, ChatMessageUncheckedCreateWithoutMasterCourseContentInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutMasterCourseContentInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutMasterCourseContentInput, ChatMessageUncheckedUpdateWithoutMasterCourseContentInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutMasterCourseContentInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutMasterCourseContentInput>
  }

  export type ChatRoomUpsertWithWhereUniqueWithoutCourseContentInput = {
    where: ChatRoomWhereUniqueInput
    update: XOR<ChatRoomUpdateWithoutCourseContentInput, ChatRoomUncheckedUpdateWithoutCourseContentInput>
    create: XOR<ChatRoomCreateWithoutCourseContentInput, ChatRoomUncheckedCreateWithoutCourseContentInput>
  }

  export type ChatRoomUpdateWithWhereUniqueWithoutCourseContentInput = {
    where: ChatRoomWhereUniqueInput
    data: XOR<ChatRoomUpdateWithoutCourseContentInput, ChatRoomUncheckedUpdateWithoutCourseContentInput>
  }

  export type ChatRoomUpdateManyWithWhereWithoutCourseContentInput = {
    where: ChatRoomScalarWhereInput
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyWithoutCourseContentInput>
  }

  export type MasterCourseContentCreateWithoutExercisesInput = {
    id: string
    sequence: number
    title?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    course: MasterCourseCreateNestedOneWithoutCourseContentsInput
    chatMessages?: ChatMessageCreateNestedManyWithoutMasterCourseContentInput
    chatRoom?: ChatRoomCreateNestedManyWithoutCourseContentInput
  }

  export type MasterCourseContentUncheckedCreateWithoutExercisesInput = {
    id: string
    courseId: string
    sequence: number
    title?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutMasterCourseContentInput
    chatRoom?: ChatRoomUncheckedCreateNestedManyWithoutCourseContentInput
  }

  export type MasterCourseContentCreateOrConnectWithoutExercisesInput = {
    where: MasterCourseContentWhereUniqueInput
    create: XOR<MasterCourseContentCreateWithoutExercisesInput, MasterCourseContentUncheckedCreateWithoutExercisesInput>
  }

  export type MasterCourseContentUpsertWithoutExercisesInput = {
    update: XOR<MasterCourseContentUpdateWithoutExercisesInput, MasterCourseContentUncheckedUpdateWithoutExercisesInput>
    create: XOR<MasterCourseContentCreateWithoutExercisesInput, MasterCourseContentUncheckedCreateWithoutExercisesInput>
    where?: MasterCourseContentWhereInput
  }

  export type MasterCourseContentUpdateToOneWithWhereWithoutExercisesInput = {
    where?: MasterCourseContentWhereInput
    data: XOR<MasterCourseContentUpdateWithoutExercisesInput, MasterCourseContentUncheckedUpdateWithoutExercisesInput>
  }

  export type MasterCourseContentUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: MasterCourseUpdateOneRequiredWithoutCourseContentsNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutMasterCourseContentNestedInput
    chatRoom?: ChatRoomUpdateManyWithoutCourseContentNestedInput
  }

  export type MasterCourseContentUncheckedUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutMasterCourseContentNestedInput
    chatRoom?: ChatRoomUncheckedUpdateManyWithoutCourseContentNestedInput
  }

  export type UserCreateWithoutChatRoomInput = {
    id: string
    displayId: string
    firebaseUserId: string
    stripeUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
    examSubmissions?: ExamSubmissionCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatRoomInput = {
    id: string
    displayId: string
    firebaseUserId: string
    stripeUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
    examSubmissions?: ExamSubmissionUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatRoomInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatRoomInput, UserUncheckedCreateWithoutChatRoomInput>
  }

  export type MasterCourseContentCreateWithoutChatRoomInput = {
    id: string
    sequence: number
    title?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    course: MasterCourseCreateNestedOneWithoutCourseContentsInput
    exercises?: MasterExerciseCreateNestedManyWithoutCourseContentInput
    chatMessages?: ChatMessageCreateNestedManyWithoutMasterCourseContentInput
  }

  export type MasterCourseContentUncheckedCreateWithoutChatRoomInput = {
    id: string
    courseId: string
    sequence: number
    title?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    exercises?: MasterExerciseUncheckedCreateNestedManyWithoutCourseContentInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutMasterCourseContentInput
  }

  export type MasterCourseContentCreateOrConnectWithoutChatRoomInput = {
    where: MasterCourseContentWhereUniqueInput
    create: XOR<MasterCourseContentCreateWithoutChatRoomInput, MasterCourseContentUncheckedCreateWithoutChatRoomInput>
  }

  export type ChatMessageCreateWithoutChatRoomInput = {
    id: string
    role: string
    message: string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutChatMessagesInput
    MasterCourseContent?: MasterCourseContentCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutChatRoomInput = {
    id: string
    userId?: string | null
    role: string
    message: string
    createdAt?: Date | string
    masterCourseContentId?: string | null
  }

  export type ChatMessageCreateOrConnectWithoutChatRoomInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutChatRoomInput, ChatMessageUncheckedCreateWithoutChatRoomInput>
  }

  export type ChatMessageCreateManyChatRoomInputEnvelope = {
    data: ChatMessageCreateManyChatRoomInput | ChatMessageCreateManyChatRoomInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutChatRoomInput = {
    update: XOR<UserUpdateWithoutChatRoomInput, UserUncheckedUpdateWithoutChatRoomInput>
    create: XOR<UserCreateWithoutChatRoomInput, UserUncheckedCreateWithoutChatRoomInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatRoomInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatRoomInput, UserUncheckedUpdateWithoutChatRoomInput>
  }

  export type UserUpdateWithoutChatRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayId?: StringFieldUpdateOperationsInput | string
    firebaseUserId?: StringFieldUpdateOperationsInput | string
    stripeUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    examSubmissions?: ExamSubmissionUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayId?: StringFieldUpdateOperationsInput | string
    firebaseUserId?: StringFieldUpdateOperationsInput | string
    stripeUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    examSubmissions?: ExamSubmissionUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MasterCourseContentUpsertWithoutChatRoomInput = {
    update: XOR<MasterCourseContentUpdateWithoutChatRoomInput, MasterCourseContentUncheckedUpdateWithoutChatRoomInput>
    create: XOR<MasterCourseContentCreateWithoutChatRoomInput, MasterCourseContentUncheckedCreateWithoutChatRoomInput>
    where?: MasterCourseContentWhereInput
  }

  export type MasterCourseContentUpdateToOneWithWhereWithoutChatRoomInput = {
    where?: MasterCourseContentWhereInput
    data: XOR<MasterCourseContentUpdateWithoutChatRoomInput, MasterCourseContentUncheckedUpdateWithoutChatRoomInput>
  }

  export type MasterCourseContentUpdateWithoutChatRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: MasterCourseUpdateOneRequiredWithoutCourseContentsNestedInput
    exercises?: MasterExerciseUpdateManyWithoutCourseContentNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutMasterCourseContentNestedInput
  }

  export type MasterCourseContentUncheckedUpdateWithoutChatRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercises?: MasterExerciseUncheckedUpdateManyWithoutCourseContentNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutMasterCourseContentNestedInput
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutChatRoomInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutChatRoomInput, ChatMessageUncheckedUpdateWithoutChatRoomInput>
    create: XOR<ChatMessageCreateWithoutChatRoomInput, ChatMessageUncheckedCreateWithoutChatRoomInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutChatRoomInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutChatRoomInput, ChatMessageUncheckedUpdateWithoutChatRoomInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutChatRoomInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutChatRoomInput>
  }

  export type ChatRoomCreateWithoutChatMessageInput = {
    id: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutChatRoomInput
    courseContent: MasterCourseContentCreateNestedOneWithoutChatRoomInput
  }

  export type ChatRoomUncheckedCreateWithoutChatMessageInput = {
    id: string
    userId: string
    courseContentId: string
    createdAt?: Date | string
  }

  export type ChatRoomCreateOrConnectWithoutChatMessageInput = {
    where: ChatRoomWhereUniqueInput
    create: XOR<ChatRoomCreateWithoutChatMessageInput, ChatRoomUncheckedCreateWithoutChatMessageInput>
  }

  export type UserCreateWithoutChatMessagesInput = {
    id: string
    displayId: string
    firebaseUserId: string
    stripeUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
    examSubmissions?: ExamSubmissionCreateNestedManyWithoutUserInput
    chatRoom?: ChatRoomCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatMessagesInput = {
    id: string
    displayId: string
    firebaseUserId: string
    stripeUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
    examSubmissions?: ExamSubmissionUncheckedCreateNestedManyWithoutUserInput
    chatRoom?: ChatRoomUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
  }

  export type MasterCourseContentCreateWithoutChatMessagesInput = {
    id: string
    sequence: number
    title?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    course: MasterCourseCreateNestedOneWithoutCourseContentsInput
    exercises?: MasterExerciseCreateNestedManyWithoutCourseContentInput
    chatRoom?: ChatRoomCreateNestedManyWithoutCourseContentInput
  }

  export type MasterCourseContentUncheckedCreateWithoutChatMessagesInput = {
    id: string
    courseId: string
    sequence: number
    title?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    exercises?: MasterExerciseUncheckedCreateNestedManyWithoutCourseContentInput
    chatRoom?: ChatRoomUncheckedCreateNestedManyWithoutCourseContentInput
  }

  export type MasterCourseContentCreateOrConnectWithoutChatMessagesInput = {
    where: MasterCourseContentWhereUniqueInput
    create: XOR<MasterCourseContentCreateWithoutChatMessagesInput, MasterCourseContentUncheckedCreateWithoutChatMessagesInput>
  }

  export type ChatRoomUpsertWithoutChatMessageInput = {
    update: XOR<ChatRoomUpdateWithoutChatMessageInput, ChatRoomUncheckedUpdateWithoutChatMessageInput>
    create: XOR<ChatRoomCreateWithoutChatMessageInput, ChatRoomUncheckedCreateWithoutChatMessageInput>
    where?: ChatRoomWhereInput
  }

  export type ChatRoomUpdateToOneWithWhereWithoutChatMessageInput = {
    where?: ChatRoomWhereInput
    data: XOR<ChatRoomUpdateWithoutChatMessageInput, ChatRoomUncheckedUpdateWithoutChatMessageInput>
  }

  export type ChatRoomUpdateWithoutChatMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatRoomNestedInput
    courseContent?: MasterCourseContentUpdateOneRequiredWithoutChatRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateWithoutChatMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseContentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutChatMessagesInput = {
    update: XOR<UserUpdateWithoutChatMessagesInput, UserUncheckedUpdateWithoutChatMessagesInput>
    create: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatMessagesInput, UserUncheckedUpdateWithoutChatMessagesInput>
  }

  export type UserUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayId?: StringFieldUpdateOperationsInput | string
    firebaseUserId?: StringFieldUpdateOperationsInput | string
    stripeUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    examSubmissions?: ExamSubmissionUpdateManyWithoutUserNestedInput
    chatRoom?: ChatRoomUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayId?: StringFieldUpdateOperationsInput | string
    firebaseUserId?: StringFieldUpdateOperationsInput | string
    stripeUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    examSubmissions?: ExamSubmissionUncheckedUpdateManyWithoutUserNestedInput
    chatRoom?: ChatRoomUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MasterCourseContentUpsertWithoutChatMessagesInput = {
    update: XOR<MasterCourseContentUpdateWithoutChatMessagesInput, MasterCourseContentUncheckedUpdateWithoutChatMessagesInput>
    create: XOR<MasterCourseContentCreateWithoutChatMessagesInput, MasterCourseContentUncheckedCreateWithoutChatMessagesInput>
    where?: MasterCourseContentWhereInput
  }

  export type MasterCourseContentUpdateToOneWithWhereWithoutChatMessagesInput = {
    where?: MasterCourseContentWhereInput
    data: XOR<MasterCourseContentUpdateWithoutChatMessagesInput, MasterCourseContentUncheckedUpdateWithoutChatMessagesInput>
  }

  export type MasterCourseContentUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: MasterCourseUpdateOneRequiredWithoutCourseContentsNestedInput
    exercises?: MasterExerciseUpdateManyWithoutCourseContentNestedInput
    chatRoom?: ChatRoomUpdateManyWithoutCourseContentNestedInput
  }

  export type MasterCourseContentUncheckedUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercises?: MasterExerciseUncheckedUpdateManyWithoutCourseContentNestedInput
    chatRoom?: ChatRoomUncheckedUpdateManyWithoutCourseContentNestedInput
  }

  export type MasterCourseCreateWithoutCourseFAQsInput = {
    id: string
    title?: string | null
    summary?: string | null
    description?: string | null
    targetAudience?: string | null
    difficulty?: string | null
    durationMin?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: MasterCategoryCreateNestedOneWithoutCoursesInput
    tags?: MasterTagCreateNestedManyWithoutCoursesInput
    courseContents?: MasterCourseContentCreateNestedManyWithoutCourseInput
    relatedCourses?: MasterCourseCreateNestedManyWithoutRelatedToCoursesInput
    relatedToCourses?: MasterCourseCreateNestedManyWithoutRelatedCoursesInput
  }

  export type MasterCourseUncheckedCreateWithoutCourseFAQsInput = {
    id: string
    title?: string | null
    summary?: string | null
    description?: string | null
    targetAudience?: string | null
    difficulty?: string | null
    durationMin?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    tags?: MasterTagUncheckedCreateNestedManyWithoutCoursesInput
    courseContents?: MasterCourseContentUncheckedCreateNestedManyWithoutCourseInput
    relatedCourses?: MasterCourseUncheckedCreateNestedManyWithoutRelatedToCoursesInput
    relatedToCourses?: MasterCourseUncheckedCreateNestedManyWithoutRelatedCoursesInput
  }

  export type MasterCourseCreateOrConnectWithoutCourseFAQsInput = {
    where: MasterCourseWhereUniqueInput
    create: XOR<MasterCourseCreateWithoutCourseFAQsInput, MasterCourseUncheckedCreateWithoutCourseFAQsInput>
  }

  export type MasterCourseUpsertWithoutCourseFAQsInput = {
    update: XOR<MasterCourseUpdateWithoutCourseFAQsInput, MasterCourseUncheckedUpdateWithoutCourseFAQsInput>
    create: XOR<MasterCourseCreateWithoutCourseFAQsInput, MasterCourseUncheckedCreateWithoutCourseFAQsInput>
    where?: MasterCourseWhereInput
  }

  export type MasterCourseUpdateToOneWithWhereWithoutCourseFAQsInput = {
    where?: MasterCourseWhereInput
    data: XOR<MasterCourseUpdateWithoutCourseFAQsInput, MasterCourseUncheckedUpdateWithoutCourseFAQsInput>
  }

  export type MasterCourseUpdateWithoutCourseFAQsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetAudience?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    durationMin?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: MasterCategoryUpdateOneRequiredWithoutCoursesNestedInput
    tags?: MasterTagUpdateManyWithoutCoursesNestedInput
    courseContents?: MasterCourseContentUpdateManyWithoutCourseNestedInput
    relatedCourses?: MasterCourseUpdateManyWithoutRelatedToCoursesNestedInput
    relatedToCourses?: MasterCourseUpdateManyWithoutRelatedCoursesNestedInput
  }

  export type MasterCourseUncheckedUpdateWithoutCourseFAQsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetAudience?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    durationMin?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    tags?: MasterTagUncheckedUpdateManyWithoutCoursesNestedInput
    courseContents?: MasterCourseContentUncheckedUpdateManyWithoutCourseNestedInput
    relatedCourses?: MasterCourseUncheckedUpdateManyWithoutRelatedToCoursesNestedInput
    relatedToCourses?: MasterCourseUncheckedUpdateManyWithoutRelatedCoursesNestedInput
  }

  export type MasterCategoryCreateWithoutExamsInput = {
    id: string
    name: string
    level: number
    parent?: MasterCategoryCreateNestedOneWithoutChildrenInput
    children?: MasterCategoryCreateNestedManyWithoutParentInput
    courses?: MasterCourseCreateNestedManyWithoutCategoryInput
  }

  export type MasterCategoryUncheckedCreateWithoutExamsInput = {
    id: string
    name: string
    level: number
    parentId?: string | null
    children?: MasterCategoryUncheckedCreateNestedManyWithoutParentInput
    courses?: MasterCourseUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type MasterCategoryCreateOrConnectWithoutExamsInput = {
    where: MasterCategoryWhereUniqueInput
    create: XOR<MasterCategoryCreateWithoutExamsInput, MasterCategoryUncheckedCreateWithoutExamsInput>
  }

  export type MasterExamQuestionCreateWithoutExamInput = {
    id: string
    question: string
    questionType: string
    options?: string | null
    correctAnswer?: string | null
    createdAt?: Date | string
    ExamAnswer?: ExamAnswerCreateNestedManyWithoutExamQuestionInput
  }

  export type MasterExamQuestionUncheckedCreateWithoutExamInput = {
    id: string
    question: string
    questionType: string
    options?: string | null
    correctAnswer?: string | null
    createdAt?: Date | string
    ExamAnswer?: ExamAnswerUncheckedCreateNestedManyWithoutExamQuestionInput
  }

  export type MasterExamQuestionCreateOrConnectWithoutExamInput = {
    where: MasterExamQuestionWhereUniqueInput
    create: XOR<MasterExamQuestionCreateWithoutExamInput, MasterExamQuestionUncheckedCreateWithoutExamInput>
  }

  export type MasterExamQuestionCreateManyExamInputEnvelope = {
    data: MasterExamQuestionCreateManyExamInput | MasterExamQuestionCreateManyExamInput[]
    skipDuplicates?: boolean
  }

  export type ExamSubmissionCreateWithoutExamInput = {
    id: string
    submittedAt?: Date | string
    score: number
    percentile: number
    user: UserCreateNestedOneWithoutExamSubmissionsInput
    examAnswers?: ExamAnswerCreateNestedManyWithoutExamSubmissionInput
  }

  export type ExamSubmissionUncheckedCreateWithoutExamInput = {
    id: string
    userId: string
    submittedAt?: Date | string
    score: number
    percentile: number
    examAnswers?: ExamAnswerUncheckedCreateNestedManyWithoutExamSubmissionInput
  }

  export type ExamSubmissionCreateOrConnectWithoutExamInput = {
    where: ExamSubmissionWhereUniqueInput
    create: XOR<ExamSubmissionCreateWithoutExamInput, ExamSubmissionUncheckedCreateWithoutExamInput>
  }

  export type ExamSubmissionCreateManyExamInputEnvelope = {
    data: ExamSubmissionCreateManyExamInput | ExamSubmissionCreateManyExamInput[]
    skipDuplicates?: boolean
  }

  export type MasterCategoryUpsertWithoutExamsInput = {
    update: XOR<MasterCategoryUpdateWithoutExamsInput, MasterCategoryUncheckedUpdateWithoutExamsInput>
    create: XOR<MasterCategoryCreateWithoutExamsInput, MasterCategoryUncheckedCreateWithoutExamsInput>
    where?: MasterCategoryWhereInput
  }

  export type MasterCategoryUpdateToOneWithWhereWithoutExamsInput = {
    where?: MasterCategoryWhereInput
    data: XOR<MasterCategoryUpdateWithoutExamsInput, MasterCategoryUncheckedUpdateWithoutExamsInput>
  }

  export type MasterCategoryUpdateWithoutExamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    parent?: MasterCategoryUpdateOneWithoutChildrenNestedInput
    children?: MasterCategoryUpdateManyWithoutParentNestedInput
    courses?: MasterCourseUpdateManyWithoutCategoryNestedInput
  }

  export type MasterCategoryUncheckedUpdateWithoutExamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: MasterCategoryUncheckedUpdateManyWithoutParentNestedInput
    courses?: MasterCourseUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type MasterExamQuestionUpsertWithWhereUniqueWithoutExamInput = {
    where: MasterExamQuestionWhereUniqueInput
    update: XOR<MasterExamQuestionUpdateWithoutExamInput, MasterExamQuestionUncheckedUpdateWithoutExamInput>
    create: XOR<MasterExamQuestionCreateWithoutExamInput, MasterExamQuestionUncheckedCreateWithoutExamInput>
  }

  export type MasterExamQuestionUpdateWithWhereUniqueWithoutExamInput = {
    where: MasterExamQuestionWhereUniqueInput
    data: XOR<MasterExamQuestionUpdateWithoutExamInput, MasterExamQuestionUncheckedUpdateWithoutExamInput>
  }

  export type MasterExamQuestionUpdateManyWithWhereWithoutExamInput = {
    where: MasterExamQuestionScalarWhereInput
    data: XOR<MasterExamQuestionUpdateManyMutationInput, MasterExamQuestionUncheckedUpdateManyWithoutExamInput>
  }

  export type MasterExamQuestionScalarWhereInput = {
    AND?: MasterExamQuestionScalarWhereInput | MasterExamQuestionScalarWhereInput[]
    OR?: MasterExamQuestionScalarWhereInput[]
    NOT?: MasterExamQuestionScalarWhereInput | MasterExamQuestionScalarWhereInput[]
    id?: StringFilter<"MasterExamQuestion"> | string
    examId?: StringFilter<"MasterExamQuestion"> | string
    question?: StringFilter<"MasterExamQuestion"> | string
    questionType?: StringFilter<"MasterExamQuestion"> | string
    options?: StringNullableFilter<"MasterExamQuestion"> | string | null
    correctAnswer?: StringNullableFilter<"MasterExamQuestion"> | string | null
    createdAt?: DateTimeFilter<"MasterExamQuestion"> | Date | string
  }

  export type ExamSubmissionUpsertWithWhereUniqueWithoutExamInput = {
    where: ExamSubmissionWhereUniqueInput
    update: XOR<ExamSubmissionUpdateWithoutExamInput, ExamSubmissionUncheckedUpdateWithoutExamInput>
    create: XOR<ExamSubmissionCreateWithoutExamInput, ExamSubmissionUncheckedCreateWithoutExamInput>
  }

  export type ExamSubmissionUpdateWithWhereUniqueWithoutExamInput = {
    where: ExamSubmissionWhereUniqueInput
    data: XOR<ExamSubmissionUpdateWithoutExamInput, ExamSubmissionUncheckedUpdateWithoutExamInput>
  }

  export type ExamSubmissionUpdateManyWithWhereWithoutExamInput = {
    where: ExamSubmissionScalarWhereInput
    data: XOR<ExamSubmissionUpdateManyMutationInput, ExamSubmissionUncheckedUpdateManyWithoutExamInput>
  }

  export type MasterExamCreateWithoutExamQuestionsInput = {
    id: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: MasterCategoryCreateNestedOneWithoutExamsInput
    ExamSubmission?: ExamSubmissionCreateNestedManyWithoutExamInput
  }

  export type MasterExamUncheckedCreateWithoutExamQuestionsInput = {
    id: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    ExamSubmission?: ExamSubmissionUncheckedCreateNestedManyWithoutExamInput
  }

  export type MasterExamCreateOrConnectWithoutExamQuestionsInput = {
    where: MasterExamWhereUniqueInput
    create: XOR<MasterExamCreateWithoutExamQuestionsInput, MasterExamUncheckedCreateWithoutExamQuestionsInput>
  }

  export type ExamAnswerCreateWithoutExamQuestionInput = {
    id: string
    answer: string
    isCorrect: boolean
    examSubmission: ExamSubmissionCreateNestedOneWithoutExamAnswersInput
  }

  export type ExamAnswerUncheckedCreateWithoutExamQuestionInput = {
    id: string
    examSubmissionId: string
    answer: string
    isCorrect: boolean
  }

  export type ExamAnswerCreateOrConnectWithoutExamQuestionInput = {
    where: ExamAnswerWhereUniqueInput
    create: XOR<ExamAnswerCreateWithoutExamQuestionInput, ExamAnswerUncheckedCreateWithoutExamQuestionInput>
  }

  export type ExamAnswerCreateManyExamQuestionInputEnvelope = {
    data: ExamAnswerCreateManyExamQuestionInput | ExamAnswerCreateManyExamQuestionInput[]
    skipDuplicates?: boolean
  }

  export type MasterExamUpsertWithoutExamQuestionsInput = {
    update: XOR<MasterExamUpdateWithoutExamQuestionsInput, MasterExamUncheckedUpdateWithoutExamQuestionsInput>
    create: XOR<MasterExamCreateWithoutExamQuestionsInput, MasterExamUncheckedCreateWithoutExamQuestionsInput>
    where?: MasterExamWhereInput
  }

  export type MasterExamUpdateToOneWithWhereWithoutExamQuestionsInput = {
    where?: MasterExamWhereInput
    data: XOR<MasterExamUpdateWithoutExamQuestionsInput, MasterExamUncheckedUpdateWithoutExamQuestionsInput>
  }

  export type MasterExamUpdateWithoutExamQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: MasterCategoryUpdateOneRequiredWithoutExamsNestedInput
    ExamSubmission?: ExamSubmissionUpdateManyWithoutExamNestedInput
  }

  export type MasterExamUncheckedUpdateWithoutExamQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    ExamSubmission?: ExamSubmissionUncheckedUpdateManyWithoutExamNestedInput
  }

  export type ExamAnswerUpsertWithWhereUniqueWithoutExamQuestionInput = {
    where: ExamAnswerWhereUniqueInput
    update: XOR<ExamAnswerUpdateWithoutExamQuestionInput, ExamAnswerUncheckedUpdateWithoutExamQuestionInput>
    create: XOR<ExamAnswerCreateWithoutExamQuestionInput, ExamAnswerUncheckedCreateWithoutExamQuestionInput>
  }

  export type ExamAnswerUpdateWithWhereUniqueWithoutExamQuestionInput = {
    where: ExamAnswerWhereUniqueInput
    data: XOR<ExamAnswerUpdateWithoutExamQuestionInput, ExamAnswerUncheckedUpdateWithoutExamQuestionInput>
  }

  export type ExamAnswerUpdateManyWithWhereWithoutExamQuestionInput = {
    where: ExamAnswerScalarWhereInput
    data: XOR<ExamAnswerUpdateManyMutationInput, ExamAnswerUncheckedUpdateManyWithoutExamQuestionInput>
  }

  export type ExamAnswerScalarWhereInput = {
    AND?: ExamAnswerScalarWhereInput | ExamAnswerScalarWhereInput[]
    OR?: ExamAnswerScalarWhereInput[]
    NOT?: ExamAnswerScalarWhereInput | ExamAnswerScalarWhereInput[]
    id?: StringFilter<"ExamAnswer"> | string
    examSubmissionId?: StringFilter<"ExamAnswer"> | string
    examQuestionId?: StringFilter<"ExamAnswer"> | string
    answer?: StringFilter<"ExamAnswer"> | string
    isCorrect?: BoolFilter<"ExamAnswer"> | boolean
  }

  export type MasterExamCreateWithoutExamSubmissionInput = {
    id: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: MasterCategoryCreateNestedOneWithoutExamsInput
    examQuestions?: MasterExamQuestionCreateNestedManyWithoutExamInput
  }

  export type MasterExamUncheckedCreateWithoutExamSubmissionInput = {
    id: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    examQuestions?: MasterExamQuestionUncheckedCreateNestedManyWithoutExamInput
  }

  export type MasterExamCreateOrConnectWithoutExamSubmissionInput = {
    where: MasterExamWhereUniqueInput
    create: XOR<MasterExamCreateWithoutExamSubmissionInput, MasterExamUncheckedCreateWithoutExamSubmissionInput>
  }

  export type UserCreateWithoutExamSubmissionsInput = {
    id: string
    displayId: string
    firebaseUserId: string
    stripeUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    chatRoom?: ChatRoomCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutExamSubmissionsInput = {
    id: string
    displayId: string
    firebaseUserId: string
    stripeUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    chatRoom?: ChatRoomUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutExamSubmissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExamSubmissionsInput, UserUncheckedCreateWithoutExamSubmissionsInput>
  }

  export type ExamAnswerCreateWithoutExamSubmissionInput = {
    id: string
    answer: string
    isCorrect: boolean
    examQuestion: MasterExamQuestionCreateNestedOneWithoutExamAnswerInput
  }

  export type ExamAnswerUncheckedCreateWithoutExamSubmissionInput = {
    id: string
    examQuestionId: string
    answer: string
    isCorrect: boolean
  }

  export type ExamAnswerCreateOrConnectWithoutExamSubmissionInput = {
    where: ExamAnswerWhereUniqueInput
    create: XOR<ExamAnswerCreateWithoutExamSubmissionInput, ExamAnswerUncheckedCreateWithoutExamSubmissionInput>
  }

  export type ExamAnswerCreateManyExamSubmissionInputEnvelope = {
    data: ExamAnswerCreateManyExamSubmissionInput | ExamAnswerCreateManyExamSubmissionInput[]
    skipDuplicates?: boolean
  }

  export type MasterExamUpsertWithoutExamSubmissionInput = {
    update: XOR<MasterExamUpdateWithoutExamSubmissionInput, MasterExamUncheckedUpdateWithoutExamSubmissionInput>
    create: XOR<MasterExamCreateWithoutExamSubmissionInput, MasterExamUncheckedCreateWithoutExamSubmissionInput>
    where?: MasterExamWhereInput
  }

  export type MasterExamUpdateToOneWithWhereWithoutExamSubmissionInput = {
    where?: MasterExamWhereInput
    data: XOR<MasterExamUpdateWithoutExamSubmissionInput, MasterExamUncheckedUpdateWithoutExamSubmissionInput>
  }

  export type MasterExamUpdateWithoutExamSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: MasterCategoryUpdateOneRequiredWithoutExamsNestedInput
    examQuestions?: MasterExamQuestionUpdateManyWithoutExamNestedInput
  }

  export type MasterExamUncheckedUpdateWithoutExamSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    examQuestions?: MasterExamQuestionUncheckedUpdateManyWithoutExamNestedInput
  }

  export type UserUpsertWithoutExamSubmissionsInput = {
    update: XOR<UserUpdateWithoutExamSubmissionsInput, UserUncheckedUpdateWithoutExamSubmissionsInput>
    create: XOR<UserCreateWithoutExamSubmissionsInput, UserUncheckedCreateWithoutExamSubmissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExamSubmissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExamSubmissionsInput, UserUncheckedUpdateWithoutExamSubmissionsInput>
  }

  export type UserUpdateWithoutExamSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayId?: StringFieldUpdateOperationsInput | string
    firebaseUserId?: StringFieldUpdateOperationsInput | string
    stripeUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    chatRoom?: ChatRoomUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutExamSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayId?: StringFieldUpdateOperationsInput | string
    firebaseUserId?: StringFieldUpdateOperationsInput | string
    stripeUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    chatRoom?: ChatRoomUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ExamAnswerUpsertWithWhereUniqueWithoutExamSubmissionInput = {
    where: ExamAnswerWhereUniqueInput
    update: XOR<ExamAnswerUpdateWithoutExamSubmissionInput, ExamAnswerUncheckedUpdateWithoutExamSubmissionInput>
    create: XOR<ExamAnswerCreateWithoutExamSubmissionInput, ExamAnswerUncheckedCreateWithoutExamSubmissionInput>
  }

  export type ExamAnswerUpdateWithWhereUniqueWithoutExamSubmissionInput = {
    where: ExamAnswerWhereUniqueInput
    data: XOR<ExamAnswerUpdateWithoutExamSubmissionInput, ExamAnswerUncheckedUpdateWithoutExamSubmissionInput>
  }

  export type ExamAnswerUpdateManyWithWhereWithoutExamSubmissionInput = {
    where: ExamAnswerScalarWhereInput
    data: XOR<ExamAnswerUpdateManyMutationInput, ExamAnswerUncheckedUpdateManyWithoutExamSubmissionInput>
  }

  export type ExamSubmissionCreateWithoutExamAnswersInput = {
    id: string
    submittedAt?: Date | string
    score: number
    percentile: number
    exam: MasterExamCreateNestedOneWithoutExamSubmissionInput
    user: UserCreateNestedOneWithoutExamSubmissionsInput
  }

  export type ExamSubmissionUncheckedCreateWithoutExamAnswersInput = {
    id: string
    examId: string
    userId: string
    submittedAt?: Date | string
    score: number
    percentile: number
  }

  export type ExamSubmissionCreateOrConnectWithoutExamAnswersInput = {
    where: ExamSubmissionWhereUniqueInput
    create: XOR<ExamSubmissionCreateWithoutExamAnswersInput, ExamSubmissionUncheckedCreateWithoutExamAnswersInput>
  }

  export type MasterExamQuestionCreateWithoutExamAnswerInput = {
    id: string
    question: string
    questionType: string
    options?: string | null
    correctAnswer?: string | null
    createdAt?: Date | string
    exam: MasterExamCreateNestedOneWithoutExamQuestionsInput
  }

  export type MasterExamQuestionUncheckedCreateWithoutExamAnswerInput = {
    id: string
    examId: string
    question: string
    questionType: string
    options?: string | null
    correctAnswer?: string | null
    createdAt?: Date | string
  }

  export type MasterExamQuestionCreateOrConnectWithoutExamAnswerInput = {
    where: MasterExamQuestionWhereUniqueInput
    create: XOR<MasterExamQuestionCreateWithoutExamAnswerInput, MasterExamQuestionUncheckedCreateWithoutExamAnswerInput>
  }

  export type ExamSubmissionUpsertWithoutExamAnswersInput = {
    update: XOR<ExamSubmissionUpdateWithoutExamAnswersInput, ExamSubmissionUncheckedUpdateWithoutExamAnswersInput>
    create: XOR<ExamSubmissionCreateWithoutExamAnswersInput, ExamSubmissionUncheckedCreateWithoutExamAnswersInput>
    where?: ExamSubmissionWhereInput
  }

  export type ExamSubmissionUpdateToOneWithWhereWithoutExamAnswersInput = {
    where?: ExamSubmissionWhereInput
    data: XOR<ExamSubmissionUpdateWithoutExamAnswersInput, ExamSubmissionUncheckedUpdateWithoutExamAnswersInput>
  }

  export type ExamSubmissionUpdateWithoutExamAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    percentile?: FloatFieldUpdateOperationsInput | number
    exam?: MasterExamUpdateOneRequiredWithoutExamSubmissionNestedInput
    user?: UserUpdateOneRequiredWithoutExamSubmissionsNestedInput
  }

  export type ExamSubmissionUncheckedUpdateWithoutExamAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    percentile?: FloatFieldUpdateOperationsInput | number
  }

  export type MasterExamQuestionUpsertWithoutExamAnswerInput = {
    update: XOR<MasterExamQuestionUpdateWithoutExamAnswerInput, MasterExamQuestionUncheckedUpdateWithoutExamAnswerInput>
    create: XOR<MasterExamQuestionCreateWithoutExamAnswerInput, MasterExamQuestionUncheckedCreateWithoutExamAnswerInput>
    where?: MasterExamQuestionWhereInput
  }

  export type MasterExamQuestionUpdateToOneWithWhereWithoutExamAnswerInput = {
    where?: MasterExamQuestionWhereInput
    data: XOR<MasterExamQuestionUpdateWithoutExamAnswerInput, MasterExamQuestionUncheckedUpdateWithoutExamAnswerInput>
  }

  export type MasterExamQuestionUpdateWithoutExamAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    questionType?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exam?: MasterExamUpdateOneRequiredWithoutExamQuestionsNestedInput
  }

  export type MasterExamQuestionUncheckedUpdateWithoutExamAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    questionType?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamSubmissionCreateManyUserInput = {
    id: string
    examId: string
    submittedAt?: Date | string
    score: number
    percentile: number
  }

  export type ChatMessageCreateManyUserInput = {
    id: string
    chatRoomId: string
    role: string
    message: string
    createdAt?: Date | string
    masterCourseContentId?: string | null
  }

  export type ChatRoomCreateManyUserInput = {
    id: string
    courseContentId: string
    createdAt?: Date | string
  }

  export type ExamSubmissionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    percentile?: FloatFieldUpdateOperationsInput | number
    exam?: MasterExamUpdateOneRequiredWithoutExamSubmissionNestedInput
    examAnswers?: ExamAnswerUpdateManyWithoutExamSubmissionNestedInput
  }

  export type ExamSubmissionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    percentile?: FloatFieldUpdateOperationsInput | number
    examAnswers?: ExamAnswerUncheckedUpdateManyWithoutExamSubmissionNestedInput
  }

  export type ExamSubmissionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    percentile?: FloatFieldUpdateOperationsInput | number
  }

  export type ChatMessageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatRoom?: ChatRoomUpdateOneRequiredWithoutChatMessageNestedInput
    MasterCourseContent?: MasterCourseContentUpdateOneWithoutChatMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatRoomId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    masterCourseContentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatMessageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatRoomId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    masterCourseContentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatRoomUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseContent?: MasterCourseContentUpdateOneRequiredWithoutChatRoomNestedInput
    chatMessage?: ChatMessageUpdateManyWithoutChatRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseContentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatMessage?: ChatMessageUncheckedUpdateManyWithoutChatRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseContentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterCategoryCreateManyParentInput = {
    id: string
    name: string
    level: number
  }

  export type MasterCourseCreateManyCategoryInput = {
    id: string
    title?: string | null
    summary?: string | null
    description?: string | null
    targetAudience?: string | null
    difficulty?: string | null
    durationMin?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MasterExamCreateManyCategoryInput = {
    id: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MasterCategoryUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    children?: MasterCategoryUpdateManyWithoutParentNestedInput
    courses?: MasterCourseUpdateManyWithoutCategoryNestedInput
    exams?: MasterExamUpdateManyWithoutCategoryNestedInput
  }

  export type MasterCategoryUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    children?: MasterCategoryUncheckedUpdateManyWithoutParentNestedInput
    courses?: MasterCourseUncheckedUpdateManyWithoutCategoryNestedInput
    exams?: MasterExamUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type MasterCategoryUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
  }

  export type MasterCourseUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetAudience?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    durationMin?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: MasterTagUpdateManyWithoutCoursesNestedInput
    courseContents?: MasterCourseContentUpdateManyWithoutCourseNestedInput
    relatedCourses?: MasterCourseUpdateManyWithoutRelatedToCoursesNestedInput
    relatedToCourses?: MasterCourseUpdateManyWithoutRelatedCoursesNestedInput
    courseFAQs?: MasterCourseFAQUpdateManyWithoutCourseNestedInput
  }

  export type MasterCourseUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetAudience?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    durationMin?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: MasterTagUncheckedUpdateManyWithoutCoursesNestedInput
    courseContents?: MasterCourseContentUncheckedUpdateManyWithoutCourseNestedInput
    relatedCourses?: MasterCourseUncheckedUpdateManyWithoutRelatedToCoursesNestedInput
    relatedToCourses?: MasterCourseUncheckedUpdateManyWithoutRelatedCoursesNestedInput
    courseFAQs?: MasterCourseFAQUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type MasterCourseUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetAudience?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    durationMin?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterExamUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examQuestions?: MasterExamQuestionUpdateManyWithoutExamNestedInput
    ExamSubmission?: ExamSubmissionUpdateManyWithoutExamNestedInput
  }

  export type MasterExamUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examQuestions?: MasterExamQuestionUncheckedUpdateManyWithoutExamNestedInput
    ExamSubmission?: ExamSubmissionUncheckedUpdateManyWithoutExamNestedInput
  }

  export type MasterExamUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterCourseUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetAudience?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    durationMin?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: MasterCategoryUpdateOneRequiredWithoutCoursesNestedInput
    courseContents?: MasterCourseContentUpdateManyWithoutCourseNestedInput
    relatedCourses?: MasterCourseUpdateManyWithoutRelatedToCoursesNestedInput
    relatedToCourses?: MasterCourseUpdateManyWithoutRelatedCoursesNestedInput
    courseFAQs?: MasterCourseFAQUpdateManyWithoutCourseNestedInput
  }

  export type MasterCourseUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetAudience?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    durationMin?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    courseContents?: MasterCourseContentUncheckedUpdateManyWithoutCourseNestedInput
    relatedCourses?: MasterCourseUncheckedUpdateManyWithoutRelatedToCoursesNestedInput
    relatedToCourses?: MasterCourseUncheckedUpdateManyWithoutRelatedCoursesNestedInput
    courseFAQs?: MasterCourseFAQUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type MasterCourseUncheckedUpdateManyWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetAudience?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    durationMin?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type MasterCourseContentCreateManyCourseInput = {
    id: string
    sequence: number
    title?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MasterCourseFAQCreateManyCourseInput = {
    id: string
    question: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MasterTagUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MasterTagUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MasterTagUncheckedUpdateManyWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MasterCourseContentUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercises?: MasterExerciseUpdateManyWithoutCourseContentNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutMasterCourseContentNestedInput
    chatRoom?: ChatRoomUpdateManyWithoutCourseContentNestedInput
  }

  export type MasterCourseContentUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercises?: MasterExerciseUncheckedUpdateManyWithoutCourseContentNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutMasterCourseContentNestedInput
    chatRoom?: ChatRoomUncheckedUpdateManyWithoutCourseContentNestedInput
  }

  export type MasterCourseContentUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterCourseUpdateWithoutRelatedToCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetAudience?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    durationMin?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: MasterCategoryUpdateOneRequiredWithoutCoursesNestedInput
    tags?: MasterTagUpdateManyWithoutCoursesNestedInput
    courseContents?: MasterCourseContentUpdateManyWithoutCourseNestedInput
    relatedCourses?: MasterCourseUpdateManyWithoutRelatedToCoursesNestedInput
    courseFAQs?: MasterCourseFAQUpdateManyWithoutCourseNestedInput
  }

  export type MasterCourseUncheckedUpdateWithoutRelatedToCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetAudience?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    durationMin?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    tags?: MasterTagUncheckedUpdateManyWithoutCoursesNestedInput
    courseContents?: MasterCourseContentUncheckedUpdateManyWithoutCourseNestedInput
    relatedCourses?: MasterCourseUncheckedUpdateManyWithoutRelatedToCoursesNestedInput
    courseFAQs?: MasterCourseFAQUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type MasterCourseUncheckedUpdateManyWithoutRelatedToCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetAudience?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    durationMin?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type MasterCourseUpdateWithoutRelatedCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetAudience?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    durationMin?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: MasterCategoryUpdateOneRequiredWithoutCoursesNestedInput
    tags?: MasterTagUpdateManyWithoutCoursesNestedInput
    courseContents?: MasterCourseContentUpdateManyWithoutCourseNestedInput
    relatedToCourses?: MasterCourseUpdateManyWithoutRelatedCoursesNestedInput
    courseFAQs?: MasterCourseFAQUpdateManyWithoutCourseNestedInput
  }

  export type MasterCourseUncheckedUpdateWithoutRelatedCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetAudience?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    durationMin?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    tags?: MasterTagUncheckedUpdateManyWithoutCoursesNestedInput
    courseContents?: MasterCourseContentUncheckedUpdateManyWithoutCourseNestedInput
    relatedToCourses?: MasterCourseUncheckedUpdateManyWithoutRelatedCoursesNestedInput
    courseFAQs?: MasterCourseFAQUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type MasterCourseUncheckedUpdateManyWithoutRelatedCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    targetAudience?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    durationMin?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type MasterCourseFAQUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterCourseFAQUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterCourseFAQUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterExerciseCreateManyCourseContentInput = {
    id: string
    exerciseType: string
    question: string
    options?: string | null
    correctAnswer?: string | null
    createdAt?: Date | string
  }

  export type ChatMessageCreateManyMasterCourseContentInput = {
    id: string
    chatRoomId: string
    userId?: string | null
    role: string
    message: string
    createdAt?: Date | string
  }

  export type ChatRoomCreateManyCourseContentInput = {
    id: string
    userId: string
    createdAt?: Date | string
  }

  export type MasterExerciseUpdateWithoutCourseContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseType?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterExerciseUncheckedUpdateWithoutCourseContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseType?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterExerciseUncheckedUpdateManyWithoutCourseContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseType?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUpdateWithoutMasterCourseContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatRoom?: ChatRoomUpdateOneRequiredWithoutChatMessageNestedInput
    user?: UserUpdateOneWithoutChatMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutMasterCourseContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatRoomId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutMasterCourseContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatRoomId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatRoomUpdateWithoutCourseContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatRoomNestedInput
    chatMessage?: ChatMessageUpdateManyWithoutChatRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateWithoutCourseContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatMessage?: ChatMessageUncheckedUpdateManyWithoutChatRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateManyWithoutCourseContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyChatRoomInput = {
    id: string
    userId?: string | null
    role: string
    message: string
    createdAt?: Date | string
    masterCourseContentId?: string | null
  }

  export type ChatMessageUpdateWithoutChatRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutChatMessagesNestedInput
    MasterCourseContent?: MasterCourseContentUpdateOneWithoutChatMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutChatRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    masterCourseContentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatMessageUncheckedUpdateManyWithoutChatRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    masterCourseContentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MasterExamQuestionCreateManyExamInput = {
    id: string
    question: string
    questionType: string
    options?: string | null
    correctAnswer?: string | null
    createdAt?: Date | string
  }

  export type ExamSubmissionCreateManyExamInput = {
    id: string
    userId: string
    submittedAt?: Date | string
    score: number
    percentile: number
  }

  export type MasterExamQuestionUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    questionType?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ExamAnswer?: ExamAnswerUpdateManyWithoutExamQuestionNestedInput
  }

  export type MasterExamQuestionUncheckedUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    questionType?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ExamAnswer?: ExamAnswerUncheckedUpdateManyWithoutExamQuestionNestedInput
  }

  export type MasterExamQuestionUncheckedUpdateManyWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    questionType?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamSubmissionUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    percentile?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutExamSubmissionsNestedInput
    examAnswers?: ExamAnswerUpdateManyWithoutExamSubmissionNestedInput
  }

  export type ExamSubmissionUncheckedUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    percentile?: FloatFieldUpdateOperationsInput | number
    examAnswers?: ExamAnswerUncheckedUpdateManyWithoutExamSubmissionNestedInput
  }

  export type ExamSubmissionUncheckedUpdateManyWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    percentile?: FloatFieldUpdateOperationsInput | number
  }

  export type ExamAnswerCreateManyExamQuestionInput = {
    id: string
    examSubmissionId: string
    answer: string
    isCorrect: boolean
  }

  export type ExamAnswerUpdateWithoutExamQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    examSubmission?: ExamSubmissionUpdateOneRequiredWithoutExamAnswersNestedInput
  }

  export type ExamAnswerUncheckedUpdateWithoutExamQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    examSubmissionId?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExamAnswerUncheckedUpdateManyWithoutExamQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    examSubmissionId?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExamAnswerCreateManyExamSubmissionInput = {
    id: string
    examQuestionId: string
    answer: string
    isCorrect: boolean
  }

  export type ExamAnswerUpdateWithoutExamSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    examQuestion?: MasterExamQuestionUpdateOneRequiredWithoutExamAnswerNestedInput
  }

  export type ExamAnswerUncheckedUpdateWithoutExamSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    examQuestionId?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExamAnswerUncheckedUpdateManyWithoutExamSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    examQuestionId?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }



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