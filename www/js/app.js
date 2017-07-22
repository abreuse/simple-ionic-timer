// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.controller('TimerCtrl', function ($scope, $timeout, $interval) {

  $scope.startTimer = function (time) {
    var decount;

    if($scope.timeLeft !== 0)
      $interval.cancel(decount);

    $scope.timeLeft = time;
    decount = $interval(function () {
      $scope.timeLeft--;
    }, 1000, time);
  };

  var audio = new Audio('beep-low.mp3');

  $scope.playEndingSound = function () {
    playSound()
    $interval(playSound, 1000, 2);
  }

  var playSound = function () {
    audio.play();
  }

})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
