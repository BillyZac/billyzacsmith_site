(function(){
  angular.module('app')
  .controller('HomeController', HomeController, ['$scope'])

  function HomeController($scope) {
    // var vm = this
    //
    // var isms = [
    //   'is a designer and web developer in Denver, Colorado.',
    //   'likes kale, but loves Cinnamon Toast Crunch with half & half.',
    //   'grew up in the sticks.',
    //   'thinks Robert Bringhurst is the bee\'s knees.',
    //   'prefers dawn to dusk, but only slightly.',
    //   'illustrated a children\'s book.',
    // ]
    //
    // vm.tagline = isms[0] // So don't have to wait for first timeout.
    // var index = 0
    // setInterval(function () {
    //   if (index >= isms.length) {
    //     index = 0
    //   }
    //   vm.tagline = isms[index]
    //   $scope.$digest()
    //   index++
    // }, 3000)
  }
}())
