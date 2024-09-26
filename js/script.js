// ini javascript
// fungsi pengganti nama di halaman utama
function replaceName() {
let name = prompt("Siapakah nama anda?","");
document.getElementById("home-name").innerHTML = name;
}
replaceName()
// ini fungsi untuk dapat menyimpan data input dalam forms
document.getElementById("submit").addEventListener("click", function validateform() {
const inputName = document.forms["pemesanan"]["input-name"].value;
const birthDate = document.forms["pemesanan"]["tgl-lahir"].value;
const gender = document.forms["pemesanan"]["jenis-kelamin"].value;
const keterangan = document.forms["pemesanan"]["keterangan"].value;
const alamat = document.forms["pemesanan"]["alamat"].value;

// fungsi agar tidak ada form yang kosong
if (inputName == "" || birthDate == "" || gender == "" || keterangan == "" || alamat == "") {
    alert("Tidak boleh ada yang kosong");
    return false;
}
setSenderUI(inputName, birthDate, gender, keterangan, alamat);

return false;
})
// fungsi untuk menampilkan apa yang telah di input
function setSenderUI(inputName, birthDate, gender, keterangan, alamat){
    document.getElementById("sender-name").innerHTML = inputName;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-shop-detail").innerHTML = keterangan;
    document.getElementById("sender-address").innerHTML = alamat;
}

let indexSlide = 1;
showSlide(1);

function nextSlide(n) {
    showSlide(indexSlide += n);
}

function showSlide(index) {
    // get DOM semua Image banner
    let listImage = document.getElementsByClassName("main-banner");
    console.log(indexSlide);
    console.log(listImage);

    // reset index slide
    if (index > listImage.length) indexSlide = 1;
    
    // hide all image
    let i = 0;
    while (i < listImage.length) {
        listImage[i].style.display = "none";
        i++;
    }
    // show selected image
    listImage[indexSlide - 1].style.display = "block";
}

// autorun image banner dengan waktu yang kita tentukan
setInterval(() => nextSlide(1), 3000);