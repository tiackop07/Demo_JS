// let m = +prompt("Nhập số tiền gửi");
// let y = +prompt("Nhập số năm gửi");
// let l = (8/100 *m) * y;
// let d =  m + l
// alert("Số tiền gửi sau"  + text + "năm là:" + d);year
function result() {
    let monney = +document.getElementById("monney").value;
    let year = +document.getElementById("year").value;
    let interest = 0.08 * monney * year;
    let result = monney + interest;
    document.getElementById("output").innerHTML = result;
}
// dử dụng alert
// function showMessage(message) {
//     alert("xin chào");
// }

// sửu dụng inerHTML
// function showMessage(){
//     document.getElementById("messageDiv").innerHTML = 'Xin chào';
// }
//  sử dụng document.write
// function showMessage(){
//     document.write('xin chào');
// }
// Sử dụng console.log
function showMessage(){
    console.log('Xin chào!');
}

