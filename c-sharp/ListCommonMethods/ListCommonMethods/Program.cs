using System;
using System.Collections.Generic;

namespace ListCommonMethods
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> numbers = new List<int>()
            {
                4,3,5,19
            };
            Show(numbers);
            numbers.Insert(1, 666);
            Show(numbers);
            if (numbers.Contains(666))
                Console.WriteLine("Bienvenido Satanás!!!");
            else
                Console.WriteLine("Hola canuto");
            var index = numbers.IndexOf(666);
            Console.WriteLine(index);
            Console.WriteLine("-- IndexOf ---");
            index = numbers.IndexOf(100);
            Console.WriteLine(index);
            numbers.Sort();
            Console.WriteLine("-- Sort ---");
            Show(numbers);
            var numbers2 = new List<int>()
            {
                200, 300, 500
            };
            numbers.AddRange(numbers2);
            Show(numbers);
        }

        public static void Show(List<int> numbers)
        {
            Console.WriteLine("-- Numeros --");
            foreach (var number in numbers)
            {
                Console.WriteLine(number);
            }
        }
    }
}
