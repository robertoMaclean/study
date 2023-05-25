const getImagen = async () => {
	try {
		const apiKey = 'z3Yz571Mw1AtJg8xnQMBU4XGk8NGJFdN'
		const resp = await fetch(`http://api.giphy.com/v1/stickers/random?api_key=${apiKey}`)
		const  { data } = await resp.json()
		const { url } = data.images.original
		const img = document.createElement('img')
		img.src = url
		document.body.append( img )
	} catch (error) {
		console.log( error )
	}
}

getImagen()


