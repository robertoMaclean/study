package recursos;

public class Cocinero implements Atendible, Cocinable {
    @Override
    public void atenderMesa() {
        System.out.println("Atiende mesa el cocinero");
    }

    @Override
    public void cocinar() {

    }
}
