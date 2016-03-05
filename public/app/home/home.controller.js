(function(){
  angular.module('app')
  .controller('HomeController', HomeController, ['$scope', '$window', 'ChartDataService', '$interval'])

  function HomeController($scope, $window, ChartDataService, $interval) {
    $scope.blur = 1

    // Blur and fade the logo when the user scrolls
    var fadeLogoWhenYIsThisNumber = 200
    $scope.$watch(function() {
      return $window.scrollY
    }, function() {
      $scope.blur = $window.scrollY / 20
      $scope.logoOpacity = 1 - $window.scrollY / fadeLogoWhenYIsThisNumber
      // $scope.invisibleBoxHeight = 650 - $window.scrollY * 2
    })

    $scope.datapoints = [];
      return $interval(
        function() {
          $scope.datapoints = ChartDataService.makeDataPoints(18);
      }, 500)
  }
}())
