goog.provide('menu')

export default class Menu {
  constructor () {
    this.display = 'none'
  }
  show () {
    this.display = 'block'
  }
  hide () {
    this.display = 'none'
  }
  isShow () {
    return this.display === 'block'
  }
}

// var Menu = function () {
//   function Menu () {}
//   Menu.prototype.display = 'none';
//   Menu.prototype.show = function () {
//     this.display = 'block';
//   }
//   Menu.prototype.hide = function () {
//     this.display = 'none';
//   }
//   Menu.prototype.isShow = function () {
//     return this.display === 'block';
//   }
//   return Menu;
// }();
