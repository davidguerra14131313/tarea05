let txtNombre=document.querySelector('#producto')
let botonBuscar=document.querySelector('#botonBuscar')
let contenidoTabla =document.querySelector('#contenidoTabla')
let comboCategoria=document.querySelector('#categoria')




    
  
    const uricategoria ='https://disenoydesarrolloapi.azurewebsites.net/api/Producto/Categorias'
    fetch(uricategoria)
    .then(response=>response.json())
    .then(datacombo=>
        {
            datacombo.categorias.forEach(elementOf=>
            {
                comboCategoria.innerHTML+='<option>'+elementOf+'</option>'
            })
  
    })
    

const buscardato=()=>
{
    event.preventDefault();
    const combo=comboCategoria.value;
    const nombre=txtNombre.value;
    const uri='https://disenoydesarrolloapi.azurewebsites.net/api/Producto'
    const uriconcatenado= uri+'?Nombre='+nombre+'&Categoria='+combo

    fetch(uriconcatenado)
    .then(response=>response.json())
    .then(data=>
        imprimirdato(data))
}
const imprimirdato=(data)=>
{
    
    let contenido='';
    data.forEach(elementOf => {
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
botonBuscar.addEventListener('click',buscardato)