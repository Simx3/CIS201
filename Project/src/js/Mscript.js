let image = document.getElementById('image');
let images = ['new1.jpeg','new4.jpeg','new5.jpeg']
setInterval(function(){
  let random = Math.floor(Math.random() * 3);
  image.src = images[random];
}, 2200);