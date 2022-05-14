using System;

namespace Static
{
    class Program
    {
        static void Main(string[] args)
        {
            People people1 = new People()
            {
                Name = "Rob",
                Age = 50
            };
            People people2 = new People()
            {
                Name = "Pedrito jr.",
                Age = 15
            };
            Console.WriteLine(People.GetCount());
        }
    }

    public class People
    { 
        public static int Count = 0;

        public string Name { get; set; }

        public int Age { get; set; }

        public People()
        {
            Count++;
        }

        public static string GetCount()
        {
            return $"Esta clase se ha utilizado {Count} veces"; 
        }


    }
}
