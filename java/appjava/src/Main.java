import java.awt.*;
import java.text.NumberFormat;
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
//        printArray();
//        isEvenAndDivisible();
//        terminalApp();
//        terminalAppExercise();
//        discountApp();
//        scoreCalc();
//        userAccess();
//        taxCalc();
//        scoreCalcFromLetter();
//        evenCalc();
        VideoGame videoGame = new VideoGame("Killer Instinct", 9);
        videoGame.setCategory("action");
        System.out.println(videoGame.getName());
        System.out.println(videoGame.getCategory());
        NumberFormat currencyFormatter = NumberFormat.getCurrencyInstance();
        String formattedPrice = currencyFormatter.format(videoGame.getPrice());
        System.out.println(formattedPrice);
    }

    public static void evenCalc() {
        System.out.println("Ingrese un número");
        Scanner scanner = new Scanner(System.in);
        final int n = scanner.nextInt();
        int index = 0;
        while(index <= n) {
            String text = index % 2 == 0 ? "par" : "impar";
            System.out.println(index + " es un número " + text);
            index++;
        }
    }
    private static void scoreCalcFromLetter() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Ingrese la nota (A, B, C, D, E): ");
        char score = scanner.next().charAt(0);
        String scoreRange = "";
        if (score == 'A') {
            scoreRange = "de 90 a 100";
        } else if(score == 'B') {
            scoreRange = "de 80 a 89";
        }
        else if(score == 'C') {
            scoreRange = "de 70 a 79";
        }
        else if(score == 'D') {
            scoreRange = "de 60 a 69";
        }
        else if(score == 'E') {
            scoreRange = "es menor a 60";
        }
        System.out.printf("la nota '%c' equivale a un rango de calificación %s%n", score, scoreRange);
    }

    private static void taxCalc() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Ingrese su salario anual");
        double sal = scanner.nextDouble();
        double taxPercent;
        if (sal < 10000) {
            taxPercent = (double) 5 /100;
        } else if (sal < 30000) {
            taxPercent = (double) 10 /100;
        }
        else if (sal < 60000) {
            taxPercent = (double) 20 /100;
        }else {
            taxPercent = (double) 30 /100;
        }
        double tax = sal*taxPercent;
        System.out.println("El impuesto a pagar es: $" + tax);
    }

    private static void userAccess() {
        final String PASSWORD = "1234";
        Scanner scanner = new Scanner(System.in);
        System.out.println("Ingrese la contraseña");
        String userPassword = scanner.next();
        if(PASSWORD.equals(userPassword)) {
            System.out.println("Acceso concedido.");
        } else {
            System.out.println("Acceso denegado.");
        }
    }

    private static void scoreCalc() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Ingrese la nota: ");
        int score = scanner.nextInt();
        char finalScore;
        if (score >= 90) {
            finalScore = 'A';
        } else if(score >= 80) {
            finalScore = 'B';
        }
        else if(score >= 70) {
            finalScore = 'C';
        }
        else if(score >= 60) {
            finalScore = 'D';
        }
        else {
            finalScore = 'F';
        }
        System.out.println("Tu calificación es: " + finalScore);
    }

    private static void discountApp() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Ingrese en precio del producto");
        final double price = scanner.nextDouble();
        System.out.println("Ingrese el % de descuento");
        final double discount = scanner.nextDouble();
        final double finalPrice = calcDiscount(price, discount);
        System.out.println("El precio final es: " + finalPrice);
    }

    private static double calcDiscount(double price, double discount) {
        double discountPercent = (discount / 100.0) * price;
        return price - discountPercent;
    }

    private static void terminalAppExercise() {
        terminal: while (true) {
            Scanner scanner = new Scanner(System.in);
            System.out.println("Ingresa opción:");
            System.out.println("1. Calculadora");
            System.out.println("2. Hackear la nasa");
            System.out.println("3. Salir");
            String option = scanner.next().toLowerCase();
            switch (option) {
                case "1":
                    System.out.println("Ingrese el primer número");
                    int a = scanner.nextInt();
                    System.out.println("Ingrese el segundo número");
                    int b = scanner.nextInt();
                    calculator(a, b);
                    break;
                case "2":
                    hackingNasa();
                    break;
                case "3":
                    break terminal;
            }
        }
    }

    private static void calculator(int a, int b) {
        int sum = a + b;
        System.out.println("La suma es: " + sum);
    }

    private static void hackingNasa() {
        System.out.println("Hacking Nasa \uD83D\uDE04");
        System.out.println("#");
        System.out.println("##");
        System.out.println("###");
        System.out.println("####");
        System.out.println("Nasa is hacking! \uD83D\uDE04");
    }

    private static void terminalApp() {
        Scanner scanner = new Scanner(System.in);
        String input = "";

        while(!input.equals("salir")) {
            System.out.println("Ingresa comando: ");
            input = scanner.next().toLowerCase();
            System.out.println(input);
        }

        System.out.println("Terminó el loop");
    }

    private static void isEvenAndDivisible() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Ingresa un número");
        int number = scanner.nextInt();
        String isEvenText = isEven(number) ? "El número es par" : "El número es impar";
        System.out.println(isEvenText);
        if(isDivisible(number, 3) && isDivisible(number, 4)) {
            System.out.println("Es divisible por 3 y por 4");
        }else if(isDivisible(number, 3)) {
            System.out.println("Es divisible por 3");
        }else if(isDivisible(number, 4)) {
            System.out.println("Es divisible por 4");
        }
    }

    private static boolean isEven(int number) {
        return number % 2 == 0;
    }

    private static boolean isDivisible(int number, int divisor) {
        return number % divisor == 0;
    }

    private static void printArray() {
        String[] courses = {"Ultimate Java", "Ultimate Javascript", "Ultimate Python",
                            "Ultimate React", "Ultimate Git + Github"};
        System.out.println(Arrays.toString(courses));
        for (String course : courses) {
            System.out.printf("course '%s'\n", course);
        }
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