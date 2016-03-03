(function() {
  angular.module('app')
  .controller('HeaderController', HeaderController, ['$scope'])

  function HeaderController($scope, $state) {
    var vm = this

    var isms = [
      'is a designer and web developer in Denver, Colorado.',
      'likes kale, but loves Cinnamon Toast Crunch with half & half.',
      'grew up in the sticks.',
      'thinks Robert Bringhurst is the bee\'s knees.',
      'prefers dawn to dusk, but only slightly.',
      'illustrated a children\'s book.',
    ]

    var index = 0
    vm.tagline = setTagline($state)
    setInterval(function () {
      if (index >= isms.length) {
        index = 0
      }
      // vm.tagline = isms[index]
      vm.tagline = setTagline($state)
      $scope.$digest()
      index++
    }, 3000)

    function setTagline(_state) {
      var currentState = _state.$current.self.name
      var tagline = ''
      if (currentState === 'home' || currentState === '') {
        tagline = isms[index]
      }
      return tagline
    }

    /********** Nav **********/
    vm.show = false
    vm.toggleShow = function() {
      vm.show = !vm.show
    }

    vm.navigate = function(location) {
      // vm.show = !vm.show
      $state.go(location)
    }
  }
}())
