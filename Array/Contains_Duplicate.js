var containsDuplicate = function(nums) {
    const array=Array.from((new Set(nums)));
    return (array.length===nums.length)? false : true;
};

