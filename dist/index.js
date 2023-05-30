"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = exports.isEmail = exports.hasLength = exports.hasAllItems = exports.isPersianPhoneNumber = exports.isFarsi = void 0;
function isEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
exports.isEmail = isEmail;
function hasLength(input, minLength, maxLength) {
    if (minLength === void 0) { minLength = 0; }
    var inputLength = input.length;
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
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        if (input.indexOf(item) === -1) {
            return false;
        }
    }
    return true;
}
exports.hasAllItems = hasAllItems;
function isPersianPhoneNumber(input) {
    var regex = /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/;
    return regex.test(input);
}
exports.isPersianPhoneNumber = isPersianPhoneNumber;
function isFarsi(input, ignoredChars) {
    if (ignoredChars === void 0) { ignoredChars = []; }
    var ignoredRegex = new RegExp("[".concat(ignoredChars.join(""), "]"), "g");
    var sanitizedInput = input.replace(ignoredRegex, "");
    var farsiRegex = /^[\u0600-\u06FF\s]+$/;
    return farsiRegex.test(sanitizedInput);
}
exports.isFarsi = isFarsi;
