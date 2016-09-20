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

  it("should change the current language", function() {
    expect(model.language).toBeDefined();
    model.changeLanguage('FR');
    expect(model.language).toBe('FR');
  });

  it("should retrieve the appropriate text", function() {
    model.changeLanguage('CN');
    var text = model.getText();
    expect(text.code).toBe('CN');
  });
});
