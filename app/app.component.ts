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
	public pelicula:string = "batman v/s Superman"//(":string" , indica que es una variable del tipo string)
	public director:string = "Zack Snider"
	public anio:number= 2016//(Se debe indicar number si solo es numero, de lo contrario la consola data aviso que no pude asignar un tipo string a un number)


}