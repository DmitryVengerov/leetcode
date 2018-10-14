const expect = require('chai').expect
const two_sum = require('../lib/two_sum')

console.log(two_sum)

describe('test', () => {
	it('test two sum', () => {
		const result = two_sum([2,11,7,15],9)
		expect(result.toString()).to.equal([0,2].toString())
	})
})