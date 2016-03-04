(function () {
  angular.module('app')
      .directive('chart', chart)

  function chart() {
      return {
          restrict: 'E',
          replace: true,
          template: '<div class="chart"></div>',
          scope: {
              data: '='
          },
          link: function ($scope, $element, $attr) {
            var h = angular.element($element).parent()[0].clientHeight;
            var w = angular.element($element).parent()[0].clientWidth;

            var funChart = new FunChart(h, w);
            $scope.$watch(function() {
              return $scope.datapoints
            }, function() {
              funChart.clear();
              funChart.draw($scope.datapoints)
            })
          },
          controller: 'HomeController'
      }
  }


  var FunChart = function(h, w) {
    this.height = h
    this.width = w

    this.lineFun =
      d3.svg
        .line()
          .x(function(d) { return d.x * 36 })
          .y(function(d) { return h - (d.y * h) })
          .interpolate("basis")

    this.svg =
            d3.select(".chart")
              .append("svg")
              .attr({
                width: w,
                height: h
              })

  }

  FunChart.prototype.clear = function() {
    this.svg.select('*').remove()
  }

  FunChart.prototype.draw = function(datapoints) {
    this.svg.append("path")
      .attr({
        d: this.lineFun(datapoints),
        "stroke": "white",
        "stroke-width": "0.5rem",
        "fill": "none"
      })
  }


})()
