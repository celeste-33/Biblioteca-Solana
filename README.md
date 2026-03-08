📚 BookChain — Gestión de Tienda de Libros en Solana

BookChain es un programa on-chain desarrollado en Rust con Anchor sobre la blockchain de Solana.
Permite a los dueños de una tienda o biblioteca gestionar libros y su inventario de forma descentralizada, transparente e inmutable.

📌 ¿Qué hace el proyecto?

BookChain implementa un sistema CRUD completo para administrar una tienda de libros.

El sistema permite:

Crear una tienda vinculada a tu wallet (owner)

Registrar libros con título, autor, precio y stock

Eliminar libros cerrando su cuenta en la blockchain

Activar o desactivar libros (ej. libro agotado)

Actualizar el stock de libros (ej. cuando llegan más unidades)

Cada tienda y cada libro son cuentas derivadas (PDA) únicas en Solana.

Esto garantiza que:

No haya duplicados

Solo el owner autorizado pueda modificar la información

🏗️ Arquitectura
Owner (Wallet)
    │
    └── Tienda (PDA)
            │
            ├── Libro A (PDA)
            ├── Libro B (PDA)
            └── Libro C (PDA)
📦 Structs principales
Tienda
Campo	Tipo	Descripción
owner	Pubkey	Wallet del dueño
nombre	String	Nombre de la tienda
libros	Vec<Pubkey>	Lista de libros registrados
Libro
Campo	Tipo	Descripción
tienda	String	Nombre de la tienda
titulo	String	Título del libro
autor	String	Autor del libro
precio	u64	Precio del libro
stock	u16	Cantidad disponible
disponible	bool	Si el libro está disponible
⚙️ Instrucciones (Funciones del programa)
Instrucción	Descripción
crear_tienda(nombre)	Crea la cuenta de la tienda vinculada al owner
registrar_libro(titulo, autor, precio, stock)	Registra un nuevo libro en la tienda
eliminar_libro(titulo)	Elimina el libro y cierra su cuenta
alternar_disponibilidad(titulo)	Activa o desactiva el libro
actualizar_stock(titulo, stock)	Actualiza la cantidad disponible
🔐 PDAs (Program Derived Addresses)

Las cuentas se derivan con los siguientes seeds:

Tienda
["tienda", nombre_tienda, owner_pubkey]
Libro
["libro", titulo_libro, owner_pubkey]

Esto garantiza que:

Cada owner tiene su propia tienda única

No pueden existir dos libros con el mismo título dentro de la misma tienda

🚀 Cómo usar el proyecto (Solana Playground)

1️⃣ Abre Solana Playground

2️⃣ Haz fork de tu repositorio o pega el contenido de src/lib.rs

3️⃣ Conecta tu wallet (devnet)

4️⃣ Haz clic en:

Build
Deploy

5️⃣ Usa el panel de Test para interactuar con el programa.

💻 Ejemplo de flujo
1. crear_tienda("MiBiblioteca")

2. registrar_libro("Don Quijote", "Miguel de Cervantes", 300, 10)

3. alternar_disponibilidad("Don Quijote")
   → marca el libro como no disponible

4. actualizar_stock("Don Quijote", 20)
   → llegan más libros

5. eliminar_libro("Don Quijote")
   → elimina el libro del inventario
🛠️ Tecnologías

Solana — Blockchain rápida y escalable

Anchor Framework — Framework para programas en Solana

Rust — Lenguaje del smart contract

👩‍💻 Autor

Proyecto desarrollado por Maria Martinez como parte de un proyecto de desarrollo en Solana enfocado en la gestión de tiendas de libros en blockchain.
