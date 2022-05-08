function copy(element_id){
  var aux = document.createElement("div");
  aux.setAttribute("contentEditable", true);
  aux.innerHTML = document.getElementById(element_id).innerHTML;
  aux.setAttribute("onfocus", "document.execCommand('selectAll',false,null)"); 
  document.body.appendChild(aux);
  aux.focus();
  document.execCommand("copy");
  document.body.removeChild(aux);
}

$(document).ready(function(){
  $("#btn1").click(function(){
    $("#p1").fadeToggle();
    $("#p11").fadeToggle();
  });
});
$(document).ready(function(){
  $("#btn2").click(function(){
    $("#p2").fadeToggle();
    $("#p21").fadeToggle();
  });
});
$(document).ready(function(){
  $("#btn3").click(function(){
    $("#p3").fadeToggle();
    $("#p31").fadeToggle();
  });
});
$(document).ready(function(){
  $("#btn4").click(function(){
    $("#p4").fadeToggle();
    $("#p41").fadeToggle();
  });
});