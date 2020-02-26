// 1.Melakukan Looping Menggunakan While

var angka = 2;
console.log('LOOPING PERTAMA');
while (angka <= 20) {
    console.log(angka + ' - ' + 'I love coding');
    angka +=2;
};

var angka2 = 20;
console.log('LOOPING KEDUA');
while (angka2 >= 2) {
    console.log(angka2 + ' - ' + 'I will become fullstack developer');
    angka2 -=2;
}; 

//2. Melakukan Looping Menggunakan For
console.log('LOOPING PERTAMA');
for(var i = 1; i <= 20; i++) {
    console.log(i + ' - ' + 'I love coding');
};

console.log('LOOPING KEDUA');
for(var i = 20; i >= 1; i--) {
    console.log(i + ' - ' + 'I will become fullstack developer');
};



//3. Angka Ganjil dan Genap
    

//looping buat angka genap dan ganjil
for(var i = 1; i <= 100; i++) {
    if(i % 2 != 0) {
        console.log('GANJIL');
    } else {
        console.log('GENAP');
    }
}

//looping dengan pertambahan counter 2 kelipatan 3

for(var i = 1; i <= 100; i+=2) {
    if(i % 3 == 0) {
        console.log(i + ' kelipatan 3');
    } else {
        console.log('""')
    }
}

//looping dengan pertambahan counter 5 kelipatan 6
for (var i = 1; i <= 100; i+=5) {
    if (i % 6 == 0) {
        console.log(i + ' kelipatan 6');
    } else {
        console.log('""');
    }
}


//looping dengan pertambahan counter 9 kelipatan 10
for(var i = 1; i <= 100; i+=9) {
    if(i % 10 == 0) {
        console.log(i + ' kelipatan 10');
    } else {
        console.log('""');
    }
}



