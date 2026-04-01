// WAp that return count of -ve nums in an array


let arr = [-3,5,11,-6,6,-45]

function checkNeg(arr){

    let count = 0;

    for(let i=0;i<arr.length;i++){
        if(arr[i] < 0){
            count ++
        }
    }
    console.log(count) ;
}
checkNeg(arr)