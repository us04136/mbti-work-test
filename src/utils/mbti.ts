export const getMBTIResult = (selections: string[]): string => {
  const counts: Record<string, number> = {
    E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0
  };

  selections.forEach(val => {
    if (counts[val] !== undefined) {
      counts[val]++;
    }
  });

  let result = "";
  result += counts.E >= counts.I ? "E" : "I";
  result += counts.S >= counts.N ? "S" : "N";
  result += counts.T >= counts.F ? "T" : "F";
  result += counts.J >= counts.P ? "J" : "P";

  return result;
};
