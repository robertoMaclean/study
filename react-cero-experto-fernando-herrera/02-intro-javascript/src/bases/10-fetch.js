const apiKey = 'z3Yz571Mw1AtJg8xnQMBU4XGk8NGJFdN'

const request = fetch(`http://api.giphy.com/v1/stickers/random?api_key=${apiKey}`)

request
	.then( resp => resp.json() )
	.then( ({ data }) => {
		console.log( data.images.original.url )
		const { url } = data.images.original
		const img = document.createElement('img')
		img.src = url
		document.body.append( img )
	})
	.catch( console.warn )
