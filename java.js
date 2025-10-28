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

///10.28///

//1//
let dark = 38;
let dark1 = parseInt(dark / 24);
let dark2 = dark % 24;
console.log(dark1, "day", dark2, "hour");

//2//
let dad1 = 4;
dad2 = 40;
let dad3 = parseInt(dad1 * 24);
let dad4 = dad2 + dad3;
console.log(dad4, "hour");

//3//
let n = 106;
nn = parseInt(n / 12);
nnn = n % 12;
console.log(nn, "year", nnn, "month");

//4//
let mar = 90;
mm = 98;
mmm = parseInt(mar * 12);
mmmm = mmm + mm;
console.log(mmmm, "month");

//5//
const zz = 9;
const zz1 = 3;
const zz2 = 2;
const zz3 = 8;
let min = zz2;

if (min > zz) {
  min = zz;
}

if (min > zz1) {
  min = zz1;
}

if (min > zz3) {
  min = zz3;
}
console.log(min);

//6//
const xx = 2;
const xx2 = 9;
const xx3 = 4;
const xx4 = 3;

let xaxx = 1;

if (xx < 5) {
  xaxx = xaxx * xx;
}

if (xx2 < 5) {
  xaxx = xaxx * xx2;
}

if (xx3 < 5) {
  xaxx = xaxx * xx3;
}

if (xx4 < 5) {
  xaxx = xaxx * xx4;
}
console.log(xaxx);

//7//
const vv = 11;
const vv1 = 9;
const vv2 = 4;
const vv3 = 3;

let vanc = 1;

if (vv > 5) {
  vanc = vanc * vv;
}

if (vv1 > 5) {
  vanc = vanc * vv1;
}

if (vv2 > 5) {
  vanc = vanc * vv2;
}

if (vv3 > 5) {
  vanc = vanc * vv3;
}
console.log(vanc);

//bodlogo-2//
//1//
const car = 8;
const car2 = 17;

if (car < car2) {
  console.log(car2);
} else {
  console.log(car);
}

//2//
const cr = 8;

console.log(cr % 2 === 0 && "even");
console.log(cr % 3 === 2 && "odd");

//3//
const numbers = (a, b, c) => Math.min(a, b, c);
console.log(numbers(19, 77, 0), "sun");

const big = (a, b, c) => Math.max(a, b, c);
console.log(big(19, 77, 0), "moon");

//4//
const phone = "personal";
console.log(phone[0]);
console.log(phone.length);
console.log(phone[phone.length - 1]);

//5//
const phone2 = "personal";
console.log(phone2[0] + phone2[phone2.length - 1]);

//6//
const phone3 = "personal";
console.log(phone3.toUpperCase());

//8//
const pop = 465;
if (pop % 15 === 0) {
  console.log("FizzBuzz");
} else if (pop % 3 === 0) {
  console.log("fizz");
} else if (pop % 5 === 0) {
  console.log("buzz");
}

//9//
const one = "Hello";
const two = "World";
console.log(one, two);

//10//
const three = 52;
const three1 = 64;
console.log((three + three1) / 2);

//11//
const moon = 21;
if (moon > 0) {
  console.log("эерэг");
} else if (moon < 0) {
  console.log("сөрөг");
} else if ((moon = 0)) {
  console.log("тэг");
}

//12//
const more = 65;
if (more > 10) {
  console.log("10-aas ih");
}

//13//
const grand = 98;
const grand2 = 98;
if (98 === 98) {
  console.log("тэнцүү");
} else {
  console.log("ялгаатай");
}

//14//
const link = 77;
if (0 < link < 100) {
  console.log("unen");
} else {
  console.log("hudal");
}

//15//
let link2 = 77;
let link3 = (link2 * 10) / 100 + link2;
let link4 = (link2 * 20) / 100 + link2;
let link5 = (link2 * 30) / 100 + link2;

if ((link2 * 10) / 100 + link2) {
  console.log("10% tentsuul", link3);
}
if ((link2 * 20) / 100 + link2) {
  console.log("20% tentsuul", link4);
}
if ((link2 * 30) / 100 + link2) {
  console.log("30% tentsuul", link5);
}

//16//
const anna = 103;
if (anna < 100) {
  console.log(anna);
} else {
  console.log(100);
}

//17//
const temdeg = 55;
const temdeg2 = 55;
if (temdeg === temdeg2) {
  console.log("temdeg");
} else {
  console.log(55);
}

//18//
const string = "69";
console.log(number(String(69).split("").reverse().join("")));

//19//
const seven = 21;
if (seven > 0) {
  console.log("эерэг");
} else {
  console.log("сөрөг");
}

//20//
