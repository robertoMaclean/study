package colecciones;

import java.util.Iterator;

public class Lista<T> implements Iterable<T> {
    private T[] data = (T[]) new Object[50];
    private int length = 0;

    public colecciones.Lista<T> add(T t) {
        data[length++] = t;
        return this;
    }

    public T get(int index) {
        return data[index];
    }

    @Override
    public Iterator<T> iterator() {
        return new ListaIterator(this);
    }

    private class ListaIterator implements Iterator<T> {

        private Lista<T> lista;
        private int index = 0;
        public ListaIterator(Lista<T> lista) {
            this.lista = lista;
        }

        @Override
        public boolean hasNext() {
            return this.index < lista.length;
        }

        @Override
        public T next() {
            return this.lista.data[this.index++];
        }
    }
}
