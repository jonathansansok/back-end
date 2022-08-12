class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getfullName() {
    return `${this.nombre} ${this.apellido}`;
  }

  addMascota() {
    this.mascotas.push();
    return this.mascotas;
  }

  countMascotas() {
    return this.mascotas.length;
  }

  addBook() {
    this.libros.push();
    return this.libros;
  }

  getBooksNames() {
    return this.libros.map((busqueda) => busqueda.name);
  }
}

let jonathanS = new Usuario(
  "Jonathan",
  "Sansó",
  [
    {
      name: "Mistery Tour",
      autor: "Rupert Bort",
    },
    {
      name: "Be Here Now",
      autor: "John Smith",
    },
  ],
  ["perro", "gato", "pez"]
);

console.log(jonathanS); //bien

console.log(jonathanS.getfullName()); //bien

console.log(jonathanS.addMascota('loro')); //falta

console.log(jonathanS.countMascotas()); //bien

console.log(
  jonathanS.addBook(
    "El señor de los anillos",
    "J.R.R. Tolkien"
  )
); //falta

console.log(jonathanS.getBooksNames()); //bien
