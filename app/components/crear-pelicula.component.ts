// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Pelicula} from '../model/pelicula';
import {Router, RouteParams} from 'angular2/router';//Para redirecciones a otra ruta (ruter navigate)
import {PeliculasService} from '../services/peliculas.services';//Se importa un servicio

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    templateUrl: "app/view/crear-pelicula.html",
    providers:[PeliculasService]//Para realizar uso de un servicio injectable
})
 
// Clase del componente donde iran los datos y funcionalidades
export class CrearPeliculaComponent implements OnInit { 

	public TituloPelicula ="";
	public nuevaPelicula: Pelicula;

	constructor(private _peliculasService : PeliculasService, 
				private _router:Router, 
				private _routeParams:RouteParams){
	}

	onSubmit(){		
		this._peliculasService.insertPelicula(this.nuevaPelicula);
		this._router.navigate(["Peliculas"]);
		//console.log(pelicula)
	}

	//Evento que se ejecuta al iniciar la vista
	ngOnInit():any{
		//Se obtiene el datos pasado por url por metodo get
		this.TituloPelicula=this._routeParams.get("titulo");
		this.nuevaPelicula = new Pelicula(
			0,
			this._routeParams.get("titulo"),
			this._routeParams.get("director"),
			this._routeParams.get("anio")
			);
	}
	
},