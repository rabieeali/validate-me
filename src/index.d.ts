declare module '@alirabiee/validate-me' {
    /**
     * Checks if the input string is a valid email address.
     * @param email The email address to validate.
     * @returns `true` if the email is valid, `false` otherwise.
     */
    export function isEmail(email: string): boolean;
  
    /**
     * Checks if the input string has a length within the specified range.
     * @param input The input string to check the length of.
     * @param minLength The minimum length allowed.
     * @param maxLength The maximum length allowed.
     * @returns `true` if the input length is within the specified range, `false` otherwise.
     */
    export function hasLength(input: string, minLength: number, maxLength: number): boolean;
  
    /**
     * Checks if the input string has a length of zero.
     * @param input The input string to check.
     * @returns `true` if the input length is zero, `false` otherwise.
     */
    export function isEmpty(input: string): boolean;
  }
  