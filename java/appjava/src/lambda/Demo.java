package lambda;

public class Demo {

    private static String texto = "Imprimiendo de lambda: ";
    public static void run() {

        Notificable lambda = message -> {
            System.out.println(texto + message);
        };
        push(lambda);
    }

    public static void push(Notificable n)  {
        n.push("Chanchito feliz");
    }
}
