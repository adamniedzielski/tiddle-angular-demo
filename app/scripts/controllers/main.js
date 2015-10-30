'use strict';

angular.module('app')
  .controller('MainController', function ($scope, $http, $cookies) {
    $scope.user = {};

    $scope.login = function() {
      $http.post('http://localhost:3000/users/sign_in.json', { user: { email: $scope.user.email, password: $scope.user.password } }).
        then(function (response) {
          $cookies.put("user_email", $scope.user.email);
          $cookies.put("user_token", response.data.authentication_token);
          $scope.response = response.data;
        }).
        catch(function (response) {
          $scope.response = response.data;
        });
    };

    $scope.logout = function() {
      $http.delete('http://localhost:3000/users/sign_out.json').
        then(function (response) {
          $cookies.remove("user_email");
          $cookies.remove("user_token");
          $scope.response = response.data;
        }).
        catch(function (response) {
          $scope.response = response.data;
        });
    };

    $scope.getPosts = function() {
      $http.get('http://localhost:3000/posts.json').
        then(function (response) {
          $scope.response = response.data;
        }).
        catch(function (response) {
          $scope.response = response.data;
        });
    };
  });
