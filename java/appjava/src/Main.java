import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] numeros = { 0,1,2,3,4 };
        numeros[0] = 5;
        numeros[4] = 7;
        System.out.println(Arrays.toString(numeros));
        System.out.println(numeros.length);
        Arrays.sort(numeros);
        System.out.println(Arrays.toString(numeros));
    }
}