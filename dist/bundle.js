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

var _textview = require('./textview');

var _textview2 = _interopRequireDefault(_textview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainController = function () {
  function MainController() {
    _classCallCheck(this, MainController);

    this.model = new _model2.default();
    this.view = new _mainview2.default(this);
    this.textView = new _textview2.default(this);
    this.view.render();
    this.textView.render();
  }

  _createClass(MainController, [{
    key: 'render',
    value: function render() {
      this.view.render();
      this.textView.render();
    }
  }, {
    key: 'getProjects',
    value: function getProjects() {
      return this.model.projects;
    }
  }, {
    key: 'getText',
    value: function getText() {
      return this.model.getText();
    }
  }, {
    key: 'getLanguage',
    value: function getLanguage() {
      return this.model.language;
    }
  }, {
    key: 'changeLanguage',
    value: function changeLanguage(lang) {
      this.model.changeLanguage(lang);
      this.render();
    }
  }]);

  return MainController;
}();

exports.default = MainController;

},{"./mainview":3,"./model":4,"./textview":7}],2:[function(require,module,exports){
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
    this.languageToggle = { 'CN': 'EN', 'EN': 'CN' };
    this.currentProject = '';
    this.setScrollingLinks();
    this.setTransforms();
    this.setModal();
    this.setLanguageSwitch();
  }

  _createClass(MainView, [{
    key: 'render',
    value: function render() {
      var _this = this;

      var projects = this.controller.getProjects(),
          container = $('#projects .project-box'),
          language = this.controller.getLanguage(),
          figure = void 0,
          img = void 0,
          caption = void 0,
          text = void 0;
      container.html('');
      projects.forEach(function (p) {
        text = p[language];
        figure = document.createElement('figure');
        caption = document.createElement('figcaption');
        img = new Image();
        img.src = p.imageUrl;
        img.className = "project-image";
        figure.addEventListener('click', function (e) {
          e.defaultPrevented;
          _this.renderModalText(p);
          $('#project-modal').removeClass('animated slideOutUp slideInDown');
          $('#project-modal').addClass('animated slideInDown');
          $('#project-modal').show();
          $('#projects').addClass('modal-dim');
          e.stopPropagation();
        });
        figure.appendChild(img);
        figure.appendChild(caption);
        caption.innerHTML = text.name;
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
      var language = this.controller.getLanguage();
      var modalText = project[language];
      if (project.liveUrl !== null) {
        $('.live-link').show();
        $('.live-link a').attr('href', project.liveUrl);
      } else {
        $('.live-link').hide();
      }
      $('.source-link a').attr('href', project.sourceUrl);
      $('.project-modal-header h3').text(modalText.name + ' (' + project.year + ')');
      $('.modal-image').attr('src', project.imageUrl);
      $('.project-description').text(modalText.description);
    }
  }, {
    key: 'setModal',
    value: function setModal() {
      var _this2 = this;

      $('.ion-close').click(function (event) {
        _this2.hideModal();
      });
      $(document).click(function (event) {
        if (!$(event.target).closest('#project-modal').length) {
          if ($('#projects').hasClass("modal-dim")) {
            _this2.hideModal();
          } else if ($('.banner-footer').hasClass("grow")) {
            $('.banner-footer').removeClass('grow');
            $('main').removeClass('dim');
          }
        }
      });
    }
  }, {
    key: 'hideModal',
    value: function hideModal() {
      var $modal = $('#project-modal');
      $modal.removeClass('animated slideInDown slideOutUp');
      $modal.addClass('animated slideOutUp');
      $('#projects').removeClass('modal-dim');
    }
  }, {
    key: 'setTransforms',
    value: function setTransforms() {
      $('#contact-link').click(function (e) {
        e.defaultPrevented;
        $('.banner-footer').addClass('grow');
        $('main').addClass('dim');
        e.stopPropagation();
      });
    }
  }, {
    key: 'setLanguageSwitch',
    value: function setLanguageSwitch() {
      var _this3 = this;

      $('#language').click(function (e) {
        e.defaultPrevented;
        var language = $('#language').attr('data-language');
        var newLanguage = _this3.languageToggle[language];
        _this3.controller.changeLanguage(newLanguage);
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _projects = require('./projects');

var _pagetext = require('./pagetext');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function () {
  function Model() {
    _classCallCheck(this, Model);

    this.projects = _projects.projects;
    this.language = 'EN';
    this.text = _pagetext.text;
  }

  _createClass(Model, [{
    key: 'changeLanguage',
    value: function changeLanguage(lang) {
      this.language = lang;
    }
  }, {
    key: 'getText',
    value: function getText() {
      return this.text[this.language];
    }
  }]);

  return Model;
}();

exports.default = Model;

},{"./pagetext":5,"./projects":6}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var text = {

  'EN': {
    code: 'EN',
    portfolio: 'Portfolio',
    contact: 'Contact',
    language: '中文',
    bannerHead: 'Front-End Developer',
    bannerSubhead: 'Shanghai',
    bio: '',
    linkHover: ['Github', 'StackOverflow', 'LinkedIn', 'Email', 'Facebook', 'Instagram'],
    footerCredits: 'Photo Credits (Creative Commons License): <a href="www.flickr.com/photos/sama093/">www.flickr.com/photos/sama093/</a>',
    footerCopyright: '',
    projectHover: 'View live site',
    sourceHover: 'View source'
  },

  'CN': {
    code: 'CN',
    portfolio: '我的项目',
    contact: '联系',
    language: 'English',
    bannerHead: '前端开发工程师',
    bannerSubhead: '上海',
    bio: '',
    linkHover: ['Github', 'StackOverflow', 'LinkedIn', '电子邮件', '脸书', 'Instagram'],
    footerCredits: 'Photo Credits (Creative Commons License): <a href="www.flickr.com/photos/sama093/">www.flickr.com/photos/sama093/</a>',
    footerCopyright: '',
    projectHover: '看网站',
    sourceHover: '看源代码'
  }

};

exports.text = text;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var projects = [{
  year: 2016,
  imageUrl: 'assets/img/frogger_landscape.png',
  liveUrl: '#',
  sourceUrl: 'https://github.com/Jskobos/frontend-nanodegree-arcade-game',
  EN: {
    name: 'Frogger',
    hover: 'Project from Udacity Javascript course.',
    description: 'This is a recommended project from the Udacity Frontend Engineer Nanodegree program. The game engine is provided by Udacity, and implementation is left to the students. I added scoring and gem rewards in addition to the basic game requirements.'
  },
  CN: {
    name: 'Frogger',
    hover: '优达学诚推荐的项目.',
    description: '这是个优达学诚纳米学位推荐的项目。他们提供游戏引擎以及照片，学生要实施。除了项目的要求意外，我加了点数系统与奖金系统。'
  }
}, {
  year: 2015,
  imageUrl: "assets/img/inventory.png",
  liveUrl: "https://shanghaipads.herokuapp.com",
  sourceUrl: "https://github.com/Jskobos/shanghai10",
  EN: {
    name: 'Reservation System',
    hover: 'Simple reservation app used at my old ESL school in Shanghai.',
    description: 'Computer reservation app I made for my old ESL school in Shanghai. Angular.js app with Firebase for backend storage. The only one of my solo projects with a small number of regular users. Sign into a test account with "test@email.com" and "password" to try it out.'
  },
  CN: {
    name: 'iPad预定管理系统',
    hover: 'iPad预定管理系统',
    description: '在我以前的英语学校，我们用这个系统管理学校用的iPads。这个网页使用Angular.js与Firebase数据库藏。我已经离开了学校，但有两个学校还用这个系统。你可以用“test@email.com”和”password“来试试看吧。'
  }
}, {
  year: 2015,
  imageUrl: "assets/img/rails-logo.png",
  liveUrl: null,
  sourceUrl: "https://github.com/Jskobos/shpads-api",
  EN: {
    name: 'Authentication API',
    hover: 'Rails API.',
    description: 'Rails API, used to replace the Firebase authentication system in my reservation tracking app when the requirements got too complicated.'
  },
  CN: {
    name: '验证API',
    hover: 'Rails API.',
    description: 'Rails API。我的iPad预定管理系统需求超过Firebase的验证系统以后，我做这个验证API来代替它。'
  }
}, {
  year: 2016,
  imageUrl: "assets/img/shanghai.jpg",
  liveUrl: "#",
  sourceUrl: "https://github.com/Jskobos/portfolio",
  EN: {
    name: 'Personal Website',
    hover: 'Source code for this website.',
    description: 'Interactive personal homepage/portfolio (you\'re looking at it right now!) Made with jQuery, Animate.css and ECMA2015 (Babel); simple MVC framework and all other effects coded from scratch.'
  },
  CN: {
    name: '个人主页',
    hover: '本页网站的源码.',
    description: '本页网站的源码'
  }
}];

exports.projects = projects;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextView = function () {
  function TextView(controller) {
    _classCallCheck(this, TextView);

    this.controller = controller;
    this.portfolio = $('#portfolio-link');
    this.contact = $('#contact-link');
    this.language = $('#language');
    this.heading = $('#banner-textbox h1');
    this.subheading = $('#banner-textbox h2');
    this.bodyText = $('banner-body');
    this.bannerLinks = $('.banner-footer').children('a');
    this.modalSiteLink = $('.live-link a');
    this.modalSiteSource = $('.source-link a');
    this.footerCopyright = $('#copyright');
    this.footerCredits = $('#credits');
  }

  _createClass(TextView, [{
    key: 'render',
    value: function render() {
      var text = this.controller.getText();
      this.portfolio.text(text.portfolio);
      this.contact.text(text.contact);
      this.language.text(text.language);
      this.language.attr('data-language', text.code);
      this.heading.text(text.bannerHead);
      this.subheading.text(text.bannerSubhead);
      this.bodyText.text(text.bio);
      this.modalSiteLink.text(text.projectHover);
      this.modalSiteSource.text(text.sourceHover);
      this.footerCredits.html(text.footerCredits);
      this.footerCopyright.text(text.footerCopyright);
    }
  }]);

  return TextView;
}();

exports.default = TextView;

},{}]},{},[2]);
