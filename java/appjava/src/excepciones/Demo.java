package excepciones;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class Demo {
    public static void suma() {
        sumando(null);
    }

    public static Integer sumando(Integer i) {
        return i + 2;
    }

    public static int noComprobado() {
        int numerador = 10;
        int denominador = 0;
        try {
            int resultado = numerador / denominador;
            System.out.println("resultado = " + resultado);
            return resultado;
        } catch(RuntimeException e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
            return -1;
        }

    }

    public static void comprobado() {
        try {
            FileReader fr = new FileReader("archivo inexistente");
            var x = 10/0;
        } catch (FileNotFoundException | ArithmeticException e) {
            e.printStackTrace();
            System.out.println("archivo inexistente o dividiste por zero");
        }
    }
}
