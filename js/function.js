var button = document.getElementById("showImageButton");
var image = document.getElementById("myImage");
  
button.addEventListener("click", function(){
  if (image.style.display === "none") {
    image.style.display = "block";
  } else {
    image.style.display = "none";
  }
});