const test = {
    a: function () {
        console.log(this)
    },
    b: () => {
        console.log(this)
    }
}

test.a()
test.b()