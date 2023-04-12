const listaAlbuns = JSON.parse(localStorage.getItem("lista")) || [];

const painel = document.getElementById("grid-info")

listaAlbuns.forEach(elemento => {
    const gridInfoAlbum = document.createElement('div')
    gridInfoAlbum.classList.add('grid__info__album')
    gridInfoAlbum.classList.add('cartao')
    painel.appendChild(gridInfoAlbum)

    const gridInfo = document.createElement('ul')
    gridInfo.classList.add('grid__info__lista')
    gridInfoAlbum.appendChild(gridInfo)

    for (const [key, value] of Object.entries(elemento)) {  
      const albumInfoItem = document.createElement('li')
      const albumInfoItemNome = document.createElement('strong')
      const albumInfoItemImg = document.createElement('img')

      if (!(key === "Capa")) {
        albumInfoItem.classList.add('grid__info__item')
        gridInfo.appendChild(albumInfoItem)
        albumInfoItemNome.classList.add('grid__info__item__nome')
        albumInfoItem.appendChild(albumInfoItemNome)
        albumInfoItemNome.innerHTML += `${key}: `
        albumInfoItem.innerHTML += `${value}`
      } else {
        
        albumInfoItemImg.classList.add('grid__info__item-cover'); 
        albumInfoItemImg.src = `${value}`;
        albumInfoItemNome.innerHTML += ""
        albumInfoItem.innerHTML += ""
        gridInfo.appendChild(albumInfoItemImg)        
      }

      if (key === "Capa" && value === "") {
        albumInfoItemImg.src = "../assets/img/ummagummalive.jpeg";
        albumInfoItem.classList.add('grid__info__item-cover');
        albumInfoItem.classList.add('grid__info__item-cover-alt');
        albumInfoItemNome.innerHTML += ""
      }

      

      
    }

    

    console.log(painel)
    
});