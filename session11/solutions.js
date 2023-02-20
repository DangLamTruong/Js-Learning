const $ = (el) => document.querySelector(el);

const keyLocal = 'ListData';
const getDataLocalStorage = () => 
    JSON.parse(localStorage.getItem(keyLocal)) || [];

const setDataLocalStorage = (data) => 
    (localStorage.setItem(keyLocal, JSON.stringify(data)));

let listStudent  = getDataLocalStorage();

const displayStudents = () => {
    let row = '';
    let tableStudent = '';
    listStudent.map((item) => {
        row = `<tr>
            <td>${item.cmnd}</td>
            <td>${item.name}</td>
            <td>${item.birthday}</td>
            <td>${item.phoneNumber}</td>
        </tr>`;
        tableStudent = tableStudent + row;
    });
    $('#dataStudent').innerHTML  = tableStudent;
};

displayStudents();

$('#submit').onclick = () => {
    const cmnd = $('#cmnd').value;
    const name = $('#name').value;
    const birthday = $('#birthday').value;
    const phoneNumber = $('#phoneNumber').value;
    listStudent.push({
        cmnd: cmnd,
        name: name,
        birthday: birthday,
        phoneNumber: phoneNumber,
    });

    setDataLocalStorage(listStudent);
    displayStudents();
};  