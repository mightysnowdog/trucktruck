//TruckTruck application JS file.

// found this too http://alogicalparadox.com/drag.js/
var TruckController = (function(){

var addImage = function() { 
  var img = document.createElement("img");
  img.src = "http://i.imgur.com/Lmtpgze.jpg"; 
  img.height = 60; 
  img.width = 150;
  //optionally set a css class on the image
  var class_name = "truck1";
  img.setAttribute("class", class_name);
  var drag_g ="TruckController.drag(event)";
  img.setAttribute("TruckController.draggable", true);
  img.setAttribute("TruckController.ondragstart", drag_g);

  document.body.appendChild(img);
}

return{
  addTruck: function(){
    addImage();
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