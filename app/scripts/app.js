'use strict';

angular.module('app', ['ngCookies']);

angular.module("app").
  config(function($httpProvider) {
    $httpProvider.interceptors.push(function($cookies) {
      return {
        'request': function(config) {
          config.headers['X-USER-EMAIL'] = $cookies.get("user_email");
          config.headers['X-USER-TOKEN'] = $cookies.get("user_token");
          return config;
        }
      };
    });
  });
