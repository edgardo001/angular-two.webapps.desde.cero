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
}
