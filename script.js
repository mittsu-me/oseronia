'use strict'

// マス全域を変数に格納
const masuTagTd = document.getElementsByTagName('td');
// マス行を変数に格納
const masuTagTr = document.getElementsByTagName('tr');
// 黒のターンかどうかのブーリアン値
let blackTurn = true;
// 盤づくり
for (let i = 0; i < 8; i++) {
    masuTagTr[i].classList.add('board');
    // console.log(masuTagTr[i])
}
// 白石を置く関数
function putWhiteStone(index) {
    if (blackTurn === false) {
        masuTagTd[index].className = 'white';
        masuTagTd[index].textContent = "●";
        blackTurn = !blackTurn;
    }
}
// 黒石を置く関数
function putBlackStone(index) {
    if (blackTurn === true) {
        masuTagTd[index].className = 'black';
        masuTagTd[index].textContent = "●";
        blackTurn = !blackTurn;
    }
}
// 初期状態を作成
putBlackStone(28);
putWhiteStone(27);
putBlackStone(35);
putWhiteStone(36);

// 白石の置けるところを黄色で表示する関数
function canPutWhiteStone() {
    for (let i = 0; i < 64; i++) {
        if (masuTagTd[i].className === 'white') {
            /* Upper line check. */
            for (let upperEnd = i - 8; upperEnd > 0 
                && masuTagTd[upperEnd + 8].id !== 'canPut'; upperEnd -= 8) {
                    const upperIndex = [];
                    // console.log("Upper",upperEnd);
                    if (masuTagTd[upperEnd].className === '' 
                    && masuTagTd[upperEnd + 8].className === 'black') {
                        console.log('pass');
                        masuTagTd[upperEnd].id = 'canPut';
                    }
                    upperIndex.push(upperEnd)
            }
//             /* Under line check. */
//             for (let underEnd = i + 8; underEnd < 64 
//                 && masuTagTd[underEnd - 8].id !== 'canPut'; underEnd += 8) {
//                 console.log("Under",underEnd);
//                 if (masuTagTd[underEnd].className === '' 
//                 && masuTagTd[underEnd - 8].className === 'black') {
//                     console.log('pass');
//                     masuTagTd[underEnd].id = 'canPut';
//                 }
//             }
//             /* Left line check. */
//             for (let leftEnd = i - 1; leftEnd % 8 !== 0 
//                 && leftEnd >= 0 
//                 && masuTagTd[leftEnd + 1].id !== 'canPut'; leftEnd -= 1) {
//                 console.log("Left",leftEnd);
//                 if (masuTagTd[leftEnd].className === '' 
//                 && masuTagTd[leftEnd + 1].className === 'black') {
//                     console.log('pass');
//                     masuTagTd[leftEnd].id = 'canPut';
//                 }
//             }
//             /* Right line check. */
//             for (let rightEnd = i + 1; rightEnd % 8 !== 7 
//                 && rightEnd < 64 
//                 && masuTagTd[rightEnd - 1].id !== 'canPut'; rightEnd += 1) {
//                 console.log("Right",rightEnd);
//                 if (masuTagTd[rightEnd].className === '' 
//                 && masuTagTd[rightEnd - 1].className === 'black') {
//                     console.log('pass');
//                     masuTagTd[rightEnd].id = 'canPut';
//                 }
//             }
//             /* Diagonally upper the left line check. */
//             for (let upperCrossLeftEnd = i - 9; upperCrossLeftEnd % 8 !== 7 
//                 && upperCrossLeftEnd >= 0 
//                 && masuTagTd[upperCrossLeftEnd + 9].id !== 'canPut'; upperCrossLeftEnd -= 9) {
//                 console.log("upperCrossLeft",upperCrossLeftEnd);
//                 if (masuTagTd[upperCrossLeftEnd].className === '' 
//                 && masuTagTd[upperCrossLeftEnd + 9].className === 'black') {
//                     console.log('pass');
//                     masuTagTd[upperCrossLeftEnd].id = 'canPut';
//                 }
//             }
//             /* Diagonally upper the right line check. */
//             for (let upperCrossRightEnd = i - 7; upperCrossRightEnd % 8 !== 0 
//                 && upperCrossRightEnd >= 0 
//                 && masuTagTd[upperCrossRightEnd + 7].id !== 'canPut'; upperCrossRightEnd -= 7) {
//                 console.log("Right",upperCrossRightEnd);
//                 if (masuTagTd[upperCrossRightEnd].className === '' 
//                 && masuTagTd[upperCrossRightEnd + 7].className === 'black') {
//                     console.log('pass');
//                     masuTagTd[upperCrossRightEnd].id = 'canPut';
//                 }
//             }
//             /* Diagonally under the left line check. */
//             for (let underCrossLeftEnd = i + 9; underCrossLeftEnd % 8 !== 7 
//                 && underCrossLeftEnd <= 64 
//                 && masuTagTd[underCrossLeftEnd - 9].id !== 'canPut'; underCrossLeftEnd += 9) {
//                 console.log("underCrossLeft",underCrossLeftEnd);
//                 if (masuTagTd[underCrossLeftEnd].className === '' 
//                 && masuTagTd[underCrossLeftEnd - 9].className === 'black') {
//                     console.log('pass');
//                     masuTagTd[underCrossLeftEnd].id = 'canPut';
//                 }
//             }
//             /* Diagonally under the right line check. */
//             for (let underCrossRightEnd = i + 7; underCrossRightEnd % 8 !== 0 
//                 && underCrossRightEnd <= 64 
//                 && masuTagTd[underCrossRightEnd - 7].id !== 'canPut'; underCrossRightEnd += 7) {
//                 console.log("Right",underCrossRightEnd);
//                 if (masuTagTd[underCrossRightEnd].className === '' 
//                 && masuTagTd[underCrossRightEnd - 7].className === 'black') {
//                     console.log('pass');
//                     masuTagTd[underCrossRightEnd].id = 'canPut';
//                 }
//             }
        }
    }
}
const blackStonesArr = [];

// 黒石の置けるところを黄色で表示する関数
function canPutBlackStone() {
    for (let i = 0; i < 64; i++) {
        if (masuTagTd[i].className === 'black') {
            blackStonesArr.push(i);
        }
    }
    console.log(blackStonesArr);
    blackStonesArr.map(function(i){
/* Upper line check. */
            const upperIndex = [];
            for (let upperEnd = i - 8; upperEnd > 0 
                && masuTagTd[upperEnd + 8].id !== 'canPut'; upperEnd -= 8) {
                    // console.log("Upper",upperEnd);
                if (masuTagTd[upperEnd].className === '' 
                && masuTagTd[upperEnd + 8].className === 'white') {
                    // console.log('pass');
                    masuTagTd[upperEnd].id = 'canPut';
                    console.log(upperIndex);
                }
                upperIndex.push(upperEnd)
            }
/* Under line check. */
            for (let underEnd = i + 8; underEnd < 64 
                && masuTagTd[underEnd - 8].id !== 'canPut'; underEnd += 8) {
                console.log("Under",underEnd);
                if (masuTagTd[underEnd].className === '' 
                && masuTagTd[underEnd - 8].className === 'white') {
                    console.log('pass');
                    masuTagTd[underEnd].id = 'canPut';
                }
            }
/* Left line check. */
            for (let leftEnd = i - 1; leftEnd % 8 !== 0 
                && leftEnd >= 0 
                && masuTagTd[leftEnd + 1].id !== 'canPut'; leftEnd -= 1) {
                console.log("Left",leftEnd);
                if (masuTagTd[leftEnd].className === '' 
                && masuTagTd[leftEnd + 1].className === 'white') {
                    console.log('pass');
                    masuTagTd[leftEnd].id = 'canPut';
                }
            }
/* Right line check. */
            for (let rightEnd = i + 1; rightEnd % 8 !== 7 
                && rightEnd < 64 
                && masuTagTd[rightEnd - 1].id !== 'canPut'; rightEnd += 1) {
                console.log("Right",rightEnd);
                if (masuTagTd[rightEnd].className === '' 
                && masuTagTd[rightEnd - 1].className === 'white') {
                    console.log('pass');
                    masuTagTd[rightEnd].id = 'canPut';
                }
            }
/* Diagonally upper the left line check. */
            for (let upperCrossLeftEnd = i - 9; upperCrossLeftEnd % 8 !== 7 
                && upperCrossLeftEnd >= 0 
                && masuTagTd[upperCrossLeftEnd + 9].id !== 'canPut'; upperCrossLeftEnd -= 9) {
                console.log("upperCrossLeft",upperCrossLeftEnd);
                if (masuTagTd[upperCrossLeftEnd].className === '' 
                && masuTagTd[upperCrossLeftEnd + 9].className === 'white') {
                    console.log('pass');
                    masuTagTd[upperCrossLeftEnd].id = 'canPut';
                }
            }
/* Diagonally upper the right line check. */
            for (let upperCrossRightEnd = i - 7; upperCrossRightEnd % 8 !== 0 
                && upperCrossRightEnd >= 0 
                && masuTagTd[upperCrossRightEnd + 7].id !== 'canPut'; upperCrossRightEnd -= 7) {
                console.log("Right",upperCrossRightEnd);
                if (masuTagTd[upperCrossRightEnd].className === '' 
                && masuTagTd[upperCrossRightEnd + 7].className === 'white') {
                    console.log('pass');
                    masuTagTd[upperCrossRightEnd].id = 'canPut';
                }
            }
/* Diagonally under the left line check. */
            for (let underCrossLeftEnd = i + 9; underCrossLeftEnd % 8 !== 7 
                && underCrossLeftEnd <= 64 
                && masuTagTd[underCrossLeftEnd - 9].id !== 'canPut'; underCrossLeftEnd += 9) {
                console.log("underCrossLeft",underCrossLeftEnd);
                if (masuTagTd[underCrossLeftEnd].className === '' 
                && masuTagTd[underCrossLeftEnd - 9].className === 'white') {
                    console.log('pass');
                    masuTagTd[underCrossLeftEnd].id = 'canPut';
                }
            }
/* Diagonally under the right line check. */
            for (let underCrossRightEnd = i + 7; underCrossRightEnd % 8 !== 0 
                && underCrossRightEnd <= 64 
                && masuTagTd[underCrossRightEnd - 7].id !== 'canPut'; underCrossRightEnd += 7) {
                console.log("Right",underCrossRightEnd);
                if (masuTagTd[underCrossRightEnd].className === '' 
                && masuTagTd[underCrossRightEnd - 7].className === 'white') {
                    console.log('pass');
                    masuTagTd[underCrossRightEnd].id = 'canPut';
                }
            }
        })
    }


function canPutanVisible() {
    for (let i = 0; i < masuTagTd.length; i++) {
        masuTagTd[i].id = '';
    }
}

function putStones(index) {
    if  (masuTagTd[index].className === ''){
        if (blackTurn === true) {
            putBlackStone(index);
        } else {
            putWhiteStone(index) 
        }
    } else {
        alert('このマスはすでに置かれているにゃ～ฅ^•ω•^ฅ');
    }
}

function reverseStone(index) {

}


// 白石の個数
const numOfwhiteStones = document.getElementsByClassName('white').length;
// 黒石の個数
const numOfblackStones = document.getElementsByClassName('black').length;
// 全ての個数
const allStones = masuTagTd.length;
console.log(`白：${numOfwhiteStones}`);
console.log(`黒：${numOfblackStones}`);
console.log(`全：${allStones}`);


canPutBlackStone();
// /* オセロ本体 */
// for (let i = 0; i < 64 && masuTagTd.length !== whiteStones + blackStones; i++) {
//     if (blackTurn === true) {
//         canPutBlackStone();
//     } else {
//         canPutWhiteStone();
//     }
//     masuTagTd[i].addEventListener('click', () => {
//         putStones(i);
//         canPutanVisible();
//         if (blackTurn === true) {
//             canPutBlackStone();
//         } else {
//             canPutWhiteStone();
//         }
//     });
// }
// while (masuTagTd.length !== whiteStones + blackStones) {
//     if (blackTurn === true) {
//         canPutBlackStone();

//     }else {
//         canPutWhiteStone();
//     }
// }

// test
// putBlackStone(9);
// putBlackStone(18);
// putBlackStone(29);
// putWhiteStone(42);
// putWhiteStone(0);
// putWhiteStone(7);
// putWhiteStone(56);
// putWhiteStone(63);
// putWhiteStone(22);
// putBlackStone(16);
// putBlackStone(24);

// canPutWhiteStone()
// canPutBlackStone()

// const whiteStones = [];
// function canPut(index) {
//     if (masuTagTd.index === 'board'){
        
//     } else {
//         alert('このマスはすでに置かれているにゃ～ฅ^•ω•^ฅ');
//     }
// }

// console.log(masuTagTd[1].className === '');
// // 空いているところに石を置く関数宣言
// function putStone(index) {
//     const changeTag = masuTagTd[index];
//     if (index % 8 === 0) {
//         if (masuTagTd[index - 8].textContent === "●"
//         || masuTagTd[index - 7].textContent === "●"
//         || masuTagTd[index - 1].textContent === "●"
//         || masuTagTd[index + 1].textContent === "●"
//         || masuTagTd[index + 7].textContent === "●"
//         || masuTagTd[index + 8].textContent === "●") {
            
//             for (let i; masuTagTd[i].className === ''; i++) {
                
//             }
//         } //else {
//         //     alert('このマスには置けないにゃ～ฅ^•ω•^ฅ');
//         // }
//     } else{
    
//     if (masuTagTd[index - 9].textContent === "●"
//     || masuTagTd[index - 8].textContent === "●"
//     || masuTagTd[index - 7].textContent === "●"
//     || masuTagTd[index - 1].textContent === "●"
//     || masuTagTd[index + 1].textContent === "●"
//     || masuTagTd[index + 7].textContent === "●"
//     || masuTagTd[index + 8].textContent === "●"
//     || masuTagTd[index + 9].textContent === "●") {
//         if (changeTag.textContent !== "●") {
//             if (blackTurn === true) {
//                 for (let i = index; i <= 63; i += 8) {
//                     console.log(masuTagTd[i].className/* ,i */);
//                 }
//                 /* 黒石を置く */
//                 changeTag.classList.add('black');
//                 changeTag.textContent = "●";
//             } else {
//                 /* 白石を置く */
//                 changeTag.classList.add('white');
//                 changeTag.textContent = "●";
//             }
//             blackTurn = !blackTurn;
//         } else {
            
//         }
//     } else {
//         alert('このマスには置けないにゃ～ฅ^•ω•^ฅ');
//     }
// }
// }

// // function canPut(index) {
// //     if (masuTagTd[index].className === 'white' || blackTurn === true){
// //         masuTagTd[index + 9].classList.add('canPut');
// // } else if (masuTagTd[index].className === 'black' ||blackTurn === false) {
// //         masuTagTd[index + 9].classList.add('canPut');
// //     }
// // }

// }