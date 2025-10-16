package recursos;

public class Base {

    String name;

    public Base(String x) {
        System.out.println("soy Base");
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
