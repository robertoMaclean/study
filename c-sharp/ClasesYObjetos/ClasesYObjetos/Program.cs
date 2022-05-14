using System;

namespace ClasesYObjetos
{
    class Program
    {
        static void Main(string[] args)
        {
            Sale sale = new Sale(100, DateTime.Now);
            string showInfo = sale.GetInfo();
            Console.WriteLine(showInfo);
        }
    }

    class Sale
    {
        int total;
        DateTime date;

        public Sale(int total, DateTime date)
        {
            this.total = total;
            this.date = date;
        }

        public string GetInfo()
        {
            return this.total + " " + this.date.ToLongDateString();
        }
        public void Show()
        {
            Console.WriteLine("Hola soy una venta!");
        }
    }
}
