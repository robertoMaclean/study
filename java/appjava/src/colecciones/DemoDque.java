package colecciones;

import java.util.ArrayDeque;
import java.util.Deque;

public class DemoDque {
    public static void run() {
        Deque<String> q = new ArrayDeque<>();
        q.addFirst("Goku");
        q.addFirst("Vegeta");
        q.addLast("Freezer");
        q.addLast("Cell");

        System.out.println(q.removeFirst());
        System.out.println(q.removeLast());
        System.out.println(q);
    }
}
