// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {Pelicula} from '../model/pelicula';//Se importa el modelo
import {PeliculasService} from '../services/peliculas.services';//Se importa un servicio
//directivas del router
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
//con "providers", le indica que puedo usar un servicio dentro de este componente
@Component({
    selector: 'peliculas-list',
    templateUrl: "app/view/peliculas-list.html",    
    providers:[PeliculasService],
    directives: [ROUTER_DIRECTIVES]
})

// Clase del componente donde iran los datos y funcionalidades
export class PeliculasListComponent { 
	public pelicula:Pelicula//Se deja una propiedad de pelicula que es un modelo
	public peliculaElegida:Pelicula//Se deja una propiedad de pelicula que es un modelo
	public mostrarDatos:boolean
	public peliculas//Un array de string, puede o no ir su "tipado" (podria ir cualquier dato al no ir)
	//public peliculas: Array<Pelicula>;//Un array tambien se podria definir de esta manera
	public datoServicioDemo;

	//Constructor que inicializa la clase, siempre se lanzara cuando se crea el objeto del component.
	//Sirve para inicializar el objeto o variables especificas
	constructor(private _peliculasService:PeliculasService){		
		this.datoServicioDemo= this._peliculasService.getDemo()//Obtengo datos de un servicio
		//Se insertan los datos de la pelicula
		this.mostrarDatos=false

		//this.debug()//este mensaje se lanzara al iniciar la pagina/componente

		this.peliculas= this._peliculasService.getPeliculas()//obtengo los datos de un servicio
		this.peliculaElegida=this.peliculas[0]
		this.pelicula=this.peliculas[0]
	}

	debug(titulo=null){
		if (titulo!= null) {
			//Se imprime el objeto pelicula
			//console.log(this.pelicula.titulo)
		}else{			
			//console.log(this.pelicula)
		}		
	}

	onShowHide(){
		this.mostrarDatos=true
	}

	onHideShow(){
		this.mostrarDatos=false
	}

	onCambiarPelicula(pelicula){
		this.pelicula = pelicula
		this.peliculaElegida = pelicula
	}
}