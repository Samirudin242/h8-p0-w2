var nama = 'Samirudin';
var peran = 'Penyihir';

if (nama === '' && peran === '') {
    console.log('Nama harus diisi!');
} else if (nama  &&  peran === '') {
    console.log('Hallo ' + nama + ' , pilih peranmu untuk memulai game!');
} else if (nama  && peran === 'Ksatria') {
    console.log('Selamat datang di Dunia Proxytia, ' + nama);
    console.log ('Hallo ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!');
} else if (nama && peran === 'Tabib') {
    console.log('Selamat datang di Dunia Proxytia, ' + nama);
    console.log('Hallo ' + peran + ' ' + nama + ', kamu akan membantu temanmu yang terluka');
} else if (nama && peran === 'Penyihir') {
    console.log('Selamat datang di Dunia Proxytia, ' + nama);
    console.log('Hallo ' + peran + ' ' + nama + ', ciptakan keajaiban yang membantu kemenangamu!');
}