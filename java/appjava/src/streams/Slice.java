package streams;

import java.util.stream.Stream;

public class Slice {

    public static void run() {
        Stream<Integer> s = Stream.of(1, 2, 3, 4, 5);
//        int pageSize = 10;
//        int page = 5;
//        s.skip((page -1)* pageSize)
//                .limit(pageSize)
//                .forEach(System.out::println);
//        s.dropWhile(i -> i < 3).forEach(System.out::println);
        s.takeWhile(i -> i < 3).forEach(System.out::println);
    }
}
