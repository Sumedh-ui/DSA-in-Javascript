//Javascript Program for finding the Next Permutation
// by generating only next 

// Problem: 

// Getting the Next Permutation from the array 
/*
Here is the Array arr =[2,4,1,7,5,0]

******************Logic****************
Step 1: Iterate a given array and find the first index to pivot which does'nt follow 
property of (arr[i]<arr[i+1])

Step 2: if Pivot is given sequence in the array the larger as possible so, reverse the complete array.

Step 3: otherwise, iterate the array from the end and find for the rightmost greater element of the pivot in suffix

Step 4: Swap the pivot and element

Step 5: Minimize the suffix part by reversing the array from pivot + 1 till n

*/



function nextPermutation(arr){
 const n = arr.length

//Finding an pivot 

let pivot = -1;
for (let i = n-2; i>=0; i--){
    if(arr[i] < arr[i+1]){
        pivot = i;
        break;
    }
}

//if the pivot dose'nt exists reverse the whole Array

if(pivot === -1){
    arr.reverse();
    return
}

//find the element from right which is greater than pivot

for(let i = n-1; i > pivot; i--){
    if(arr[i] > arr[pivot]){
        [arr[i], arr[pivot]] = [arr[pivot], arr[i]];
        break
    }
}

// Reverse the elements from pivot + 1 to the end to get the next permutation

let left = pivot + 1
let right = n -1;

while(left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]]
    left++;
    right--;
  }
}

const arr = [2,4,1,7,5,0]
nextPermutation(arr);
console.log(arr.join(" "));