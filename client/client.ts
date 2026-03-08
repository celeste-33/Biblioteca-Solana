type Libro = {
  id: number
  titulo: string
  autor: string
  precio: number
  stock: number
}

let libros: Libro[] = []

// CREATE
function agregarLibro(titulo: string, autor: string, precio: number, stock: number) {
  const libro: Libro = {
    id: libros.length + 1,
    titulo,
    autor,
    precio,
    stock
  }

  libros.push(libro)
  console.log("Libro agregado:", libro)
}

// READ
function mostrarLibros() {
  console.log("Lista de libros:")
  console.table(libros)
}

// UPDATE
function actualizarLibro(id: number, nuevoPrecio: number, nuevoStock: number) {
  const libro = libros.find(l => l.id === id)

  if (libro) {
    libro.precio = nuevoPrecio
    libro.stock = nuevoStock
    console.log("Libro actualizado:", libro)
  } else {
    console.log("Libro no encontrado")
  }
}

// DELETE
function eliminarLibro(id: number) {
  libros = libros.filter(libro => libro.id !== id)
  console.log("Libro eliminado")
}


// PRUEBAS

agregarLibro("Cien años de soledad", "Gabriel Garcia Marquez", 250, 10)
agregarLibro("Don Quijote", "Miguel de Cervantes", 300, 5)

mostrarLibros()

actualizarLibro(1, 270, 8)

mostrarLibros()

eliminarLibro(2)

mostrarLibros()
