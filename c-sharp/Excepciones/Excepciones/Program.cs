using System;
using System.IO;

namespace Excepciones
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                var content = File.ReadAllText("/Users/robertomclean/clientes.txt");
                Console.WriteLine(content);

                // var content2 = File.ReadAllText("/Users/robertomclean/clientes2.txt");
                // Console.WriteLine(content2);
                throw new Exception("Apareció Doom Guy");
            }
            catch (FileNotFoundException)
            {
                Console.WriteLine("El archivo no existe");
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            finally
            {
                Console.WriteLine("Aquí me he ejecutado pase lo que pase");
            }
           
        }
    }
}
