const number = 20;
let a = 0,
    b = 1,
    c;

console.log(a); // print 0
console.log(b); // print 1

c = a + b;

while (c <= number) {

    // print the next term
    console.log(c);

    a = b;
    b = c;
    c = a + b;
}