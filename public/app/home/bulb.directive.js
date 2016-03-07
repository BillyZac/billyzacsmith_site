angular.module('app')
.directive('bulb', bulb)

function bulb() {
  return {
    templateUrl: './app/home/bulb.html'
  }
}
