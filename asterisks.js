//1. Menyusun Barisan Bintang

var row1 = 5;
for(var i = 1; i <= row1; i++) {
    var star1 = '*';
    console.log(star1);
}

//2. Menyusun Barisan Bintang Dengan Nested Looping

var row2 = 5;
for(var i = 1; i <= row2; i++) {
    var star2='';
    for(var j = 1; j <= row2; j++) {
         star2  +='*';      
    }
    console.log(star2);
};


//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var row3 = 5;
for(var i = 1; i <= row3; i++) {
    var star3 = ''
    for(var j = 1; j <= i; j++) {
        star3 +='*'   
    }
    console.log(star3);
}




