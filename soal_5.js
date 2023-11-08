var hargaMakanan = 10000;
var hargaMinuman = 5000;

var jumlahMakanan = parseInt(prompt("Masukkan jumlah makanan yang ingin dipesan:"));
var jumlahMinuman = parseInt(prompt("Masukkan jumlah minuman yang ingin dipesan:"));

var totalHarga = (hargaMakanan * jumlahMakanan) + (hargaMinuman * jumlahMinuman);

alert("Total harga pesanan Anda adalah: " + totalHarga + " Rupiah");