angular.module('app')
.directive('logo', logo)

function logo() {
  return {
    templateUrl: './app/home/logo2.html'
  }
}
