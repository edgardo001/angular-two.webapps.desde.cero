import {Injectable} from "angular2/core";
import {PELICULAS} from "./mock.peliculas";

@Injectable()
export class PeliculasService{
	
	getDemo(){
		return "Hola mundo desde un servicio"
	}

	getPeliculas(){		
		//obtengo los datos de una constante
		return PELICULAS
	}

	insertPelicula(pelicula: PELICULA){
		//Consigue la info de las peliculas y agrega una nueva pelicula		
		Promise.resolve(PELICULAS).then((peliculas:Pelicula[]) => peliculas.push(pelicula))
	}
}
