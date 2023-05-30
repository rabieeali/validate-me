"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = exports.isEmail = exports.hasLength = void 0;
function isEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
exports.isEmail = isEmail;
function hasLength(input, minLength, maxLength) {
    const inputLength = input.length;
    return inputLength >= minLength && inputLength <= maxLength;
}
exports.hasLength = hasLength;
function isEmpty(input) {
    return input.length === 0;
}
exports.isEmpty = isEmpty;
