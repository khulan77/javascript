// //11.3//
// //Тооны цифрийн нийлбэрийг олох. (let n = 1234)//
// // let a = 1234;
// // let b = 0;
// // while (a > 0) {
// //   const c = a % 10;
// //   b += c;
// //   a = Math.floor(a / 10);
// // }
// // console.log(b);

// //Тоог урвуулан бичих (let num = 12345 -> 54321)//
// // let d = 12345;
// // let e = 0;
// // while (d > 0) {
// //   const f = d % 10;
// //   e = e * 10 + f;
// //   d = Math.floor(d / 10);
// // }
// // console.log(e);

// //3. Цифрийн тоо ол (let a = 98765 -> 5)//
// // let g = 98765;
// // let h = 0;
// // while (g > 0) {
// //   g = Math.floor(g / 10);
// //   h++;
// // }
// // console.log(h);

// //4. Зэрэг (power) бодох (let base = 3; let exp = 4)//
// // let base = 3;
// // let exp = 4;
// // let i = 0;
// // let total = 1;

// // while (i < exp) {
// //   total *= base;
// //   i++;
// // }
// // console.log(total);

// //5. Палиндром тоо эсэхийг шалгах (let num = 1221)//
// // let sum = "1221";
// // let i = 0;
// // let length = sum.length;
// // let isPolindrom = true;

// // while (i < Math.floor(length / 2)) {
// //   let frist = sum[i];
// //   let last = sum[length - 1 - i];

// //   if (frist !== last) {
// //     isPolindrom = false;
// //     break;
// //   }
// //   i++;
// // }
// // console.log(isPolindrom);

// //6. Фибоначчийн дараалал  (let n1 = 0, n2 = 1, n = 7, i = 0;)//

// // let n = 7;
// // let n1 = 0;
// // let n2 = 1;
// // let i = 0;
// // let nemeh = 0;

// // while (i < n) {
// //   console.log(n1);

// //   nemeh = n1 + n2;
// //   n1 = n2;
// //   n2 = nemeh;

// //   i++;
// // }

// //7. Факториал олох (let num1 = 5;)//

// // let m1 = 5;
// // let m2 = 1;
// // let i = 1;
// // while (i <= 5) {
// //   m2 *= i;
// //   i++;
// // }
// // console.log(m2);

// //Do while//
// //1.1–10 хооронд тоо авах (Math.random -> 1-100)//

// // let aay;
// // do {
// //   aay = Math.floor(Math.random() * 100) + 1;
// // } while (aay > 10);
// // console.log(aay);

// //2.Сөрөг input орох хүртэл нийлбэр гаргах (let sum3 = 0; let input = 5;)//
// // let sum = 0;
// // let input;

// // do {
// //   input = Number(prompt("Type your Number"));
// //   if (input >= 0) {
// //     sum += input;
// //   }
// // } while (input >= 0);

// // console.log("Total:", sum);

// //3.3-ийн хүрд хэвлэх//
// // let i = 1;

// // do {
// //   const ar = i * 3;
// //   console.log(ar);
// //   i++;
// // } while (i < +10);

// //4.Үгийн эгшиг тоолох (let word = "mongolia”,  let vowels = "aeiou") includes ашиглах, prompt ашиглах//

// //5.Нууц үг шалгах (3 оролдлого) (let password = "your name“, let attempt; let tries = 0; const maxTries = 3;) prompt ашиглах//
// // const pass = "your name";
// // let attempt;
// // let tries = 0;
// // const maxTries = 3;

// // do {
// //   attempt = prompt(`Please Password (${tries + 1}/${maxTries})`);

// //   if (!attempt) {
// //     alert("NO password");
// //     break;
// //   }

// //   tries++;

// //   if (attempt === password) {
// //     alert("Good");
// //     success = true;
// //     break;
// //   } else {
// //     if (tries == 1) {
// //       alert("mun");
// //     } else if (tries == 2) {
// //       alert("bish");
// //     } else if (tries == 3) {
// //       alert("zza");
// //     }
// //   }
// // } while (tries < maxTries);

// // if (!success && maxTries <= tries) {
// //   alert("sa");
// // }

// //Array-bodlogo1//

// // 1.["🥩", "🌾", "🥔", "🥕", "🥬"] array iin length iig ol.//

// let nogoo = ["🥩", "🌾", "🥔", "🥕", "🥬"];
// console.log(nogoo);

// // 2.10 urttai number array uusge.//

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers);

// // 3.5 urttai string array uusge.//
// let freit = ["apple", "mango", "orange", "pineapple", "banana"];
// console.log(freit);

// // 4.Массивын эхний ба сүүлийн элементийг харуул. [1,2,3,4,5,6,7]//
// let array = [1, 2, 3, 4, 5, 6, 7];
// console.log(array[0], array[array.length - 1]);

// // 5.Тодорхой элемент массив дотор байгаа эсэхийг шалга. (string array, ['ford', "toyota", "mercedes", " chevrolet ", "tesla", "byd"])//
// let stringArray = ["ford", "toyota", "mercedes", "chevrolet ", "tesla", "byd"];
// let text = "byd";

// for (let i = 0; i < stringArray.length; i++) {
//   if (stringArray[i] === text) {
//     console.log("YES", text);
//     break;
//   } else {
//     console.log("NO");
//   }
// }

// // 6.Массив дахь хамгийн их тоог ол. (number array , [1,2,3,4,5,6,7])//
// let numbers1 = [1, 2, 3, 4, 5, 6, 7];
// let max = numbers1[0];
// for (let i = 1; i < numbers1.length; i++) {
//   if (numbers1[i] > max) {
//     max = numbers1[i];
//   }
// }
// console.log(max);

// // 7.Массив дахь хамгийн бага тоог ол. (number array, [1,2,3,4,5,6,7])//
// let numbers2 = [1, 2, 3, 4, 5, 6, 7];
// let min = numbers2[0];
// for (let i = 1; i > numbers2.leigth; i++) {
//   if (numbers2[i] < min) {
//     min = numbers2[i];
//   }
// }
// console.log(min);

// // 8.Зөвхөн тэгш тоонуудыг шүүн гарга. (number array, [1,2,3,4,5,6,7])//

// let numbers3 = [1, 2, 3, 4, 5, 6, 7];
// const even = [];
// let j = 0;

// for (let i = 0; i < numbers3.length; i++) {
//   if (numbers3[i] % 2 === 0) {
//     even[j] = numbers3[i];
//     j++;
//   }
// }

// console.log(even);

// // 9.Тодорхой тоо массив дотор хэдэн удаа орсныг тоол. (number array, [ 2,3 , 1,6,7,10,11,2] , 2 )//

// let numbers4 = [2, 3, 1, 6, 7, 10, 11, 2];
// let target = 2;
// let count = 0;
// for (let i = 1; i > numbers4.length; i++) {
//   if (numbers4[i] === target) {
//     count++;
//   }
// }
// console.log(target);

// // 10.Бүх тоонуудыг 2 дахин үржүүлсэн шинэ массив үүсгэ. (number array, [1,2,3,4,5,6,7])//
// let numbers6 = [1, 2, 3, 4, 5, 6, 7];
// let sun2 = [];
// let e = 0;

// for (let i = 1; i < numbers6.length; i++) {
//   sun2[e] = numbers6[i] * 2;
//   // numbers6[i] = sun2 * 2;

//   e++;
// }
// console.log(sun2);

// //11.Бүх үгсийг том үсгээр (uppercase) болго. ([a, b, c, d, e ,f])//
// let words = ["a", "b", "c", "d", "e", "f"];
// let upperWords = [];

// for (let i = 0; i < words.length; i++) {
//   upperWords.push(words[i].toUpperCase());
// }
// console.log(upperWords);

// //12.Бүх үгсийг жижиг үсгээр (lowercase) болго. ([A,B,C,D,E,T,Y,I,O,F])//
// let words2 = ["A", "B", "C", "D", "E", "F"];
// let lowerWords = [];

// for (let i = 0; i < words2.length; i++) {
//   lowerWords.push(words2[i].toLowerCase());
// }
// console.log(lowerWords);

//11.5//
//1.“a” үсэг агуулсан үгсийн тоо ["apple", "pear", "grape", "kiwi"]//

// let a = ["apple", "p", "pear", "p", "grape", "p", "kiwi"];
// let b = "a";
// let c = [];
// let j = 0;

// for (let i = 0; i < a.length; i++) {
//   if (a[i].includes(b)) {
//     c[j] = a[i];
//     j++;
//   }
// }
// console.log(c);

//2.Эхний үгтэй ижил урттай бүх үгийг буцаа. ["hi", "to", "see", "me", "go"] -> ["hi", "to", "me", "go"]//
// let mult = ["hi", "to", "see", "me", "go"];
// let mult2 = mult[0];
// let mult3 = [];
// let j = 0;

// for (let i = 0; i < mult.length; i++) {
//   if (mult2.length == mult[i].length) {
//     mult3[j] = mult[i];

//     j++;
//   }
// }
// console.log(mult3);

//3.Массив дахь хамгийн урт үгийг ол. ["apple", "banana", "kiwi"]//

// let sun = ["apple", "banana", "pineapple", "kiwi"];

// let sun1 = sun[0];
// let sun2 = [];

// for (let i = 0; i < sun.length; i++) {
//   if (sun2.length < sun[i].length) {
//     sun2 = sun[i];
//   }
// }
// console.log(sun2);

//4.Массив дотор байгаа "" буюу хоосон string-ийг хас. ["hi", "", "world", "", "js"]//

// let may = ["hi", "", "world", "", "js"];
// let may1 = [];
// let a = 0;

// for (let i = 0; i < may.length; i++) {
//   if (may[i].length > 0) {
//     may1[a] = may[i];

//     a++;
//   }
// }
// console.log(may1);

//5.Шинэ массив үүсгээд элементийг урвуу дарааллаар байрлуул. [1, 2, 3, 4]//

// let many = [1, 2, 3, 4];
// let many1 = [];

// for (let i = many.length - 1; i >= 0; i--) {
//   many1.push(many[i]);
// }
// console.log(many1);

//6.Array-ийн элементүүдийг урвуулан бичих (let nums= [1,2,5,6,9,120])//

//7.Сөрөг тоонуудыг 0 болгон солино уу. (let nums = [1,2,5,6,9,120,-2,-3])//

// let nums = [1, 2, 5, 6, 9, 120, -2, -3];

// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] < 0) {
//     nums[i] = 0;
//   }
// }

// console.log(nums);

//8.Тодорхой элементийн index-ийг ол. (let nums = [1,2,5,6,9,120,-2,-3], 5)//

// let aay = [1, 2, 5, 6, 9, 120, -2, -3];
// let aay1 = 120;

// for (let i = 0; i < aay.length; i++) {
//   if (aay[i] === aay1) {
//     console.log(i);
//     break;
//   }
// }

//9.Хоёр дахь хамгийн их тоог ол.
// let numbers1 = [85, 61, 62, 63, 64, 65, 66, 67, 68, 69];
// let max = numbers1[0];
// let secondMax = numbers1[1];
// for (let i = 1; i < numbers1.length; i++) {
//   if (numbers1[i] > max) {
//     secondMax = max;
//     max = numbers1[i];
//   } else if (secondMax < numbers1[i]) {
//     secondMax = numbers1[i];
//   }
// }
// console.log({ secondMax, max });

//10.Үг бүрийн эхний 3 үсгийг агуулсан шинэ массив үүсгэ.//

// const ug = ["apple", "mango", "kiwi", "banana", "pineapple"];
// let ug1 = 0;
// for (const ug of ug1) {
//   ug1 += ug.length;
// }
// console.log(ug1);

//11.Массив дахь бүх үгний нийт тэмдэгтийн тоог тоол.//

// const vision = ["apple", "pineapple", "banana"];
// const notebook = ["apple", "pineapple", "banana"];
// let book = 0;

// for (let i = 0; i < notebook.length; i++) {
//   book += notebook[i].length;
// }

// console.log(book);

//12.Массив доторх бүх элементүүдийн дундажийг ол.//
// const numbers7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;
// for (let i = 0; i < numbers7.length; i++) {
//   sum += numbers7[i];
// }
// let anime = sum / numbers7.length;

// console.log(anime);

//13.0-р төгсдөг бүх тоог устга. (let nums = [10,2,50, 6,90,120,-2,-3])//

// const summer = [10, 2, 50, 6, 90, 120, -2, -3];
// let summer2 = [];

// for (let i = 0; i < summer.length; i++) {
//   if (summer[i] % 10 !== 0) {
//     summer2.push(summer[i]);
//   }
// }
// console.log(summer2);
