using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace Backend.Database
{
    public class SqlParameters : IEnumerable<SqlParameter>
    {
        private List<SqlParameter> parameters = new List<SqlParameter>();

        public void Add(string name, SqlDbType type, object value)
        {
            var val = new SqlParameter(name, type);
            val.Value = value;
            parameters.Add(val);
        }

        public IEnumerator<SqlParameter> GetEnumerator()
        {
            return parameters.GetEnumerator();
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return parameters.GetEnumerator();
        }
    }
}
