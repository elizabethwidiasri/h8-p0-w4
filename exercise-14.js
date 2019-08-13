function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var perjalanan = []
    var ongkos = 0
    var dari = 0
    var ke = 0

    for (var i = 0; i < arrPenumpang.length; i++) {

        for (var j = 0; j < rute.length; j++) {

            if (arrPenumpang[i][1] === rute[j]) {
                dari = rute.indexOf(rute[j])
                

            } else if (arrPenumpang[i][2] === rute[j]) {
                ke = rute.indexOf(rute[j])
                
            }

            ongkos = (ke - dari)*2e3
        }
        var commute = {}
        commute.penumpang = arrPenumpang[i][0]
        commute.naikDari = arrPenumpang[i][1]
        commute.tujuan = arrPenumpang[i][2]
        commute.bayar = ongkos
        perjalanan.push(commute)
    }
    return perjalanan
}

  
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

  console.log(naikAngkot([['Marcell', 'C', 'F'], ['Eli', 'A', 'F']]));
  // [ { penumpang: 'Marcell', naikDari: 'C', tujuan: 'F', bayar: 6000 },
  //   { penumpang: 'Eli', naikDari: 'A', tujuan: 'F', bayar: 10000 } ]
  
  console.log(naikAngkot([])); //[]