var isPalindrome = function(s) {
    let newS=s.toLowerCase().replace(/[^a-z0-9]+/g,"")
    let reverse=newS.split("").reverse().join("") ;
    return newS===reverse;
  };