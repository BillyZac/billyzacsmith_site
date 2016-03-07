(function(){
  angular.module('app')
  .controller('HomeController', HomeController, ['$scope', '$window', 'ChartDataService', '$interval'])

  function HomeController($scope, $window, ChartDataService, $interval) {
    $scope.blur = 1
    $scope.logoFilter = 'no-filter'
    $scope.smallLogoVisible = 'zs-hide'

    // Blur and fade the logo when the user scrolls
    var fadeLogoWhenYIsThisNumber = 20
    $scope.$watch(function() {
      return $window.scrollY
    }, function() {
      if ($window.scrollY > fadeLogoWhenYIsThisNumber) {
        $scope.logoFilter = 'blur'
        $scope.logoHeight = 120
        $scope.smallLogoVisible = 'zs-show'
      }

    })

    $scope.datapoints = [];
      return $interval(
        function() {
          $scope.datapoints = ChartDataService.makeDataPoints(18);
      }, 500)
  }
}())
