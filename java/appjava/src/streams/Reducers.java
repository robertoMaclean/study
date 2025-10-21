package streams;

import java.util.List;

public class Reducers {

    public static void run() {
        List<User> users = List.of(
                new User(14, "chanchito@holamundo.io"),
                new User(14, "chanchito@holamundo.io"),
                new User(10, "felipe@holamundo.io"),
                new User(22, "gabriel@holamundo.io")
        );
        var y = users.stream()
                .map(x -> x.email)
                .min(String::compareTo);
        System.out.println(y);
    }

    public static void comun() {
        List<User> users = List.of(
                new User(14, "chanchito@holamundo.io"),
                new User(14, "chanchito@holamundo.io"),
                new User(10, "felipe@holamundo.io"),
                new User(22, "gabriel@holamundo.io")
        );
//        var emails = users.stream()
//                .limit(2)
//                .map(x -> x.email)
//                .reduce((acc, elem) -> acc + ", " + elem);
//        
//        var valor = emails.orElse("No hay correos...");
        var ages = users.stream()
                .map(x -> x.age)
                .reduce(0, Integer::sum);
        System.out.println("ages/users.stream().count() = " + ages/users.stream().count());
    }
}
