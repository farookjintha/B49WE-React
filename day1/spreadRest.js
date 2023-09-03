// SPREAD

const fruits1 = ["apple", "lemon", "mango"];

const [fruitA, fruitsB, fruitC] = fruits1;

const fruits2 = ["jackfruit", "pineapple"];

const fruits = [...fruits1, ...fruits2];

console.log(fruits);

const userPersonal = {
  name: "John",
  dob: "01/01/2010",
  address: "Chennai, India",
};

const userAcademic = {
  regNo: "ABC001",
  grade: 5,
  section: "A",
};

const userDetails = { ...userPersonal, ...userAcademic };
console.log(userDetails);

// REST

console.log("EXAMPLE OF REST OPERATORS:");
function myFunc(...value) {
  console.log(value);
}

myFunc(5, 6, 7);

const userObj = {
  name: "Priya",
  city: "Chennai",
  profession: "IT Professional",
  email: "priya@gmail.com",
  dob: "01/01/2020",
};

// const newObj = {
//   name: userObj.name,
//   city: userObj.city,
//   profession: userObj.profession,
//   email: userObj.email,
// };

// const { dob, email, name, city, profession } = userObj;

const { dob, profession, ...newObj } = userObj;

console.log("USER OBJ: ", newObj);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [value1, value2, ...restOfValues] = numbers;

console.log("Rest of the Value: ", restOfValues);
