System.register(['angular2/core', '../services/peliculas.services'], function(exports_1, context_1) {
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
    var core_1, peliculas_services_1;
    var PeliculasListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (peliculas_services_1_1) {
                peliculas_services_1 = peliculas_services_1_1;
            }],
        execute: function() {
            // Decorador component, indicamos en que etiqueta se va a cargar la plantilla
            //con "providers", le indica que puedo usar un servicio dentro de este componente
            PeliculasListComponent = (function () {
                //Constructor que inicializa la clase, siempre se lanzara cuando se crea el objeto del component.
                //Sirve para inicializar el objeto o variables especificas
                function PeliculasListComponent(_peliculasService) {
                    this._peliculasService = _peliculasService;
                    this.datoServicioDemo = this._peliculasService.getDemo(); //Obtengo datos de un servicio
                    //Se insertan los datos de la pelicula
                    this.mostrarDatos = false;
                    this.debug(); //este mensaje se lanzara al iniciar la pagina/componente
                    this.peliculas = this._peliculasService.getPeliculas(); //obtengo los datos de un servicio
                    this.peliculaElegida = this.peliculas[0];
                    this.pelicula = this.peliculas[0];
                }
                PeliculasListComponent.prototype.debug = function (titulo) {
                    if (titulo === void 0) { titulo = null; }
                    if (titulo != null) {
                        //Se imprime el objeto pelicula
                        console.log(this.pelicula.titulo);
                    }
                    else {
                        console.log(this.pelicula);
                    }
                };
                PeliculasListComponent.prototype.onShowHide = function () {
                    this.mostrarDatos = true;
                };
                PeliculasListComponent.prototype.onHideShow = function () {
                    this.mostrarDatos = false;
                };
                PeliculasListComponent.prototype.onCambiarPelicula = function (pelicula) {
                    this.pelicula = pelicula;
                    this.peliculaElegida = pelicula;
                };
                PeliculasListComponent = __decorate([
                    //Se importa un servicio
                    core_1.Component({
                        selector: 'peliculas-list',
                        templateUrl: "app/view/peliculas-list.html",
                        providers: [peliculas_services_1.PeliculasService],
                    }), 
                    __metadata('design:paramtypes', [peliculas_services_1.PeliculasService])
                ], PeliculasListComponent);
                return PeliculasListComponent;
            }());
            exports_1("PeliculasListComponent", PeliculasListComponent);
        }
    }
});
//# sourceMappingURL=peliculas-list.component.js.map