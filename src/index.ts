function isEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function hasLength(input: string, minLength: number, maxLength: number): boolean {
    const inputLength = input.length;
    return inputLength >= minLength && inputLength <= maxLength;
}


function isEmpty(input: string): boolean {
    return input.length === 0;
}

export { hasLength, isEmail, isEmpty }