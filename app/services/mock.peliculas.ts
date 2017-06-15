import {Pelicula} from "../model/pelicula"//importo modelo

export const PELICULAS: Pelicula[]= [
			new Pelicula(1,"Batman v/s Superman","Zack Snider",2016),//Se cambia ";"" por "," esto es por que es un array
			new Pelicula(2,"La verdad duele","Will Smith",2016),
			new Pelicula(3,"El señor de los anillos","desconocido",2002),
			new Pelicula(4,"Una historia real","El de supersalidos",2015),
			new Pelicula(5,"Don Jon","Josep Gordon Levit",2004),//Si un constructor solicita un dato, este debe ir, si se omite, podria dar fallas de compilacion u otros
			new Pelicula(6, "Dos tontos muy tontos", "Dexconocido", 2001),
];