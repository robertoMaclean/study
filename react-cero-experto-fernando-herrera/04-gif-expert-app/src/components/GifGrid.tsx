import {getGifts} from "../helpers/getGifs";

export const GifGrid = ({ category, key }) => {

	getGifts( category )

	return (
		<>
			<h3>{ category }</h3>	
			<p>Hola Mundo</p>
		</>
	);
};
