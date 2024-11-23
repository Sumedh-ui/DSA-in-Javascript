// JavaScript Program to left rotate the array by d positions
// By Creating an Temp array to store the array 

//Logic For Reversing array........

// Let us take arr[] = {1, 2, 3, 4, 5, 6}, d = 2.

// First Step:
//         => Rotate to left by one position.
//         => arr[] = {2, 3, 4, 5, 6, 1}
// Second Step:
//         => Rotate again to left by one position
//         => arr[] = {3, 4, 5, 6, 1, 2}
// Rotation is done 2 times.
// So the array becomes arr[] = {3, 4, 5, 6, 1, 2}



// Function to rotate array
function rotateArr(arr, d) {
    let n = arr.length;

    // Handle case when d > n
    d %= n;

    // Storing rotated version of array
    let temp = new Array(n);

    // Copy last n - d elements to the front of temp
    for (let i = 0; i < n - d; i++)
        temp[i] = arr[d + i];

    // Copy the first d elements to the back of temp
    for (let i = 0; i < d; i++)
        temp[n - d + i] = arr[i];

    // Copying the elements of temp in arr
    // to get the final rotated array
    for (let i = 0; i < n; i++)
        arr[i] = temp[i];
}

const arr = [1, 2, 3, 4, 5, 6];
const d = 2;

console.log("Array Before Rotating", arr)

rotateArr(arr, d);

// Print the rotated array
console.log("Array after Rotating",arr.join(" "));