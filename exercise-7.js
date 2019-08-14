function urutkanAbjad(str) {
    var result =''
    var arrStr = []
    var final = ''

    for (var i = 0; i < str.length; i++) {
        arrStr = str.split('')
        result = arrStr.sort()
        final = result.join('')
    }
    return final
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'