//My answer

export function twiceAsOld(dadYearsOld: number, sonYearsOld: number): number {
  let twiceSon: number = dadYearsOld - sonYearsOld * 2;

  return twiceSon < 0 ? -twiceSon : twiceSon;
}

//Best Practice
export function twiceAsOldB(dad: number, son: number): number {
  return Math.abs(dad - son * 2);
}
