/***********Bubble Sort Algorthim with the normal approach **********************************/

function bubbleSort(arr, n){
for (let i=n-1; i >= 0; i--){
for (let j=0; j <=i - 1; j++){
      if (arr[j] > arr[j+1]){
         //Swap
    let temp = arr[j];
      arr[j] = arr[j+1]
   arr[j+1] = temp;
            }
        }
    }
    console.log("Aftee Bubble Sort: ");
    console.log(arr.join(" "));
}
const arr = [10,4,43,5,57,,91,45,9,7]
const n = arr.length;
console.log("Before Using Bubble Sort: ")
console.log(arr.join(" "))
bubbleSort(arr,n)

/***********Bubble Sort Algorthim with the Optimized approach  **********************************/
function BubbleSort2(arr,n){
     for (let i = n - 1; i >= 0; i--) {
        let didSwap = false; // Using a boolean instead of an integer

        for (let j = 0; j <= i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements if they are in the wrong order
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                didSwap = true; // Set didSwap to true if a swap occurred
            }
        }

        // If no swaps occurred during this pass, break out of the loop
        if (!didSwap) {
            break;
        }
    }
    console.log("After bubble sort: ")
    console.log(arr.join(" "));
}

const arr = [13,46,24,52,20,9];
const n = arr.length;
console.log("Before using bubble sort: ")
console.log(arr.join(" "))
BubbleSort2(arr,n)
