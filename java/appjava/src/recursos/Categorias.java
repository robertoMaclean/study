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

    public void metodoCategoria() {
        System.out.println("Soy instancia de cartegoria");
    }

    @Override
    public boolean equals(Object obj) {
        if(!(obj instanceof Categorias))
            return super.equals(obj);
        var c = (Categorias) obj;
        return this.getName().equals(c.name);
    }

    public void guardar() {
        System.out.println("Guardando categoria");
    }
}
