(function(){
  angular
    .module("planetFacts")
    .controller("listCtrl", ListController); // Declaring the controller and augmenting it to module

    ListController.$inject = ['quizMetrics','DataService'];// Injecting the service on which the controller is dependent

    function ListController(quizMetrics, DataService) {
      var vm = this;                  // view-model, to make a connection between view and model

      vm.data = DataService.planetsData;          // used for data in ng-repeat in view
      vm.quizMetrics = quizMetrics;   // used in ng-hide, this is a service
      vm.activePlanet = {};           // used for modal
      vm.changeActivePlanet = changeActivePlanet;     // learn-more buttons
      vm.activateQuiz = activateQuiz; // used in ng-click
      vm.search = "";                 // used in ng-model and ng-repeat - filter

      /*
          Sets the activePlanet with the planet selected in the ListController
      */
      function changeActivePlanet(index) {
        vm.activePlanet = index;
      }

      /*
          Sets the visibility states of the controller
      */
      function activateQuiz() {
        vm.quizMetrics.changeState("quiz",true);
      }

    }

})();
