using System;
using System.Data.SqlClient;

namespace BaseDeDatos
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                BeerDB db = new BeerDB(@"ROB-WIN-PC\SQLEXPRESS", "CsharpDB");
                List<Beer> beers = db.GetAll();
                foreach(var beer in beers)
                {
                    Console.WriteLine(beer.Name);
                }
            }
            catch (SqlException e)
            {
                Console.WriteLine("No se pudo conectar a la Base de Datos");
            }
            
        }
    }
}