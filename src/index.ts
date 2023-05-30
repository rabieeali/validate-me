function isEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function hasLength(input: string, minLength: number = 0, maxLength?: number): boolean {
    const inputLength = input.length;
    if (maxLength !== undefined) {
      return inputLength >= minLength && inputLength <= maxLength;
    }
    return inputLength >= minLength;
  }
  
function isEmpty(input: string): boolean {
    return input.length === 0;
}
function hasAllItems(input: string, items: string[]): boolean {
    for (const item of items) {
        if (input.indexOf(item) === -1) {
            return false;
        }
    }
    return true;
}
function isPersianPhoneNumber(input: string) {
    const regex = /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/;
    return regex.test(input);
}

export { isPersianPhoneNumber, hasAllItems, hasLength, isEmail, isEmpty }