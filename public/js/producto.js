

document.querySelector('.specificProduct__contentPop__contentSpecific__buttonAdd').addEventListener('click', function(element){
    element.preventDefault();
    var url = '/producto/addtocart?name='+this.getAttribute('data-name');
    fetch(url,{
        method: 'GET',
    })
    .then(res => res.text())
    .catch(err => console.log(err))
    .then(res => console.log(res));
});