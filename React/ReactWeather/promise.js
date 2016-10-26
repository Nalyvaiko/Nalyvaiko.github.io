function getTempPromise(location) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(79);
            reject('City not found');
        }, 1000)
    })
}

getTempPromise('Kiev').then(function(temp) {
    console.log('promise success', temp);
}, function(err) {
    console.log('promise error', err);
})

function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        if (typeof a == 'number' && typeof b == 'number') {
            resolve(a + b);
        } else {
            reject('Both variables should be a number')
        }
    })
}

addPromise(4, '2').then(function(result) {
    console.log('sum', result);
}, function(err) {
    console.log('err', err);
})
