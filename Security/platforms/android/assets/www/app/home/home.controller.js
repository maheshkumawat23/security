(function () {

  angular.module('app')
    .controller('homeController', homeController);

  homeController.$inject = ['$scope', '$ionicPopup', '$state'];
  function homeController($scope, $ionicPopup, $state) {
    var vm = this;
    vm.data = [
     {'text':'I believe My safety is in My hands'},
     {'text':'I Will wear fully Covered Helmet/Seat Belt for My safety'},
     {'text':'I will not drink and drive and will avoid over speeding'},
     {'text':'I will take care of my Health and My Family'},
     {'text':'I will reach out to people in case of distress'},
     {'text':'I will abide by all Traffic Rules'},
     {'text':'I understand the importance of knowing basics of self defense'},
     {'text':'I will always inform my whereabouts with my Family/Friends/Colleagues'},
    ]
    vm.pledge = function(){
      var alertPopup = $ionicPopup.alert({
					title: 'Thanks For your feedback!',
					template: 'Press Ok to save your response'
				  });

				  alertPopup.then(function (res) {
					console.log('Thank you for not eating my delicious ice cream cone');
					// console.log($scope.rating.taste);
					 $state.go('login');
				  });
     
    }
   
  }
})();
