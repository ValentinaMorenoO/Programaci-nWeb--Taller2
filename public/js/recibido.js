window.addEventListener('load', function () {

    var tag= document.querySelector(".cartProducts");
    console.log(tag);
    

    var compras = JSON.parse(localStorage.getItem('compras'));
    if(compras == null){
        console.log("Aquí no hay nada");
        crearMensajeError();
        
    }
    else {
        this.console.log("Si hay objetos");
        this.console.log(compras);        
        compras.forEach(element => {
            agregarProducto(element);
        });
    }

    function crearMensajeError(){
        var h1= document.createElement("h1");
        h1.setAttribute("class","cartProducts__mens");
        h1.innerHTML="No hay productos agregados en el carrito";
        tag.appendChild(h1);
    }

    function agregarProducto(element){
        var container = document.createElement('div');
        container.setAttribute('class','product');

        var imgContent = document.createElement('imgContent');
        imgContent.setAttribute('class','product__imgContent');

        var img = document.createElement('img');
        img.setAttribute('src',element.imagen);

        var name = document.createElement('p');
        name.setAttribute('class','product__name');
        name.innerHTML = element.nombre;

        var price = document.createElement('p');
        price.setAttribute('class','product__price');
        price.innerHTML = element.precio;

        imgContent.appendChild(img);
        container.appendChild(imgContent);
        container.appendChild(name);
        container.appendChild(price);

        tag.appendChild(container);
    }


    /*
    <div class="products__contentContainer__content__product">
    <div class="products__contentContainer__content__product__imgContent">
        <img src="{{imagen}}" alt="">
    </div>
    <p class="products__contentContainer__content__product__name">{{nombre}}</p>
    <p class="products__contentContainer__content__product__price">{{precio}}</p>
    */
});
