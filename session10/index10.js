const validationRule = {
  username: { min: 4, max: 8, isRequired: true, regExPattern: '' },
  password: { min: 6, max: 9, isRequired: true, regExPattern: '' },
  phonenumber: { min: 9, max: 11, isRequired: false, regExPattern: '' },
  address: { min: 6, max: 30, isRequired: false, regExPattern: '' },


};
document.getElementById('submit').onclick = () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const phonenumber = document.getElementById('phonenumber').value;
    const address = document.getElementById('address').value;


    const fieldValue = {
        username: username,
        password: password,
        phonenumber: phonenumber,
        address: address,
    };

    const arrayFieldValid = Object.keys(fieldValue).map((keyItem) => {
        if (!fieldValue[keyItem] && validationRule[keyItem].isRequired) {
      return false;
        }

        if (
            fieldValue[keyItem].length < validationRule[keyItem].min ||
            fieldValue[keyItem].length > validationRule[keyItem].max
        ) {
          return false;
        }
    return true;
  });
  console.log('arrayFieldValid ~ arrayFieldValid', arrayFieldValid);
};
