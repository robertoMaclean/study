


export const getImagen = async() => {

    try {

        //const apiKey = 'z3Yz571Mw1AtJg8xnQMBU4XGk8NGJFdN';
        const apiKey = ''
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;
        console.log( url )
        return url

    } catch (error) {
        // manejo del error
        // console.error(error)
        return 'No se encontró la imagen'
    }
    
    
    
}



