angular.module('app')
.config(['$stateProvider', '$urlRouterProvider', configRoutes])

function configRoutes($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/layout/home.html',
          controller: 'HomeController as home'
        })
        .state('nav', {
          url: '/',
          templateUrl: 'app/layout/nav.html'
        })
        .state('portfolio', {
          url: '/portfolio',
          templateUrl: 'app/layout/portfolio.html'
        })
        .state('contact', {
          url: '/contact',
          templateUrl: 'app/layout/contact.html'
        })

        $urlRouterProvider.otherwise('/')
  }
