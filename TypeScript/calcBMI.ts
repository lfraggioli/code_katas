function bmi(weight: number, height: number): string {
  let calc: number = weight / (height * height);

  if (calc <= 18.5) {
    return "Underweight";
  } else if (calc <= 25.0) {
    return "Normal";
  } else if (calc <= 30.0) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

console.log(bmi(65, 1.63));
