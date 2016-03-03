(function () {
  angular.module('app')
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', configRoutes])

  function configRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
          .state('home', {
            url: '/',
            templateUrl: 'app/home/home.html',
            controller: 'HomeController as home'
          })
          .state('portfolio', {
            url: '/portfolio',
            templateUrl: 'app/portfolio/portfolio.html'
          })
          .state('contact', {
            url: '/contact',
            templateUrl: 'app/contact/contact.html'
          })

          // use the HTML5 History API
          $locationProvider.html5Mode(true)

          $urlRouterProvider.otherwise('/')
    }
}())
