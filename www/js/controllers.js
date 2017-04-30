angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$http) {
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
})
