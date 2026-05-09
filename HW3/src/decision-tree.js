const score = 75;
const age = 20;
const hasLicense = true;

if (score >= 50) {
  console.log("Score is passing");
}

if (score >= 90) {
  console.log("Grade: A");
} else {
  console.log("Grade: below A");
}

if (score >= 90) {
  console.log("Grade: A (Excellent)");
} else if (score >= 75) {
  console.log("Grade: B (Good)");
} else if (score >= 60) {
  console.log("Grade: C (Satisfactory)");
} else if (score >= 50) {
  console.log("Grade: D (Passing)");
} else {
  console.log("Grade: F (Fail)");
}

if (age >= 18 && hasLicense) {
  console.log("Can drive a car");
} else if (age >= 18 && !hasLicense) {
  console.log("Old enough but no license");
} else {
  console.log("Too young to drive");
}
