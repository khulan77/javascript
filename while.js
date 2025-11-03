//11.3//
//Тооны цифрийн нийлбэрийг олох. (let n = 1234)//
// let a = 1234;
// let b = 0;
// while (a > 0) {
//   const c = a % 10;
//   b += c;
//   a = Math.floor(a / 10);
// }
// console.log(b);

//Тоог урвуулан бичих (let num = 12345 -> 54321)//
// let d = 12345;
// let e = 0;
// while (d > 0) {
//   const f = d % 10;
//   e = e * 10 + f;
//   d = Math.floor(d / 10);
// }
// console.log(e);

//3. Цифрийн тоо ол (let a = 98765 -> 5)//
// let g = 98765;
// let h = 0;
// while (g > 0) {
//   g = Math.floor(g / 10);
//   h++;
// }
// console.log(h);

//4. Зэрэг (power) бодох (let base = 3; let exp = 4)//
// let base = 3;
// let exp = 4;
// let i = 0;
// let total = 1;

// while (i < exp) {
//   total *= base;
//   i++;
// }
// console.log(total);

//5. Палиндром тоо эсэхийг шалгах (let num = 1221)//
// let sum = "1221";
// let i = 0;
// let length = sum.length;
// let isPolindrom = true;

// while (i < Math.floor(length / 2)) {
//   let frist = sum[i];
//   let last = sum[length - 1 - i];

//   if (frist !== last) {
//     isPolindrom = false;
//     break;
//   }
//   i++;
// }
// console.log(isPolindrom);

//6. Фибоначчийн дараалал  (let n1 = 0, n2 = 1, n = 7, i = 0;)//

// let n = 7;
// let n1 = 0;
// let n2 = 1;
// let i = 0;
// let nemeh = 0;

// while (i < n) {
//   console.log(n1);

//   nemeh = n1 + n2;
//   n1 = n2;
//   n2 = nemeh;

//   i++;
// }

//7. Факториал олох (let num1 = 5;)//

// let m1 = 5;
// let m2 = 1;
// let i = 1;
// while (i <= 5) {
//   m2 *= i;
//   i++;
// }
// console.log(m2);

//Do while//
//1.1–10 хооронд тоо авах (Math.random -> 1-100)//

// let aay;
// do {
//   aay = Math.floor(Math.random() * 100) + 1;
// } while (aay > 10);
// console.log(aay);

//2.Сөрөг input орох хүртэл нийлбэр гаргах (let sum3 = 0; let input = 5;)//
// let sum = 0;
// let input;

// do {
//   input = Number(prompt("Type your Number"));
//   if (input >= 0) {
//     sum += input;
//   }
// } while (input >= 0);

// console.log("Total:", sum);

//3.3-ийн хүрд хэвлэх//
// let i = 1;

// do {
//   const ar = i * 3;
//   console.log(ar);
//   i++;
// } while (i < +10);

//4.Үгийн эгшиг тоолох (let word = "mongolia”,  let vowels = "aeiou") includes ашиглах, prompt ашиглах//

//5.Нууц үг шалгах (3 оролдлого) (let password = "your name“, let attempt; let tries = 0; const maxTries = 3;) prompt ашиглах//
const pass = "your name";
let attempt;
let tries = 0;
const maxTries = 3;

while (tries < maxTries) {
  attempt = prompt("Нууц үгээ оруулна уу:");

  if (attempt === null) {
    alert("Оролдлого цуцлагдлаа!");
    break;
  }

  //   if (attempt === password) {
  //     alert("Нууц үг зөв байна! Тавтай морил");
  //     break;
  //   } else {
  //     tries++;
  //     if (tries < maxTries) {
  //       alert(
  //         `Буруу нууц үг! Та дахин оролдоно уу. (${
  //           maxTries - tries
  //         } боломж үлдлээ)`
  //       );
  //     } else {
  //       alert("Та 3 удаа буруу орууллаа. Хандалт хаагдлаа");
  //     }
  //   }
}
