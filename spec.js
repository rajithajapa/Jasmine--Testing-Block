/* global describe,it,expect ,injectis always present which are functions in jasmine */
/*describe('Hello World Example',function() {
    it('says Hello',function()
      {
        expect(helloWorld()).toEqual('Hello World!');
    });
}); */


describe("Person", function() {
    it("calls the sayHello() function", function() {
        var fakePerson = new Person();
        spyOn(fakePerson, "sayHello");
        fakePerson.helloSomeone("world");
        expect(fakePerson.sayHello).toHaveBeenCalled();
  });
});


describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});



