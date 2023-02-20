// const customAlert = (prefix) => {
//     const showAlert = (message = '') => alert(`${prefix}${message}`);  
//     return showAlert;  
//   };
  
// const alertError = customAlert('ERROR: ');
// alertError('ERROR closure');
  
// const alertInfo = customAlert('INFO: ');
// alertError('INFO closure');

// const alertLove = customAlert('Love ');
// alertLove('You');
const localStorageFeature = (key, defaultValue) => {
    const getItem = () => JSON.parse(localStorage.getItem(key)) || defaultValue;
    const setItem = (data) => localStorage.setItem(key, JSON.stringify(data));
    const deleteItem = () => localStorage.removeItem(key);
    return {
      getItem,
      setItem,
      deleteItem,
    };
  };
  
const userLocal = localStorageFeature('user', '');
console.log('userLocal', userLocal);
  
userLocal.setItem('Loc');