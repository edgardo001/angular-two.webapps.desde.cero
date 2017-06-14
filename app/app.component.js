System.register(['angular2/core', './model/pelicula'], function(exports_1, context_1) {
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
    var AppComponent;
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
            AppComponent = (function () {
                //Constructor que inicializa la clase, siempre se lanzara cuando se crea el objeto del component.
                //Sirve para inicializar el objeto o variables especificas
                function AppComponent() {
                    //Creando una propiedad con typescipt, para pasar al template con {{}}
                    this.titulo = "HOLA MUNDO con angular";
                    //Se insertan los datos de la pelicula
                    this.mostrarDatos = false;
                    this.pelicula = new pelicula_1.Pelicula(1, "batman v/s Superman", "Zack Snider", 2016);
                    this.debug(); //este mensaje se lanzara al iniciar la pagina/componente
                    this.peliculas = [
                        new pelicula_1.Pelicula(1, "Batman v/s Superman", "Zack Snider", 2016),
                        new pelicula_1.Pelicula(2, "La verdad duele", "Will Smith", 2016),
                        new pelicula_1.Pelicula(3, "El señor de los anillos", "desconocido", 2002),
                        new pelicula_1.Pelicula(4, "Una historia real", "El de supersalidos", 2015),
                        new pelicula_1.Pelicula(5, "Don Jon", "Josep Gordon Levit", 2004),
                    ];
                }
                AppComponent.prototype.debug = function (titulo) {
                    if (titulo === void 0) { titulo = null; }
                    if (titulo != null) {
                        //Se imprime el objeto pelicula
                        console.log(this.pelicula.titulo);
                    }
                    else {
                        console.log(this.pelicula);
                    }
                };
                AppComponent.prototype.onShowHide = function () {
                    this.mostrarDatos = true;
                };
                AppComponent.prototype.onHideShow = function () {
                    this.mostrarDatos = false;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: "app/view/peliculas.html",
                        styleUrls: ["../assets/css/style.css"] //Se importa un css
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map