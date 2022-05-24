using System.Data.SqlClient;

namespace BaseDeDatos
{
    public abstract class DB
    {
        private string _connectionString;
        protected SqlConnection _connection;

        public DB(string server, string db)
        {
            _connectionString = $"Data Source={server}; Initial Catalog={db};" +
                "Trusted_Connection=true";
        }

        public void Connect()
        {
            _connection = new SqlConnection(_connectionString);
            _connection.Open();
        }

        public void Close()
        {
            if (_connection != null && _connection.State == System.Data.ConnectionState.Open)
                _connection.Close();
        }
    }
}
