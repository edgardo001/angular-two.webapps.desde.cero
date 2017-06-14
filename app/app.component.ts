// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {Pelicula} from './model/pelicula';//Se importa el modelo
}
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    templateUrl: "app/view/peliculas.html",
    styleUrls: ["../assets/css/style.css"]//Se importa un css
})
 
// Clase del componente donde iran los datos y funcionalidades
export class AppComponent { 
	//Creando una propiedad con typescipt, para pasar al template con {{}}
	public titulo="HOLA MUNDO con angular"
	public pelicula:Pelicula//Se deja una propiedad de pelicula que es un modelo
	public mostrarDatos:boolean
	public peliculas:Array<string>//Un array de string, puede o no ir su "tipado"

	//Constructor que inicializa la clase, siempre se lanzara cuando se crea el objeto del component.
	//Sirve para inicializar el objeto o variables especificas
	constructor(){		
		//Se insertan los datos de la pelicula
		this.mostrarDatos=false
		this.pelicula=new Pelicula(1,"batman v/s Superman","Zack Snider",2016);
		this.debug()//este mensaje se lanzara al iniciar la pagina/componente

		this.peliculas=[
				new Pelicula(1,"Batman v/s Superman","Zack Snider",2016);
				new Pelicula(2,"La verdad duele","Will Smith",2016);
				new Pelicula(3,"El señor de los anillos","desconocido");
				new Pelicula(4,"Una historia real","El de supersalidos",2015);
				new Pelicula(5,"Don Jon","Josep Gordon Levit","");
		]
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
}