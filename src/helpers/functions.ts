export const sortArray = (arr: Array<any>, key: string) =>
  arr.sort((a: any, b: any) => (a[key] < b[key] ? -1 : 1));
