package recursos;

public class Productos extends Base {
    public Productos(String name) {
        super(name);
        System.out.println("soy Productos");
    }

    public void guardar() {
        System.out.println("Guardando productos");
    }
}
