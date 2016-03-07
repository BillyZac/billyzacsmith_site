angular.module('app')
.directive('monster', monster)

function monster() {
  return {
    templateUrl: './app/home/monster.html'
  }
}
