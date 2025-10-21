package streams;

import java.util.List;
import java.util.stream.Collectors;

public class Collector {

    public static void run() {
        List<User> users = List.of(
                new User(14, "chanchito@holamundo.io"),
                new User(10, "felipe@holamundo.io"),
                new User(22, "gabriel@holamundo.io")
        );
        var resultado = users.stream()
                .collect(Collectors.toMap(x -> x.email, x -> x));

        System.out.println("resultado = " + resultado);
    }

    public static void particionado() {
        List<User> users = List.of(
                new User(14, "chanchito@holamundo.io"),
                new User(10, "felipe@holamundo.io"),
                new User(22, "gabriel@holamundo.io")
        );
        var particion = users.stream()
                .collect(Collectors.partitioningBy(x -> x.age > 17));
        System.out.println(particion.get(true));
    }

    public static void grouping() {
        List<User> users = List.of(
                new User(14, "chanchito@holamundo.io", Mandos.MEDIO),
                new User(10, "felipe@holamundo.io", Mandos.MEDIO),
                new User(22, "gabriel@holamundo.io", Mandos.ALTO)
        );
        var grouped = users.stream().collect(Collectors.groupingBy(x -> x.mando));
        System.out.println("grouped = " + grouped);
    }
}
