// Bài 1:
// Tạo ứng dụng Chúc Mừng Sinh Nhật:
// user sẽ nhập tên, ngày tháng năm sinh (ví dụ: 01/01/1995) bằng prompt
// nếu hôm nay là ngày sinh nhật, sẽ hiện lên thông báo chúc mừng sinh nhật với tiêu đề: Chúc mừng sinh nhật, bạn <tên user>!!!
// nếu hôm nay không phải ngày sinh nhật, sẽ tính số ngày còn lại đến ngày sinh nhật và hiện lên alert với nội dung: Còn <số ngày> tới ngày sinh nhật của bạn <tên user>

// const nameInput = prompt('Nhap ten cua ban: ');
// const birthday = prompt('Nhap ngay sinh cua ban dd/mm/yyyy:');
// const dayOfYear = 365;

// const today = new Date();
// const currentDay = today.getDate();
// const currentMonth = today.getMonth();
// const currentYear = today.getFullYear();

// const arrBirthday = birthday.split('/');
// const birthdayDay = parseInt(arrBirthday[0]);
// const birthdayMonth = parseInt(arrBirthday[1]);

// if (currentMonth === birthdayMonth - 1 && birthdayDay === currentDay) {
//     alert(`Chúc mừng sinh nhật, bạn ${nameInput}!!!`);
// }

// const todayTime = new Date(currentYear, currentMonth, currentDay).getTime();
// const birthdayTime = new Date(currentYear, birthdayMonth - 1 , birthdayDay).getTime();
// const intervalDay = Math.ceil(Math.abs(todayTime - birthdayTime) / (1000 * 3600 * 24));

// alert(`Còn ${currentMonth < birthdayMonth - 1 ? intervalDay : dayOfYear - intervalDay } tới ngày sinh nhật của bạn ${nameInput}`);

// const DAY_PER_YEAR = 365;
// const nameUser = prompt('nhập tên của bạn');
// const birthday = prompt('ngày sinh của bạn theo format dd/mm/yyyy (ví dụ: 01/01/1995');

// const today = new Date();
// const currentDay = today.getDate();
// const currentMonth = today.getMonth();
// const currentYear = today.getFullYear();

// const arrBirthday = birthday.split('/'); // []
// const birthdayDay = parseInt(arrBirthday[0]);
// const birthdayMonth = parseInt(arrBirthday[1]);

// if (currentMonth === birthdayMonth - 1 && birthdayDay === currentDay) {
//   alert(`Chúc mừng sinh nhật, bạn ${nameUser}!!!`);
// }

// const todayTime = new Date(currentYear, currentMonth, currentDay).getTime();
// const birthdayTime = new Date(currentYear, birthdayMonth - 1, birthdayDay).getTime();
// const intervalDay = Math.ceil(Math.abs(birthdayTime - todayTime) / (1000 * 3600 * 24));

// alert(
//   `Còn ${
//     currentMonth < birthdayMonth - 1 ? intervalDay : DAY_PER_YEAR - intervalDay
//   } tới ngày sinh nhật của bạn ${nameUser}!!!`
// );

// Bài 2:
// Tạo ứng dụng Vietlot phiên bản thiếu kinh phí:
// user nhập lần lượt 6 số bằng prompt, số nhập vào phải thỏa mãn yêu cầu là: là số nguyên lớn hơn 0 và nhỏ hơn 46, nếu sai sẽ bắt nhập lại
// sau khi nhập xong, sẽ tự động random ra 6 số có giới hạn từ 1 đến 45, thông báo 6 số đó và kém theo::
// nếu user trùng được 2 số, thông báo trúng giải khuyến khích
// nếu user trùng được 3 số, thông báo trúng giải 3
// nếu user trùng được 4 số, thông báo trúng giải nhì
// nếu user trùng được 5 số, thông báo trúng giải nhất
// nếu user trùng được 6 số, thông báo trúng giải jackpot
// với giải jackpot thì sẽ hiện thêm thông báo Chúc mừng bạn là người may mắn nhất hôm nay

// document.getElementById('alertButton').onclick = () => { 
//   document.getElementById('change').innerText = 'Truong hí'
// }

const creatArrNumber = (isRandom) => {
  let numberVietlot;
  const arrNumber = new Array(6);

  for (let i = 0; i < arrNumber.length; i++) {
    let isDuplicate;
    do {
      isDuplicate = false;
      numberVietlot = isRandom
        ? Math.floor(Math.random() * 45) + 1
        : parseInt(prompt(`Mời nhập số ${i + 1}`));
      for (let j = 0; j < arrNumber.length; j++) {
        if (numberVietlot === arrNumber[j]) {
          isDuplicate = true;
          break;
        }
      }
    } while (
      numberVietlot < 1 ||
      numberVietlot > 45 ||
      isNaN(numberVietlot || isDuplicate)
    );
    arrNumber[i] = numberVietlot;
  }
  return arrNumber;
};

const arrNumberVietlot = creatArrNumber(false);
const arrNumberRandom = creatArrNumber(true);

let count = 0;

for (let i = 0; i < arrNumberRandom.length; i++) {
  for (let j = 0; j < arrNumberVietlot.length; j++) {
    if (arrNumberRandom[i] === arrNumberVietlot[j]) {
      count++;
      break;
    }
  }
}

alert(`Dãy số của bạn là: ${arrNumberVietlot}`);
alert(`dãy số trúng: ${arrNumberRandom}`);

switch (true) {
  case count === 2:
    alert("Bạn được giải khuyến khích");
    break;
  case count === 3:
    alert("Bạn được giải ba");
    break;
  case count === 4:
    alert("Bạn được giải nhì");
    break;
  case count === 5:
    alert("Bạn được giải nhất");
    break;
  case count === 6:
    alert("Giải Jackbot, bạn là người may mắn nhất");
    break;
  default:
    alert('Chúc bạn may mắn lần sau');
    break;
}
