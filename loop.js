//Loop bodlogo-1//

// const n = 1;

// for (let i = 1; i <= n; i++) {
//   console.log("Pinecone " + i);
// }

//
// const n = 10;

// for (let i = 1; i <= n; i++) {
//   console.log("Pinecone " + i);
// }

// const n = 2;

// for (let i = 1; i <= n; i++) {
//   console.log("Pinecone " + i);
// }

// const n = 20;

// for (let i = 1; i <= 20; i += 2) {
//   console.log(i);
// }

// const a = 40;

// for (let i = 0; i <= 40; i += 2) {
//   console.log(i);
// }

//
// const b = 20;

// let c = 0;

// for (let i = 0; i <= 20; i += 2) {
//   c += i;
//   //   console.log((i += i));
// }
// console.log(c);

// let e = 0;

// for (let i = 1; i <= 5; i += 3) {
//   e += i;
// }
// console.log(e);

// let sum = 0;
// for (let i = 0; i <= 10; i++) {
//   sum += i;
// }

// console.log(sum);

// let f = 100;
// for (let i = ; i <= 100; i++) {
//   f += i;
// }

// console.log(f);

// let row = 1;
// for (let i = 1; i <= 125; i++) {
//   row *= i;
// }

// console.log(row);

// let room = 1;
// for (let i = 1; i <= 5; i += 2) {
//   room *= i;
// }
// console.log(room);

// let car = 1;
// for (let i = 1; i <= 10; i++) {
//   car *= i;
// }
// console.log(car);

//Loop bodlogo-2//

//10 аас 1 рүү буурах дарааллаар хэвлэ.//

//

//Өгөгдсөн n тооны хүрдийг харуул.//

// const one = 8;
// for (let i = 8; i <= 80; i += one) {
//   console.log(i);
// }

// 2 ийн n зэргийг ол. (Example: 5. Result:32)//

// let total = 1;

// for (i = 1; i <= 5; i++) {
//   total *= 2;
// }

// console.log(total);

//Өгөгдсөн 3 оронтой тооны цифрүүдийн нийлбэрийг ол. (Example: 234. Result:9)//
// const a = "234";

// for (let i = 0; i <= 1; i++) {
//   console.log(Number(a[0]) + Number(a[1]) + Number(a[2]));
// }

//987654 дээрх тоо хэдэн оронтой тоо гэдгийг тоол. Result:6//

// let ner = "987654";
// for (let i = 1; i <= 1; i++) {
//   console.log(ner.length);
// }

//Өгөгдёөн тооны квадратыг ол . Example: 5 . Result: 25//
// let four = 1;

// for (i = 1; i <= 2; i++) {
//   four *= 5;
// }
// console.log(four);

//Эхний N  тооны кубын нийлбэр. Example: 4 . Result:100//

// let five1 = 1;
// let five2 = 1;
// let five3 = 1;
// let five4 = 1;
// for (let i = 1; i <= 3; i++) {
//   five1 *= 1;
// }

// for (let i = 1; i <= 3; i++) {
//   five2 *= 2;
// }

// for (let i = 1; i <= 3; i++) {
//   five3 *= 3;
// }

// for (let i = 1; i <= 3; i++) {
//   five4 *= 4;
// }

// console.log(five1 + five2 + five3 + five4);

//1–30 хүртэлх тоонууд дундаас 2 болон 3-т зэрэг хуваагддаг тоонуудыг хэвлэх//

// let c = 30;
// for (let i = 1; i <= c; i++) {
//   if (i % 2 === 0 && i % 3 === 0) {
//     console.log(i);
//   }
// }

//Хэрвээ тоо 3-т хуваагдвал “Fizz”, 5-т хуваагдвал “Buzz” гэж хэвлэх//
// let sar = 15;
// for (let i = 1; i <= sar; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizz");
//   } else {
//     console.log("Buzz");
//   }
// }

//1–100 хүртэлх 7-д хуваагддаггүй тоонуудыг хэвлэх//
// const moon = 100;
// for (let i = 1; i <= moon; i++) {
//   if (i % 7 != 0) {
//     console.log(i);
//   }
// }

//1–50 хүртэлх тоонууд дундаас сондгой бөгөөд 5-ын үржвэр тоонуудыг олох//
// let cat = 50;
// for (let i = 1; i <= cat; i += 2) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

//1–100 хүртэлх тоонуудын дундаас 50–60 хооронд байгаа тоонуудын нийлбэрийг гарга.//
const book = 52;
let book2 = 0;
for (let i = 50; i <= book; i++) {
  book2 += i;
}
console.log(book2);
