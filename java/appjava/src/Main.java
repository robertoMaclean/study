import genericos.Garzon;

public class Main {
    public static void main(String[] args) {
    Garzon g1 = new Garzon(1);
    Garzon g2 = new Garzon(3);
    if(g1.compareTo(g2) < 0) {
        System.out.println("g2 es mayor");
    }
    }
}