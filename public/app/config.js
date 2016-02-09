angular.module('app')
.config(['$stateProvider', '$urlRouterProvider', configRoutes])

function configRoutes($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/layout/home.html'
        })
        .state('work', {
          url: '/work',
          templateUrl: 'app/layout/work.html'
        })

        $urlRouterProvider.otherwise('/')
  }
