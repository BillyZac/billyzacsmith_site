var app = angular.module('app', [])

app.controller('MainController', function($scope) {
  var tile = {
    image_url: 'http://www.kylelambert.co.uk/gallery/adobe-ideas-eye/images/kyle-lambert-adobe-ideas-eye-ipad-painting-small.jpg'
  }
  $scope.rows = [[1, 2, 3], [4, tile, 6], [7, 8, 9]]

})
