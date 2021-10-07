
//  find the square root of a number

// const n=prompt("enter the number");
// const result=Math.sqrt(n);
// document.write('the square root of ' +n  + 'is' + result);

//   program to find the factorial of a number

// const n=prompt("enter the number ");

// if (n==1){
//     document.write('factorial of '+n +'is' +1);
// }
// else{
//     let fact=1;
// for(var i=2;i<=n;i++){
//     fact=fact*i;
// }
// document.write('factorial of '+n +'is' +fact);
// }

// fibonacci series
// const n=prompt("enter the number of terms");
// var n1=0;
// var n2=1;
// var n3;
// var i=0;
// document.write(n1 +"<br>");
// document.write(n2 +"<br>");
// for(i=2;i<=n;i++){
//    n3=n1+n2;
//    document.write(n3 +"<br>")
//    n1=n2;
//    n2=n3;
// } 

// swap two variables

// var a=prompt("enter the first number");
// var b=prompt("enter the second number");
// var temp;
// document.write('the numbers before swap are : '+a +'and' + b +"<br>");

// temp=a;
// a=b;
// b=temp;
// document.write('the numbers after swap are :' +a +'and' +b);


// check prime number
// const n = parseInt(prompt("enter the number"));
// let isprime = true;
// if (n == 0) {
//     document.write('1 is neither prime or nor composite number');

// }
// else if (n > 1) {
//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) {
//             isprime = false;
//             break;
//         }
//     }
//     if (isprime) {
//         document.write(n + 'is a prime number');
//     } else {
//         document.write(n + 'is not a prime number');

//     }
// }
// else {
//     document.write("the number is not a prime number");
// }



// check armstrong number
const num=prompt("enter a three digit number");
let sum=0;
let temp=num;
while(temp>0)
{
    let remain=temp%10;
    sum += remain*remain*remain;
    temp=parseInt(temp/10);

}
if(sum==num){
    document.write('the number'+num +'is an armstrong number');
}
else{
    document.write('the number'+num +'is not a armstrong number');
}


