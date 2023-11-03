var reverse = function(x) {
    let arr = parseInt(x);
  
    let reversed = parseInt(Math.abs(arr).toString().split('').reverse().join(''));
    if (reversed >= Math.pow(-2, 31) && reversed <= Math.pow(2, 31) - 1) { 
      if (arr < 0) {
        return "-" + reversed;
      } else {
        return reversed.toString();
      }
    } else {
      return "0";
    }
  };
  
  console.log(reverse("123"));  