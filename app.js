// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Inicia declarando una variable de tipo array, que almacenará los nombres de los amigos ingresados.
let amigos = [];


/*Implementa una función para agregar amigos
ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.
Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector
Validar la entrada: que el campo no esté vacío. Si está vacío, alert : "Por favor, inserte un nombre."
Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().
Limpiar el campo de entrada
*/
function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo.trim() === "") {
        alert("Por favor, inserte un nombre.");
        return
    } else if (amigos.includes(amigo)) {
        alert("Este nombre ya está registrado, para diferenciar amigos usa sus apellidos");
        document.querySelector("#amigo").value = "";
        return
    } else {
        alert("El nombre de tu amigo es : "+amigo);
        amigos.push(amigo);
        document.querySelector("#amigo").value = "";
        actualizarAmigos();
    }
}


/*  actualizar amigos
Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.

Tareas específicas:

Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.

Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.

Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.

Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
*/
function actualizarAmigos() {
    
}

/*  Sortear Amigos 
Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. Usa Math.random() y Math.floor() para obtener un índice aleatorio.

Tareas específicas:

    Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.

    Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.

    Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.

    Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.
*/
function sortearAmigo() {
    
}
