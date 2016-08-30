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
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainView = function () {
  function MainView(controller) {
    _classCallCheck(this, MainView);

    this.controller = controller;
    this.currentProject = '';
    this.setScrollingLinks();
    this.setModal();
  }

  _createClass(MainView, [{
    key: 'render',
    value: function render() {
      var _this = this;

      var projects = this.controller.getProjects(),
          container = $('#projects'),
          figure = void 0,
          img = void 0,
          caption = void 0;
      projects.forEach(function (p) {
        figure = document.createElement('figure');
        caption = document.createElement('figcaption');
        img = new Image();
        img.src = p.imageUrl;
        img.className = "project-image";
        figure.addEventListener('click', function (e) {
          e.defaultPrevented;
          _this.renderModalText(p);
          $('#project-modal').fadeIn();
          e.stopPropagation();
        });
        figure.appendChild(img);
        figure.appendChild(caption);
        caption.innerHTML = p.name;
        container.append(figure);
      });
    }
  }, {
    key: 'setScrollingLinks',
    value: function setScrollingLinks() {
      $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    }
  }, {
    key: 'renderModalText',
    value: function renderModalText(project) {
      console.log(project.description);
    }
  }, {
    key: 'setModal',
    value: function setModal() {
      $(document).click(function (event) {
        if (!$(event.target).closest('#project-modal').length) {
          if ($('#project-modal').is(":visible")) {
            $('#project-modal').fadeOut();
          }
        }
      });
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
  imageUrl: "https://s3-ap-northeast-1.amazonaws.com/kobos-portfolio/frogger_landscape.png",
  link: "http://www.github.com/Jskobos",
  liveUrl: "#",
  sourceUrl: "https://github.com/Jskobos/frontend-nanodegree-arcade-game",
  description: "This is a recommended project from the Udacity Frontend Engineer Nanodegree program. The game engine is provided by Udacity, and implementation is left to the students. I added scoring and gem rewards in addition to the basic game requirements."
}, {
  name: 'Inventory Tracker',
  hover: "Simple to-do application used at my old ESL school in Shanghai.",
  imageUrl: "https://s3-ap-northeast-1.amazonaws.com/kobos-portfolio/inventory.png",
  link: "http://www.github.com/Jskobos",
  liveUrl: "https://shanghaipads.herokuapp.com",
  sourceUrl: "https://github.com/Jskobos/shanghai10",
  description: "To-do app I made for my old ESL school in Shanghai. Angular.js app with Firebase for backend storage. The only one of my solo projects to have had a small number of regular users over more than a year."
}, {
  name: 'Future Project',
  hover: "Something brilliant and creative.",
  imageUrl: "http://www.placekitten.com/250/250",
  link: "http://www.github.com/Jskobos",
  liveUrl: "#",
  sourceUrl: "#",
  description: "Something brilliant and creative."
}];

exports.projects = projects;

},{}]},{},[2]);
