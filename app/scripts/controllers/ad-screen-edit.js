'use strict';

/**
 * @ngdoc function
 * @name adScreenMonitor.controller:AdScreenEditController
 * @description
 * # AdScreenEditController
 * Controller of the adScreenMonitor
 */
angular.module('adScreenMonitor')
  .controller('AdScreenEditController', function ($scope, adScreenService) {
    $scope.submitEdit = function(){
        $scope.state.editing = false;
        if($scope.current.item.id){
            adScreenService.updateItem($scope.current.item);
        }else{
            adScreenService.addItem($scope.current.item);
        }
    };
    $scope.cancelEdit = function(){ 
        $scope.state.editing = false; 
    };
  });