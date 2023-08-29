class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.siguiente = null; // Referencia al siguiente nodo
    }
}

class ListaEnlazada {
    constructor() {
        this.cabeza = null; // Primer nodo de la lista
    }

    agregar(valor) {
        const nuevoNodo = new Nodo(valor);
        if (!this.cabeza) {
            this.cabeza = nuevoNodo;
        } else {
            let actual = this.cabeza;
            while (actual.siguiente) {
                actual = actual.siguiente;
            }
            actual.siguiente = nuevoNodo;
        }
    }

    imprimir() {
        let actual = this.cabeza;
        while (actual) {
            console.log(actual.valor);
            actual = actual.siguiente;
        }
    }
}

// Crear una lista enlazada
const lista = new ListaEnlazada();
lista.agregar(1);
lista.agregar(2);
lista.agregar(3);
lista.imprimir();

