/******************Insertion Sort for the array****************************/

function insertionSort(arr,n){
    for (let i=0; i<=n-1; i++){
        // Shift Element larger than arr[j] one position ahead
    let j = i;
        while(j > 0 && arr[j - 1] > arr[j]){
        // Swap Element
        let temp = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = temp;
        j--;
    }
 }

console.log("After Insertion Sort: ")
console.log(arr.join(" "));
}

const arr = [13,46,24,52,20,9]
const n = arr.length;

console.log("Before Using Insertion Sort: ")
console.log(arr.join(" "));
insertionSort(arr,n);
