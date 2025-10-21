package streams;

import java.util.Collection;
import java.util.List;
import java.util.stream.Stream;

public class DemoMap {

    public static void run() {
        List<User> users = List.of(
                new User(14, "chanchito@holamundo.io"),
                new User(10, "felipe@holamundo.io"),
                new User(22, "gabriel@holamundo.io")
        );

        users.stream()
                .map(u -> u.email)
                .forEach(System.out::println);
    }

    public static void flatMap() {
        var stream = Stream.of(List.of(1, 2, 3), List.of(4,5));
        stream.flatMap(Collection::stream)
                .forEach(System.out::println);
    }
}
