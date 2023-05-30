# @alirabiee/validate-me

`@alirabiee/validate-me` is a lightweight validation library for JavaScript and TypeScript that provides various utility functions for validating common data types. Customized for Iranian Developers

## Installation

You can install `@alirabiee/validate-me` using npm:

```bash
npm install @alirabiee/validate-me
```

**Available Functions**

```
isEmail(str: string): boolean
// Checks if the given string is a valid email address.

isEmpty(str: string): boolean
// Checks if the given string is empty (has zero length).

hasLength(str: string, minLength: number = 0, maxLength?: number): boolean
// Checks if the given string has a length within the specified range.

hasAllItems(str: string, items: string[]): boolean
// Checks if the given string contains all the specified items.

isPersianPhoneNumber(str: string): boolean
// Checks if the given string is a valid Persian phone number.

isFarsi(str: string): boolean
// Checks if the given string is fully in Persian(Farsi) Language.
```

## Usage
You can import individual validation functions or multiple functions at once:

```
import { 
    isEmail,
    hasLength,
    isEmpty,
    hasAllItems,
    isPersianPhoneNumber,
    isFarsi
         } from '@alirabiee/validate-me';



isEmail('I am a string!') // false
isEmpty('I am a string!') // false
hasLength('I am a string!', 3, 82) // true
hasAllItems('I am a string!', ['a', 'G']) // false
isPersianPhoneNumber('09125345997') // true
isFarsi('Salam Donya') // false
isFarsi('سلام دنیا') // true
```
**note**
you can ignore characters by passing the second argument
```
isFarsi('!سلام دنیا') // false
isFarsi('!سلام دنیا' , ['!']) // true

```

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvement,
feel free to open an issue or submit a pull request on the GitHub repository.

## License
This project is licensed under the ISC License.