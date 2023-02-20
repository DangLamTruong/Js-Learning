let numberInput = 0;
do {
    numberInput =  parseInt(prompt('Nhập vào số lượng (max là 10, min là 3)', 1));
    if(numberInput < 3 || numberInput >= 10 || isNaN(numberInput)){
        alert('Bạn cần nhập vào số lớn hơn 3 và nhỏ hơn 10')
    } else{
        alert('Bạn đã nhập đúng')
    }
} while ( numberInput < 3 || numberInput >= 10 || isNaN(numberInput));
// console.log('Số nhâp vào:', numberInput);

const arrName = [];
let nameInput;
for(let i = 1; i <= numberInput; i++){
    nameInput = prompt(`Nhập tên người thứ ` + i);
    arrName.push(nameInput);
    // console.log('nameInput', nameInput);
}

// console('Danh sách nhập vào', arrName);

const result = document.getElementById('listSelector');

const clickBtn = (e) => {
    let randomArr = parseInt(Math.random() * arrName.length)
    document.getElementById('listSelector').innerText = arrName[randomArr]
    // console.log(1)
}
document.querySelector("#btn-Selec").onclick = clickBtn;
