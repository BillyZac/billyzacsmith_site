angular.module('app')
.directive('face', face)

function face() {
  return {
    templateUrl: './app/home/face.html'
  }
}
