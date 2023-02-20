const arrNumber = [2, 4, 2, 1, 5, 30, -3, 4, -15];
const objectNumber = { a: 1, b: 2, c: 3 };

// for (let i = 0; i < arrNumber.length; i = i + 1){
//   console.log(arrNumber[i]);
// }

// let i = 0;
// while (i < arrNumber.length) {
//   console.log(arrNumber[i]);
//   i++;
// }

// for (const numberItem of arrNumber) {
//   console.log(numberItem);
// }

// for (const item in objectNumber) {
//   console.log(item);
// }
// for (const item in objectNumber) {
//   console.log(objectNumber[item]);
// }

// Object.keys(objectNumber).map(
//   (keyItem) => console.log(objectNumber[keyItem])
// );

const shopData = {
  corgiShop: {
    address: '29 Lê Quang Sung', chargedOf: 'Lộc', phoneNumber: 935964949,
    products: [{ sku: 10001, name: 'sản phẩm 1', price: 10 }, { sku: 10002, name: 'sản phẩm 2', price: 100 }],
  },
  huskyShop: {
    address: '29 Quang Trung', chargedOf: 'Lộc 2', phoneNumber: 9359622234,
    products: [{ sku: 10001, name: 'sản phẩm 3', price: 10 }, { sku: 10002, name: 'sản phẩm 2', price: 100 }],
  },
  shibaShop: {
    address: '29 Lê lợi', chargedOf: 'Lộc 3', phoneNumber: 9344622234,
    products: [{ sku: 10001, name: 'sản phẩm 2', price: 10 }, { sku: 10002, name: 'sản phẩm 5', price: 100 }],
  },
};
console.log('shopData: ', shopData);
// console.log(Object.entries(shopData));

// const listShop = Object.entries(shopData).map((itemShop) => {
//   const nameShop = itemShop[0];
//   const valueShop = itemShop[1];
//   valueShop.nameShop = nameShop;
//   return valueShop;
// });
// console.log('listShop ~ listShop', listShop);

const shopDataArray = Object.entries(shopData).map((itemShop) => {
  const nameShop = itemShop[0];
  const valueShop = itemShop[1];
  valueShop.nameShop = nameShop;
  itemShop[0] = valueShop.phoneNumber;
  console.log({ a: itemShop[0], b: itemShop[1] });
  return [itemShop[0], itemShop[1]];
});

const shopDataKeyPhoneNumber = Object.fromEntries(shopDataArray);
console.log('shopDataKeyPhoneNumber', shopDataKeyPhoneNumber)

// const listShop = [ 
//   {
//     nameShop: "corgiShop",
//     address: "29 Lê Quang Sung",
//     chargedOf: "Lộc",
//     phoneNumber: 935964949,
//     products: [
//       { sku: 10001, name: "sản phẩm 1", price: 10 },
//       { sku: 10002, name: "sản phẩm 2", price: 100 },
//     ],
//   },
//   {
//     nameShop: "huskyShop",
//     address: "29 Quang Trung",
//     chargedOf: "Lộc 2",
//     phoneNumber: 9359622234,
//     products: [
//       { sku: 10001, name: "sản phẩm 3", price: 10 },
//       { sku: 10002, name: "sản phẩm 2", price: 100 },
//     ],
//   },
//   {
//     nameShop: "shibaShop",
//     address: "29 Lê lợi",
//     chargedOf: "Lộc 3",
//     phoneNumber: 9344622234,
//     products: [
//       { sku: 10001, name: "sản phẩm 2", price: 10 },
//       { sku: 10002, name: "sản phẩm 5", price: 100 },
//     ],
//   },
// ];
// console.log(listShop);
// console.log(Object.entries(listShop));

// const listShop = Object.entries(listShop).map((itemShop) => {

// var userInfo = {
//   name: "Eimi Fukada",
//   age: 25,
//   job: "actor",
// };
// console.log('userInfo: ', userInfo);

// userInfo.age = 18;
// console.log('userInfo: ', userInfo);

// Object.freeze(userInfo);
// userInfo.name = 'Truong';
// console.log('userInfo: ', userInfo);
