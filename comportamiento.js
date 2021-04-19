let txtNombre=document.querySelector('#producto')
let botonBuscar=document.querySelector('#botonBuscar')

let contenidoTabla =document.querySelector('#contenidoTabla')
let comboCategoria=document.querySelector('#categoria')

/*
const buscarcategoria =()=>
{event.preventDefault();
    
  
    const uricategoria ='https://disenoydesarrolloapi.azurewebsites.net/api/Producto/categorias'
    fetch(uricategoria)
    .then(response=>response.json())
    .then(datacombo=>
        imprimircombo(datacombo))

}

const imprimircombo=(combito)=>
{  comboCategoria.innerHTML=""
    combito.categorias.forEach(elementof => {
        comboCategoria.innerHTML+="<option>"+elementof+"<option>"
    });
 
    

}comboCategoria.addEventListener('load   ',buscarcategoria);


*/







const buscardato=()=>
{
    event.preventDefault();
    
    const nombre=txtNombre.value;
    const uri='https://disenoydesarrolloapi.azurewebsites.net/api/Producto?Nombre='
    

    fetch(uri+nombre)
    .then(response=>response.json())
    .then(data=>
        imprimirdato(data))
}
const imprimirdato=(datasa)=>
{
    
    let contenido='';
    datasa.forEach(elementOf => {
       contenido+=
                  '</td><td>'+elementOf.id+
                  '</td><td>'+elementOf.nombre+
                  '</td><td>'+elementOf.categoria+
                  '</td><td>'+elementOf.precio+
                  '</td><td>'+elementOf.proveedor+
                  '</td></tr>'      
    });
    contenidoTabla.innerHTML=contenido
}
botonBuscar.addEventListener('click',buscardato);