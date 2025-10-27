//1//
const hour1 = 2.5;
console.log(hour1 * 60);

const hour2 = 2;
console.log(hour2 * 60);

const hour3 = 3;
console.log(hour3 * 60);

//2//
const black = 2;
console.log(2 % 2 === 0 && "even");
console.log(2 % 2 === 1 && "odd");

const pink = 7;
console.log(7 % 2 === 0 && "even");
console.log(7 % 2 === 1 && "odd");

const white = 1;
console.log(1 % 2 === 0 && "even");
console.log(1 % 2 === 1 && "odd");

//3//
const two1 = 1;
const two2 = 8;
const two3 = 3;
console.log(two1 < two3 < two2 == true);
console.log(two1 > two2 < two3 == false);

//4//
let a = 9;
b = 4;
c = 3;
console.log(a > b && a > c && a);
console.log(b > c && b < a && b);
console.log(c < a && c < b && c);

let e = 1;
f = 7;
g = 5;
console.log(e < g && g < f && 7, 5, 1);

//5//

//6//
let h = 5;
l = 7;
m = 9;
console.log((p = 5 + 7 + 9));

//7//
let aa = 1;
bb = 3;
cc = 5;
dd = 7;
ee = 8.7;
console.log(aa + bb + cc + dd + parseInt(ee));

//8//
let ff = 10;
gg = 5;
console.log((p = 10 + 5 + 10 + 5));
console.log(10 * 5);

//9//
let ara = 98;
console.log(parseInt(ara / 60));
let ara2 = parseInt(ara / 60);
let ara3 = ara - ara2 * 60;
console.log(ara2, "min", ara3, "seconds");

//10//
let ehtoo = 1297;
let hour6 = parseInt(1297 / 3600);
let min2 = parseInt(ehtoo / 60);
let second2 = 1297 % 60;
console.log(ehtoo - min2 * 60);
console.log(hour6, "hour", min2, "min", second2, "second");

//11//
let ehtoo2 = 875;
ehtoo3 = 88;
console.log(ehtoo2 * 60 + ehtoo3);

//12//
let aqua = 83;
aqua2 = 84;
aqua3 = 85;
aqua = parseInt(83 * 3600);
aqua2 = parseInt(84 * 60);
console.log(aqua + aqua2 + aqua3);
