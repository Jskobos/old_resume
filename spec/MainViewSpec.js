import MainView from '../src/js/mainview';
import MainController from '../src/js/MainController';
import Model from '../src/js/model';

describe("MainView", function() {
  var view,controller;

  beforeEach(function() {
    controller = new MainController();
    view = new MainView(controller);
  });

  it("should load properly", function() {
    expect(view).toBeDefined();
  });
});
