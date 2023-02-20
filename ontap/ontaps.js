//  const numbers = prompt("Nhập n = ");
        
//     for (let i = 1; i <= numbers; i++){
//         for(let k = numbers; k > i; k--){
//             document.write("&nbsp;&nbsp;");
//         }
//         for(let j = 1; j <= i * 2 - 1;j++ ){
//             document.write("^");
//         }
//         document.write("<br />");
//     }


const nb = prompt("Nhập n = ");
    for (let i = 1; i <= nb; i++){
        for (let j = 1; j <= i; j++){
            document.write("^");
       }
       document.write("<br/>");
    }