angular.module('app')
.controller('MainController', [MainController])

function MainController() {
  var vm = this
  console.log('ima controller main.');

  vm.showNav = false

  console.log(vm.showNav);

}
