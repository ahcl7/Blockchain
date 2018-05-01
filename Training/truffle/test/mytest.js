var test = artifacts.require("./test.sol");

contract("test", function(accounts) {
	it("just test total function", function(){
		return test.deployed().then(function(instance){
			return instance.getTotal.call();
		}).then(function(total){
			console.log(total.valueOf());
			assert.equal(total.valueOf(), 123);
		});
	});
});
