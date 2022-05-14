using System;
using System.Text.Json;
namespace Json
{
    class Program
    {
        static void Main(string[] args)
        {
            Beer myBeer = new Beer()
            {
                Name = "Baltica",
                Brand = "Erdinger"
            };

            string json = JsonSerializer.Serialize(myBeer);
            Beer beer = JsonSerializer.Deserialize<Beer>(json);
            Console.WriteLine(json);

            Beer[] myBeers = new Beer[]
            {
                new Beer()
                {
                    Name = "Baltica",
                    Brand = "Erdinger"
                 },
                new Beer()
                {
                    Name = "Cristan",
                    Brand = "Modelo"
                }
            };
            string jsonBeers = JsonSerializer.Serialize(myBeers);
            Beer[] beers = JsonSerializer.Deserialize<Beer[]>(jsonBeers);
            Console.WriteLine(jsonBeers);

        }
    }

    public class Beer
    {
        public string Name { get; set; }
        public string Brand { get; set; }
    }
}
