'use strict';

goog.provide('util');

function post() {
  console.log('do post');
}

post.prototype.before = function () {
  console.log('before');
};

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

goog.provide('menu');

var Menu = function () {
  function Menu() {
    _classCallCheck(this, Menu);

    this.display = 'none';
  }

  _createClass(Menu, [{
    key: 'show',
    value: function show() {
      this.display = 'block';
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.display = 'none';
    }
  }, {
    key: 'isShow',
    value: function isShow() {
      return this.display === 'block';
    }
  }]);

  return Menu;
}();

goog.provide('main');
goog.require('util');
goog.require('menu');

var baz = function baz() {
  post();
  var x = 1;
  console.log(x);
  return x;
};

baz();
