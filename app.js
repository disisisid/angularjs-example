var myApp = angular.module('myApp', []);

myApp.controller('myAppController', function($scope, $http){
	$scope.posts = [];

	$http.get('https://api.myjson.com/bins/ny1hm').then(function(response){
		$scope.posts = response.data;
		$scope.postst = $scope.posts.splice(0,1);
		console.log($scope.posts);
	});
});
