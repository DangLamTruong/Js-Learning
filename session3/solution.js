//bài 1
const nameE = prompt('Nhập tên nhân viên: ');
const trinhDo = prompt('Nhập trình độ(Fresher, Junior, Middle, Senior): ');
const chucVu = prompt('Nhập chức vụ(Member, Trainer, Teamlead, PM): ');
const thamNien = prompt('Nhập thâm niên: ');

const EMPLOYEE = {
    level: {
        Fresher: {
            text: 'Fresher',
            salary: 8000000,
        },
        Junior: {
            text: 'Junior',
            salary: 10000000,
        },
        Middle: {
            text: 'Middle',
            salary: 15000000,
        },
        Senior: {
            text: 'Senior',
            salary: 20000000,
        },
    },
    title: {
        Member: {
            text: 'Member',
            salary: 0,
        },
        Trainer: {
            text: 'Trainer',
            salary: 1000000,
        },
        Teamlead: {
            text: 'Teamlead',
            salary: 3000000,
        },
        PM: {
            text: 'PM',
            salary: 8000000,
        },
    },
};

let employeeSalary = 0;

switch (trinhDo) {
    case EMPLOYEE.level.Fresher.text:
        employeeSalary += EMPLOYEE.level.Fresher.salary;
        break;
    case EMPLOYEE.level.Junior.text:
        employeeSalary += EMPLOYEE.level.Junior.salary;
        break;
    case EMPLOYEE.level.Middle.text:
        employeeSalary += EMPLOYEE.level.Middle.salary;
        break;
    case EMPLOYEE.level.Senior.text:
        employeeSalary += EMPLOYEE.level.Senior.salary;
        break;
    default:
    break;
}

switch (chucVu) {
    case EMPLOYEE.title.Member.text:
        employeeSalary += EMPLOYEE.title.Member.salary;
        break;
    case EMPLOYEE.title.Trainer.text:
        employeeSalary += EMPLOYEE.title.Trainer.salary;
        break;
    case EMPLOYEE.title.Teamlead.text:
        employeeSalary += EMPLOYEE.title.Teamlead.salary;
        break;
    case EMPLOYEE.title.PM.text:
        employeeSalary += EMPLOYEE.title.PM.salary;
        break;
    default:
    break;
}

if(thamNien > 8){
    employeeSalary += 4000000;
    if(trinhDo === EMPLOYEE.level.Senior.text && chucVu === EMPLOYEE.title.Teamlead.text){
        employeeSalary += 10000000;
    }
}
if(thamNien > 5){
    employeeSalary += 2000000;
    if(trinhDo === EMPLOYEE.level.Senior.text && chucVu === EMPLOYEE.title.Teamlead.text){
        employeeSalary += 5000000;
    }
}
if(thamNien > 3){
    employeeSalary += 500000;
    if(trinhDo === EMPLOYEE.level.Senior.text && chucVu === EMPLOYEE.title.Teamlead.text){
        employeeSalary += 2000000;
    }
}
if(thamNien > 0){
    if(trinhDo === EMPLOYEE.level.Senior.text && chucVu === EMPLOYEE.title.Teamlead.text){
        employeeSalary += 500000;
    }
}

if(thamNien > 8){
    if(chucVu === EMPLOYEE.title.PM.text){
        employeeSalary = employeeSalary + employeeSalary * 0.06;
    }
}
if(thamNien > 5){
    employeeSalary += 4000000;
    if(chucVu === EMPLOYEE.title.PM.text){
        employeeSalary = employeeSalary + employeeSalary * 0.05;
    }
}

alert(nameE + ' Lương tháng này là: ' + employeeSalary);

//Bai 2

let numberT = 0;

while (numberT < 200){
    if(numberT % 4 === 0 && numberT % 8 !== 0)
    console.log(numberT);
    numberT++;
} 


const arrNumber = [2, 3, 5, 6, 3, 6, 8, 7, 3, 1, 2, 5, 7, 8, 4];

let isDone = false;


while(!isDone){
    isDone = true;
    let sum = 0;
    for(let i = 0; i < arrNumber.length; i++){
        let j = arrNumber[i];
        let k = arrNumber[i + 1];
        if(k && k > j){
            isDone = false;
            arrNumber[i] = k;
            arrNumber[i + 1] =j;
            sum = arrNumber[i];
        }
        // return sum;
    }
} 
console.log(arrNumber);

const array = [1, 5, 9, 10];
function sumArray(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }
     
    return sum;
}
 
console.log(sumArray(array));

    