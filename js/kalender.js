    function bukaTab(id, tombol) {
        document.querySelectorAll('.tab-isi').forEach(function (el) {
            el.classList.remove('aktif');
        });
        document.querySelectorAll('.tab-btn').forEach(function (el) {
            el.classList.remove('active');
        });
        document.getElementById(id).classList.add('aktif');
        tombol.classList.add('active');
    }

    var NAMA_BULAN = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
    var NAMA_HARI = ['Min','Sen','Sel','Rab','Kam','Jum','Sab'];

    var tampil = new Date();
    tampil.setDate(1);

    function gambarKalender() {
        var t = tampil.getFullYear();
        var b = tampil.getMonth();
        var awal = new Date(t, b, 1).getDay();
        var jumlah = new Date(t, b + 1, 0).getDate();
        var bulanLalu = new Date(t, b, 0).getDate();
        var hariIni = new Date();
        var html = '';

        NAMA_HARI.forEach(function (h) {
            html += '<div class="kal-hari">' + h + '</div>';
        });

        var total = Math.ceil((awal + jumlah) / 7) * 7;
        for (var i = 0; i < total; i++) {
            var n = i - awal + 1;
            var kelas = 'kal-sel';
            var teks = n;

            if (n < 1) {
                teks = bulanLalu + n;
                kelas += ' luar';
            } else if (n > jumlah) {
                teks = n - jumlah;
                kelas += ' luar';
            } else {
                if (n === hariIni.getDate() && b === hariIni.getMonth() && t === hariIni.getFullYear()) {
                    kelas += ' hari-ini';
                }
            }
            html += '<div class="' + kelas + '">' + teks + '</div>';
        }

        document.getElementById('kal-grid').innerHTML = html;
        document.getElementById('kal-judul').textContent = NAMA_BULAN[b] + ' ' + t;
    }

    document.getElementById('kal-prev').onclick = function () {
        tampil.setMonth(tampil.getMonth() - 1);
        gambarKalender();
    };
    document.getElementById('kal-next').onclick = function () {
        tampil.setMonth(tampil.getMonth() + 1);
        gambarKalender();
    };

    gambarKalender();