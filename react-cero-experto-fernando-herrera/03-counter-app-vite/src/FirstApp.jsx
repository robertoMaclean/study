
const newMessage = {
	message: 'Hola Mundo',
	titulo: 'Rob'
}

const getMessage = (name) => `Hello ${name}`

export const FirstApp = () => {
	return (
		<>
			<h1>{ getMessage('Rob') }</h1>
			{/*<code>{ JSON.stringify( newMessage ) }</code>*/}
			<p>Soy un subtitulo</p>
		</>
	)
}



