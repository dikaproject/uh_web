function hitungKeliling() {
  var sisiA = parseFloat(document.getElementById("sideA").value);
  var sisiB = parseFloat(document.getElementById("sideB").value);
  var sisiC = parseFloat(document.getElementById("sideC").value);
  var sisiD = parseFloat(document.getElementById("sideD").value);

  if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC) || isNaN(sisiD)) {
    alert("Masukkan angka valid untuk semua sisi.");
  } else {
    var keliling = sisiA + sisiB + sisiC + sisiD;
    document.getElementById("keliling").textContent = keliling;
  }
}
