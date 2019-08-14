function checkAB(string) {
    var hereA = [];
    var hereB = [];
    var distance = [];
    for (var i = 0; i < string.length; i++) {
        if (string[i] === 'a') {
            hereA.push(i);
        } else if (string[i] === 'b') {
            hereB.push(i);
        }
    }
    for (var j = 0; j < hereA.length; j++) {
        for (var k = 0; k < hereB.length; k++) {
            distance.push(hereA[j] - hereB[k]);
        }
    }
    for (var l = 0; l < distance.length; l++) {
        if (distance[l] === 4 || distance[l] === -4) {
            return true;
        }
    }
    return false;
}  
  
// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false