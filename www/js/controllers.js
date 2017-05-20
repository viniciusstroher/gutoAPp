angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$http,$ionicLoading,$timeout) {
    $scope.dados = {};
    $scope.dadosInvalidos = true;
    $scope.dadosInvalidosVoltagem1 = true;
    $scope.dadosInvalidosVoltagem2 = true;
    
    $scope.modelo      = {};
    $scope.modelo.ip   = 'localhost';
    $scope.modelo.ldr1 = 200;
    $scope.modelo.ldr2 = 600;
    $scope.modelo.tdp  = 6000;
    $scope.modelo.amostras = 6;
    $scope.modelo.ldr1_fator = 0.2;
    $scope.modelo.ldr2_fator = 0.2;
    
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

      $http({
        method: 'GET',
        url: 'http://'+$scope.modelo.ip+':81/corrente'
      }).then(function successCallback(response) {

          $scope.dadosVoltagem1 = response.data;
          $scope.dadosInvalidosVoltagem1 = false;
      }, function errorCallback(response) {
          console.log(response);    
      });

      $http({
        method: 'GET',
        url: 'http://'+$scope.modelo.ip+':82/corrente'
      }).then(function successCallback(response) {
          $scope.dadosVoltagem2 = response.data;
          $scope.dadosInvalidosVoltagem2 = false;
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

    $scope.atualizaLDR1 = function(){
      $ionicLoading.show();
      $http({
        method: 'GET',
        url: 'http://'+$scope.modelo.ip+'/ldr1?valor='+$scope.modelo.ldr1
      }).then(function successCallback(response) {
          console.log(response);
          $ionicLoading.hide();
      }, function errorCallback(response) {
          console.log(response);    
          $ionicLoading.hide();
      });
      
    }

    $scope.atualizaLDR2 = function(){
      $ionicLoading.show();
      $http({
        method: 'GET',
        url: 'http://'+$scope.modelo.ip+'/ldr2?valor='+$scope.modelo.ldr2
      }).then(function successCallback(response) {
          console.log(response);
          $ionicLoading.hide();
      }, function errorCallback(response) {
          console.log(response);    
          $ionicLoading.hide();
      });
      
    }

    $scope.atualizaMS = function(){
      $ionicLoading.show();
      $http({
        method: 'GET',
        url: 'http://'+$scope.modelo.ip+'/ms?valor='+$scope.modelo.tdp
      }).then(function successCallback(response) {
          console.log(response);
          $ionicLoading.hide();
      }, function errorCallback(response) {
          console.log(response);    
          $ionicLoading.hide();
      });
      
    }

    $scope.atualizaAmostras = function(){
      $ionicLoading.show();
      $http({
        method: 'GET',
        url: 'http://'+$scope.modelo.ip+'/amostras?valor='+$scope.modelo.amostras
      }).then(function successCallback(response) {
          console.log(response);
          $ionicLoading.hide();
      }, function errorCallback(response) {
          console.log(response);    
          $ionicLoading.hide();
      });
      
    }

    $scope.atualizaLdr1Fator = function(){
      $ionicLoading.show();
      $http({
        method: 'GET',
        url: 'http://'+$scope.modelo.ip+'/ldr1_fator?valor='+$scope.modelo.ldr1_fator
      }).then(function successCallback(response) {
          console.log(response);
          $ionicLoading.hide();
      }, function errorCallback(response) {
          console.log(response);    
          $ionicLoading.hide();
      });
      
    }

    $scope.atualizaLdr2Fator = function(){
      $ionicLoading.show();
      $http({
        method: 'GET',
        url: 'http://'+$scope.modelo.ip+'/ldr2_fator?valor='+$scope.modelo.ldr2_fator
      }).then(function successCallback(response) {
          console.log(response);
          $ionicLoading.hide();
      }, function errorCallback(response) {
          console.log(response);    
          $ionicLoading.hide();
      });
      
    }

    
})
