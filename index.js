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

  if (!originalStr) {
    throw new TypeError('argument originalStr is required')
  }

  if (typeof originalStr !== 'string') {
    throw new TypeError('argument originalStr is required to be an string')
  }

  if (!replacementArr) {
    throw new TypeError('argument originalStr is required')
  }

  if (typeof replacementArr !== 'object') {
    throw new TypeError('argument replacementArr is required to be an object')
  }

  if (!replaceChar) {
    throw new TypeError('argument replaceChar is required')
  }

  if (typeof replaceChar !== 'string') {
    throw new TypeError('argument replaceChar is required to be an string')
  }

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
