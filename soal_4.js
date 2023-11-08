function daftar() {
    var nama = document.getElementById("nama").value;
    var nik = document.getElementById("nik").value;
    var email = document.getElementById("email").value;
    var telp = document.getElementById("telp").value;

    if (nama && nik && email && telp) {
        alert("Terimakasih sudah melakukan pendaftaran.");
    } else {
        alert("Anda harus mengisi data dengan lengkap.");
    }
}