//TruckTruck application JS file. If file gets 

//http://draggabilly.desandro.com/draggabilly.pkgd.min.js  is this what you are looking for? 
//http://draggabilly.desandro.com/
// found this too http://alogicalparadox.com/drag.js/

var TruckController = (function(){

var canDrop = function(ev){
ev.preventDefault();
}

var doDrop = function(ev){
ev.preventDefault();
var data=ev.dataTransfer.getData("Text");
ev.target.appendChild(document.getElementById(data));
}

var doDrag = function(ev){
ev.dataTransfer.setData("Text",ev.target.id);
}

var addImage = function() { 
  var img = document.createElement("img");
  img.src = "http://i.imgur.com/Lmtpgze.jpg"; 
  img.height = 60; 
  img.width = 150;
  //optionally set a css class on the image
  var class_name = "truck";
  img.setAttribute("class", class_name);
  var drag_g ="'drag(event)'";
  img.setAttribute("draggable", true);
  img.setAttribute("ondragstart", drag_g);

  document.body.appendChild(img);
}

return{
  addTruck: function(){
    addImage();
  },
  allowDrop: function(ev){
    canDrop(ev);
  },
  drop: function(ev){
    doDrop(ev);
  },
  drag: function(ev){
    doDrag(ev);
  }

}

})();