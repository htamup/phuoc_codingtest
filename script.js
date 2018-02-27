	// create the module and name it app
	var app = angular.module('app', ['ngRoute', 'ngAnimate']);

	// configure our routes
	app.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/person/:name', {
				templateUrl : 'pages/person.html',
				controller  : 'personController'
			});
	});

	// create the controller and inject Angular's $scope
	app.controller('mainController', function($scope) {
		$scope.pageName = 'home';
		$scope.topFive = ["GrahamCampbell","fabpot","weierophinney","rkh","josh"];
	});

	app.controller('personController', function($scope, $routeParams, $http) {
		$scope.pageName = 'person';
		$scope.loading = true;
		$scope.name = $routeParams.name;
		$http.get("https://api.github.com/users/" + $routeParams.name)
	    .then(function(res) {
	    	$scope.name = res.data.name;
	    	$scope.avatar_url = res.data.avatar_url;
	    	$scope.location = res.data.location;
	    	$scope.loading = false;
	    });
	});
