using System;

namespace Funciones
{
    class Program
    {
        static void Main(string[] args)
        {
            Show();
            Sum(1, 2);
            int result = Mul(2, 6);
            Console.WriteLine(result);
        }

        static void Show()
        {
            Console.WriteLine("Hola soy un texto que se imprime desde función");
        }

        static void Sum(int num1, int num2)
        {
            int num3 = num1 + num2;
            Console.WriteLine(num3);
        }

        static int Mul(int num1, int num2)
        {
            return num1 * num2;
        }
    }
}
