/*
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
        //document.querySelector('.specificProduct__contentPop__contentSpecific__buttonAdd').innerText = compras.length;
    }

    shoppingBag__render();

    document.querySelectorAll('.specificProduct__contentPop__contentSpecific__buttonAdd').forEach(function(elemento){
        elemento.addEventListener('click', function(evento){
            evento.preventDefault();
            console.log("entra hp");

            var url = '/producto/getproduct?name='+this.getAttribute('data-name');
            fetch(url,{
                method: 'GET',
            })
            .then(res => res.json())
            .catch(err => console.log(err))
            .then(res => console.log(res));

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

console.log(compras);
    
});
*/