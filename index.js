function produceDrivingRange(blockRange) {
    return function(blockAddr1, blockAddr2) {

        let block1 = parseInt(blockAddr1)
        let block2 = parseInt(blockAddr2)
        let tripRange = block2 - block1
        let differential = tripRange - blockRange

        if (differential > 0) {
            return `${differential} blocks out of range`
        }

        else {
            return `within range by ${-differential}`
        }

    };
}

function produceTipCalculator(tip) {
    return function(fare) {
        return fare * tip
    }
}

function createDriver(name) {
    let driverId = 0;
    return class {
        constructor(name) {
            this.name = name
            this.id = driverId++
        }
    }
}

