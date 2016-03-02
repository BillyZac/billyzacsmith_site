angular.module('app')
.controller('MainController', [MainController])

function MainController() {
  var vm = this
  console.log('ima controller main.');

  vm.tagline = 'hey i can do this css.'
}
