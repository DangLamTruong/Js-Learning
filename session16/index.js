// const userObject = {

//     name: 'Lộc',  
//     greeting: function () {
  
//       return `Xin chào ${this.name}`;
  
//     },
  
//   };
  
//   const studentObject = {
  
//     name: 'Thành',
  
//     moveBy: function (a) {
  
//       return `${this.name} di chuyển bằng ${a}`;
  
//     },
  
//   };
  
//   const moveByUser = studentObject.moveBy.call(userObject,'xe máy','xe độp');

//   const moveByUser2 = studentObject.moveBy.call(studentObject,'xe máy');
  
//   moveByUser('xe máy'); // Lộc di chuyển bằng xe máy​
  
  
//   const greetingByStudent = userObject.greeting.ca(studentObject);  
//   greetingByStudent(); // Xin chào Lộc​


const btnClick = document.querySelectorAll('button').forEach((item) => {
    item.onclick = testThis;

});

function testThis(e) {

    console.log({a: this});  
    this.innerText = 'Dont click me';
}
// elementButton.onclick = testThis;