//11.6//
//1. false-г true болгох массив үүсгээрэй. booleans = [false, false, true, true]//
// const booleans = [false, false, true, true];

// for (let i = 0; i < booleans.length; i++) {
//   console.log(booleans[i]);
// }

//2.Бүх оюутны насны нийлбэрийг ол. students = [{name: "Бат", age: 20}, {name: "Сара", age: 22}]//
// const students = [
//   { name: "Бат", age: 20 },
//   { name: "Сара", age: 22 },
// ];
// let total = 0;

// for (let i = 0; i < students.length; i++) {
//   total = total + students[i].age;
// }
// console.log(total);

//3.600-с их үнэтэй бүтээгдэхүүнийг хэвлэ. products = [{title: "Уут", price: 500}, {title: "Сав", price: 800}]//

// const products = [
//   { title: "Уут", price: 500 },
//   { title: "Сав", price: 800 },
// ];
// let sum = 600;

// for (let i = 0; i < products.length; i++) {
//   if (products[i].price > sum) {
//     console.log(products[i].price);
//   }
// }

//4.//Бүх ажилтны нэрийг хэвлэ. employees = [{name: "Амгалан", department: "IT"}, {name: "Номин", department: "HR"}]//

// const employees = [
//   { name: "Амгалан", department: "IT" },
//   { name: "Номин", department: "HR" },
// ];
// for (let i = 0; i < employees.length; i++) {
//   console.log(employees[i].name);
// }

//5.Хамгийн их хуудастай номыг ол. books = [{title: "Монгол түүх", pages: 120}, {title: "Газар зүй", pages: 150}]//

// const books = [
//   { title: "Монгол түүх", pages: 120 },
//   { title: "Газар зүй", pages: 150 },
// ];

// let pages1 = books[0];

// for (let i = 1; i < books.length; i++) {
//   if (books[i].pages > pages1.pages) {
//     pages1 = books[i];
//   }
// }
// console.log(pages1.pages);

//6.90-с их оноотой оюутны нэрийг хэвлэ. students = [{name: "Бат", score: 85}, {name: "Сара", score: 92}]//

// const students2 = [
//   { name: "Бат", score: 85 },
//   { name: "Сара", score: 92 },
// ];

// let a = students2[0];

// for (let i = 0; i < students2.length; i++) {
//   if (students2[i].score > a.score) {
//     a = students2[i];
//   }
// }
// console.log(a.name);

//7.stock нь 0 биш бүтээгдэхүүнийг ол. products = [{title: "Уут", stock: 5}, {title: "Сав", stock: 0}]//

// const products = [
//   { title: "Уут", stock: 5 },
//   { title: "Сав", stock: 0 },
// ];

// let stock1 = products[0];

// for (let i = 1; i < products.length; i++) {
//   if (products[i].stock > stock1.stock) {
//     stock1 = products[i];
//   }
// }
// console.log(stock1);

//8.Бүх цалингийн нийлбэр ол. employees = [{name: "Амгалан", salary: 1000}, {name: "Номин", salary: 1500}]//

// const employees = [
//   { name: "Амгалан", salary: 1000 },
//   { name: "Номин", salary: 1500 },
// ];

// total2 = 0;
// for (let i = 0; i < employees.length; i++) {
//   total2 = total2 + employees[i].salary;
// }
// console.log(total2);

//9.2005 оноос хойш хэвлэгдсэн номыг ол. books = [{title: "Монгол түүх", year: 2000}, {title: "Газар зүй", year: 2010}]

// const books2 = [
//   { title: "Монгол түүх", year: 2000 },
//   { title: "Газар зүй", year: 2010 },
// ];

// let b = books2[0];

// for (let i = 1; i < books2.length; i++) {
//   if (books2[i].year > b.year) {
//     b = books2[i];
//   }
// }
// console.log(b);

//10.Насны дундажийг ол. students = [{name: "Бат", age: 20}, {name: "Сара", age: 22}]//
// const students3 = [
//   { name: "Бат", age: 20 },
//   { name: "Сара", age: 22 },
// ];
// let total4 = 0;

// for (let i = 0; i < students3.length; i++) {
//   total4 = total4 + students3[i].age / 2;
// }
// console.log(total4);

//11. Бүх үнэ 10%-иар нэмэгдүүлсэн шинэ array үүсгэ. products = [{title: "Уут", price: 500}, {title: "Сав", price: 800}//

// let products2 = [
//   { title: "Уут", price: 500 },
//   { title: "Сав", price: 800 },
// ];
// let total5 = 0;

// for (let i = 0; i < products2.length; i++) {
//   products2[i].price = products2[i].price + (products2[i].price * 10) / 100;
// }

// console.log(products2);

//bodlogo2//
//1.Хамгийн өндөр үндсэн дүн (math + english + science) бүхий оюутны нэрийг ол.students = [{name: "Бат", math: 85, english: 90, science: 95}, {name: "Сара", math: 92, english: 88, science: 100}]//

// const students = [
//   { name: "Бат", math: 85, english: 90, science: 95 },
//   { name: "Сара", math: 92, english: 88, science: 100 },
// ];

// let topStudent = students[0];
// let maxTotal = topStudent.math + topStudent.english + topStudent.science;

// for (let i = 1; i < students.length; i++) {
//   let total = students[i].math + students[i].english + students[i].science;
//   if (total > maxTotal) {
//     maxTotal = total;
//     topStudent = students[i];
//   }
// }

// console.log(topStudent.name);

//2.Цалин + bonus - tax хамгийн их ажилтны нэрийг ол. employees = [{name: "Амгалан", salary: 1000, bonus: 200, taxRate: 0.1}, {name: "Номин", salary: 1500, bonus: 300, taxRate: 0.2}]//
// const employees = [
//   { name: "Амгалан", salary: 1000, bonus: 200, taxRate: 0.1 },
//   { name: "Номин", salary: 1500, bonus: 300, taxRate: 0.2 },
// ];

// let topEmloyees = employees[0];
// let maxTotal = topEmloyees.salary + topEmloyees.bonus - topEmloyees.taxRate;

// for (let i = 0; i < employees.length; i++) {
//   let total = employees[i].salary + employees[i].bonus - employees[i].taxRate;
//   if (total > maxTotal) {
//     maxTotal = total;
//     topEmloyees = employees[i];
//   }
// }
// console.log(topEmloyees.name);

//3.Борлуулалтын нийт орлого (price * sold * (1 - discount)) хамгийн их бүтээгдэхүүнийг ол.products = [{title: "Уут", price: 500, sold: 10, discount: 0.1}, {title: "Сав", price: 800, sold: 5, discount: 0.2}]//

// const products = [
//   { title: "Уут", price: 500, sold: 10, discount: 0.1 },
//   { title: "Сав", price: 800, sold: 5, discount: 0.2 },
// ];

// let topProducts = products[0];
// let max = topProducts.price * topProducts.sold * (1 - topProducts.discount);

// for (let i = 1; i < products.length; i++) {
//   let total = products[i].price * products[i].sold * (1 - products[i].discount);
//   if (total < max) {
//     max = total;
//     topProducts = products[i];
//   }
// }
// console.log(topProducts);

//4.Pages * rating хамгийн их утгатай номыг ол.books = [{title: "Монгол түүх", pages: 120, year: 2000, rating: 4.5}, {title: "Газар зүй", pages: 150, year: 2010, rating: 4.8}]//

// const books = [
//   { title: "Монгол түүх", pages: 120, year: 2000, rating: 4.5 },
//   { title: "Газар зүй", pages: 150, year: 2010, rating: 4.8 },
// ];

// let topBooks = books[0];
// let max = topBooks.pages * topBooks.rating;

// for (let i = 0; i < books.length; i++) {
//   let sum = books[i].pages * books[i].rating;
//   if (sum > max) {
//     max = sum;
//     topBooks = books[i];
//   }
// }
// console.log(topBooks);

//5.Хамгийн их дүнтэй оюутны нэрийг ол.students = [{name: "Бат", math: 70, english: 80, science: 90}, {name: "Сара", math: 60, english: 85, science: 95}, {name: "Наран", math: 100, english: 90, science: 80}]//

// const students = [
//   { name: "Бат", math: 70, english: 80, science: 90 },
//   { name: "Сара", math: 60, english: 85, science: 95 },
//   { name: "Наран", math: 100, english: 90, science: 80 },
// ];

// let topStudent = students[0];
// let maxTotal = topStudent.math + topStudent.english + topStudent.science;

// for (let i = 1; i < students.length; i++) {
//   let total = students[i].math + students[i].english + students[i].science;
//   if (total > maxTotal) {
//     maxTotal = total;
//     topStudent = students[i];
//   }
// }

// console.log(topStudent);

//6.Active = true ажилтнуудын дундаж цалинг ол.employees = [{name: "Амгалан", salary: 1000, active: true, department: "IT"}, {name: "Номин", salary: 1500, active: false, department: "HR"}, {name: "Баяр", salary: 1200, active: true, department: "IT"}]//

// const employees = [
//   { name: "Амгалан", salary: 1000, active: true, department: "IT" },
//   { name: "Номин", salary: 1500, active: false, department: "HR" },
//   { name: "Баяр", salary: 1200, active: true, department: "IT" },
// ];

// let niilber = 0;
// let dundaj = 0;

// for (let i = 0; i < employees.length; i++) {
//   if (employees[i].active === true) {
//     niilber += employees[i].salary;
//     dundaj++;
//   }
// }
// const dundaj1 = niilber / dundaj;
// console.log(dundaj1);

//7.Category бүрийн нийт орлогыг ол.products = [{title: "Уут", price: 500, sold: 10, category: "Plastic"}, {title: "Сав", price: 800, sold: 5, category: "Metal"}, {title: "Савх", price: 600, sold: 12, category: "Plastic"}]//

// const products = [
//   { title: "Уут", price: 500, sold: 10, category: "Plastic" },
//   { title: "Сав", price: 800, sold: 5, category: "Metal" },
//   { title: "Савх", price: 600, sold: 12, category: "Plastic" },
// ];

// let niilber = 0;

// for (let i = 0; i < products.length; i++) {
//   niilber = products[i].price * products[i].sold;
//   console.log(niilber, products[i].category);
// }

//8.Нийт дүн 270-с их оюутны нэрийг ол.students = [{name: "Бат", math: 85, english: 90, science: 95}, {name: "Сара", math: 92, english: 88, science: 100}]//

// const students = [
//   { name: "Бат", math: 85, english: 90, science: 95 },
//   { name: "Сара", math: 92, english: 88, science: 100 },
// ];

// let huwi = 270;
// let niilber = 0;

// for (i = 0; i < students.length; i++) {
//   niilber = students[i].math + students[i].english + students[i].science;
//   if (niilber > huwi) {
//     console.log(niilber);
//   }
// }

//9.Total revenue хамгийн их номыг ол. books = [{title: "Монгол түүх", price: 1200, sold: 10, discount: 0.1}, {title: "Газар зүй", price: 1500, sold: 5, discount: 0.05}]

// const books = [
//   { title: "Монгол түүх", price: 1200, sold: 10, discount: 0.1 },
//   { title: "Газар зүй", price: 1500, sold: 5, discount: 0.05 },
// ];

// let maxBook = books[0];
// let maxRe = maxBook.price * (1 - maxBook.discount) * maxBook.sold;

// for (let i = 1; i < books.length; i++) {
//   let sum = books[i].price * (1 - books[i].discount) * books[i].sold;
//   if (sum > maxRe) {
//     maxRe = sum;
//     maxBook = books[i];
//   }
// }
// console.log(maxBook.title);

//10.Department = “IT” ажилтнуудын дундаж цалинг ол.employees = [{name: "Амгалан", salary: 1000, bonus: 200, department: "IT"}, {name: "Номин", salary: 1500, bonus: 300, department: "HR"}, {name: "Баяр", salary: 1200, bonus: 100, department: "IT"}]//

// const employees = [
//   { name: "Амгалан", salary: 1000, bonus: 200, department: "IT" },
//   { name: "Номин", salary: 1500, bonus: 300, department: "HR" },
//   { name: "Баяр", salary: 1200, bonus: 100, department: "IT" },
// ];

// let niilber = 0;

// for (let i = 1; i < employees.length; i++) {
//   niilber = employees[i].salary + employees[i].bonus;
//   console.log(niilber, employees[i].department);
// }

//11.Total revenue хамгийн бага бүтээгдэхүүнийг ол.products = [{title: "Уут", price: 500, sold: 10, discount: 0.1}, {title: "Сав", price: 800, sold: 5, discount: 0.2}, {title: "Савх", price: 600, sold: 12, discount: 0.15}]//

// const products = [
//   { title: "Уут", price: 500, sold: 10, discount: 0.1 },
//   { title: "Сав", price: 800, sold: 5, discount: 0.2 },
//   { title: "Савх", price: 600, sold: 12, discount: 0.15 },
// ];

// let maxProducts = products[0];
// let maxRl = maxProducts.price * maxProducts.sold * (1 - maxProducts.discount);

// for (let i = 0; i < products.length; i++) {
//   let sum = products[i].price * products[i].sold * (1 - products[i].discount);
//   if (sum < maxRl) {
//     maxRl = sum;
//     maxProducts = products[i];
//   }
// }
// console.log(maxProducts);

//12.(2025 - year) * rating хамгийн их номыг ол.books = [{title: "Монгол түүх", pages: 120, year: 2000, rating: 4.5}, {title: "Газар зүй", pages: 150, year: 2010, rating: 4.8}, {title: "Улс төр", pages: 200, year: 2005, rating: 4.2}]//
// const books = [
//   { title: "Монгол түүх", pages: 120, year: 2000, rating: 4.5 },
//   { title: "Газар зүй", pages: 150, year: 2010, rating: 4.8 },
//   { title: "Улс төр", pages: 200, year: 2005, rating: 4.2 },
// ];

// let maxBooks = books[0];
// let niilber = (2025 - maxBooks.year) * maxBooks.rating;

// for (let i = 0; i < books.length; i++) {
//   let niilber2 = (2025 - books[i].year) * books[i].rating;
//   if (niilber2 > niilber) {
//     niilber = niilber2;
//     maxBooks = books[i];
//   }
// }
// console.log(maxBooks);

//13.Age 21-аас их оюутны дундаж дүнг ол. students = [{name: "Бат", age: 20, math: 70, english: 80}, {name: "Сара", age: 22, math: 60, english: 85}, {name: "Наран", age: 21, math: 90, english: 95}]
// const students = [
//   { name: "Бат", age: 20, math: 70, english: 80 },
//   { name: "Сара", age: 22, math: 60, english: 85 },
//   { name: "Наран", age: 21, math: 90, english: 95 },
// ];

// let niilber = 0;
// let niilber2 = 0;

// for (i = 0; i < students.length; i++) {
//   if (students[i].ago > 21) {
//     let sum = (students[i].math + students[i].english) / 2;
//     niilber += sum;

//     niilber2++;
//   }
// }
// const dundaj1 = niilber / niilber2;
// console.log(dundaj1);

//14.Tax хассан нийт цалин хамгийн их ажилтны нэрийг ол.employees = [{name: "Амгалан", salary: 1000, bonus: 200, taxRate: 0.1}, {name: "Номин", salary: 1500, bonus: 300, taxRate: 0.2}, {name: "Баяр", salary: 1200, bonus: 100, taxRate: 0.15}]//
// const employees = [
//   { name: "Амгалан", salary: 1000, bonus: 200, taxRate: 0.1 },
//   { name: "Номин", salary: 1500, bonus: 300, taxRate: 0.2 },
//   { name: "Баяр", salary: 1200, bonus: 100, taxRate: 0.15 },
// ];

// let maxEmployees = employees[0];
// let max = maxEmployees.salary + maxEmployees.bonus * (1 - maxEmployees.taxRate);

// for (let i = 0; i < employees.length; i++) {
//   let total =
//     employees[i].salary + employees[i].bonus * (1 - employees[i].taxRate);
//   if (total > max) {
//     max = total;
//     maxEmployees = employees[i];
//   }
// }
// console.log(maxEmployees.name);

//15.Category = “Plastic” орлогын нийлбэрийг ол.products = [{title: "Уут", price: 500, sold: 10, category: "Plastic"}, {title: "Сав", price: 800, sold: 5, category: "Metal"}, {title: "Савх", price: 600, sold: 12, category: "Plastic"}];

// const products = [
//   { title: "Уут", price: 500, sold: 10, category: "Plastic" },
//   { title: "Сав", price: 800, sold: 5, category: "Metal" },
//   { title: "Савх", price: 600, sold: 12, category: "Plastic" },
// ];

// niilber = 0;

// for (let i = 0; i < products.length; i++) {
//   if (products[i].category === "Plastic") {
//     niilber += products[i].price * products[i].sold;
//   }
// }
// console.log(niilber);

//16.Total revenue 10000-с их номыг ол.books = [{title: "Монгол түүх", price: 1200, sold: 10, discount: 0.1}, {title: "Газар зүй", price: 1500, sold: 5, discount: 0.05}, {title: "Улс төр", price: 1000, sold: 20, discount: 0.2}]//
// const books = [
//   { title: "Монгол түүх", price: 1200, sold: 10, discount: 0.1 },
//   { title: "Газар зүй", price: 1500, sold: 5, discount: 0.05 },
//   { title: "Улс төр", price: 1000, sold: 20, discount: 0.2 },
// ];

// for (let i = 0; i < books.length; i++) {
//   let niilber2 = books[i].price * books[i].sold * (1 - books[i].discount);
//   if (niilber2 > 10000) {
//     console.log(books[i].title);
//   }
// }

//17.80-с дээш оноотой бүх subject-ийг массив болгож ав.students = [{name: "Бат", math: 70, english: 80, science: 90}, {name: "Сара", math: 60, english: 85, science: 95}, {name: "Наран", math: 100, english: 90, science: 80}]//

// const students = [
//   { name: "Бат", math: 70, english: 80, science: 90 },
//   { name: "Сара", math: 60, english: 85, science: 95 },
//   { name: "Наран", math: 100, english: 90, science: 80 },
// ];

// let subjects = [];

// for (let i = 0; i < students.length; i++) {
//   for (let key in students[i]) {
//     if (key !== "name" && students[i][key] > 80) {
//       subjects.push(key);
//     }
//   }
// }

// console.log(subjects);

//18.Active = true ажилтнуудын нэрийг department-гээр групп үүсгээрэй.employees = [{name: "Амгалан", salary: 1000, active: true, department: "IT"}, {name: "Номин", salary: 1500, active: false, department: "HR"}, {name: "Баяр", salary: 1200, active: true, department: "IT"}]//

// const employees = [
//   { name: "Амгалан", salary: 1000, active: true, department: "IT" },
//   { name: "Номин", salary: 1500, active: false, department: "HR" },
//   { name: "Баяр", salary: 1200, active: true, department: "IT" },
// ];

// let total = [];

// for (let i = 0; i < employees.length; i++) {
//   if (employees[i].active === true) {
//     total.push(employees[i].name);
//   }
// }
// console.log(total);

//19.Price / sold харьцаа хамгийн бага бүтээгдэхүүнийг ол.products = [{title: "Уут", price: 500, sold: 10, category: "Plastic"}, {title: "Сав", price: 800, sold: 5, category: "Metal"}, {title: "Савх", price: 600, sold: 12, category: "Plastic"}]///

// const products = [
//   { title: "Уут", price: 500, sold: 10, category: "Plastic" },
//   { title: "Сав", price: 800, sold: 5, category: "Metal" },
//   { title: "Савх", price: 600, sold: 12, category: "Plastic" },
// ];

// let minProduct = products[0];
// let minRatio = minProduct.price / minProduct.sold;

// for (let i = 1; i < products.length; i++) {
//   let ratio = products[i].price / products[i].sold;
//   if (ratio < minRatio) {
//     minRatio = ratio;
//     minProduct = products[i];
//   }
// }

// console.log(minProduct);

//20.Rating * pages дундаж хамгийн их номыг ол.books = [{title: "Монгол түүх", pages: 120, rating: 4.5}, {title: "Газар зүй", pages: 150, rating: 4.8}, {title: "Улс төр", pages: 200, rating: 4.2}]
// const books = [
//   { title: "Монгол түүх", pages: 120, rating: 4.5 },
//   { title: "Газар зүй", pages: 150, rating: 4.8 },
//   { title: "Улс төр", pages: 200, rating: 4.2 },
// ];

// let maxBooks = books[0];
// let max = maxBooks.rating * maxBooks.pages;

// for (let i = 0; i < books.length; i++) {
//   let sum = books[i].rating * books[i].pages;
//   if (sum < max) {
//     max = sum;
//     maxBooks = books[i];
//   }
// }
// console.log(maxBooks);

//21.Хамгийн их оноотой subject-тай оюутны нэрийг ол.students = [{name: "Бат", math: 70, english: 80, science: 90}, {name: "Сара", math: 60, english: 85, science: 95}, {name: "Наран", math: 100, english: 90, science: 80}]//

// const students = [
//   { name: "Бат", math: 70, english: 80, science: 90 },
//   { name: "Сара", math: 60, english: 85, science: 95 },
//   { name: "Наран", math: 100, english: 90, science: 80 },
// ];

// let subject2 = 0;
// let sub = "";

// for (i = 0; i < students.length; i++) {
//   const sub2 = students[i].math + students[i].english + students[i].science;
//   if (sub2 > subject2) {
//     subject2 = sub2;
//     sub = students[i].name;
//   }
// }
// console.log(sub);

//22.Department бүрийн хамгийн их цалинг ол.employees = [{name: "Амгалан", salary: 1000, bonus: 200, department: "IT"}, {name: "Номин", salary: 1500, bonus: 300, department: "HR"}, {name: "Баяр", salary: 1200, bonus: 100, department: "IT"}//
// const employees = [
//   { name: "Амгалан", salary: 1000, bonus: 200, department: "IT" },
//   { name: "Номин", salary: 1500, bonus: 300, department: "HR" },
//   { name: "Баяр", salary: 1200, bonus: 100, department: "IT" },
// ];

// for (i = 0; i < employees.length; i++) {
//   let tsalin = employees[i].bonus + employees[i].salary;
//   console.log(employees[i].department + ": " + tsalin);
// }

//23.Total revenue хамгийн бага болон хамгийн их бүтээгдэхүүнүүдийг ол.products = [{title: "Уут", price: 500, sold: 10}, {title: "Сав", price: 800, sold: 5}, {title: "Савх", price: 600, sold: 12}]//

// const products = [
//   { title: "Уут", price: 500, sold: 10 },
//   { title: "Сав", price: 800, sold: 5 },
//   { title: "Савх", price: 600, sold: 12 },
// ];

// let minProduct = products[0];
// let maxProduct = products[0];

// for (let i = 1; i < products.length; i++) {
//   let revenue = products[i].price * products[i].sold;

//   if (revenue < minProduct.price * minProduct.sold) {
//     minProduct = products[i];
//   }

//   if (revenue > maxProduct.price * maxProduct.sold) {
//     maxProduct = products[i];
//   }
// }

// console.log("Хамгийн бага орлоготой бүтээгдэхүүн:", minProduct.title);
// console.log("Хамгийн их орлоготой бүтээгдэхүүн:", maxProduct.title);

//24.Rating > 4.6 номын pages нийлбэрийг ол.books = [{title: "Монгол түүх", pages: 120, year: 2000, rating: 4.5}, {title: "Газар зүй", pages: 150, year: 2010, rating: 4.8}]//

// const books = [
//   { title: "Монгол түүх", pages: 120, year: 2000, rating: 4.5 },
//   { title: "Газар зүй", pages: 150, year: 2010, rating: 4.8 },
// ];

// let aay1 = onabort;

// for (let i = 0; i < books.length; i++) {
//   if (books[i].rating > 4.6) {
//     aay1 += books[i].pages;
//   }
// }
// console.log("Rating > 4.6 номын нийт хуудас:", aay1);

//25.90-с дээш score бүхий оюутнуудын нэрийг массив хэлбэрээр ав.students = [{name: "Бат", math: 85, english: 90, science: 95}, {name: "Сара", math: 92, english: 88, science: 100}]//

// const students = [
//   { name: "Бат", math: 85, english: 90, science: 95 },
//   { name: "Сара", math: 92, english: 88, science: 100 },
// ];

// let tower = [];

// for (let i = 0; i < students.length; i++) {
//   let total = students[i].math + students[i].english + students[i].science;
//   if (total > 90) {
//     tower.push(students[i].name);
//   }
// }
// console.log(tower);

//26.Tax хассан дараах цалингаар эрэмбэлсэн массив үүсгэ.employees = [{name: "Амгалан", salary: 1000, bonus: 200, taxRate: 0.1}, {name: "Номин", salary: 1500, bonus: 300, taxRate: 0.2}]

// const employees = [
//   { name: "Амгалан", salary: 1000, bonus: 200, taxRate: 0.1 },
//   { name: "Номин", salary: 1500, bonus: 300, taxRate: 0.2 },
// ];

// let sun = [];

// for (let i = 0; i < employees.length; i++) {
//   let sum =
//     employees[i].salary + employees[i].bonus * (1 - employees[i].taxRate);
//   console.log(sum);
// }

//27.Борлуулалтын орлого хамгийн бага бүтээгдэхүүнээс эхлэн массив үүсгэ.products = [{title: "Уут", price: 500, sold: 10, discount: 0.1}, {title: "Сав", price: 800, sold: 5, discount: 0.2}]//
<<<<<<< HEAD
=======

// const products1 = [
//   { title: "Уут", price: 500, sold: 10, discount: 0.1 },
//   { title: "Сав", price: 800, sold: 5, discount: 0.2 },
// ];
>>>>>>> 19e4253 (zaa)

const products = [
  { title: "Уут", price: 500, sold: 10, discount: 0.1 },
  { title: "Сав", price: 800, sold: 5, discount: 0.2 }
];

// 1. Орлого тооцож шинэ property нэмэх
for (let i = 0; i < products.length; i++) {
  products[i].revenue = products[i].price * products[i].sold * (1 - products[i].discount);
}

// 2. Энгийн аргаар орлогоор нь эрэмбэлэх (for + if)
for (let i = 0; i < products.length - 1; i++) {
  for (let j = i + 1; j < products.length; j++) {
    if (products[i].revenue > products[j].revenue) {
      // Солих
      let temp = products[i];
      products[i] = products[j];
      products[j] = temp;
    }
  }
}

console.log(products);






//28.Pages / rating харьцаа хамгийн бага номыг ол.books = [{title: "Монгол түүх", pages: 120, rating: 4.5}, {title: "Газар зүй", pages: 150, rating: 4.8}]//
//29.Хамгийн бага оноотой subject бүхий оюутны нэрийг ол.students = [{name: "Бат", math: 70, english: 80, science: 90}, {name: "Сара", math: 60, english: 85, science: 95}, {name: "Наран", math: 100, english: 90, science: 80}//

// const students = [
//   { name: "Бат", math: 70, english: 80, science: 90 },
//   { name: "Сара", math: 60, english: 85, science: 95 },
//   { name: "Наран", math: 100, english: 90, science: 80 },
// ];

// let minTotal = students[0].math + students[0].english + students[0].science;
// let minStudent = [students[0].name];

// for (let i = 1; i < students.length; i++) {
//   let total = students[i].math + students[i].english + students[i].science;
//   if (total < minTotal) {
//     minTotal = total;
//     minStudent = students[i].name;
//   } else if (total === minTotal) {
//     minStudent.push(students[i].name);
//   }
// }

// console.log(minStudent);
<<<<<<< HEAD
=======

//bodlogo2//

//Объект ашиглан үндсэн үйлдлүүд (Basic Object Manipulation)//

//1.Сурагчийг төлөөлөх объект үүсгэж дараах шинж чанаруудыг өгөх: name, age, grade, subject. Объектыг console дээр хэвлэнэ үү.
//2.Үүсгэсэн объект дээр email шинж чанарыг нэмнэ үү.
//3.Сурагчийн нас 18-с доош бол "not allowed" гэж console дээр хэвлэнэ үү.//

// let suragch = {
//   name: "tegshe",
//   ago: 13,
//   grade: 10,
//   subject: "math",
//   email: "tegshe77@gmail.com",
// };

// if (suragch.ago > 18) {
//   console.log("not allowed");
// } else {
//   console.log("allowed");
// }

// console.log(suragch);

//Объект дээр давталт ба нөхцөл (Loops & Conditions with Objects)//

//1.Давталт ашиглан объектын зөвхөн key-г хэвлэнэ үү.Давталт ашиглан объектын зөвхөн value-г хэвлэнэ үү.


// let skin = {
//   name: "khulan",
//   ago: 18,
//   grade: "12b",
//   subject: "english",
//   email: "khulan174@gmail.com",
// }

// for(let key in skin) {
//     console.log(key);
    
// } 
// console.log(skin["email"])

//Object.keys(obj).length ашиглан объект хоосон эсэхийг шалгаж, нөхцөлөөр console дээр хэвлэнэ үү.//


// let story = {
//    name: "enkhee",
//    ago: 10,
// }

// if(Object.keys(story).length === 0) {
//     console.log("hoosn")
// } else {
//     console.log("hooltoi")
// }


//Давталт ашиглан бүх тоон утгыг 10-р нэмнэ үү.//

// const number = [2, 3, 4, 5];

// let sum = [];

// for(let i = 0; i<number.length; i++) {
//     number[i] += 10
// }
// console.log(number);


//let items = { apple: 100, banana: 50, orange: 80 } объектын бүх үнэ нийлбэрийг олно уу.//

// let items = { apple: 100, banana: 50, orange: 80};
// let niilber = 0;


// for(let key in items) {
//     niilber += items[key];
// }

// console.log("Niilber:", niilber)


//for, do-while ба нөхцөлтэй ашиглах (Using for, do-while, and Conditions)
//Давталт ашиглан объектын бүх тоон утгыг 10-р нэмнэ үү.
//Объект ашиглан хэрэглэгчийн нэвтрэх мэдээллийг төлөөлөх. if-else ашиглан оруулсан нэр ба нууц үг объектын мэдээлэлтэй таарч байгаа эсэхийг шалгана уу.
>>>>>>> 19e4253 (zaa)
