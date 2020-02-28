function xo(str) {
    var countX = 0;
    var countO = 0;
    for(var i = str.length - 1; i >= 0; i--) {
        if(str[i] === 'x') {
            countX ++;
        } else if(str[i] === 'o') {
            countO ++;
        }
    }
    if(countX == countO) {
        return true;
    } else {
        return false;
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true