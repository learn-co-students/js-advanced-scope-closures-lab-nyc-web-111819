


function produceDrivingRange(limit) {
  return function(str1, str2) {
    // parse strings to integers
    let pointA = parseInt(str1.match(/[1234567890]+/gm))
    let pointB = parseInt(str2.match(/[1234567890]+/gm))
  
    // take difference
    let diff = Math.abs(pointA - pointB)

    // compare with limit & produce return string
    if (diff > limit) {
      // too far
      return `${diff - limit} blocks out of range`
    } else {
      // diff is less than or equal to limit
      return `within range by ${limit - diff}`
    }
 
  }
}

function produceTipCalculator(tipRate) {
  return function(fare) {
    return fare * tipRate
  }
}

function createDriver() {
  let DriverId = 0;
  return class {
    constructor(name) {
      this.name = name
      this.id = ++DriverId
    }
  }
}

// document.addEventListener("DOMContentLoaded", function(){
//   produceDrivingRange(10)("12th Street", "31st Street");
//   console.log("end")
// })

