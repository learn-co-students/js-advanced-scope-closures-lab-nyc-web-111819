function produceDrivingRange(blockRange) {
    return function(num1, num2) {
        let start = parseInt(num1);
        let end = parseInt(num2);
        let dist = Math.abs(end - start);
        let diff = blockRange - dist;

        if ( diff > 0 ) {
            return `within range by ${diff}`;
        } else {
            return `${Math.abs(diff)} blocks out of range`;
        };
    };
};

function produceTipCalculator(tip) {
    return function(fare) {
        return fare * tip;
    };
};

function createDriver() {
    let driverId = 0;
    return class {
        constructor(name) {
            this.name = name;
            this.id = ++driverId;
        };
    };
};