import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Esta es una aplicación de calculadora");
        System.out.println("Ingresa el primer número:");
        int firstValue = scanner.nextInt();
        System.out.println("Ingresa el segundo número:");
        int secondValue = scanner.nextInt();
        System.out.println("La suma es:");
        System.out.println(firstValue + secondValue);
    }
}