window.addEventListener('load',function(){

    var numerodecompras=0;

    var compras = JSON.parse(localStorage.getItem('compras'));
    if(compras == null){
        compras = [];
    }

    function shoppingBag__render(){
        compras.forEach(function(elem){ 
            numerodecompras += parseInt(elem.precio);
        });
        document.querySelector('.navbar__container__items__list__bag').innerText = compras.length;
    }

    

    shoppingBag__render();

    document.querySelectorAll('.products__crafts__icon__add').forEach(function(elemento){
        elemento.addEventListener('click', function(evento){
            evento.preventDefault();
            let parent = elemento.parentElement.parentElement.parentElement;
            let products = {
                tittle : parent.querySelector('h3').innerText,
                precio : parent.querySelector('h4').innerText,
            };

            compras.push(products);
            localStorage.setItem('compras', JSON.stringify(compras));
            shoppingBag__render();
        });
    });
    
});