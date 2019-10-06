/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  return !s.match('.*(A.*A|LLL).*')
}
