angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$http,$ionicLoading,$timeout) {
    $scope.dados = {};
    $scope.dadosInvalidos = true;
    $scope.modelo = {};
    $scope.modelo.ip = 'localhost';
    


    $scope.atualizaDados = function() {
      $http({
        method: 'GET',
        url: 'http://'+$scope.modelo.ip+'/status'
      }).then(function successCallback(response) {
          console.log(response);
          $scope.dados = response.data;
          $scope.dadosInvalidos = false

          /*if($scope.dados.luminosidade < 200){
            $scope.ligaRele1();
          }else{
            $scope.desligaRele1();
          }*/

      }, function errorCallback(response) {
          console.log(response);    
      });
      $scope.$broadcast('scroll.refreshComplete');
    }
    //$scope.atualizaDados();


    $scope.atualizaSilent = function(){
      $scope.atualizaDados();
      $timeout(function(){
        $scope.atualizaSilent();
      },10000);

    }
    $scope.atualizaSilent();


    $scope.ligaRele1 = function(){
      $ionicLoading.show();
      $http({
        method: 'GET',
        url: 'http://'+$scope.modelo.ip+'/liga_luz'
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
        url: 'http://'+$scope.modelo.ip+'/desliga_luz'
      }).then(function successCallback(response) {
          console.log(response);
          $ionicLoading.hide();
      }, function errorCallback(response) {
          console.log(response);    
          $ionicLoading.hide();
      });
      
    }

     $scope.ligaRele2 = function(){
      $ionicLoading.show();
      $http({
        method: 'GET',
        url: 'http://'+$scope.modelo.ip+'/liga_luz2'
      }).then(function successCallback(response) {
          console.log(response);
          $ionicLoading.hide();
      }, function errorCallback(response) {
          console.log(response);    
          $ionicLoading.hide();
      });
      
    }
    


    $scope.desligaRele2 = function(){
      $ionicLoading.show();
      $http({
        method: 'GET',
        url: 'http://'+$scope.modelo.ip+'/desliga_luz2'
      }).then(function successCallback(response) {
          console.log(response);
          $ionicLoading.hide();
      }, function errorCallback(response) {
          console.log(response);    
          $ionicLoading.hide();
      });
      
    }

     $scope.ligaRele3 = function(){
      $ionicLoading.show();
      $http({
        method: 'GET',
        url: 'http://'+$scope.modelo.ip+'/liga_luz3'
      }).then(function successCallback(response) {
          console.log(response);
          $ionicLoading.hide();
      }, function errorCallback(response) {
          console.log(response);    
          $ionicLoading.hide();
      });
      
    }
    


    $scope.desligaRele3 = function(){
      $ionicLoading.show();
      $http({
        method: 'GET',
        url: 'http://'+$scope.modelo.ip+'/desliga_luz3'
      }).then(function successCallback(response) {
          console.log(response);
          $ionicLoading.hide();
      }, function errorCallback(response) {
          console.log(response);    
          $ionicLoading.hide();
      });
      
    }
})
