declare function isEmail(email: string): boolean;
declare function hasLength(input: string, minLength?: number, maxLength?: number): boolean;
declare function isEmpty(input: string): boolean;
declare function hasAllItems(input: string, items: string[]): boolean;
declare function isPersianPhoneNumber(input: string): boolean;
declare function isFarsi(input: string, ignoredChars?: string[]): boolean;
export { isFarsi, isPersianPhoneNumber, hasAllItems, hasLength, isEmail, isEmpty };
