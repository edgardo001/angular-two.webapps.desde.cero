// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {Pelicula} from '../model/pelicula';//Se importa el modelo
}
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'peliculas-list',
    templateUrl: "app/view/peliculas-list.html",    
})

// Clase del componente donde iran los datos y funcionalidades
export class PeliculasListComponent { 
	public pelicula:Pelicula//Se deja una propiedad de pelicula que es un modelo
	public peliculaElegida:Pelicula//Se deja una propiedad de pelicula que es un modelo
	public mostrarDatos:boolean
	public peliculas//Un array de string, puede o no ir su "tipado" (podria ir cualquier dato al no ir)
	//public peliculas: Array<Pelicula>;//Un array tambien se podria definir de esta manera


	//Constructor que inicializa la clase, siempre se lanzara cuando se crea el objeto del component.
	//Sirve para inicializar el objeto o variables especificas
	constructor(){		
		//Se insertan los datos de la pelicula
		this.mostrarDatos=false

		this.debug()//este mensaje se lanzara al iniciar la pagina/componente

		this.peliculas=[
				new Pelicula(1,"Batman v/s Superman","Zack Snider",2016),//Se cambia ";"" por "," esto es por que es un array
				new Pelicula(2,"La verdad duele","Will Smith",2016),
				new Pelicula(3,"El señor de los anillos","desconocido",2002),
				new Pelicula(4,"Una historia real","El de supersalidos",2015),
				new Pelicula(5,"Don Jon","Josep Gordon Levit",2004),//Si un constructor solicita un dato, este debe ir, si se omite, podria dar fallas de compilacion u otros
		]
		this.peliculaElegida=this.peliculas[0]
		this.pelicula=this.peliculas[0]
	}

	debug(titulo=null){
		if (titulo!= null) {
			//Se imprime el objeto pelicula
			console.log(this.pelicula.titulo)
		}else{			
			console.log(this.pelicula)
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