function addNo (a, b) {
    return new Promise (function (success, error) {
        if (typeof a === 'number' && typeof b === 'number') {
                arr = []
                arr.push(a+b+'')
                arr.push(a*b+'')
                arr.push(a-b+'')
                success(arr)
        } else {
            error ('Arguments passed should always be numbers!')
        }
    })
}

addNo (5, 5).then(function (sum) {
    console.log('Addition is: ', sum)
}, function (err) {
    console.log('Error: ', err)
})
