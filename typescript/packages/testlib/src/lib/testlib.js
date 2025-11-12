var testVariable = "This is a test variable.";
function logEntries(data) {
    data.visits.forEach(function (visit) { return console.log(visit.page.name, data.user.name); });
}
logEntries({
    visits: [{ page: { name: "Page1" } }, { page: { name: "Page2" } }],
    user: { name: "Bob" },
});
console.log(testVariable);
//https://learntypescript.dev/02/l2-type-annotations
var count = BigInt(9007199254741991);
console.log(count);
var address = null;
console.log(address, typeof address);
var phone = undefined;
console.log(phone, typeof phone);
var starts = Symbol("starts");
console.log("starts", typeof starts);
var amount = 10;
console.log(amount, typeof amount);
var amount1 = "Eight";
console.log(amount1, typeof amount1);
var eight;
function add(num1, num2) {
    return num1 + num2;
}
eight = add(2, 6);
var nine = add(3, 6);
console.log(nine, typeof nine);
console.log(eight, typeof eight);
score = 100;   
console.log(score, typeof score);