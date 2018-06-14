var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';

document.getElementsByTagName('head')[0].appendChild(script);


$("body").append("<div class = 'chrome-notification'><img src = 'https://emojipedia-us.s3.amazonaws.com/thumbs/120/google/119/thumbs-up-sign_1f44d.png'><h2>Refresh Prevented!</h2></div>");
$(".chrome-notification h2").css({"height":$(".chrome-notification").height()});
$(".chrome-notification").fadeOut(2500);


var script2 = document.createElement('script');
script2.type = 'text/javascript';
script2.innerHTML = "window.onbeforeunload = function(event){return confirm('Confirm refresh');};";

document.getElementsByTagName('head')[0].appendChild(script2);
