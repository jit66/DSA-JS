// ***
// ***
// ***
// ***
// for(let i=0;i<4;i++){             
//     let row = ""
//     for(let j = 0 ; j<4;j++){
//         row = row + "*"
//     }
//     console.log(row)
// }


// *
// **
// ***
// ****

// for(let i=0;i<4;i++){
//     let row = ""
//     // for(let j = 0; j<=i;j++){
//     for(let j = 0; j<i+1;j++){
//         row = row + "*"
//     }
//     console.log(row)
// }



// 1
// 12
// 123
// 1234

// for(let i = 1; i <5;i++){
//     let row = "";
//     for(let j = 1 ; j <=i ;j++){
//         row = row + j
//     }
//     console.log(row)
// }




// 1
// 22
// 333
// 4444

// for(let i=0;i<5;i++){
//     let row = "";
//     for(let j=0;j<=i;j++){
//         row = row+(i+1)
//     }
//     console.log(row)
// }

// for(let i=1;i<5;i++){
//     let row = "";
//     for(let j=1;j<=i;j++){
//         row = row+(i)
//     }
//     console.log(row)
// }


// 12345
// 1234
// 123
// 12
// 1

// let n = 5
// for(let i = 0 ; i<n ; i++){
//     let row = "";
//     for(let j=0;j<n-i;j++){
//         row = row + (j+1)
//     }
//     console.log(row)
// }



//     *
//    **
//   ***
//  ****
// *****

// let n=5
// for(let i = 0;i<n;i++){
//     let row = "";
//     // for(let j=0 ; j<n-(i+1);j++){
//     for(let j=0 ; j<n-i;j++){
//         row = row + "-"
//     }
//     for(let k = 0 ; k < i+1;k++){
//         row = row + "*"
//     }
//     console.log(row)
// }




// 1
// 10
// 101
// 1010
// 10101
// 101010

// for(let i=0 ; i<5;i++){
//     let row = "";
//     let toggle = 1;
    
//     for(let j=0; j<=i;j++){
//         row = row + toggle;
//         if(toggle==1){
//             toggle=0
//         }
//         else{
//             toggle=1
//         }
//     }
//     console.log(row)
// }




// 1
// 01
// 010
// 1010
// 10101
// 010101

let n = 6;

let toggle = 1;
for(let i=0;i<n;i++){
    let row = "";

    for(let j=0;j<i+1;j++){
        row = row + toggle;
        if(toggle == 1){
            toggle = 0
        }
        else{
            toggle = 1
        }
    }
    console.log(row)
}