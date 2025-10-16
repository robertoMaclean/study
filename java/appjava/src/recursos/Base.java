package recursos;

public class Base {

    protected String name;

    public Base(String name ) {
        name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String miMetodo() {
        return "Hola mundo";
    }
}
