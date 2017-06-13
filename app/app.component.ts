// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {Pelicula} from './model/pelicula';//Se importa el modelo
}
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    templateUrl: "app/view/peliculas.html"
})
 
// Clase del componente donde iran los datos y funcionalidades
export class AppComponent { 
	//Creando una propiedad con typescipt, para pasar al template con {{}}
	public titulo="HOLA MUNDO con angular2"
	public pelicula:Pelicula;//Se deja una propiedad de pelicula que es un modelo

	//Constructor que inicializa la clase, siempre se lanzara cuando se crea el objeto del component.
	//Sirve para inicializar el objeto o variables especificas
	constructor(){
		//Se insertan los datos de la pelicula
		this.pelicula=new Pelicula(1,"batman v/s Superman","Zack Snider",2016);
		this.holaMundo()//este mensaje se lanzara al iniciar la pagina/componente
	}

	holaMundo(){
		//Se imprime el objeto pelicula
		console.log(this.pelicula)
	}

}