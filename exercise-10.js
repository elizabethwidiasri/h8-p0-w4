function changeMe(arr) {

    var member = {}

    for (var i = 0; i < arr.length; i++) {

        member['firstName'] = arr[i][0]
        member['lastName'] = arr[i][1]
        member['gender'] = arr[i][2]

        if (arr[i][3] === undefined) {
            member['age'] = 'Invalid Birth Year'
        } else if (arr[i][3] > 2019) {
            member['age'] = 'Invalid Birth Year'
        } else {
            member['age'] = 2019 - arr[i][3]
        }
        console.log(member)
    }
}
  

  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""