angular.module('app')
.directive('logo', logo)

function logo() {
  return {
    templateUrl: './app/home/logo3.html'
  }
}
