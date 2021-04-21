export {}
let message = 'Welcome back';
console.log(message);

let total: number = 10;
let name: string = 'Ujwal';

let sentence: string = `My name is ${name} I am beginner in Typescript`;
console.log(sentence);

enum Color {Red, Green, Blue};
let c: Color = Color.Green;
console.log(c);

let anyType: any;
anyType = 20;

function fullName(person: {firstName: string, lastName: string}) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'Ujwal',
    lastName: 'Singla'
}

fullName(p);