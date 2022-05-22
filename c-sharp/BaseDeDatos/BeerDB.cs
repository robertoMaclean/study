﻿using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BaseDeDatos
{
    internal class BeerDB : DB
    {
        public BeerDB(string server, String db): base(server, db)
        {

        }

        public List<Beer> GetAll()
        {
            Connect();
            List<Beer> beers = new List<Beer>();
            string query = "SELECT Id, Name, BrandId FROM BEER";
            SqlCommand command = new SqlCommand(query, _connection);
            SqlDataReader reader = command.ExecuteReader();
            while(reader.Read())
            {
                int id = reader.GetInt32(0);
                string name = reader.GetString(1);
                int brandId = reader.GetInt32(2);
                beers.Add(new Beer(id, name, brandId));
            }
            Close();
            return beers;
        }
    }
}
