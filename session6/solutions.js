// Bài 1
// Thao tác với mảng theo các yêu cầu sau

// Tạo 1 mảng có tên students, lưu tên các bạn trong lớp

// Thêm “Melody Mask” vào cuối, thêm “Ms.Puiyi” vào đầu

// Thay thế giá trị ở index 3 bằng “Yui Hatano”

// Xóa giá trị áp cuối và index 1

// Tách 5 giá trị liền kề bất kì có trong mảng và hiển thị nó.
const studentArr = ["Truong", "Thuan", "Toan", "Lip", "Hi"];

studentArr.push("Melody");
console.log("studentArr: ", studentArr);
studentArr.unshift("Ms.Puiyi");
console.log("studentArr: ", studentArr);
studentArr[3] = "yui hatano";
console.log("studentArr: ", studentArr);
studentArr.splice(3, 1, "yui hatano");
console.log("studentArr: ", studentArr);
studentArr.splice(studentArr.length - 2, 1);
console.log("studentArr: ", studentArr);
studentArr.splice(1, 1);
console.log("studentArr: ", studentArr);
studentArr.slice(2, 3);
console.log("studentArr1: ", studentArr);

// Bai 2:

// Viết function tính tổng số tiền chi tiêu, với các yêu cầu sau:
// - nhập các giá trị bằng cách sử dụng prompt và lưu trữ các giá trị trong mảng.
// - Nếu nhập giá trị âm hoặc không phải số, sẽ phải nhập lại
// - Nếu người dùng nhập giá trị “Done” thì sẽ ngừng nhập tính toán và tiến hành tính tổng và in ra màn hình

let value;
const valueArray = [];
do {
  do {
    value = prompt("Nhập số chi tiêu: ");
    if (value === "Done") {
      break;
    } else {
      value = parseInt(value);
    }
  } while (isNaN(value) || value < 0);

  if (value !== "Done") {
    valueArray.push(value);
  }
} while (value !== "Done");

const sumValue = valueArray.reduce((accumulateItems, currentItems) => {
  return accumulateItems + currentItems;
}, 0);
console.log("valueArr: ", valueArray);

alert(`Tổng chi tiêu là: ${sumValue}`);
console.log("sumValue: ", sumValue);

// Bài 3
// Cho 1 mảng số bất kì, ví dụ [1, -2, 3, 4, -9, 6, 5, 2, 6, 7, 0, 3, 5, 3, -6, 4, -7]. Yêu cầu:
// - Viết function tính tổng của 2 số liền trước và 2 số liền sau số lớn nhất, trong trường hợp có 2 số lớn nhất, chỉ lấy số đầu tiên.

const numberArray = [1, -2, 3, 4, -9, 6, 5, 2, 6, 7, 0, 3, 5, 3, -6, 4, -7];

const maxValue = Math.max(...numberArray);
const indexMaxValue = numberArray.indexOf(maxValue);

const sumNumber =
  numberArray[indexMaxValue - 2] +
  numberArray[indexMaxValue - 1] +
  numberArray[indexMaxValue + 1] +
  numberArray[indexMaxValue + 2];

alert(`Tổng: ${sumNumber}`);


// Bài 4  
// Cho đoạn text sau, hãy tìm ra có bao nhiêu chữ “Pokémon ” trong đó, và thay mỗi chữ đó bằng “Pocket Monster”. Sau đó, hãy chia đoạn text này thành từng câu, và viết lên màn hình từng dòng đó bằng write: 
// Pokémon (Nhật: ポケモン Hepburn: Pokemon?) (tiếng Anh: /ˈpoʊkɪˌmɒn, -ki-, -keɪ-/)[1][2] còn được gọi là Pocket Monsters (Nhật: ポケットモンスター Hepburn: Poketto Monsutā?, n.đ Quái vật bỏ túi) tại Nhật Bản, là thương hiệu nhượng quyền truyền thông được quản lý bởi The Pokémon Company, một tập đoàn Nhật Bản giữa Nintendo, Game Freak và Creatures.[3] Bản quyền nhượng quyền được chia sẻ bởi cả ba công ty, nhưng Nintendo là chủ sở hữu duy nhất của nhãn hiệu này.[4] Nhượng quyền được tạo bởi Satoshi Tajiri vào năm 1999,[5] và tập trung vào các sinh vật hư cấu gọi là "Pokémon", mà con người, được gọi là Pokémon Trainers (Tiếng Việt gọi là Những nhà huấn luyện Pokémon), bắt và huấn luyện để chiến đấu với nhau để chơi thể thao. Khẩu hiệu tiếng Anh cho nhượng quyền thương mại là "Gotta Catch 'Em All".[6][7] Các tác phẩm trong thương hiệu nhượng quyền thương mại được đặt trong vũ trụ Pokémon. 

const stringPKM = 'Pokémon (Nhật: ポケモン Hepburn: Pokemon?) (tiếng Anh: /ˈpoʊkɪˌmɒn, -ki-, -keɪ-/)[1][2] còn được gọi là Pocket Monsters (Nhật: ポケットモンスター Hepburn: Poketto Monsutā?, n.đ Quái vật bỏ túi) tại Nhật Bản, là thương hiệu nhượng quyền truyền thông được quản lý bởi The Pokémon Company, một tập đoàn Nhật Bản giữa Nintendo, Game Freak và Creatures.[3] Bản quyền nhượng quyền được chia sẻ bởi cả ba công ty, nhưng Nintendo là chủ sở hữu duy nhất của nhãn hiệu này.[4] Nhượng quyền được tạo bởi Satoshi Tajiri vào năm 1999,[5] và tập trung vào các sinh vật hư cấu gọi là "Pokémon", mà con người, được gọi là Pokémon Trainers (Tiếng Việt gọi là Những nhà huấn luyện Pokémon), bắt và huấn luyện để chiến đấu với nhau để chơi thể thao. Khẩu hiệu tiếng Anh cho nhượng quyền thương mại là "Gotta Catch Em All.[6][7] Các tác phẩm trong thương hiệu nhượng quyền thương mại được đặt trong vũ trụ Pokémon.'

const replacedString = stringPKM.replaceAll('Pokémon', 'Pocket Monster');
console.log('stringPKM', stringPKM);
console.log('replacedString', replacedString);
replacedString.split('.').map((item) => document.write(`<p>${item}</p>`));


