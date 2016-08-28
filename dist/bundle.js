(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

var _mainview = require('./mainview');

var _mainview2 = _interopRequireDefault(_mainview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainController = function () {
  function MainController() {
    _classCallCheck(this, MainController);

    this.model = new _model2.default();
    this.view = new _mainview2.default(this);
    this.view.render();
  }

  _createClass(MainController, [{
    key: 'render',
    value: function render() {
      this.view.render();
    }
  }, {
    key: 'getProjects',
    value: function getProjects() {
      return this.model.projects;
    }
  }]);

  return MainController;
}();

exports.default = MainController;

},{"./mainview":3,"./model":4}],2:[function(require,module,exports){
"use strict";

var _MainController = require("./MainController");

var _MainController2 = _interopRequireDefault(_MainController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MainCtrl = new _MainController2.default();

},{"./MainController":1}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainView = function () {
  function MainView(controller) {
    _classCallCheck(this, MainView);

    this.controller = controller;
  }

  _createClass(MainView, [{
    key: "render",
    value: function render() {
      var projects = this.controller.getProjects(),
          size = 200,
          container = $('#projects div'),
          node = void 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = projects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var p = _step.value;

          node = new Image(size, size);
          node.src = p.imageUrl;
          node.className = "project-image";
          container.append(node);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);

  return MainView;
}();

exports.default = MainView;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _projects = require('./projects');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function Model() {
  _classCallCheck(this, Model);

  this.projects = _projects.projects;
};

exports.default = Model;

},{"./projects":5}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var projects = [{
  name: 'Frogger',
  hover: "Clone of classic arcade game, project from Udacity Javascript course.",
  imageUrl: "http://www.placekitten.com/250/250",
  link: "http://www.github.com/Jskobos"
}, {
  name: 'Inventory Tracker',
  hover: "Simple to-do application used at my old ESL school in Shanghai.",
  imageUrl: "http://www.placekitten.com/250/250",
  link: "http://www.github.com/Jskobos"
}, {
  name: 'Future Project',
  hover: "Something brilliant and creative.",
  imageUrl: "http://www.placekitten.com/250/250",
  link: "http://www.github.com/Jskobos"
}];

exports.projects = projects;

},{}]},{},[2]);
