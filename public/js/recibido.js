window.addEventListener('load', function (elem) {

    var tag= document.querySelector(".cartProducts");
    console.log(tag);

var compras = JSON.parse(localStorage.getItem('compras'));
    if(compras == null){
        console.log("Aquí no hay nada");
    
    }
    else {
        this.console.log("Si hay objetos");
        this.console.log(compras);

        
    }
   

});
