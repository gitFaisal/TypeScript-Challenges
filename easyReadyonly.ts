// Link to challenge: https://github.com/type-challenges/type-challenges/tree/main/questions/00007-easy-readonly
// Solution:

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};
