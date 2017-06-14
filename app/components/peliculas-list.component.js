System.register(['angular2/core', '../model/pelicula'], function(exports_1, context_1) {
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
    var core_1, pelicula_1;
    var PeliculasListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (pelicula_1_1) {
                pelicula_1 = pelicula_1_1;
            }],
        execute: function() {
            // Decorador component, indicamos en que etiqueta se va a cargar la plantilla
            PeliculasListComponent = (function () {
                //public peliculas: Array<Pelicula>;//Un array tambien se podria definir de esta manera
                //Constructor que inicializa la clase, siempre se lanzara cuando se crea el objeto del component.
                //Sirve para inicializar el objeto o variables especificas
                function PeliculasListComponent() {
                    //Se insertan los datos de la pelicula
                    this.mostrarDatos = false;
                    this.debug(); //este mensaje se lanzara al iniciar la pagina/componente
                    this.peliculas = [
                        new pelicula_1.Pelicula(1, "Batman v/s Superman", "Zack Snider", 2016),
                        new pelicula_1.Pelicula(2, "La verdad duele", "Will Smith", 2016),
                        new pelicula_1.Pelicula(3, "El señor de los anillos", "desconocido", 2002),
                        new pelicula_1.Pelicula(4, "Una historia real", "El de supersalidos", 2015),
                        new pelicula_1.Pelicula(5, "Don Jon", "Josep Gordon Levit", 2004),
                    ];
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
                    core_1.Component({
                        selector: 'peliculas-list',
                        templateUrl: "app/view/peliculas-list.html",
                    }), 
                    __metadata('design:paramtypes', [])
                ], PeliculasListComponent);
                return PeliculasListComponent;
            }());
            exports_1("PeliculasListComponent", PeliculasListComponent);
        }
    }
});
//# sourceMappingURL=peliculas-list.component.js.map