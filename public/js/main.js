images = [
    "url(imagenes/image-banner.jpg)", "url(imagenes/2.jpg)"]

banner = 0;
var imgBanner= document.querySelector('.banner');

function functionInterval (){
    imgBanner.style.backgroundImage = images [banner];
    banner++;
}

setInterval(functionInterval , 2000);




const area= document.querySelectorAll('interaction');
const imagenes=["url(imagenes/area1.png)", "url(imagenes/area2.png)", "url(imagenes/area3.png)", "url(imagenes/area4.png)"];
var areaone= document.getElementsByClassName('interaction__area interaction__area--areaone');
var contall= document.getElementsByClassName('interaction');
var text1= document.getElementsByClassName('interaction_area interaction_area--areaone interaction__area--areaone--text1');

areaone[0].addEventListener('mouseover', function(){
    contall[0].style.backgroundImage= imagenes[0];
    text1[0].style.color= "white";
});

areaone[0].addEventListener('mouseout', function(){
    contall[0].style.backgroundImage= "url(imagenes/interaction2.png)" ;
    
});

var areatwo= document.getElementsByClassName('interaction__area interaction__area--areatwo');
var contall= document.getElementsByClassName('interaction');

areatwo[0].addEventListener('mouseover', function(){
    contall[0].style.backgroundImage= imagenes[1];
});

areatwo[0].addEventListener('mouseout', function(){
    contall[0].style.backgroundImage= "url(imagenes/interaction2.png)" ;
});

var areathree= document.getElementsByClassName('interaction__area interaction__area--areathree');
var contall= document.getElementsByClassName('interaction');

areathree[0].addEventListener('mouseover', function(){
    contall[0].style.backgroundImage= imagenes[2];
});

areathree[0].addEventListener('mouseout', function(){
    contall[0].style.backgroundImage= "url(imagenes/interaction2.png)" ;
});

var areafour= document.getElementsByClassName('interaction__area interaction__area--areafour');
var contall= document.getElementsByClassName('interaction');

areafour[0].addEventListener('mouseover', function(){
    contall[0].style.backgroundImage= imagenes[3];
});

areafour[0].addEventListener('mouseout', function(){
    contall[0].style.backgroundImage= "url(imagenes/interaction2.png)" ;
});

