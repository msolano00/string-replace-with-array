# string-replace-with-array

Basic character replacement from string to array values.

## Installation

```
$ npm install string-replace-with-array
```

## API

```js
var replace = require('string-replace-with-array')
```

### replace(originalStr, replacementArr, replaceChar)

Replace a particular character or set of characters in a string with the values
of your choice that you specify in an array. It returns the replaced string.

## Example

Pass the initial string as `originalStr`, the array with the new values as
`replacementArr` and the character or string to be replaced as `replaceChar`.
If the parameters are of the right type (string,object,string) the module will
return an string with the replaced values.

```js
// Import module
var replace = require('string-replace-with-array')

// Declare dependencies
var string = 'SELECT ? FROM ? WHERE ? = \'?\''
var arr    = ['name', 'people', 'favoriteFood', 'pizza']
var char   = '?'

// Prints the output
console.log(replace(string, arr, char))

// => SELECT name FROM people WHERE favoriteFood = 'pizza'

```

# License

[MIT](LICENSE)
