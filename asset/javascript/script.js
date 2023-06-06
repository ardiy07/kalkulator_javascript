// baris 1
const tbHapus = document.getElementById("br1-1");
var tbPersen = document.getElementById("br1-2");
const tbBagi = document.getElementById("br1-4");
const tbKali = document.getElementById("br2-4");
const tbKurang = document.getElementById("br3-4");
const tbTambah = document.getElementById("br4-4");
const tbSmaDengan = document.getElementById("br5-4");

// output
var output = document.getElementById("hasil");

function clear(){
    document.getElementById("hasil").innerHTML = "0";
}

tbHapus.addEventListener('click', function(){
    document.getElementById("hasil").innerHTML = "0";
});

function hapusHsl(){
    var nilai = output.innerHTML;
    if(nilai == "0"){
        nilai = " ";
        document.getElementById("hasil").innerHTML = nilai;
    }
}

function persen(){
    hapusHsl();
    var nilai = document.getElementById("hasil").innerHTML;
    nilai = nilai/100;
    document.getElementById("hasil").innerHTML = nilai;
}

function tmpNilai(nilai){
    hapusHsl();
    document.getElementById("hasil").innerHTML += nilai;
}

function hasilAkhir(){
    hapusHsl();
    var nilaiAkhir = document.getElementById("hasil").innerHTML;
    var nilai = eval(nilaiAkhir);
    document.getElementById("hasil").innerHTML = nilai;
}