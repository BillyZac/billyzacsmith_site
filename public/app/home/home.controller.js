angular.module('app')
.controller('HomeController', HomeController, ['$scope'])

function HomeController($scope) {
  var vm = this

  var isms = [
    'is a designer and front end developer in Denver, Colorado.',
    'likes Cinnamon Toast Crunch with half & half.',
    'grew up in the sticks.'
  ]

  vm.tagline = isms[0] // So don't have to wait for first timeout.
  var index = 0
  setInterval(function () {
    if (index >= isms.length) {
      index = 0
    }
    vm.tagline = isms[index]
    $scope.$digest()
    index++
  }, 3000)

  // Chart
  vm.chartData = [5, 10, 15, 20, 25, 17, 3, 46]
  // $scope.chartData = [5, 10, 15, 20, 25, 17, 3, 46]
}
