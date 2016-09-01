/*!
 * string-replace-with-array
 * Copyright(c) 2016 Marvin Solano
 * MIT Licensed
 */

'use strict'

/**
 * Module exports.
 * @public
 */

module.exports = replace

/**
 * Replaces a string for the value in the array in corresponding order
 *
 * @param   {string}  originalStr
 * @param   {object}  replacementArr
 * @param   {string}  replaceChar
 *
 * @return  {string}
 *
 * @public
 */

 function replace(originalStr, replacementArr, replaceChar) {

  // Validations
  validateArguments(originalStr, replacementArr, replaceChar)
  validateArrayContentType(replacementArr)
  validateNumberOfMatches(originalStr, replacementArr, replaceChar)

  // Variables
  var processedStr = ''
  var controlIndex = 0

  for (var i = 0, len = originalStr.length; i < len; i++) {
    if (originalStr[i] !== replaceChar && typeof originalStr[i] === "string") {
      processedStr += originalStr[i]
    } else {
      processedStr += replacementArr[controlIndex]
      controlIndex++
    }
  }

  return processedStr
};

/**
 * Validates the arguments that are going to be passed to the replace function
 *
 * @param   {string}  a
 * @param   {object}  b
 * @param   {string}  c
 *
 * @private
 */

function validateArguments(a, b, c) {
  if (!a) {
    throw new TypeError('original string argument is required')
  }

  if (typeof a !== 'string') {
    throw new TypeError('original string argument is required to be an string')
  }

  if (!b) {
    throw new TypeError('replacement array argument is required')
  }

  if (typeof b !== 'object') {
    throw new TypeError('replacement array argument is required to be an object(array)')
  }

  if (!c) {
    throw new TypeError('replacement character argument is required')
  }

  if (typeof c !== 'string') {
    throw new TypeError('replacement character argument is required to be an string')
  }
}

/**
 * Validates that the array contains only valid data types for the replace function
 *
 * @param   {object}  a
 *
 * @private
 */

function validateArrayContentType(a) {
  for(var i = 0; i < a.length; i++) {
    if(typeof a[i] !== 'string' && typeof a[i] !== 'number') {
      throw new TypeError('replacement array can only contain strings or numbers')
    }
  }
}

/**
 * Validates that the array contains the same amount of wildcard characters in the string
 *
 * @param   {string}  a
 * @param   {object}  b
 * @param   {string}  c
 *
 * @private
 */

function validateNumberOfMatches(a, b, c) {
  var controlIndex = 0

  for(var i = 0; i < a.length; i++) {
    if (a[i] === c) {
      controlIndex++
    }
  }

  if(controlIndex != b.length) {
    throw new RangeError('amount of array items should match the amount of replaceable characters in the string')
  }
}
