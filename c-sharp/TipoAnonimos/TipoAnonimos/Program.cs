using System;

namespace TipoAnonimos
{
    class Program
    {
        static void Main(string[] args)
        {
            var rob = new
            {
                Name = "Rob",
                Country = "Italy"
            };
            Console.WriteLine($"{rob.Name} {rob.Country}");

            var beers = new[]
            {
                new { Name = "Red", Brand = "Delirium"},
                new { Name = "Lodon Porter", Brand = "Fullers"}
            };
            foreach(var beer in beers)
            {
                Console.WriteLine($"Cerveza {beer.Name} {beer.Brand}");
            }
        }
    }
}
