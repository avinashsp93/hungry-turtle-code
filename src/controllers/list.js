(function(){
  angular
    .module("turtleFacts")
    .controller("listCtrl", ListController); // Declaring the controller and augmenting it to module

    ListController.$inject = ['quizMetrics','DataService'];// Injecting the service on which the controller is dependent

    function ListController(quizMetrics, DataService) {
      var vm = this;                  // view-model, to make a connection between view and model

      vm.data = DataService.turtlesData;          // used for data in ng-repeat in view
      vm.quizMetrics = quizMetrics;   // used in ng-hide, this is a service
      vm.activeTurtle = {};           // used for modal
      vm.changeActiveTurtle = changeActiveTurtle;     // learn-more buttons
      vm.activateQuiz = activateQuiz; // used in ng-click
      vm.search = "";                 // used in ng-model and ng-repeat - filter

      /*
          Sets the activeTurtle with the turtle selected in the ListController
      */
      function changeActiveTurtle(index) {
        vm.activeTurtle = index;
      }

      /*
          Sets the visibility states of the controller 
      */
      function activateQuiz() {
        vm.quizMetrics.changeState("quiz",true);
      }

    }

})();
