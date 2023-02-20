// const numberA  = 23;
// const name  = 'FED01';
// const booleanT  = true;
// const nullV  = null;
// const underfineValid  = undefined;
// const arrNumber  = [3,4,8,2,4,7,1];
// const objectUser = {name: 'tên', age: 18, gender: 'female'}
// let funtionAlert = () => {
//     alert('đây là function');
// }



const moneyN = 2000000;
const rateI = 0.06;
const monthN = 12;
let year = 3;
const futureMoney = 
    moneyN * (1 + rateI / monthN) ** (monthN * year);
alert('Số tiền kiếm được sau 3 năm: '+ futureMoney +' đồng');


// Hello’ + tên của bạn + ‘, hôm nay là ngày’ + new Date()

const yourName = prompt('Nhập tên của bạn vào đây', 'Unknown');
alert('Hello '+yourName+', hôm nay là ngày ' + new Date());



const loveIt = prompt('Nhập môn học yêu thích của bạn', 'Unknown');
loveIt === 'Công nghệ thông tin'? alert(true) : null;