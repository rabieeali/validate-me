"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = exports.isEmail = exports.hasLength = exports.hasAllItems = exports.isPersianPhoneNumber = void 0;
function isEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
exports.isEmail = isEmail;
function hasLength(input, minLength = 0, maxLength) {
    const inputLength = input.length;
    if (maxLength !== undefined) {
        return inputLength >= minLength && inputLength <= maxLength;
    }
    return inputLength >= minLength;
}
exports.hasLength = hasLength;
function isEmpty(input) {
    return input.length === 0;
}
exports.isEmpty = isEmpty;
function hasAllItems(input, items) {
    for (const item of items) {
        if (input.indexOf(item) === -1) {
            return false;
        }
    }
    return true;
}
exports.hasAllItems = hasAllItems;
function isPersianPhoneNumber(input) {
    const regex = /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/;
    return regex.test(input);
}
exports.isPersianPhoneNumber = isPersianPhoneNumber;
