using System;
using System.Collections.Generic;

namespace Lists
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> numbers = new List<int>();
            numbers.Add(5);
            numbers.Add(2);

            Console.WriteLine(numbers.Count);

            List<int> numbers2 = new List<int>() {
                2,7,19,55,23123
            };

            Console.WriteLine(numbers2.Count);

            numbers2.Add(11);
            Console.WriteLine(numbers2.Count);
            numbers2.Clear();
            Console.WriteLine(numbers2.Count);

            List<string> countries = new List<string>()
            {
                "Mexico", "Chile", "Argentina", "Peru"
            };
            Console.WriteLine(countries.Count);
        }
    }
}
