import java.awt.*;
import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
//        sum();
//        converter();
//        parseInt();
//        completeName();
//        average();
//        suscription();
        printArray();
    }

    private static void printArray() {
        String[] courses = {"Ultimate Java", "Ultimate Javascript", "Ultimate Python",
                            "Ultimate React", "Ultimate Git + Github"};
        System.out.println(Arrays.toString(courses));
    }

    private static void suscription() {
        boolean monthlySuscription = false;
        boolean semiAnnualSuscription = false;
        boolean annualSuscription = true;
        System.out.println("¿Tiene suscripción mensual? " + monthlySuscription);
        System.out.println("¿Tiene suscripción semestral? " + semiAnnualSuscription);
        System.out.println("¿Tiene suscripción annual? " + annualSuscription);
    }

    private static void sum() {
        int a = 10;
        int b = 20;
        int c = 30;
        int sum = a + b + c;
        System.out.println("La suma es: " + sum);
    }

    private static void converter() {
        final double METERS = 100;
        final double INCHES = METERS * 39.37;
        final double FEETS = INCHES  / 12;
        final double YARDS = FEETS / 3;
        final double MILES = FEETS / 5280;
        final var TEXT = METERS + " metros son ";
        System.out.println(TEXT + INCHES + " pulgadas");
        System.out.println(TEXT + FEETS + " pies");
        System.out.println(TEXT + YARDS + " yardas");
        System.out.println(TEXT + MILES + " millas");
    }

    private static void parseInt() {
        final double METERS = 100;
        final double INCHES = METERS * 39.37;
        System.out.println(METERS + " metros son " + (int)(INCHES) + " pulgadas.");
    }

    private static void completeName() {
        System.out.println("Ingrese su nombre");
        Scanner scanner = new Scanner(System.in);
        String name = scanner.nextLine();
        System.out.println("Ingrese sus apellidos");
        String lastName = scanner.nextLine();

        System.out.println("Tu nombre completo es: " + name + " " + lastName);
    }

    private static void average() {
        float nota1 = 85.5f;
        float nota2 = 90.0f;
        float nota3 = 78.3f;
        float average = (nota1 + nota2 + nota3) / 3;
        System.out.println("El promedio de notas es: " + average);
    }
}