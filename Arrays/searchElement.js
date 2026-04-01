// WAP that searches for an element in an array and returns index, if elem not present than return -1


var arr = [2,4,11,1,5,99]

function searchElem(num){

    for(let i = 0; i<arr.length;i++){
        if(arr[i]==num){
            return i
            // break;
        }

    }
   return -1
}

var result = searchElem(4);
console.log(result)