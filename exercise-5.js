function ubahHuruf(kata) {
  var dict = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var result = []
  var temp = []
  temp = kata.split('')

  for (var i = 0; i < dict.length; i++) {
      for (var j = 0; j < temp.length; j++) {
          if (dict[i] === temp[j]) {
             temp.splice(j, 1, i + 1)
          }
      }
      
  }
  for (var k = 0; k < temp.length; k++) {
      result += dict[temp[k]]
  }
  return result
  
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu

