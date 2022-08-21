// function add() {
//   let firstName = document.querySelector("#fName");
//   let lastName = document.querySelector("#lName");
//   let firstTime = document.querySelector("#firstTime");
//   let secondTime = document.querySelector("#secondTime");

//   console.log(
//     `Runner 1 is: ${firstName.value}${lastName.value} 1st lap time is: ${firstTime.value} 2nd: lap time is ${secondTime.value}`
//   );
// }

// let addAthleteData = document.getElementById("add_btn");

// addAthleteData.addEventListener("click", () => {
//   let firstName = document.querySelector("#fName").value;
//   let lastName = document.querySelector("#lName").value;
//   let firstTime = document.querySelector("#firstTime").value;
//   let secondTime = document.querySelector("#secondTime").value;

//   console.log(firstName + lastName + firstTime + secondTime);
// });

const submitForm = document.getElementById("submit-form");
const submitData = document.getElementById("athlete-data");

function logData(event) {
  event.preventDefault();
  const firstName = document.getElementById("fName").value;
  const lastName = document.getElementById("lName").value;
  const firstTime = document.getElementById("firstTime").value;
  const secondTime = document.getElementById("secondTime").value;

  const fName = [];

  submitData.textContent = `First Name: ${firstName}, Last Name: ${lastName}, First Time: ${firstTime}, Second time: ${secondTime},`;

  submitForm.reset();
  // submitData.textContent = `${firstName} ${lastName} ${firstTime}${secondTime}`;
}

submitForm.addEventListener("submit", logData);
