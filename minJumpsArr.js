class Solution{
    minJumps(arr){
        if(arr.length === 1)return 0;
        if(arr[0] === 0) return -1;
        
        let n = arr.length;
        let max = arr[0];
        let cnt = 1;
        let Steps = arr[0];
    
    for(let i=1; i< arr.length; i++){
        if(i=== n-1){
            return cnt;
         }
         max = Math.max(max,arr[i] + i);
         Steps --;
     
     if(Steps === 0){
         cnt ++;
         if(i >= max){
             return -1
         }
     }
    }
    return -1;
    }
}

let solution = new Solution();
let arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];
let result = solution.minJumps(arr);
console.log(result);
