var inputs = document.getElementsByClassName('formulario_input');
for(var i=0; i<inputs.length; i++){
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1){ this.nextElementSibling.classList.add('fijar');}
        else{ this.nextElementSibling.classList.remove('fijar');}
    });
}
document.getElementById("botonSorteo").addEventListener("click", function() {
    document.getElementById("modalSorteo").style.display = "block";
  });
document.getElementsByClassName("close")[0].addEventListener("click", function() {
  document.getElementById("modalSorteo").style.display = "none";
});