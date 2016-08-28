import Model from '../src/js/model';

describe("Model", function() {
  var model;

  beforeEach(function() {
    model = new Model();
  });

  it("should load properly", function() {
    expect(model).toBeDefined();
  });

  it("should have project information", function() {
    expect(model.projects).toBeDefined();
  });
});
