var app = angular.module('sampleApp',['ui.router']);

/**
 *usersController
 *@input app
 */
app.controller('loginController',['$scope','$location',function($scope,$location) {
	
	$scope.submitForm = function(){
		$location.path('/home');
	};

}]);



/**
 *dashboardController
 *@input app
 */
app.controller('dashboardsController',['$scope','$location',function($scope,$location) {
	
	$scope.logout = function(){
		$location.path('/login');
	};

}]);


app.config(function($stateProvider, $urlRouterProvider) {
	
		$urlRouterProvider.otherwise('/login');
	
		$stateProvider
	
			.state('home', {
				url: '/home',
				templateUrl: 'templates/home.html',
				controller:'dashboardsController'
			})
	
			.state('login', {
				url:'/login',
				templateUrl:'templates/login.html',
				controller:'loginController'  
			});
	
	});
	
