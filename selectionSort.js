/***************** The Following is the Selection Sort Code *********************/
/**********Array for sorting the is as follows [10,4,43,5,57,,91,45,9,7]**************/

function selectionSort(arr,n){
    for (let i=0; i<n-1; i++){
        let mini =i;
        for (let j=i+1; j<n; j++){
            if(arr[j] < arr[mini]){
                mini = j;
            }
        }
        //Swap
        let temp = arr[mini]
        arr[mini] = arr[i];
        arr[i] = temp;
    }
    console.log("After Selection Sort: ");
    console.log(arr.join(" "));
}


const arr = [10,4,43,5,57,,91,45,9,7];
const n = arr.length;

console.log("Before Selection Sort: ")
console.log(arr.join(" "));
selectionSort(arr,n)
