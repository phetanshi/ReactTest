import React from 'react'


export const isDeepEqual = (prevProp, nextProp) => {

    const objKeys1 = Object.keys(prevProp);
    const objKeys2 = Object.keys(nextProp);

    if (objKeys1.length !== objKeys2.length) return false;

    for (var key of objKeys1) {
        const value1 = prevProp[key];
        const value2 = nextProp[key];

        const isObjects = isObject(value1) && isObject(value2);

        if ((isObjects && !isDeepEqual(value1, value2)) ||
            (!isObjects && value1 !== value2)
        ) {
            return false;
        }
    }
    return true;
};

export const isObject = (object) => {
    return object != null && typeof object === "object";
};

export const useArePropsEqual = (prevProp, nextProp) => {
    var isEqual = isDeepEqual(prevProp, nextProp);
    return isEqual;
}