// const namUser = prompt('Enter your name:');
// const helloAlert = () => {
//     return 'hello ' + namUser;
// }

// alert(helloAlert());

// const helloName = (myName) => {
//     return alert('Hello ' + myName + ', Nice to meet you!');
// }
// // helloName('Truong');


const priceMoneyElectric = [3000, 5000, 10000, 2000];

const calculateElectricMoney = () => {
  let numberElectric;

  do {
    numberElectric = prompt("Nhap so dien (>= 100, < 2000)");
    numberElectric = parseInt(numberElectric);
  } while (
    numberElectric < 100 ||
    numberElectric > 2000 ||
    isNaN(numberElectric)
  );

  let moneyElectric;

  switch (true) {
    case numberElectric < 150:
      moneyElectric = numberElectric * priceMoneyElectric[0];
      break;
    case numberElectric < 500:
      moneyElectric = 150 * priceMoneyElectric[0] + (numberElectric - 150) * priceMoneyElectric[1];
      break;
    case numberElectric < 1500:
      moneyElectric = 
        150 * priceMoneyElectric[0] + 
        350 * priceMoneyElectric[1] + 
        (numberElectric - 500) * priceMoneyElectric[2];
      break;
    case numberElectric > 1500:
        150 * priceMoneyElectric[0] + 
        350 * priceMoneyElectric[1] + 
        1000 * priceMoneyElectric[2] +
        (numberElectric - 1500) * priceMoneyElectric[3];
      break;
    default:
        break;
    }
    alert('So tien dien: '+ moneyElectric);
};

calculateElectricMoney();