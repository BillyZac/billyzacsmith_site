angular.module('app')
.controller('NavController', ['$locationProvider', NavController])

function NavController($locationProvider) {
  var vm = this

  vm.show = false
  vm.toggleShow = function() {
    vm.show = !vm.show
  }

  vm.navigate = function(location) {
    $locationProvider.$state = location

  }

}
