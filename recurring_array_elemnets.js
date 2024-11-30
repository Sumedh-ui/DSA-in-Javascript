// Javascript program for finding the majority elements in the array
// Here we use the Moore's Voting algorithm.

// Problem:
/*
There is an given array which consist of the intergers and task is to find the same 
occurance more than floor(n/3)times.
Input array arr[] = {2,2,4,3,1,3,2,1,1}

*******************Logic********************
Step 1: initialize 2 variables ele1 = -1 and ele2 = -1, for the elemnets 
and cnt1 and cnt2 both = 0 for the counting 

Step 2: if the elemnet is equal to any previous element update the count

Step 3: if neither candidate matches and both count are non zero, decrement the count.

Step 4: After this in the second pass we check if the choosen element appear more than
floor n/3 times in the array then include it in the result array

*/


function findingMajorEle(arr){
    const n = arr.length;

//    initialize the two elements and their counts

let ele1 = -1;
let ele2 = -1;
let cnt1 = 0;
let cnt2 = 0;

for(let ele of arr){
    // increment count for Element
    if(ele1 === ele){
        cnt1 ++;
    }

// or else increment count for Element2
else if(ele2 === ele){
cnt2++;
}
//  for Element1  if the count is zero.
else if(cnt1 === 0){
ele1 = ele;
cnt1++;
}
//  for Element2 if the count is zero.
else if(cnt2 === 0){
    ele2 = ele;
    cnt2++;
}

//Decrese Counts if neither elements

else{
    cnt1--;
    cnt2--;
}
}

const res = []
cnt1 = 0;
cnt2 = 0;

// Count the occurance of elemnts
for (let ele of arr){
    if(ele1 === ele) cnt1++;
    if(ele2 === ele) cnt2++;
}

//Add to result if they are majority elements 

if(cnt1 > n / 3) res.push(ele1)
    if(cnt2 > n /3 && ele1 != ele2) res.push(ele2);

if(res.length === 2 && res[0] > res[1]){
    [res[0], res[1]] = [res[1], res[0]]
}
return res;
}

const arr = [2,2,3,1,3,2,1,1];
const res = findingMajorEle(arr);
console.log(res.join(" "));