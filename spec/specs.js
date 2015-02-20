describe("PizzaPie", function() {
  describe("addSize", function() {
    it("adds the inputted amount to the size", function() {
      var testPizzaPie = Object.create(PizzaPie);
      testPizzaPie.addSize(10);
      expect(testPizzaPie.sizeTime).to.equal(10);
    });
  });
});
