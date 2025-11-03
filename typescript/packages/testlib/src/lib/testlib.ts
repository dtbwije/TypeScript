let testVariable: string = "This is a test variable.";

function logEntries(data : any) {
  data.visits.forEach(visit => console.log(visit.page.name, data.user.name));
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
