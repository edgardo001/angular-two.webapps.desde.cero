System.register(['angular2/core', '../model/pelicula', 'angular2/router', '../services/peliculas.services'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, pelicula_1, router_1, peliculas_services_1;
    var CrearPeliculaComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (pelicula_1_1) {
                pelicula_1 = pelicula_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (peliculas_services_1_1) {
                peliculas_services_1 = peliculas_services_1_1;
            }],
        execute: function() {
            // Decorador component, indicamos en que etiqueta se va a cargar la plantilla
            CrearPeliculaComponent = (function () {
                function CrearPeliculaComponent(_peliculasService, _router, _routeParams) {
                    this._peliculasService = _peliculasService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.TituloPelicula = "";
                }
                CrearPeliculaComponent.prototype.onCrearPelicula = function (titulo, director, anio) {
                    var pelicula = new pelicula_1.Pelicula(77, titulo, director, anio);
                    this._peliculasService.insertPelicula(pelicula);
                    //console.log(pelicula)
                };
                //Evento que se ejecuta al iniciar la vista
                CrearPeliculaComponent.prototype.ngOnInit = function () {
                    //Se obtiene el datos pasado por url por metodo get
                    this.TituloPelicula = this._routeParams.get("titulo");
                };
                CrearPeliculaComponent = __decorate([
                    //Se importa un servicio
                    core_1.Component({
                        templateUrl: "app/view/crear-pelicula.html",
                        providers: [peliculas_services_1.PeliculasService] //Para realizar uso de un servicio injectable
                    }), 
                    __metadata('design:paramtypes', [peliculas_services_1.PeliculasService, router_1.Router, router_1.RouteParams])
                ], CrearPeliculaComponent);
                return CrearPeliculaComponent;
            }());
            exports_1("CrearPeliculaComponent", CrearPeliculaComponent);
        }
    }
});
//# sourceMappingURL=crear-pelicula.component.js.map