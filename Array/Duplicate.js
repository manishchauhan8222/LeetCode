var findDuplicate = function(nums) {

    let result=[];
    nums.sort((a,b)=>a-b)
    for(let i=0;i<nums.length;i++){
 if(nums[i]===nums[i+1]){
     result.push(nums[i])
 }
    }
    if(result.length>=1){
     let set=new Set(result);
     return Array.from(set)
    }
    else{
     return [-1]
    }  
 };