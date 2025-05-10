document.addEventListener('DOMContentLoaded', function() {
    const tombolSapa = document.getElementById('tombolSapa');

    if (tombolSapa) {
        tombolSapa.addEventListener('click', function() {
            alert('Halo! Selamat datang kembali!');
        });
    }
});