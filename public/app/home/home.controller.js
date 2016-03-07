(function(){
  angular.module('app')
  .controller('HomeController', HomeController, ['$scope', '$window', 'ChartDataService', '$interval'])

  function HomeController($scope, $window, ChartDataService, $interval) {
    $scope.blur = 1
    $scope.filter = 'no-filter'

    // Blur and fade the logo when the user scrolls
    var fadeLogoWhenYIsThisNumber = 20
    $scope.$watch(function() {
      return $window.scrollY
    }, function() {
      // $scope.blur = $window.scrollY / 20
      // $scope.logoOpacity = 1 - $window.scrollY / fadeLogoWhenYIsThisNumber

      if ($window.scrollY > fadeLogoWhenYIsThisNumber) {
        $scope.filter = 'blur'
        $scope.logoHeight = 120
      }

    })

    $scope.datapoints = [];
      return $interval(
        function() {
          $scope.datapoints = ChartDataService.makeDataPoints(18);
      }, 500)
  }
}())
