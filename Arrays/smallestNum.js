// let arr = [9,-2,5,3,9,0];

// let num = arr[0]

// function smallestNumber(arr){
//  for(let i = 0; i<arr.length;i++){
//     if(arr[i] < num){
//         num = arr[i]
//     }
//  }
//  console.log(num)
// }

// smallestNumber(arr)


let arr = [9,-2,5,3,9,40];

let smallNum = arr[0]
let largeNum = arr[5]


function smallestAndLargeNumber(arr){
 for(let i = 0; i<arr.length;i++){
    if(arr[i] < smallNum){
        smallNum = arr[i]
    }
    if(arr[i] > largeNum){

        largeNum = arr[i]
    }
}
    console.log(smallNum,largeNum)
 }


smallestAndLargeNumber(arr)