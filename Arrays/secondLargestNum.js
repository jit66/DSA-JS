
function secondLargeNum(arr){

    let largestNum = -Infinity;
    let secondNum = -Infinity;
    
    for(let i=0; i<arr.length;i++){
        if(arr[i] > largestNum){
            secondNum = largestNum
            largestNum = arr[i];
        }
        else if(arr[i] > secondNum && arr[i] !==largestNum){
            secondNum = arr[i]
        }
    }
    // console.log(secondNum === -Infinity ? -1 : secondNum)
    console.log( secondNum)
}
// secondLargeNum([45,1,5,10,45,89,0])
secondLargeNum([45])





// without Infinity

// function secondLargest(arr) {
//     if (arr.length < 2) return -1;

//     let largest = arr[0];
//     let second = null;

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             second = largest;
//             largest = arr[i];
//         } else if (arr[i] < largest && (second === null || arr[i] > second)) {
//             second = arr[i];
//         }
//     }

//     return second === null ? -1 : second;
// }

// // Example
// console.log(secondLargest([45,1,5,10,89,10,0])); // 45