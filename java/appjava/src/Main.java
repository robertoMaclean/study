import genericos.Lista;

public class Main {
    public static void main(String[] args) {
        Lista<Integer> lista = new Lista<>();
        lista.add(12);
        lista.add(32);

        var elemento = lista.get(0);
    }
}