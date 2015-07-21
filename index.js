'use strict';

/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */
module.exports = function(number, locale) {
	var parts = number.toString().split(".");
  	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  	return parts.join(".");
    //return number.toLocaleString(locale);
};
