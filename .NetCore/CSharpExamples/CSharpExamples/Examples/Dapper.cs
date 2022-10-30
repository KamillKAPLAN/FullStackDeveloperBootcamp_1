using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSharpExamples.Examples
{
    class Dapper
    {
        /* https://dapper-tutorial.net/
         * https://www.learndapper.com/ */

        void DapperEx()
        {
            /* Ado.Net vs Dapper vs EF: ORM
             *  Execute
             *  Query
             */
            string connectionString = GetConnectionString();
            //SqlConnection connection = new SqlConnection(connectionString)
            using (SqlConnection connection = new SqlConnection())
            {
                connection.ConnectionString = "Server=KAMILKAPLAN;Database=DBFullStack;User=sa;Password=1;";
                //connection.ConnectionString = connectionString;
                connection.Open();

                Console.WriteLine($"State : {connection.State}");
                Console.WriteLine("ConnectionString : {0}", connection.ConnectionString);

                /* isimsiz tip ile */
                //connection.Execute(
                //    "insert into Persons(FirstName, LastName, Address, City, Age) " +
                //    "values(@FirstName, @LastName, @Address, @City, @Age)",
                //    new[] { new { FirstName = "Hamza", LastName = "Kılıç",
                //                  Address = "Corum Mah.", City ="Çorum", Age = 24 } });

                /* Data Model ile */
                //connection.Execute(
                //    "insert into Persons(FirstName, LastName, Address, City, Age) " +
                //    "values(@FirstName, @LastName, @Address, @City, @Age)",
                //    new Persons() { FirstName = "Batuhan", LastName = "Üçsu", 
                //                    Address = "ankara mah.", City = "ankara", Age = 19 });

                var result = connection.Query("SELECT * FROM Persons").ToList();

                List<Persons> persons;
                persons = connection.Query<Persons>("SELECT * FROM Persons").ToList();
                foreach (var item in persons)
                    Console.WriteLine($"{item.FirstName} - {item.LastName} - {item.Address} - {item.City} - {item.Age}");

                connection.Close();
            }
        }

        private static string GetConnectionString()
        {
            return "Server=KAMILKAPLAN;Database=DBFullStack;User=sa;Password=1;";
        }
        class Persons
        {
            public int PersonID { get; set; }
            public string LastName { get; set; }
            public string FirstName { get; set; }
            public string Address { get; set; }
            public string City { get; set; }
            public int Age { get; set; }
        }
    }
}
