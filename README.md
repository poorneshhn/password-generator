# A simple Password Generator

## How to use

`import { generatePassword } from "password-jenerator";`

`let password = generatePassword();`

`password -> C@4sDEKO!o`

## Arguments it accepts

### `password length`

you can pass a number as first argument which specifies the length of the password

let password = generatePassword(12);

output -> Password123@
which contains 12 characters.

### `password starting characters`

you can pass a startsWith argument to indicate that the password should start with the passed characters.

let password = generatePassword(12, "hello");

output -> helloord123@
which contains 12 characters and starts with `hello`.

### `password ending characters`

you can pass an endsWith argument to indicate that the password should end with the passed characters.

let password = generatePassword(12, "hi", "world");

output -> hioord1world
which contains 12 characters and starts with `hi` and ends with `world`.

**Note: If you are providing startsWith and endsWith arguments, Please make sure that length of neither of them nor sum of them is not more than the length of the password which is passed as the first argument!**
