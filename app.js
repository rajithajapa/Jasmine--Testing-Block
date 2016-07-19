
var Person = function() {};

Person.prototype.helloSomeone = function(toGreet) {
    return this.sayHello() + " " + toGreet;
};

Person.prototype.sayHello = function() {
    return "Hello";
};

describe('JavaScript addition operator', function () {
    it('adds two numbers together', function () {
        expect(1 + 2).toEqual(3);
    });
});

// undefined 

it("is defined", function () {
    var name = "Andrew";
    expect(name).toBeDefined();
})

it("is not defined", function () {
    var name;
    expect(name).toBeUndefined();
});
