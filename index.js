// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = (dataBelanjaan) => {
  return dataBelanjaan.map((data) => {
    return (`- ${data.nama} x ${data.kuantitas}`);
  })
};

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal

// just trying
let hargaTotal = 0;
dataBelanjaan.forEach(TotalBelanja);
function TotalBelanja(item) {
  hargaTotal += (item.harga * item.kuantitas);
}
console.log("harga total",hargaTotal)
// just trying


const totalBelanjaan = (dataBelanjaan) => {
  let sumHarga = 0;
  dataBelanjaan.forEach((data) => {
  sumHarga += (data.harga * data.kuantitas)
  })
  return sumHarga;
};


// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
