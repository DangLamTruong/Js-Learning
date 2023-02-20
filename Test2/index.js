const $ = (x) => document.getElementById(x);
const getData = (key) => JSON.parse(localStorage.getItem(key)) || [];
const setData = (key, data) => localStorage.setItem(key, JSON.stringify(data));

const isInThePast = (remindDate) => {
    const today = new Date();
    return remindDate.setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0);
}

const isToday = (remindDate) => {
    const today = new Date();
    return remindDate.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0);
}

const formatDate = (remindDate) => {
    const remindDateParts = remindDate.split('-');
    return remindDateParts[2] + '/' + remindDateParts[1]  + '/' + remindDateParts[0];
}
let remindList = getData('list');

const displayList = () => {
    if(remindList.length !== 0) {
        let text = '';
        remindList.forEach(item => {
            if(isToday(new Date(item.date))){
                text += `<div class='current'>Ngay ${formatDate(item.date)} <br/>${item.content}<span class='delete' data-content=${item.content} data-date=${item.date}>&times;</span></div>`
            }else{
                text += `<div class='future'>Ngay ${formatDate(item.date)} <br/>${item.content}<span class='delete' data-content=${item.content} data-date=${item.date}>&times;</span></div>`
            }
        });
        $('myList').innerHTML = text;
    }
    return;
}

displayList();
