var maxProfit = function (prices) {
    let maxProfit = 0;
    let minPrice = Infinity;

    for (let i = 0; i < prices.length; i++) {
        if(prices[i]<minPrice){
            minPrice=prices[i]
        }
        else{
            maxProfit=Math.max(maxProfit,prices[i]-minPrice)
        }
    }
    return maxProfit;
}

console.log(maxProfit([7, 2, 5, 3, 6, 1, 4, 8]))




