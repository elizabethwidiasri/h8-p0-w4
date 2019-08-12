function cariMedian(arr) {

    var middle = Math.floor(arr.length / 2)
    var hasil = []
    if (arr.length % 2 !== 0) {
        hasil = arr[middle]
    } else if (arr.length % 2 === 0) {
        hasil = (arr[middle] + arr[middle - 1]) / 2
    }

    return hasil
}
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5