using BD;
using Microsoft.EntityFrameworkCore;

namespace EntityFrameworkSystem
{
    class Program
    {
        static void Main(string[] args)
        {
            DbContextOptionsBuilder<CsharpDBContext> optionBuilder = new DbContextOptionsBuilder<CsharpDBContext>();
            optionBuilder.UseSqlServer(@"Server=ROB-WIN-PC\SQLEXPRESS;Database=CsharpDB;Trusted_Connection=True;");

            bool again = true;
            int op = 0;

            do
            {
                ShowMenu();
                Console.WriteLine("Elige una opción:");
                op = int.Parse(Console.ReadLine());
                switch (op)
                {
                    case 1:
                        Show(optionBuilder);
                        break;
                }
            } while (again);
        }

        public static void ShowMenu()
        {
            Console.WriteLine("\n---------------Menu------------------");
            Console.WriteLine("1.- Mostrar");
            Console.WriteLine("2.- Agregar");
            Console.WriteLine("3.- Editar");
            Console.WriteLine("4.- Eliminar");
            Console.WriteLine("5.- Salir");
        }
        public static void Show(DbContextOptionsBuilder<CsharpDBContext> optionBuilder)
        {
            Console.Clear();
            Console.WriteLine("Cervezas en la base de datos");
            using (var context = new CsharpDBContext(optionBuilder.Options))
            {
                List<Beer> beers = context.Beers.OrderBy(beer => beer.Name).ToList();
                foreach(var beer in beers)
                {
                    Console.WriteLine($"{beer.Id} - {beer.Name}");
                }
            }
        }

        public static void Add()
        {
           
        }

        public static void Edit()
        {
           
        }

        public static void Delete()
        {

        }
    }
}
