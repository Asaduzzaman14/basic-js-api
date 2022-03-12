const first = { a: 2, b: 4 }
const second = { a: 2, b: 4 }
const third = first

if (first === third) {
    // console.log('eqale');
}


if (first === second) {
    // console.log('objects are eqale');
} else {
    // console.log('object not eqale')
}
if (JSON.stringify(first) === JSON.stringify(second)) {
    // console.log('object are uqale');
}



function compareObject(obj1, obj2) {
    // console.log(Object.keys(obj1).length, Object.keys(obj2).length);
    if (Object.keys(obj1).length != Object.keys(obj2).length) {
        console.log("first");
        return false

    }
    for (const prop in obj1) {

        if (obj1[prop] !== obj2[prop]) {  /// problem
            console.log('second');
            return false
        }

    }
    return true;
}

const isEqal = compareObject(first, second)
console.log(isEqal);

