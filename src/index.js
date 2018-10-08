// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (property) => {
    return property;
};
const createNotEnumerableProperty = (property) => {
    return Symbol(property);
};
const createProtoMagicObject = () => {
    let prop = function () {
    };
    prop.__proto__ = prop.prototype;
    return prop;
};
const incrementor = () => {
    if (!incrementor.counter) {
        incrementor.counter = 0;
    }
    incrementor.valueOf = function () {
        return incrementor.counter;
    }
    let incr = function () {
        return incrementor();
    }
    incr.valueOf = function () {
        return incrementor.counter;
    }
    incrementor.counter++;
    return incr;
};
const asyncIncrementor = () => {
    if (!asyncIncrementor.counter) {
        asyncIncrementor.counter = 0;
    }
    asyncIncrementor.counter++;
    return asyncIncrementor.counter;
};
const createIncrementer = () => {
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(param);
        }, 1000);
    })
};

const getDeepPropertiesCount = () => {
};

const createSerializedObject = () => {
};
const toBuffer = () => {
};
const sortByProto = (arr) => {
    return arr.sort((a, b) => a - b);
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;