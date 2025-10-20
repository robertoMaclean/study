package colecciones;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

public class EjemploSet {

    public static void run() {
        Set<String> conjunto = new HashSet<>(Arrays.asList("Lunes", "Martes", "Miercoles", "Jueves", "Viernes"));
        conjunto.add("Lunes");
//        Collections.addAll(conjunto,"Sábado", "Domingo");
//        System.out.println(conjunto);

        Set<String> conjunto2 = new HashSet<>(Arrays.asList("Viernes", "Sábado", "Domingo"));
//        conjunto.addAll(conjunto2);
//        conjunto.removeAll(conjunto2);
//        System.out.println(conjunto);
        conjunto.retainAll(conjunto2);
        System.out.println(conjunto);
    }
}
