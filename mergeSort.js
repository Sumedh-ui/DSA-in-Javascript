// Sorting Algorithm Merge sort
class Solution {
  static merge(arr, low, mid, high) {
    const temp = []; // temporary array
    let left = low;  // starting index of the left half of arr
    let right = mid + 1;  // starting index of the right half of arr

    // Storing elements in the temporary array in a sorted manner
    while (left <= mid && right <= high) {
      if (arr[left] <= arr[right]) {
        temp.push(arr[left]);
        left++;
      } else {
        temp.push(arr[right]);
        right++;
      }
    }

    // If elements on the left half are still left
    while (left <= mid) {
      temp.push(arr[left]);
      left++;
    }

    // If elements on the right half are still left
    while (right <= high) {
      temp.push(arr[right]);
      right++;
    }

    // Transferring all elements from temporary array to arr
    for (let i = low; i <= high; i++) {
      arr[i] = temp[i - low];
    }
  }

  static mergeSort(arr, low, high) {
    if (low >= high) return;
    const mid = Math.floor((low + high) / 2);
    Solution.mergeSort(arr, low, mid);    // Left half
    Solution.mergeSort(arr, mid + 1, high); // Right half
    Solution.merge(arr, low, mid, high);  // Merging sorted halves
  }
}

// Driver code to test the merge sort
const arr = [9, 4, 7, 6, 3, 1, 5];
console.log("Before sorting array:", arr.join(" "));
Solution.mergeSort(arr, 0, arr.length - 1);
console.log("After sorting array:", arr.join(" "));



