const arrayItem = new Array(8).fill({ name: '' });
console.log('arrayItem', arrayItem);

const boardGame = new Array(8).fill(arrayItem);
console.log('boardGame', boardGame);

let board = '';

boardGame.map((arrItem, y) => {
  let row = '';
  arrItem.map((item, x) => {
    row = row + `<div id="${x}-"${y}"></div>`;
  });

  board = board + '<div>' + row + '</div>';
});

document.getElementById('board').innerHTML = board;

const putChess = () => {
    const nameChess = prompt('tên cờ muốn đặt', 'Tốt');
    const posX = prompt('Tọa độ X', '0');
    const poxY = prompt('Tọa độ Y', '0');
    document.getElementById('${x}-"${y}').innerHTML = nameChess;
};
document.getElementById('put-chess').onclick = putChess;





class Transpotation {
    
}