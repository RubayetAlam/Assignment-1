// Problem 1
function filterEventNumber(n: number[]): number[] {
  return n.filter((x: number) => (x % 2 === 0 ? x : null));
}

console.log(filterEventNumber([1, 2, 3, 4, 5, 6]));

// Problem 2
function reverseString(str: string): string {
  let splt = str.split("");
  let rev = splt.reverse();
  let jn = rev.join("");
  return jn;
}

console.log(reverseString("typescript"));

// problem 3
type StringOrNymber = string | number;

function checkType(value: StringOrNymber): string {
  if (typeof value === "string") {
    return "String";
  } else if (typeof value === "number") {
    return "Number";
  } else {
    return "Unknown type";
  }
}

console.log(checkType("Hello"));
console.log(checkType(42));

// Problem 4 
type User = {
  id: number;
  name: string;
  age: number;
};
function getProperty(obj: User, key: keyof User) {
  return obj[key];
}
const user: User = { id: 1, name: "John Doe", age: 21 };

console.log(getProperty(user, "name"));

// Problem 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const myBook: Book = {
  title: "TypeScript Guide",
  author: "John Doe",
  publishedYear: 2024,
};
const toggleBookStatus = (book: Book) => {
  return {
    ...book,
    isRead: true,
  };
};
console.log(toggleBookStatus(myBook));

// problem 6
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
class Strudent extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails(): string {
    return `"Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}"`;
  }
}
const student = new Strudent("Alice", 20, "A");
console.log(student.getDetails());

// problem 7
function getIntersection<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.filter((item) => arr2.includes(item));
}
console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
