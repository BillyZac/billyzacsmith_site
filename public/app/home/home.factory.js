(function() {

    var ChartdataService = function() {};

    ChartdataService.prototype.makeDataPoints = function(numberOfPoints) {
      var points = []
      for (var i = 1; i <= numberOfPoints; i++) {
        var point = this.buildPoint(i);
        // always start and end chart at 0
        if (i === 1 || i === numberOfPoints) {
          point.y = 0
        }
        // First two point on either end should be stacked
        if (i === 2) {
          point.x = 1
        }
        if (i === numberOfPoints - 1) {
          point.x = numberOfPoints
        }
        points.push(point)
      }
      return points
  };

  ChartdataService.prototype.buildPoint = function(x) {
    return { x: x, y: Math.random() }
  }

  angular.module('app')
    .service('ChartDataService', ChartdataService)
}())
