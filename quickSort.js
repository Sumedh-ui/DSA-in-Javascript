// Quick Sort Algorithm for sorting the array 
function partition(arr, low, high) {
    const pivot = arr[low];
    let i = low;
    let j = high;

    while (i < j) {
        while (arr[i] <= pivot && i <= high - 1) {
            i++;
        }

        while (arr[j] > pivot && j >= low + 1) {
            j--;
        }

        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
        }
    }

    [arr[low], arr[j]] = [arr[j], arr[low]]; // Place pivot in correct position
    return j;
}

function quickSortRecursive(arr, low, high) {
    if (low < high) {
        const pIndex = partition(arr, low, high);
        quickSortRecursive(arr, low, pIndex - 1);
        quickSortRecursive(arr, pIndex + 1, high);
    }
}

function quickSort(arr) {
    quickSortRecursive(arr, 0, arr.length - 1);
    return arr;
}

// Example usage
const arr = [4, 6, 2, 5, 7, 9, 1, 3];
console.log("Before Quick Sort:", arr);
const sortedArr = quickSort(arr);
console.log("After Quick Sort:", sortedArr);
