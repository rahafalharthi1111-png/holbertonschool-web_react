declare const majorBrand: unique symbol;
declare const minorBrand: unique symbol;

export interface MajorCredits {
  credits: number;
  [majorBrand]: true;
}

export interface MinorCredits {
  credits: number;
  [minorBrand]: true;
}


export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    [majorBrand]: true,
  };
}

export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    [minorBrand]: true,
  };
}

const major1: MajorCredits = { credits: 3, [majorBrand]: true };
const major2: MajorCredits = { credits: 4, [majorBrand]: true };
const totalMajor = sumMajorCredits(major1, major2);

const minor1: MinorCredits = { credits: 2, [minorBrand]: true };
const minor2: MinorCredits = { credits: 5, [minorBrand]: true };
const totalMinor = sumMinorCredits(minor1, minor2);

console.log(totalMajor);
console.log(totalMinor);
