function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  height = height / 100;
  let BMI = weight / (height ^ 2);
  alert(BMI);
  if (BMI < 18.5) {
    alert("Underweight");
  } else if (BMI <= 24.9) {
    alert("Healthy Weight");
  } else if (BMI <= 29.9) {
    alert("Overweight");
  } else {
    alert("Obesity");
  }

  if (age >= 19 && age <= 24 && BMI >= 19 && BMI <= 24) {
    alert("In Range");
  } else if (age >= 25 && age <= 34 && BMI >= 20 && BMI <= 25) {
    alert("In Range");
  } else if (age >= 35 && age <= 44 && BMI >= 21 && BMI <= 26) {
    alert("In Range");
  } else if (age >= 45 && age <= 54 && BMI >= 22 && BMI <= 27) {
    alert("In Range");
  } else if (age >= 55 && age <= 64 && BMI >= 23 && BMI <= 28) {
    alert("In Range");
  } else if (age >= 65 && BMI >= 24 && BMI <= 29) {
    alert("In Range");
  } else alert("out Range");

  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
}
