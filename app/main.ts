import {bootstrap}    from 'angular2/platform/browser';//carga el framework al final
import {AppComponent} from './app.component';//creamos nuestro componente
import {ROUTER_PROVIDERS} from "angular2/router";//para el uso de rutas en angular

bootstrap(AppComponent, [ROUTER_PROVIDERS]);