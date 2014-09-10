//TruckTruck application JS file.

// found this too http://alogicalparadox.com/drag.js/
var TruckController = (function(){

//Private variables
var truckCounter = 2;

//Private Functions
var addImage = function(truckCount) { 
  var img = document.createElement("img");
  img.setAttribute("id","truck"+truckCount);
  img.setAttribute("class", "truck");
  img.setAttribute("draggable", true);
  img.setAttribute("ondragstart", "TruckController.drag(event)");
  img.src = "http://i.imgur.com/Lmtpgze.jpg"; 
  img.height = 60; 
  img.width = 150;
  
  document.body.appendChild(img);
}

//Public API functions
return{
  addTruck: function(){
    truckCounter++;
    addImage(truckCounter);
  },
  allowDrop: function(ev){
    ev.preventDefault();
  },
  drop: function(ev){
    ev.preventDefault();
    var data=ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
  },
  drag: function(ev){
    ev.dataTransfer.setData("Text",ev.target.id);
  }

}

})();