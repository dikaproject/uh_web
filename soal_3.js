function cekusia() {
    var usia = parseInt(document.getElementById("usia").value);

    if (isNaN(usia) || usia < 0) {
        alert("Masukkan usia yang valid.");
    } else {
        if (usia < 4) {
            document.getElementById("hasil").textContent = "Balita tidak boleh menonton ke bioskop.";
        } else if (usia >= 4 && usia < 18) {
            document.getElementById("hasil").textContent = "Remaja boleh menonton ke bioskop.";
        } else {
            document.getElementById("hasil").textContent = "Anda sudah dewasa silahkan menonton bisokop.";
        }
    }
}