let yksi = document.getElementById("yksi");
let kaksi = document.getElementById("kaksi");
let kolme = document.getElementById("kolme");
let nelja = document.getElementById("nelja");
let kerta = 0;

setInterval(function() {
  if (kerta === 0) {
    kaksi.scrollIntoView();
    kerta ++;
  } else if (kerta === 1) {
    kolme.scrollIntoView();
    kerta ++;
  } else if (kerta === 2) {
    nelja.scrollIntoView();
    kerta ++;
  } else {
    yksi.scrollIntoView();
    kerta = 0;
  }
}, 5000);

/*
setTimeout(function() {
  location.reload(true);
},32000);
*/