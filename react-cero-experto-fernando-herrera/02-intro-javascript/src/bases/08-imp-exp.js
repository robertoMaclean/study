
import heroes, { owners } from "../data/heroes"

//console.log( heroes );

export const getHeroeById = ( id ) => heroes.find( heroe => heroe.id === id ) 

//console.log( getHeroesById(2) )


export const getHeroesByOwner = ( owner ) => heroes.filter( heroe => heroe.owner === owner ) 

//console.log( getHeroesByOwner('DC') )
//console.log( getHeroesByOwner('Marvel') )
//console.log( owners )
