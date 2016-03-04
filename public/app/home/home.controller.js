(function(){
  angular.module('app')
  .controller('HomeController', HomeController, ['$scope', 'ChartDataService', '$interval'])

  function HomeController($scope, ChartDataService, $interval) {
    $scope.datapoints = [];
      return $interval(
        function() {
          $scope.datapoints = ChartDataService.makeDataPoints(18);
      }, 500);
      }
}())
