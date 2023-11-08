const hargaInput = document.getElementById("harga");
const pembayaranInput = document.getElementById("pembayaran");
const calculateButton = document.getElementById("calculate");
const resultElement = document.getElementById("result");


calculateButton.addEventListener("click", () => {

  const harga = parseFloat(hargaInput.value);
  const pembayaran = parseFloat(pembayaranInput.value);

  const hitung = pembayaran - harga;

  resultElement.innerHTML = `Kembalian: ${hitung}`;
});
