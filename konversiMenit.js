function konversiMenit(menit) {
    var minute = Math.floor(menit/60);
    var second = menit % 60;
    if(menit > 60 && second < 10) {
        return minute + ':' + '0' + second;
    } else if (menit > 60 && second >= 10) {
        return minute + ':' + second;
    } else if (menit < 60) {
        return '0:' + menit;
    } else if (menit > 60 && second == 0) {
        return minute + ':0' + second;
    } else if (menit == 60) {
        return minute + ':0' + second;
    }
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00
