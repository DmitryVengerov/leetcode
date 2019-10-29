const two_sum = require('./lib/two_sum')
const addTwoNumbers = require('./lib/add_two_numbers')



let nums   = [2,11,7,3,5,15]
let target = 9
let result = two_sum(nums, target)
console.log(result)

// - second task
let l1 = [2,4,3]
let l2 = [5,6,4]
let resultAddTwoNumbers = addTwoNumbers(l1, l2)
console.log(resultAddTwoNumbers);


/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  return address.split('.').join('[.]');
};

let address = "1.1.1.1"
let defangingIp = defangIPaddr(address)
console.log(defangingIp);
