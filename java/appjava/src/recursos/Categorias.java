package recursos;

public class Categorias extends Base {

    public Categorias(String name) {
        super(name);
        System.out.println("soy Categorias");
    }

    public String miMetodo() {
        String saludo = super.miMetodo();
        return "Chao mundo " + saludo;
    }

}
