// let first_name = "Cao "
// let middle_name = "Trần Đức "
// let last_name = "Khánh"
// let fullname = first_name + middle_name + last_name

// let age = 16

// console.log("Tên tôi là: " + fullname + ", năm nay tôi " + age + " tuổi")


// dien tich hinh thang

// let a = 2
// let b = 8
// let h = 16

// let s = h * (a + b) /2
// console.log("S hình thang = " + s)

//dien tich hinh tam giac bt 3 canh

// let a = 5
// let b = 4
// let c = 5
// let p = 6

// let s = Math.sqrt(p) * (p-a) * (p-b) * (p-c)
// console.log("S hình tam giác = " + s)


//day 2


// let value1 = prompt("Enter number 1 ?");
// value1 = Number(value1)
// let value2 = prompt("Enter number 2 ?");
// value2 = Number(value2)

// let answer = value1 + value2
// alert("Kết quả của" + value1 + "và" + value2 + "là:" + answer)


// let a = prompt("Enter number 1 ?");
// a = Number(a)
// let b = prompt("Enter number 2 ?");
// b = Number(b)

// if (a > b ) {
//     alert("a lớn hơn b")
// } else if (a == b ){
//     alert("a bằng b")
// } else{
//     alert("a nhở hơn b")
// }


// let score = 9

// if (score >9 && score <=10) {
//     alert("A+")
// }



//

// function fullName(first, mid, last) {
//     return first + " " +  mid + " " + last;
//   }

//   console.log(fullName("Nguyễn", "Danh", "Phương"));


// function plus(a, b){
//     let plus = a + b
//     return plus
// }



// function minus(a, b){
//     let minus = a - b
//     return minus
// }


// function product(a, b){
//     let product = a * b
//     return product
// }

// function divide(a, b){
//     let divide = a / b
//     return divide
// }
// let input = prompt("Nhập phép tính")


// if (n3 == "+") {
//     let n1 = Number(prompt("Nhập số cần điền thứ nhất"))
//     let n2 = Number(prompt("Nhập số cần điền thứ hai"))
//     let n3 = Number(prompt("Chọn dấu"))
// } else if (){
//     alert("a bằng b")
// } else{
//     alert("a nhở hơn b")
// }


// let book1 = {
//     name: "Tiktok Marketing",
//     year: 2023,
//     cost: "100.000₫",
//     remain: 1000,
// }

// console.log("Sách " + book1.name + " xuất bản năm " + book1.year + " mua với giá " + book1.cost + " số sách còn lại: " + book1.remain + " cuốn");

// let book2 = {
//     name: "Tính trước năm bước",
//     year: 2021,
//     cost: "150.000₫",
//     remain: 500,
// }

// console.log("Sách " + book2.name + " xuất bản năm " + book2.year + " mua với giá " + book2.cost + " số sách còn lại: " + book2.remain + " cuốn");







// let sum = 0;

// for (let a = 1; a <= 10; a++) {
//   sum += a;

//   if (a % 3 === 0 && a % 2 === 0) {
//     console.log("Số chia hết cho 3 và 2 là: " + a);
//   }
// }

// console.log("Tổng của các số từ 1 đến 10 là: " + sum);




// let food = ["Bún", "Phở", "Nem"];

// for (let a = 0; a < food.length; a++) {
//   console.log(food[a]);
// }




// let person = {
//   name: "Phương",
//   age: 25,
//   favor: ["Chơi Fifa ", "Cho học sinh chép phạt ", "Làm việc tốt."],
// };

// console.log(
//   person.name + " năm nay " + person.age + " tuổi. " + "Sở thích là: " + person.favor
// );







// let array_number = [34, 8, 9, 64, 19, 100];

// let sum = 0;

// for (let i = 0; i < array_number.length; i++) {
//   sum = sum + array_number[i];
// }

// console.log("Tổng các số trong mảng là: " + sum);



let input = prompt("Nhập giai thừa cần tính")
function tinhgiaithua(n) {
  let sum = 1;
  for (let i = 1; i < prompt; i ++){
  sum = sum * prompt[i]
}
} 

let ketqua = tinhgiaithua(prompt)

console.log(ketqua);
