using System;

namespace Propiedades
{
    class Program
    {
        static void Main(string[] args)
        {
            Sale sale = new Sale(100, DateTime.Now);
            sale.Total = 100;
            Console.WriteLine(sale.Total);
            Console.WriteLine(sale.Date);
        }
    }

    class Sale
    {
        int total;
        DateTime date;

        public int Total
        {
            get
            {
                return total;
            }

            set
            {
                if (value < 0)
                    value = 0;
                total = value;
            }
        }

        public string Date
        {
            get
            {
                return date.ToLongDateString();
            }
        }
        public Sale(int total, DateTime date)
        {
            this.total = total;
            this.date = date;
        }
    }
}
