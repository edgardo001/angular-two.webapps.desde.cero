// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {PeliculasListComponent} from "./components/peliculas-list.component";//Cargo un nuevo componente
import {PeliculasFooterComponent} from "./components/peliculas-footer.component";//Cargo un nuevo componente
//directivas del router
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    templateUrl: "app/view/peliculas.html",
    directives:[PeliculasListComponent, PeliculasFooterComponent, ROUTER_DIRECTIVES],//Paso un array con todos loc componentes que deseo utilizar    
})
 
@RouteConfig(
	[{path:"/peliculas", name:"Peliculas", component: PeliculasListComponent, useAsDefault:true}]
)

// Clase del componente donde iran los datos y funcionalidades
export class AppComponent { 
	//Creando una propiedad con typescipt, para pasar al template con {{}}
	public titulo="HOLA MUNDO con angular"
	
}