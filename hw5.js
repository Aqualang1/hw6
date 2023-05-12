const userArr = [];

const userLength = prompt('enter length');

if (isNaN(+userLength) || userLength == null) {
    console.log('error');
} else {
    for (let i = 0; i < userLength; i++) {
        let userValue = prompt(`enter value for index ${i}`);
        if (userValue == null) {
            console.log('error');
            break;
        } else {
            userArr.push(userValue);
            console.log(userArr);
        }
    }
    console.log(userArr.sort(function (a, b) { return a - b; }));
}

if (+userLength >= 4) {
    console.log(userArr.splice(2, 3));
    console.log(userArr);
} else {
    console.log('not enough items in array');
}