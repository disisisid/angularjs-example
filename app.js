
  var config = {
    apiKey: "AIzaSyBvnBJPT2JZzqJV_qWNP50IV7A1uQ7by7E",
    authDomain: "hackernews-dd761.firebaseapp.com",
    databaseURL: "https://hackernews-dd761.firebaseio.com",
    projectId: "hackernews-dd761",
    storageBucket: "hackernews-dd761.appspot.com",
    messagingSenderId: "766549456971"
  };
  firebase.initializeApp(config);

var myApp = angular.module('myApp', []);

myApp.controller('myAppController', function($scope, $http){
	$scope.posts = [];

	$http.get('https://hackernews-dd761.firebaseio.com').then(function(response){
		$scope.posts = response.data;
		$scope.postst = $scope.posts.splice(0,1);
		console.log($scope.posts);
	});
});
