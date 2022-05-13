using System;

namespace For
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] friends = new string[6]
            {
                "juan",
                "pedro",
                "carlos",
                "sebastian",
                "cristian",
                "camilo"
            };
            for(int i = 0; i < friends.Length; i++)
            {
                Console.WriteLine(friends[i]);
            }
        }
    }
}
