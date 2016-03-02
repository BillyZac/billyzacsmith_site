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
          var h = 300
          var w = 1200

          var dataPoints1 = makeDataPoints(18, 18)
          var dataPoints2 = makeDataPoints(23, 15)
          var dataPoints3 = makeDataPoints(25, 5)

          function makeDataPoints(numberOfPoints, factor) {
            var points = []
            for (var i = 1; i <= numberOfPoints; i++) {
              var point = {
                x: i * 8,
                y: 10 + (Math.random() * (numberOfPoints - i) * factor)
              }
              if (i === 1 || i === numberOfPoints) {
                point.y = 0
              }
              points.push(point)
            }
            return points
          }

          var lineFun = d3.svg.line()
            .x(function(d) { return d.x * 6 })
            .y(function(d) { return h - d.y })
            .interpolate("basis")

          var svg =
          d3.select(".chart")
            .append("svg")
            .attr({
              width: w,
              height: h
            })

            svg
              .append("path")
                .attr({
                  d: lineFun(dataPoints1),
                  // "fill": "hsla(180, 93%, 75%, 1)",
                  "stroke": "hsla(180, 100%, 45%, 1)",
                  "stroke-width": 4,
                  "fill": "none"
                })
            svg
              .append("path")
                .attr({
                  d: lineFun(dataPoints2),
                  // "fill": "hsla(180, 93%, 75%, 1)",
                  "stroke": "hsla(1, 74%, 68%, 1)",
                  "stroke-width": 2,
                  "fill": "none"
                })
            svg
              .append("path")
                .attr({
                  d: lineFun(dataPoints3),
                  // "fill": "hsla(180, 93%, 75%, 1)",
                  "stroke": "hsla(180, 93%, 55%, 1)",
                  "stroke-width": 1,
                  "fill": "none"
                })
        },
        controller: 'HomeController',
        controllerAs: 'vm',
        bindToController: true
    }
}
})()