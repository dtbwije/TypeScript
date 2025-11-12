let testVariable: string = "This is a test variable.";

interface Visit {
  page: {
    name: string;
  };
}

function logEntries(data : any) {
  data.visits.forEach((visit: Visit) => console.log(visit.page.name, data.user.name));
}

logEntries({ 
  visits: [{page: {name : "Page1"}}, {page: {name : "Page2"}}],
  user: {name: "Bob"},
 });

console.log(testVariable);

//https://learntypescript.dev/02/l2-type-annotations

const count = BigInt(9007199254741991);
console.log(count);
const address = null;
console.log(address, typeof address);
const phone = undefined;
console.log(phone, typeof phone );
const starts = Symbol("starts");
console.log("starts", typeof starts);

let amount = 10;
console.log(amount  , typeof amount);

let amount1 = "Eight";
console.log(amount1 , typeof amount1);

let eight: number ;

function  add( num1: number , num2: number ) : number {

  return num1 + num2 ;
}

eight = add(2, 6);

const nine = add(3, 6);
console.log(nine , typeof nine);
console.log(eight , typeof eight);

function greet( name? : string ) : void {
  if( name === undefined ){
    name = "Guest";
  }
  console.log("Hello " + name );

}

greet("John");
greet();

function addTen(a) {
  return a + 10;
}

const fourteen = addTen(4);

console.log(fourteen , typeof fourteen);

