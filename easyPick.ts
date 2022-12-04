// Solution
// Link to challenge: https://github.com/type-challenges/type-challenges/tree/main/questions/00004-easy-pick

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
