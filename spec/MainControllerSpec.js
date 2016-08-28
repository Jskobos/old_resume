import MainController from '../src/js/MainController';

describe("MainController", function() {
  var MainCtrl;

  beforeEach(function() {
    MainCtrl = new MainController();
  });

  it("should load properly", function() {
    expect(MainCtrl).toBeDefined();
  });
});
