Number.prototype.power = function(n=2) {
    return this.valueOf() ** n
}

const a = 12
console.log(`a.power():`, a.power())
console.log(`a.power(3):`, a.power(3))
console.log(`a.power(4):`, a.power(4))