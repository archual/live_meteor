Meteor.subscribe('cells');

var addCell = function(e){
  // Asynchronous call with a callback on the client
  console.log(e.target.id);
  var cell = {
    id: e.target.id
  };
  Meteor.call('addCell', cell, function (error, result) {
    if (error) {
      // handle error
    } else {
      // examine result
    }
  });
};



document.addEventListener('DOMContentLoaded',function(){
//   var field = document.getElementById("field");
  var svg = document.getElementsByTagName("svg");
//   console.log(field);
  for (var i=0; i < svg.length; i++){
      svg[i].addEventListener( "click" , addCell, false);
  }
});



  
