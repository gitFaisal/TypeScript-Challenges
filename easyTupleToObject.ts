//Solution
// Link to challenge: https://github.com/type-challenges/type-challenges/tree/main/questions/00011-easy-tuple-to-object

type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P;
};
