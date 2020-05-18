// BUDGET CONTROLLER
var budgetController = (function() {
  // Some code
})();

// UI CONTROLLER
var UIController = (function() {
  // Some code
})();

// GLOBAL APP CONTROLLER
var controller = (function() {
  
  document.querySelector('.add__btn').addEventListener('click', function() {
    console.log('button was clicked.');
  });

})(budgetController, UIController);
