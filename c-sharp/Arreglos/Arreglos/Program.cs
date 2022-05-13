using System;

namespace Arreglos
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] friends = new string[7]{
                "juan",
                "pedro",
                "diago",
                "marcelo",
                null,
                "carlos",
                null,
            };
            for(int i = 0; i < friends.Length; i ++)
            {
                Console.WriteLine(friends[i]);
            }
        }
    }
}
