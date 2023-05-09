
var modalBtns = document.querySelectorAll(".modal-open");
    
modalBtns.forEach(function(btn){
  btn.onclick = function(){
    var modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
  };
});
window.onclick = function(e){
    if(e.target.className =="modal"){
        e.target.style.display = "none";
    }
};
