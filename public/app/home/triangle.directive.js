angular.module('app')
.directive('triangle', triangle)

function triangle() {
  return {
    templateUrl: './app/home/triangle.html'
  }
}
