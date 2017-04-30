angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$http,$ionicLoading) {
    $scope.dados = {};
    $scope.dadosInvalidos = true;
    var url = 'localhost';
    
    $scope.atualizaDados = function() {
      $http({
        method: 'GET',
        url: 'http://'+url+'/status'
      }).then(function successCallback(response) {
          console.log(response);
          $scope.dados = response.data;
          $scope.dadosInvalidos = false
      }, function errorCallback(response) {
          console.log(response);    
      });
      $scope.$broadcast('scroll.refreshComplete');
    }
    $scope.atualizaDados();


    $scope.ligaRele1 = function(){
      $ionicLoading.show();
      $http({
        method: 'GET',
        url: 'http://'+url+'/liga_luz'
      }).then(function successCallback(response) {
          console.log(response);
          $ionicLoading.hide();
      }, function errorCallback(response) {
          console.log(response);    
          $ionicLoading.hide();
      });
      
    }
    


    $scope.desligaRele1 = function(){
      $ionicLoading.show();
      $http({
        method: 'GET',
        url: 'http://'+url+'/desliga_luz'
      }).then(function successCallback(response) {
          console.log(response);
          $ionicLoading.hide();
      }, function errorCallback(response) {
          console.log(response);    
          $ionicLoading.hide();
      });
      
    }
})
