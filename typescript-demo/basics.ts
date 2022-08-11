// Primitives - numbers, strings, booleans
// More complex types: arrays, objects
// Function types, parameters

//Primitives - core types below

let age: number = 24;
// or
age = 12;

let userName: string | string[] = "Billybob";
// or
userName = "Bobbybob";

let isStudent: boolean = true;

// dont typically set null and undefined //

// More comples types

let hobbies: string[];

hobbies = ["Sports", "Cooking", "Eating"]; // when the type is string you cant put number or bool in.

// object type declaration

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Max",
  age: 29,
};

// not allowed because its not declared above
// person = {
//   isEmployee: true,
// };

let people: Person[];

// Type inference
// the union type " | " allows for multiple types
let course: string | number = "React - The Complete Guide";
// is inferred that is a string
course = 12345;

// Functions & types

function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArr = [value, ...array];
  return newArr;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1,2,3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");
