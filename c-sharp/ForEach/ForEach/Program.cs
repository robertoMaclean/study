using System;
using System.Collections.Generic;

namespace ForEach
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = 5;
            var numbers = new List<int>()
            {
                23,2,12,3,123,124
            };

            foreach(var number in numbers)
            {
                Console.WriteLine(number);
            }

            var students = new List<People>()
            {
                new People() { Name = "Héctor", Country = "México" },
                new People() { Name = "Rob", Country = "Bolivia" },
                new People() { Name = "John", Country = "USA" }
            };
            Show(students);
            students.RemoveAt(0);
            Show(students);
        }

        static void Show(List<People> students)
        {
            Console.WriteLine("-- Personas --");
            foreach(var people in students)
            {
                Console.WriteLine($"Nombre: {people.Name}, País: {people.Country}");
            }
        }
    }

    class People
    {
        public string Name { get; set; }
        public string Country { get; set; }
    }
}
