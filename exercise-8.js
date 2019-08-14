function tukarBesarKecil(kalimat) {
    var up = kalimat.toUpperCase()
    var low = kalimat.toLowerCase()
    var temp = kalimat.split('')
    var result = ''
    for (var i = 0; i < kalimat.length; i++) {
        if (kalimat[i] !== up[i]) {
            temp.splice(i, 1, up[i])
        } else if (kalimat[i] !== low[i]) {
            temp.splice(i, 1, low[i])
        }
    }
    result = temp.join('')
    return result 
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"