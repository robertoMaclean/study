using BD;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace EntityFrameworkSystem
{
    class Program
    {
        static void Main(string[] args)
        {
            DbContextOptionsBuilder<CsharpDBContext> optionBuilder = new DbContextOptionsBuilder<CsharpDBContext>();
            optionBuilder.UseSqlServer(@"Server=ROB-WIN-PC\SQLEXPRESS;Database=CsharpDB;Trusted_Connection=True;");
            using (CsharpDBContext context = new CsharpDBContext(optionBuilder.Options))
            {
                var beers = context.Beers.ToList();

                foreach (var beer in beers)
                {
                    Console.WriteLine(beer.Name);
                }
            }
        }
    }
}
