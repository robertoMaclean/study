using System;

namespace SwitchCase
{
    class Program
    {
        static void Main(string[] args)
        {
            int op = 1;

            switch (op)
            {
                case 1:
                    Console.WriteLine("Caso 1");
                    break;
                case 2:
                    Console.WriteLine("Case 2");
                    break;
                case 3:
                case 4:
                    Console.WriteLine("Seleccionaste el caso 3 o 4");
                    break;
                default:
                    Console.WriteLine("Invalido");
                    break;
            }
        }
    }
}
