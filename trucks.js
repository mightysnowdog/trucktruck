//TruckTruck application JS file. If file gets 

allowDrop: function(ev){
ev.preventDefault();
}

drop:function(ev){
ev.preventDefault();
var data=ev.dataTransfer.getData("Text");
ev.target.appendChild(document.getElementById(data));
}

drag: function(ev){
ev.dataTransfer.setData("Text",ev.target.id);
}

addImage: function() { 
  var img = document.createElement("img");
  img.src = "http://i.imgur.com/Lmtpgze.jpg"; 
  img.height = 60; 
  img.width = 150;
  //optionally set a css class on the image
  var class_name = "truck";
  img.setAttribute("class", class_name);
  var drag_g =""drag(event)"";
  img.setAttribute("draggable", true);
  img.setAttribute("ondragstart", drag_g);

  document.body.appendChild(img);
}