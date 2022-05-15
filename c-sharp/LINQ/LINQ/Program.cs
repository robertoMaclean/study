using System;
using System.Collections.Generic;
using System.Linq; 

namespace LINQ
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Beer> beers = new List<Beer>()
            {
                new Beer()
                {
                    Name = "Corona",
                    Country = "México"
                },
                new Beer()
                {
                    Name = "Delirium",
                    Country = "Belgica"
                },
                new Beer()
                {
                    Name = "Erdinger",
                    Country = "Alemania"
                }
            };
            foreach(var beer in beers)
                Console.WriteLine(beer);
            Console.WriteLine("--------------");
            var beersName = from b in beers
                           select new
                           {
                               Name = b.Name,
                               Letters = b.Name.Length,
                               Fixed = 1
                           };
            foreach(var beerName in beersName)
                Console.WriteLine($"{beerName.Name} {beerName.Letters} {beerName.Fixed}");
            Console.WriteLine("--------------");
            var beersNameReal = from b in beersName
                            select new
                            {
                                Name = b.Name,
                            };
            Console.WriteLine("--------------");
            foreach (var beerName in beersNameReal)
                Console.WriteLine($"{beerName.Name}");
            var beersMexico = from b in beers
                              where b.Country == "México"
                              select b;
            Console.WriteLine("--------------");
            foreach (var beerMexico in beersMexico)
                Console.WriteLine(beerMexico);
            Console.WriteLine("--------------");
            var orderedBeers = from b in beers
                               orderby b.Country
                               select b;
            foreach (var orderedBeer in orderedBeers)
            {
                Console.WriteLine(orderedBeer);
            }
        }
    }

    public class Beer
    {
        public string Name { get; set; }
        public string Country { get; set; }

        public override string ToString()
        {
            return $"Cerveza: {Name}, País: {Country}";
        }
    }
}
