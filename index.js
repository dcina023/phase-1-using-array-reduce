const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce (reducer)

console.log (`${totalBatteries}`)

function reducer(a, b){
    return a + b
}

/// youtube tutorials have been very helpful for these methods. 