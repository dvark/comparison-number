/************** LEVEL 0 & 1 ***************/
var myNumber = 343435;
var yourNumber = -4;

if (myNumber < yourNumber) {
	console.log("My guest number is SMALLER than yours");
} else if (myNumber > yourNumber) {
	console.log("My guest number is LARGER than yours");
} else if (myNumber === yourNumber) {
	console.log("What a coincidence");
}




/************** LEVEL 2 ***************/
var haveCodingExperience = false;

feedback = haveCodingExperience ? 'Thats good' : 'No Problem';

console.log(feedback);



/*************** LEVEL 3 ******************/

/* POSISI DI KELASEMEN AKHIR MUSIM

	1 - 3  liga champion & liga domestik
	4 - 5  liga eropa & liga domestik
	6 - 17  liga domestik
	18 - 20  terdegradasi

*/

function klasemenChelseaLigaInggris(posisi) {
	if (posisi >= 1 && posisi <= 3) {
		return console.log("Musim depan main di liga champion & domestik");
	
	} else if (posisi === 4 || posisi === 5) {
		return console.log("Musim depan main di liga eropa & domestik");
	
	} else if (posisi >= 6 && posisi <= 17) {
		return console.log("Musim depan main di liga domestik");
	
	} else if (posisi >= 18 && posisi <= 20) {
		return console.log("Musim depan terdegradasi");
	}
}

klasemenChelseaLigaInggris(2);
klasemenChelseaLigaInggris(5);
klasemenChelseaLigaInggris(13);
klasemenChelseaLigaInggris(20);



/************** LEVEL 4 ***************/
function cekAja(jumlahLogistik, jumlahKonsumsi) {
    
  var kelebihan = jumlahLogistik % jumlahKonsumsi;
  var jumlahKekurangan = jumlahLogistik - jumlahKonsumsi;
  var jumlahKelebihan = jumlahKonsumsi - jumlahLogistik;
    
  if (kelebihan === 0) {
      return "Bantuan sudah mencukupi";
    
    } else if (kelebihan !== 0 && jumlahKelebihan > 0) {
      return "Kekurangan Bantuan: " + jumlahKelebihan;

    } else if (kelebihan < jumlahKonsumsi) {
      return "Kelebihan Bantuan: " + jumlahKekurangan;
    }
} 

console.log(cekAja(5, 20));
console.log(cekAja(100, 9));
console.log(cekAja(1234, 1234));


/************** LEVEL 5 ***************/
function generateNumberBeetween1and11() {
	return console.log(Math.floor(Math.random() * 10) + 1);
}

generateNumberBeetween1and10();
