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

// for (let i = 1; i <= 40; i += 2) {
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
// for (let i = 0; i <= 2; i++) {
//   f += 100;
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
// const book = 52;
// let book2 = 0;
// for (let i = 50; i <= book; i++) {
//   book2 += i;
// }
// console.log(book2);

//1–20 хүртэлх тоонууд дундаас анхны тоонуудыг (prime numbers) ол.//
//  const back = 17;
//  let back1 = 0;
//  for(let i = 1; i <= back; i++) {

//  }

//1–50 хүртэлх бүх сондгой тооны кубын нийлбэрийг ол//

// const nine = 50;
// let nine2 = 0;

// for (let i = 1; i <= nine; i += 2) {
//   nine2 += i ** 3;
// }
// console.log(nine2);

//1–100 хүртэлх тоо бүрийг шалгаад 2-т болон 5-т зэрэг хуваагддаг бол тоог хэвлэ//

// const anna = 100;
// let anna1 = 1;
// for (let i = 1; i <= anna; i++) {
//   if (i % 2 === 0 && i % 5 === 0) {
//     console.log(i);
//   }
// }

//10.31//

//1. 1-ээс 10 хүртэлх тооны квадратуудыг хэвлэ.//

// let ww = 1;
// for (let i = 1; i <= 10; i++) {
//   console.log(i * i);
// }

//2. Өөрийн нэрийг бичиж эсрэгээр нь хэвлэ.//

// const hh = "khulan";
// let hh2 = hh[5] + hh[4] + hh[3] + hh[2] + hh[1] + hh[0];
// console.log(hh2);

//2. Өгөгдсөн жил зуны олимпийн жил мөн эсэхийг ол. 1896 онд эхэлсэн.//

// const jil = 2024;
// if (jil >= 1896 && jil % 4 === 0) {
//   console.log("mun");
// } else {
//   console.log("bish");
// }

//4.Өгөгдсөн жил өвлийн олимпийн жил мөн эсэхийг ол. 1924, 1994 онд эхэлсэн//

// const jil3 = 1924;
// let jil4 = 1994;

// for (let i = jil3; i <= jil4; i += 4) {
//   if (jil4 >= jil4 && jil4 % 4 === 0) {
//     console.log("mun");
//   } else {
//     console.log("bish");
//   }
// }

//5.Хэрэглэгчээс сарын дугаар (1-12) аваад, улирал хэвлэнэ://

// for (let i = 1; i <= 12; i++) {
//   if (i === 12 || i === 2 || i === 1) {
//     console.log(i, "Өвөл");
//   } else if (i === 3 || i === 4 || i === 5) {
//     console.log(i, "Хавар");
//   } else if (i === 6 || i === 7 || i === 8) {
//     console.log(i, "Зун");
//   } else if (i === 9 || i === 10 || i === 11) {
//     console.log(i, "Намар");
//   }
// }
//6. Хэрэглэгчээс шатахууны төрлийг (92, 95, D) болон литр авах бөгөөд үнийг тооцно.//

// const z = 2500,
//   zz = 3000,
//   zzz = 2200;
// let litr = 1;
// let litr1 = 1;
// let litr2 = 1;
// if (litr) {
//   console.log("92", litr * z, "tugrug");
// }
// if (litr1) {
//   console.log("95", litr1 * zz, "tugrug");
// }
// if (litr2) {
//   console.log("D", litr2 * zzz, "tugrug");
// }

//7. yearOfBirth гэсэн хувьсагчид гараас төрсөн оныг ав. Тухайн оноос тухайн хүний насыг нь бодож гаргаад үр дүнгээ old гэсэн хувьсагчид оноо. Насанд нь харгалзах утгыг хэвлэ.//
// let birth = 2023;
// let year = 2025;
// for (let i = 0; i <= 22; i++) {
//   if (i >= 0 && i <= 1) {
//     console.log(i, "Infant");
//   } else if (i >= 2 && i <= 3) {
//     console.log(i, "Toddler");
//   } else if (i >= 3 && i <= 5) {
//     console.log(i, "Preschool");
//   } else if (i >= 5 && i <= 12) {
//     console.log(i, "Gradeschooler");
//   } else if (i >= 12 && i <= 18) {
//     console.log(i, "Teen");
//   } else if (i >= 18 && i <= 21) {
//     console.log(i, "Young adult");
//   } else if (i >= 21 && i <= 22) {
//     console.log(i, "Adult");
//   }
// }

//Bodlogo 2//
//1.Armstrong тоо мөн үгүйг шалгах. 153 -> 1**3 + 5**3 + 3**3 = 153//

// let num = 153;
// let digits = num.toString().split("");
// let n = digits.length;
// let sum = 0;

// for (let i = 0; i <= n; i++) {
//   sum += digits[i] ** n;
// }
// if (sum === num) {
//   console.log(num + " Armstrong too mun");
// } else {
//   console.log(num + " Armstrong too bish");
// }

//2.N хүртэлх бүх тоог * дүрсээр график үүсгэх//

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let stars = "";
//   for (let j = 1; j <= i; j++) {
//     stars += "*";
//   }
//   console.log(stars);
// }

// let a = 10;
// let aa = 0;
// let aaa = 0;
// for (let i = 1; i <= a; i++) {
//   console.log(i);

//   if (i % 2 === 0) {
//     aa += i;
//   } else {
//     aaa += i;
//   }
// }

// console.log("tegsh tooniii niilber:" + aa);
// console.log("sondgoi toonii niilber:" + aaa);
// console.log("tegsh sondgoi niilber:" + (aa + aaa));

//11.3//

//1. Тооны цифрийн нийлбэрийг олох. (let n = 1234)//
// const az = "1234";
// let azz = azz[0] + azz[1] + azz[2] + azz[3];

//2.Тоог урвуулан бичих (let num = 12345 -> 54321)//
// const easy = "12345";
// let easy1 = easy[4] + easy[3] + easy[2] + easy[1] + easy[0];
// console.log(easy1);

///Dawhar dawtalt//

//1.Массив дахь бүх тоонуудыг хоёр хоёроор нь үржүүлж, шинэ массивт хадгал. Жишээ нь: [2,3,4] → [6,8,12]//

// const number = [2, 3, 4];
// let number2 = [];

// for (let i = 0; i < number.length; i++) {
//   for (let j = i + 1; j < number.length; j++) {
//     number2.push(number[i] * number[j]);
//   }
// }
// console.log(number2);

//2.Массив дахь давтагдсан тоонуудыг олж, тус бүрийн хэдэн удаа гарч ирсэн болохыг тооц. Жишээ: [1,2,2,3,3,3,4] → {2:2, 3:3}

// const number = [1, 2, 2, 3, 3, 3];
// let number2 = {};

// for (let i = 0; i < number.length; i++) {
//   let count = 0;

//   for (j = 0; j < number.length; j++) {
//     if (number[i] === number[j]) {
//       count++;
//     }
//   }

//   if (count > 1) {
//     number2[number[i]] = count;
//   }
// }

// console.log(number2);

//3.Хоёр массивын дунд адилхан элементүүдийг ол. Жишээ: [1,2,3,4] ба [3,4,5,6] → [3,4]/

// const number = [1, 2, 3, 4];
// const number2 = [3, 4, 5, 6];

// let num = [];

// for (let i = 0; i < number.length; i++) {
//   for (let j = 0; j < number2.length; j++) {
//     if (number[i] === number2[j] && !num.includes(number2[j])) {
//       num.push(number[i]);
//     }
//   }
// }
// console.log(num);

//4.Өгөгдсөн тооноос хамаарч од(*)-оор гурвалжин хэвлэ. 4//

// const value = 4;

// for (let i = 0; i < value; i++) {
//   let star = "";

//   for (let j = 0; j <= i; j++) {
//     star += " *";
//   }
//   console.log(star);
// }

//5.Хоёр үг нь ижил үсгийн бүрдэлтэй (анаграмм) эсэхийг шалга. Жишээ: "listen" ба "silent" → true//

// const anagramm = "listen";
// const anagramm1 = "silent";
// let isAnagramm = false;

// if (anagramm.length !== anagramm1.length) {
//   isAnagramm = false;
// } else {
//   for (let i = 0; i < anagramm.length; i++) {
//     for (let j = 0; j < anagramm1.length; j++) {
//       if (anagramm[i] === anagramm1[j]) {
//         isAnagramm = true;
//         break;
//       }
//     }
//     if (!isAnagramm) {
//       break;
//     }
//   }
// }

// console.log(isAnagramm);

//6.Массив доторх хоёр элементийн нийлбэр нь өгөгдсөн target тоотой тэнцүү хосуудыг ол.//

//7.Mассивыг өсөхөөр эрэмбэл Жишээ: [5,2,8,1] → [1,2,5,8]//

// const numbers = [5, 2, 8, 1];

// for (let i = 0; i < numbers.length; i++) {
//   for (let j = i + 1; j < numbers.length; j++) {
//     if (numbers[i] > numbers[j]) {
//       let numbers2 = numbers[i];
//       numbers[i] = numbers[j];
//       numbers[j] = numbers2;
//     }
//   }
// }

// console.log(numbers);

//8.Массив дахь хоёр тооны ялгавар k-тай тэнцүү хосуудыг тоол. Жишээ: [1,5,3,4,2], k=2 → 3//

const number = [1,5, 3, 4, 2];
let k = 2;
let count = 0;

for (let i = 0; i < number.length; i++) {
    for(let j = i + 1; j < number.length; j++) {
        
    }
}