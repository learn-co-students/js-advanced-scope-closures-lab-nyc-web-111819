function produceDrivingRange( range ) {
    return function ( startingBlock, endingBlock ) {
      let start = parseInt( startingBlock );
      let end = parseInt( endingBlock );
      let travel = Math.abs( end - start );
      let difference = range - travel;
      if ( difference > 0 ) {
        return `within range by ${difference}`
      } else {
        return `${Math.abs(difference)} blocks out of range`
      }
    }
  }
function produceTipCalculator(floating){
    return function tipCalulatin(bill){
        return bill*floating
    }
}
function createDriver() {
    let driverId = 0
    return class {
      constructor( name ) {
        this.id = ++driverId
        this.name = name
      }
    }
  }