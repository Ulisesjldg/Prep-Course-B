class Usuarios {  // con la CLASE los metodos dentro
    constructor(nombre, email, pais, edad) {
        this.nombre = nombre;
        this.email = email; //objeto que cumpla todos los elementos 
        this.pais = pais;
        this.edad = edad;
    }
    informacion () {
        return 'hola, me llamo' +this.nombre + 'Tengo' + this.edad;
    }
    nombreCompleto() {
        return 'Hola mi nombre completo es:'+ this.nombre;
    }
}


var rocky = new Usuarios('Ulises', 'sapohp@gmail.com', 'Colombia', 25); //coloco la info que quiero que tenga esos objetos
var sam = new Usuarios('Sam', 'sapahp@gmail.com', 'Colombia', 26);
console.log(alejo.informacion());
var jia = new Usuarios('Jia', 'jia@gmail.com', 'Colombia', 7);   

//**************************************//
// funcion constructura 
function Car (marca, modelo, color){   //mi clase es usuarios,  funcion constructora  metodos afuera
    this.marca = marca,
    this.modelo = modelo,     //objeto que cumpla todos los elementos 
    this.color = color        
}

Usuarios.prototype.informacion = function(){   // tipo almacen donde van a estar guardadas las funciones
    return 'Hola, la marca es' + this.marca + 'Y el color es:' + this.color
}
var carro1 = new Car('Rang Rover', '2020', 'Gris') 
var carro1 = new Car('Rang Rover', '202', 'Rojo') 