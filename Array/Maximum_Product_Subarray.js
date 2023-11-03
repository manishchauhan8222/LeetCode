function maxProduct(array){
   let maxProduct=1;
   let maxCount=0;
    for(let i=0;i<array.length;i++){
        maxProduct*=array[i];
        if(array[i+1]<=0){
           maxCount = maxProduct;
            break;
            

        }
    }
    return maxCount;
}
console.log(maxProduct([2,3,2,4]))