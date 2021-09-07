/**
 * @name validateArray
 * @description return true or false if arg is a valid array
 * @param {array} array
 * @example validateArray({}) // false
 * @returns bool
 * @module utils
 */
export const validateArray = arr => !!(arr instanceof Array);

/**
 * @name validateObject
 * @param {object} obj
 * @description return true or false if arg is a valid object
 * @example validateObject('test') // false
 * @returns bool
 * @module utils
 */
export const validateObject = obj => !!(obj && obj.constructor === Object);
