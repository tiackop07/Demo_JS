// let inputWidth = +prompt('Nhap Width')
// let inputHeight = +prompt('Nhap Height')
//
// let width = parseInt(inputWidth);
// let height = parseInt(inputHeight);
// let area = width * height;
// document.write("The area is : " + area);

<!--Bài nhập năm sinh ra số tuổi-->
// function showMyAge(){
//     let age = +document.getElementById('age').value;
//     let date = new Date();
//     let showAge = date.getFullYear() - age;
//     document.getElementById('showAge').innerHTML = "Bạn đã được " + showAge + " tuổi";
// }

<!--Bài nhập A, B và tính các phép tính cơ bản-->
// function sum(){
//     let a = +document.getElementById('a').value;
//     let b = +document.getElementById('b').value;
//     document.getElementById('result').innerHTML = "Kết quả : " + a + b;
// }
// function sub(){
//     let a = +document.getElementById('a').value;
//     let b = +document.getElementById('b').value;
//     document.getElementById('result').innerHTML = "Kết quả : " + (a - b);
// }
// function mul(){
//     let a = +document.getElementById('a').value;
//     let b = +document.getElementById('b').value;
//     document.getElementById('result').innerHTML = "Kết quả : " +  a * b;
// }
// function div(){
//     let a = +document.getElementById('a').value;
//     let b = +document.getElementById('b').value;
//     document.getElementById('result').innerHTML = "Kết quả : " + a / b;
// }

//Bài chuyển đổi tiền tệ

function ChangeMoney() {
    let Amount = document.getElementById("Amount").value;
    let FromC = document.getElementById("From").value;
    let To = document.getElementById("To").value;
    let Result;


    if (FromC == "USD" && To == "VND") {
        Result = "Result: " + (Amount * 23000) + " Đ";
    }
    else if (FromC == "VND"&& To =="USD"){
        Result = "Result: "+ (Amount / 23000) + " $";
    }
    else if (FromC == "VND") {
        Result = "Result: " + Amount + " Đ"
    } else {
        Result = "Result: " + Amount + " $"
    }

    document.getElementById("Result").innerHTML = Result;
}