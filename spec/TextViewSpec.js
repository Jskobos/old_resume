import TextView from '../src/js/TextView';

describe("TextView", function() {
  var view;

  beforeEach(function() {
    view = new TextView();
  });

  it("should load properly", function() {
    expect(view).toBeDefined();
  });
});
