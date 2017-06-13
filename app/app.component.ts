// Importar el núcleo de Angular
import {Component} from 'angular2/core';
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    templateUrl: "app/view/peliculas.html"
})
 
// Clase del componente donde iran los datos y funcionalidades
export class AppComponent { 
	//Creando una propiedad con typescipt, para pasar al template con {{}}
	public titulo="HOLA MUNDO con angular2";
	//Crear propiedades tambien publica (no es necesario indicar).
	public pelicula:string//(":string" , indica que es una variable del tipo string)
	public director:string
	public anio:number//(Se debe indicar number si solo es numero, de lo contrario la consola data aviso que no pude asignar un tipo string a un number)

	//Constructor que inicializa la clase, siempre se lanzara cuando se crea el objeto del component.
	//Sirve para inicializar el objeto o variables especificas
	constructor(){
		this.pelicula= "batman v/s Superman"
		this.director= "Zack Snider"
		this.anio= 2016
		this.holaMundo()//este mensaje se lanzara al iniciar la pagina/componente
	}

	holaMundo(){
		alert("Pelicula: " + this.pelicula+" - "+this.director+" - "+this.anio)
	}

}